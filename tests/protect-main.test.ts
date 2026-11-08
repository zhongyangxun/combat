import { spawnSync } from "node:child_process";
import {
  chmodSync,
  copyFileSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, it } from "vitest";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const huskyBin = join(root, "node_modules/husky/bin.js");
const guardScript = join(root, ".husky/protect-main.sh");
const HOOK_FILES = ["pre-commit", "commit-msg", "pre-push", "protect-main.sh"];
const ZERO_SHA = "0".repeat(40);
const SHA = "1".repeat(40);

interface RunResult {
  status: number | null;
  stdout: string;
  stderr: string;
}

interface Fixture {
  dir: string;
  work: string;
  remote: string;
  log: string;
  run: (args: string[], extraEnv?: Record<string, string>) => RunResult;
  git: (args: string[], extraEnv?: Record<string, string>) => RunResult;
  remoteRef: (ref: string) => string | null;
  hookLog: () => string;
}

const fixtures: string[] = [];

afterEach(() => {
  for (const dir of fixtures.splice(0)) {
    rmSync(dir, { recursive: true, force: true });
  }
});

function cleanEnv(dir: string): NodeJS.ProcessEnv {
  const env: NodeJS.ProcessEnv = {};
  for (const [key, value] of Object.entries(process.env)) {
    // 测试可能在 git hook 内运行，GIT_DIR 等变量会把命令指回真实仓库。
    if (!key.startsWith("GIT_") && !key.startsWith("HUSKY")) {
      env[key] = value;
    }
  }
  const gitconfig = join(dir, "gitconfig");
  writeFileSync(
    gitconfig,
    [
      "[user]",
      "  name = Hook Test",
      "  email = hook-test@example.com",
      "[commit]",
      "  gpgsign = false",
      "[init]",
      "  defaultBranch = main",
      ""
    ].join("\n")
  );
  return {
    ...env,
    HOME: dir,
    XDG_CONFIG_HOME: join(dir, ".config"),
    GIT_CONFIG_GLOBAL: gitconfig,
    GIT_CONFIG_NOSYSTEM: "1",
    PATH: `${join(dir, "bin")}${process.platform === "win32" ? ";" : ":"}${process.env.PATH ?? ""}`,
    HOOK_LOG: join(dir, "hooks.log")
  };
}

function writeFakeTool(path: string, name: string, exitVar: string): void {
  writeFileSync(path, `#!/bin/sh\necho "${name} $*" >> "$HOOK_LOG"\nexit "\${${exitVar}:-0}"\n`);
  chmodSync(path, 0o755);
}

function createFixture(): Fixture {
  const dir = mkdtempSync(join(tmpdir(), "combat-hooks-"));
  fixtures.push(dir);
  const work = join(dir, "work");
  const remote = join(dir, "remote.git");
  const log = join(dir, "hooks.log");
  const env = cleanEnv(dir);

  const run = (args: string[], extraEnv: Record<string, string> = {}): RunResult => {
    const [cmd, ...rest] = args;
    const result = spawnSync(cmd!, rest, {
      cwd: work,
      env: { ...env, ...extraEnv },
      encoding: "utf8"
    });
    return { status: result.status, stdout: result.stdout, stderr: result.stderr };
  };
  const git = (args: string[], extraEnv?: Record<string, string>) =>
    run(["git", ...args], extraEnv);
  const must = (args: string[]) => {
    const result = git(args);
    if (result.status !== 0) {
      throw new Error(`git ${args.join(" ")} failed:\n${result.stdout}\n${result.stderr}`);
    }
  };

  mkdirSync(join(dir, "bin"));
  writeFakeTool(join(dir, "bin/gitleaks"), "gitleaks", "FAKE_GITLEAKS_EXIT");
  writeFileSync(log, "");

  spawnSync("git", ["init", "--bare", "-q", "-b", "main", remote], { env });
  mkdirSync(work);
  must(["init", "-q", "-b", "main"]);

  mkdirSync(join(work, "node_modules/.bin"), { recursive: true });
  writeFakeTool(join(work, "node_modules/.bin/lint-staged"), "lint-staged", "FAKE_LINT_EXIT");
  writeFakeTool(join(work, "node_modules/.bin/commitlint"), "commitlint", "FAKE_COMMITLINT_EXIT");
  mkdirSync(join(work, ".husky"));
  for (const file of HOOK_FILES) {
    copyFileSync(join(root, ".husky", file), join(work, ".husky", file));
  }
  writeFileSync(join(work, ".gitignore"), "node_modules/\n");
  writeFileSync(join(work, "README.md"), "fixture\n");

  // 先在未安装 hook 时建立 main 基线，再安装 husky。
  must(["add", "."]);
  must(["commit", "-q", "-m", "chore: initial commit"]);
  must(["remote", "add", "origin", remote]);
  must(["push", "-q", "origin", "main"]);

  const install = spawnSync(process.execPath, [huskyBin], { cwd: work, env, encoding: "utf8" });
  if (install.status !== 0) {
    throw new Error(`husky install failed: ${install.stdout}${install.stderr}`);
  }

  return {
    dir,
    work,
    remote,
    log,
    run,
    git,
    remoteRef: (ref) => {
      const result = spawnSync("git", ["--git-dir", remote, "rev-parse", "--verify", "-q", ref], {
        env,
        encoding: "utf8"
      });
      return result.status === 0 ? result.stdout.trim() : null;
    },
    hookLog: () => readFileSync(log, "utf8")
  };
}

function commitFile(fx: Fixture, name: string, extraEnv?: Record<string, string>): RunResult {
  writeFileSync(join(fx.work, name), `${name}\n`);
  fx.git(["add", name]);
  return fx.git(["commit", "-m", `feat: add ${name}`], extraEnv);
}

function headOf(fx: Fixture, ref: string): string {
  return fx.git(["rev-parse", ref]).stdout.trim();
}

function runGuard(mode: string, input = ""): RunResult {
  const result = spawnSync("sh", [guardScript, mode, "origin", "git@example.com:repo.git"], {
    input,
    encoding: "utf8"
  });
  return { status: result.status, stdout: result.stdout, stderr: result.stderr };
}

describe("protect-main.sh pre-push parsing", () => {
  it("allows an empty ref list", () => {
    expect(runGuard("pre-push", "").status).toBe(0);
  });

  it("allows non-protected branches and tags", () => {
    const input = [
      `refs/heads/main ${SHA} refs/heads/feat/x ${ZERO_SHA}`,
      `refs/tags/v1 ${SHA} refs/tags/main ${ZERO_SHA}`,
      `refs/heads/x ${SHA} refs/heads/maintenance ${ZERO_SHA}`,
      `refs/heads/x ${SHA} refs/heads/feature/main ${ZERO_SHA}`
    ].join("\n");
    expect(runGuard("pre-push", `${input}\n`).status).toBe(0);
  });

  it("blocks when any record targets main or master", () => {
    const input = [
      `refs/heads/feat/x ${SHA} refs/heads/feat/x ${ZERO_SHA}`,
      `refs/heads/other ${SHA} refs/heads/master ${SHA}`
    ].join("\n");
    const result = runGuard("pre-push", `${input}\n`);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("refs/heads/master");
  });

  it("reads the last record even without a trailing newline", () => {
    const result = runGuard("pre-push", `refs/heads/x ${SHA} refs/heads/main ${SHA}`);
    expect(result.status).toBe(1);
  });

  it("treats SHA-256 zero ids as deletions", () => {
    const result = runGuard("pre-push", `(delete) ${"0".repeat(64)} refs/heads/main ${SHA}\n`);
    expect(result.status).toBe(1);
    expect(result.stderr).toContain("删除");
  });

  it("rejects unknown modes", () => {
    expect(runGuard("post-commit").status).toBe(2);
  });
});

describe("main branch protection via husky hooks", { timeout: 30_000 }, () => {
  it.each(["main", "master"])("blocks commits on %s before running other checks", (branch) => {
    const fx = createFixture();
    if (branch !== "main") {
      fx.git(["switch", "-q", "-c", branch]);
    }
    const before = headOf(fx, "HEAD");

    const result = commitFile(fx, "blocked.txt");

    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain(`不允许直接在 '${branch}' 分支上提交`);
    expect(headOf(fx, "HEAD")).toBe(before);
    expect(fx.hookLog()).toBe("");
  });

  it("allows feature-branch commits and still runs existing checks", () => {
    const fx = createFixture();
    fx.git(["switch", "-q", "-c", "feat/PUZ-139-test"]);

    const result = commitFile(fx, "ok.txt");

    expect(result.status, result.stderr).toBe(0);
    const log = fx.hookLog();
    expect(log).toContain("gitleaks protect --staged --verbose");
    expect(log).toContain("lint-staged");
    expect(log).toMatch(/commitlint --edit /);
  });

  it.each([
    ["gitleaks", "FAKE_GITLEAKS_EXIT"],
    ["lint-staged", "FAKE_LINT_EXIT"],
    ["commitlint", "FAKE_COMMITLINT_EXIT"]
  ])("keeps failing %s checks blocking feature commits", (_tool, exitVar) => {
    const fx = createFixture();
    fx.git(["switch", "-q", "-c", "feat/failing-check"]);
    const before = headOf(fx, "HEAD");

    const result = commitFile(fx, "bad.txt", { [exitVar]: "1" });

    expect(result.status).not.toBe(0);
    expect(headOf(fx, "HEAD")).toBe(before);
  });

  it("allows commits on a detached HEAD", () => {
    const fx = createFixture();
    fx.git(["switch", "-q", "--detach"]);

    expect(commitFile(fx, "detached.txt").status).toBe(0);
  });

  it("allows pushing and deleting feature branches", () => {
    const fx = createFixture();
    fx.git(["switch", "-q", "-c", "feat/push"]);
    commitFile(fx, "push.txt");

    const push = fx.git(["push", "-u", "origin", "feat/push"]);
    expect(push.status, push.stderr).toBe(0);
    expect(fx.remoteRef("refs/heads/feat/push")).toBe(headOf(fx, "HEAD"));

    const renamed = fx.git(["push", "origin", "feat/push:feature/main-docs"]);
    expect(renamed.status, renamed.stderr).toBe(0);

    const del = fx.git(["push", "origin", "--delete", "feat/push"]);
    expect(del.status, del.stderr).toBe(0);
    expect(fx.remoteRef("refs/heads/feat/push")).toBeNull();
  });

  describe("pushes targeting protected branches", () => {
    function setup() {
      const fx = createFixture();
      const remoteMain = fx.remoteRef("refs/heads/main");
      fx.git(["switch", "-q", "-c", "feat/target"]);
      commitFile(fx, "target.txt");
      // 模拟本地 main 通过 fast-forward 领先远端，而不是在 main 上直接提交。
      fx.git(["branch", "-f", "main", "feat/target"]);
      return { fx, remoteMain };
    }

    it.each([
      ["current branch main", ["push", "origin", "main"]],
      ["HEAD:main", ["push", "origin", "HEAD:main"]],
      ["other:main", ["push", "origin", "feat/target:main"]],
      ["fully qualified ref", ["push", "origin", "feat/target:refs/heads/main"]],
      ["force push to main", ["push", "--force", "origin", "feat/target:main"]],
      ["--all", ["push", "origin", "--all"]],
      ["--mirror", ["push", "--mirror", "origin"]]
    ])("blocks %s", (_label, args) => {
      const { fx, remoteMain } = setup();

      const result = fx.git(args);

      expect(result.status).not.toBe(0);
      expect(result.stderr).toContain("refs/heads/main");
      expect(fx.remoteRef("refs/heads/main")).toBe(remoteMain);
    });

    it("blocks creating master on the remote", () => {
      const { fx } = setup();

      const result = fx.git(["push", "origin", "feat/target:master"]);

      expect(result.status).not.toBe(0);
      expect(result.stderr).toContain("refs/heads/master");
      expect(fx.remoteRef("refs/heads/master")).toBeNull();
    });

    it("blocks the whole multi-ref push when one destination is protected", () => {
      const { fx, remoteMain } = setup();

      const result = fx.git(["push", "origin", "feat/target", "feat/target:main"]);

      expect(result.status).not.toBe(0);
      expect(fx.remoteRef("refs/heads/main")).toBe(remoteMain);
      expect(fx.remoteRef("refs/heads/feat/target")).toBeNull();
    });

    it.each([
      ["--delete main", ["push", "origin", "--delete", "main"]],
      [":main", ["push", "origin", ":main"]]
    ])("blocks deleting the remote main via %s", (_label, args) => {
      const { fx, remoteMain } = setup();

      const result = fx.git(args);

      expect(result.status).not.toBe(0);
      expect(result.stderr).toContain("删除");
      expect(fx.remoteRef("refs/heads/main")).toBe(remoteMain);
    });
  });
});
