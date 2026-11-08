import type { Fighter, MoveCategory } from "../types";
import { filterMoves, getFighterIndex } from "../lib/fighters";
import { CommandTokens } from "./CommandTokens";

const typeNames: Record<MoveCategory, string> = {
  special: "必杀技",
  super: "超必杀",
  throw: "投技"
};

const CATEGORIES: Array<{ id: MoveCategory | "all"; label: string }> = [
  { id: "all", label: "全部招式" },
  { id: "special", label: "必杀技" },
  { id: "super", label: "超必杀技" },
  { id: "throw", label: "投技" }
];

type MovePanelProps = {
  fighter: Fighter;
  category: MoveCategory | "all";
  query: string;
  favorited: boolean;
  onCategoryChange: (category: MoveCategory | "all") => void;
  onToggleFavorite: () => void;
};

export function MovePanel({
  fighter,
  category,
  query,
  favorited,
  onCategoryChange,
  onToggleFavorite
}: MovePanelProps) {
  const index = getFighterIndex(fighter.id);
  const moves = filterMoves(fighter, category, query);

  return (
    <article className="move-panel">
      <aside className="fighter-profile">
        <p className="profile-team">{fighter.team} / TEAM FILE</p>
        <div className="profile-number">{String(index).padStart(2, "0")}</div>
        <div className="profile-portrait-wrap">
          <img
            className="profile-portrait"
            src={`./assets/portraits/${fighter.id}.png`}
            alt={`${fighter.name}（${fighter.en}）头像`}
          />
        </div>
        <h3>{fighter.name}</h3>
        <p className="profile-en">{fighter.en}</p>
        <blockquote>“{fighter.quote}”</blockquote>
        <div className="profile-meta">
          <span>格斗流派</span>
          <strong>{fighter.style}</strong>
        </div>
        <button
          className={`favorite-button${favorited ? " active" : ""}`}
          type="button"
          onClick={onToggleFavorite}
        >
          <span aria-hidden="true">{favorited ? "★" : "☆"}</span>{" "}
          {favorited ? "已收藏" : "收藏角色"}
        </button>
      </aside>

      <div className="moves-area">
        <div className="moves-toolbar">
          <div className="move-tabs" role="tablist" aria-label="招式分类">
            {CATEGORIES.map((item) => (
              <button
                key={item.id}
                className={category === item.id ? "active" : undefined}
                type="button"
                onClick={() => onCategoryChange(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <span className="move-total">{String(moves.length).padStart(2, "0")} MOVES</span>
        </div>
        <div className="move-list" aria-live="polite">
          {moves.length ? (
            moves.map((move) => (
              <div className="move-row" key={`${move[0]}-${move[2]}-${move[3]}`}>
                <div className="move-name">
                  <strong>{move[0]}</strong>
                  <small>{move[1]}</small>
                </div>
                <CommandTokens command={move[2]} />
                <span className={`move-type ${move[3]}`}>{typeNames[move[3]]}</span>
              </div>
            ))
          ) : (
            <div className="empty-state">当前分类下没有匹配招式</div>
          )}
        </div>
      </div>
    </article>
  );
}
