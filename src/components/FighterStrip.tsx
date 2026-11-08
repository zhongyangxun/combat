import { useRef } from "react";
import type { Fighter } from "../types";
import { FighterCard } from "./FighterCard";

type FighterStripProps = {
  fighters: Fighter[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export function FighterStrip({ fighters, selectedId, onSelect }: FighterStripProps) {
  const stripRef = useRef<HTMLDivElement>(null);

  return (
    <div className="fighter-strip-wrap">
      <button
        className="strip-arrow prev"
        type="button"
        aria-label="上一位角色"
        onClick={() => stripRef.current?.scrollBy({ left: -360, behavior: "smooth" })}
      >
        ←
      </button>
      <div className="fighter-strip" ref={stripRef} role="listbox" aria-label="格斗家列表">
        {fighters.length ? (
          fighters.map((fighter) => (
            <FighterCard
              key={fighter.id}
              fighter={fighter}
              selected={fighter.id === selectedId}
              onSelect={onSelect}
            />
          ))
        ) : (
          <p className="empty-state">没有找到匹配的格斗家</p>
        )}
      </div>
      <button
        className="strip-arrow next"
        type="button"
        aria-label="下一位角色"
        onClick={() => stripRef.current?.scrollBy({ left: 360, behavior: "smooth" })}
      >
        →
      </button>
    </div>
  );
}
