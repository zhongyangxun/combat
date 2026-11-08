import { fighters } from "../data/fighters";
import type { Fighter, Move, MoveCategory } from "../types";

export const fighterMap: Record<string, Fighter> = Object.fromEntries(
  fighters.map((fighter) => [fighter.id, fighter])
);

export const fighterCount = fighters.length;

export const moveCount = fighters.reduce((sum, fighter) => sum + fighter.moves.length, 0);

export function fighterMatches(fighter: Fighter, team: string, query: string): boolean {
  const normalizedQuery = query.trim().toLowerCase();
  const teamMatches = team === "all" || fighter.team === team;
  const text = [fighter.name, fighter.en, fighter.team, ...fighter.moves.flat()]
    .join(" ")
    .toLowerCase();
  return teamMatches && (!normalizedQuery || text.includes(normalizedQuery));
}

export function getVisibleFighters(team: string, query: string): Fighter[] {
  return fighters.filter((fighter) => fighterMatches(fighter, team, query));
}

export function ensureSelectedVisible(fighterId: string, team: string, query: string): string {
  const visible = getVisibleFighters(team, query);
  if (visible.length && !visible.some((fighter) => fighter.id === fighterId)) {
    return visible[0]?.id ?? fighterId;
  }
  return fighterId;
}

export function getFighterIndex(fighterId: string): number {
  return fighters.findIndex((item) => item.id === fighterId) + 1;
}

export function filterMoves(
  fighter: Fighter,
  category: MoveCategory | "all",
  query: string
): Move[] {
  const normalizedQuery = query.trim().toLowerCase();
  return fighter.moves.filter((move) => {
    const categoryMatches = category === "all" || move[3] === category;
    const queryMatches =
      !normalizedQuery ||
      [fighter.name, fighter.en, ...move].join(" ").toLowerCase().includes(normalizedQuery);
    return categoryMatches && queryMatches;
  });
}
