export type CommandToken =
  | { kind: "button"; label: string }
  | { kind: "plus"; label: string }
  | { kind: "text"; label: string };

const BUTTONS = new Set(["A", "B", "C", "D"]);

export function tokenizeCommand(command: string): CommandToken[] {
  const rawTokens = command.replaceAll("·", " · ").replaceAll("+", " + ").trim().split(/\s+/);
  const tokens: CommandToken[] = [];

  for (const token of rawTokens) {
    if (BUTTONS.has(token)) {
      tokens.push({ kind: "button", label: token });
      continue;
    }

    if (token.includes("/")) {
      const parts = token.split("/");
      if (parts.every((part) => BUTTONS.has(part))) {
        parts.forEach((part, index) => {
          if (index) tokens.push({ kind: "plus", label: "/" });
          tokens.push({ kind: "button", label: part });
        });
        continue;
      }
    }

    if (token === "+" || token === "·") {
      tokens.push({ kind: "plus", label: token });
      continue;
    }

    tokens.push({ kind: "text", label: token });
  }

  return tokens;
}
