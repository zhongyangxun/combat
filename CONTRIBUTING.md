# 贡献指南

## 本地 Git hooks

仓库使用 [Husky](https://typicode.github.io/husky/) 管理 Git hooks，hook 脚本位于 `.husky/`。

### 安装

克隆后执行一次依赖安装即可，`prepare` 脚本会自动运行 `husky`，把 `core.hooksPath` 指向 `.husky/_`：

```sh
pnpm install
```

如果安装时跳过了生命周期脚本（例如 `pnpm install --ignore-scripts`），或者 `HUSKY=0`，hooks 不会被启用，需要手动执行 `pnpm exec husky`。可以用 `git config core.hooksPath` 确认输出为 `.husky/_`。

### 检查内容

| Hook         | 检查                                                                                          |
| ------------ | --------------------------------------------------------------------------------------------- |
| `pre-commit` | 禁止在 `main` / `master` 上直接提交；`gitleaks` 扫描暂存区（需本地安装）；`lint-staged`       |
| `commit-msg` | `commitlint` 校验 Conventional Commits 格式                                                   |
| `pre-push`   | 禁止推送或删除远端的 `refs/heads/main` / `refs/heads/master`，检查每一条目标 ref 而非当前分支 |

主分支保护逻辑在 `.husky/protect-main.sh`，测试在 `tests/protect-main.test.ts`。

`pre-push` 会检查 git 传入的所有 ref，因此 `git push origin HEAD:main`、`git push origin other:main`、`git push origin --all`、`git push origin --delete main` 以及一次推送多个 ref 时只要有一个目标是受保护分支，整次推送都会被拒绝。推送到名字中包含 `main` 的其他分支（如 `feature/main-docs`）或标签不受影响。

### 推荐流程

```sh
git switch main
git pull --ff-only
git switch -c feat/PUZ-123-description
# 提交、推送功能分支，然后创建 Pull Request
git push -u origin feat/PUZ-123-description
```

### 局限

本地 hooks 只是防止误操作的护栏，不是安全机制：

- `git commit --no-verify`、`git push --no-verify`、`HUSKY=0`、修改或删除 `core.hooksPath` 都可以跳过这些检查。
- 未执行 `pnpm install`（或跳过了 `prepare`）的克隆不会安装 hooks。
- `pre-commit` 只在 `git commit` 时触发；在 `main` 上执行 `git merge`（产生合并提交）、`git cherry-pick`、`git rebase` 等命令时不一定会经过它。这些本地提交仍会在推送时被 `pre-push` 拦截。
- 分离 HEAD 状态下没有当前分支，`pre-commit` 不会拦截。

真正阻止直接修改 `main` 需要在 GitHub 上配置分支保护规则或 Rulesets。
