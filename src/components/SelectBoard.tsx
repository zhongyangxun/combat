import { HIDDEN_LAYOUT, SELECT_LAYOUT } from "../data/layout";
import { fighterMap, fighterMatches } from "../lib/fighters";
import { FighterCard } from "./FighterCard";

type SelectBoardProps = {
  selectedId: string;
  team: string;
  query: string;
  onSelect: (id: string) => void;
};

export function SelectBoard({ selectedId, team, query, onSelect }: SelectBoardProps) {
  return (
    <div className="select-board" aria-label="游戏选人屏布局">
      <div className="select-board-frame">
        <div className="select-grid" role="listbox" aria-label="选人屏角色站位">
          {SELECT_LAYOUT.map((row, rowIndex) => (
            <div className="select-row" key={rowIndex}>
              {row.map((group, groupIndex) => (
                <div
                  className={`select-team${group.solo ? " solo" : ""}`}
                  key={`${rowIndex}-${groupIndex}-${group.label}`}
                >
                  {group.label ? (
                    <span className="select-team-label">{group.label}</span>
                  ) : (
                    <span className="select-team-label spacer" aria-hidden="true"></span>
                  )}
                  <div className="select-team-slots">
                    {group.ids.map((id, slotIndex) => {
                      if (!id) {
                        return (
                          <div
                            className="select-slot empty"
                            aria-hidden="true"
                            key={`empty-${rowIndex}-${groupIndex}-${slotIndex}`}
                          />
                        );
                      }

                      const fighter = fighterMap[id];
                      if (!fighter) {
                        return (
                          <div
                            className="select-slot empty"
                            aria-hidden="true"
                            key={`missing-${id}`}
                          />
                        );
                      }

                      const dimmed = !fighterMatches(fighter, team, query);
                      return (
                        <div className="select-slot" key={id}>
                          <FighterCard
                            fighter={fighter}
                            selected={fighter.id === selectedId}
                            dimmed={dimmed}
                            compact
                            disabled={dimmed}
                            onSelect={onSelect}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="hidden-row-label">隐藏 / 暴走角色</div>
        <div className="hidden-grid" role="listbox" aria-label="隐藏角色">
          {HIDDEN_LAYOUT.map((id) => {
            const fighter = fighterMap[id];
            if (!fighter) {
              return <div className="select-slot empty" aria-hidden="true" key={id} />;
            }

            const dimmed = !fighterMatches(fighter, team, query);
            return (
              <div className="select-slot" key={id}>
                <FighterCard
                  fighter={fighter}
                  selected={fighter.id === selectedId}
                  dimmed={dimmed}
                  compact
                  disabled={dimmed}
                  onSelect={onSelect}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
