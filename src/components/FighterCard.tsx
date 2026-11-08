import type { CSSProperties } from "react";
import type { Fighter } from "../types";
import { getFighterIndex } from "../lib/fighters";

type FighterCardProps = {
  fighter: Fighter;
  selected: boolean;
  dimmed?: boolean;
  compact?: boolean;
  disabled?: boolean;
  onSelect: (id: string) => void;
};

export function FighterCard({
  fighter,
  selected,
  dimmed = false,
  compact = false,
  disabled = false,
  onSelect
}: FighterCardProps) {
  const index = getFighterIndex(fighter.id);
  const className = [
    "fighter-card",
    selected ? "active" : "",
    dimmed ? "dimmed" : "",
    compact ? "compact" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={className}
      type="button"
      role="option"
      aria-selected={selected}
      data-id={fighter.id}
      data-initial={fighter.en.charAt(0)}
      style={{ "--fighter-color": fighter.color } as CSSProperties}
      title={`${fighter.name} / ${fighter.en}`}
      disabled={disabled}
      onClick={() => onSelect(fighter.id)}
    >
      <small>{String(index).padStart(2, "0")}</small>
      <img src={`./assets/portraits/${fighter.id}.png`} alt="" loading="lazy" />
      <span className="fighter-card-name">{fighter.name}</span>
      <span className="fighter-card-en">{fighter.en}</span>
    </button>
  );
}
