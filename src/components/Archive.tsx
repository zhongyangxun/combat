import { useEffect, useMemo, type RefObject } from "react";
import type { MoveCategory } from "../types";
import { fighterMap, getVisibleFighters } from "../lib/fighters";
import { FighterStrip } from "./FighterStrip";
import { MovePanel } from "./MovePanel";
import { SelectBoard } from "./SelectBoard";

const TEAMS = [
  "all",
  "日本队",
  "饿狼队",
  "龙虎队",
  "怒队",
  "超能力队",
  "女性队",
  "韩国队",
  "新面孔队",
  "97特别队",
  "个人参赛",
  "隐藏角色"
] as const;

const TEAM_LABELS: Record<(typeof TEAMS)[number], string> = {
  all: "全部",
  日本队: "日本队",
  饿狼队: "饿狼队",
  龙虎队: "龙虎队",
  怒队: "怒队",
  超能力队: "超能力队",
  女性队: "女性队",
  韩国队: "韩国队",
  新面孔队: "新面孔队",
  "97特别队": "97特别队",
  个人参赛: "个人参赛",
  隐藏角色: "隐藏角色"
};

type ArchiveProps = {
  fighterId: string;
  team: string;
  category: MoveCategory | "all";
  query: string;
  expanded: boolean;
  favorites: Set<string>;
  searchInputRef: RefObject<HTMLInputElement | null>;
  onFighterChange: (id: string) => void;
  onTeamChange: (team: string) => void;
  onCategoryChange: (category: MoveCategory | "all") => void;
  onQueryChange: (query: string) => void;
  onExpandedChange: (expanded: boolean) => void;
  onToggleFavorite: () => void;
};

export function Archive({
  fighterId,
  team,
  category,
  query,
  expanded,
  favorites,
  searchInputRef,
  onFighterChange,
  onTeamChange,
  onCategoryChange,
  onQueryChange,
  onExpandedChange,
  onToggleFavorite
}: ArchiveProps) {
  const visibleFighters = useMemo(() => getVisibleFighters(team, query), [team, query]);
  const fighter = fighterMap[fighterId] ?? fighterMap.kyo;

  useEffect(() => {
    document.body.classList.toggle("roster-expanded", expanded);
    return () => {
      document.body.classList.remove("roster-expanded");
    };
  }, [expanded]);

  if (!fighter) return null;

  return (
    <section className="archive" id="roster" aria-labelledby="archive-title">
      <div className="archive-head">
        <div className="section-heading inverse">
          <p>SELECT YOUR FIGHTER</p>
          <h2 id="archive-title">选择格斗家</h2>
        </div>
        <label className="search">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6"></circle>
            <path d="m16 16 4 4"></path>
          </svg>
          <input
            ref={searchInputRef}
            type="search"
            placeholder="搜索角色或招式…"
            autoComplete="off"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
          />
          <kbd>/</kbd>
        </label>
      </div>

      <div className="team-filter" aria-label="队伍筛选">
        {TEAMS.map((item) => (
          <button
            key={item}
            className={team === item ? "active" : undefined}
            type="button"
            onClick={() => onTeamChange(item)}
          >
            {TEAM_LABELS[item]}
          </button>
        ))}
      </div>

      <div className="roster-toolbar">
        <button
          className="expand-toggle"
          type="button"
          aria-expanded={expanded}
          onClick={() => onExpandedChange(!expanded)}
        >
          <span className="expand-toggle-icon" aria-hidden="true">
            {expanded ? "▤" : "▦"}
          </span>
          <span className="expand-toggle-label">{expanded ? "收起选人屏" : "展开选人屏"}</span>
        </button>
        <p className="roster-hint">
          {expanded
            ? "站位对齐拳皇 97 选人屏；筛选会保留位置并淡化未匹配角色"
            : "横向浏览角色，或展开为游戏内选人站位"}
        </p>
      </div>

      {expanded ? (
        <SelectBoard selectedId={fighterId} team={team} query={query} onSelect={onFighterChange} />
      ) : (
        <FighterStrip
          fighters={visibleFighters}
          selectedId={fighterId}
          onSelect={onFighterChange}
        />
      )}

      <MovePanel
        fighter={fighter}
        category={category}
        query={query}
        favorited={favorites.has(fighterId)}
        onCategoryChange={onCategoryChange}
        onToggleFavorite={onToggleFavorite}
      />
    </section>
  );
}
