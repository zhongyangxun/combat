import { tokenizeCommand } from "../lib/commands";

type CommandTokensProps = {
  command: string;
};

export function CommandTokens({ command }: CommandTokensProps) {
  const tokens = tokenizeCommand(command);

  return (
    <div className="command" aria-label={command}>
      {tokens.map((token, index) => {
        if (token.kind === "button") {
          return (
            <span
              key={`${token.label}-${index}`}
              className={`command-token button ${token.label.toLowerCase()}`}
            >
              {token.label}
            </span>
          );
        }

        if (token.kind === "plus") {
          return (
            <span key={`${token.label}-${index}`} className="command-token plus">
              {token.label}
            </span>
          );
        }

        return (
          <span key={`${token.label}-${index}`} className="command-token">
            {token.label}
          </span>
        );
      })}
    </div>
  );
}
