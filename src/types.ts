export type MoveCategory = "special" | "super" | "throw";

export type Move = readonly [name: string, en: string, command: string, category: MoveCategory];

export type Fighter = {
  id: string;
  name: string;
  en: string;
  team: string;
  style: string;
  quote: string;
  color: string;
  moves: readonly Move[];
};

export type SelectTeamGroup = {
  label: string;
  ids: readonly (string | null)[];
  solo?: boolean;
};

export type SelectLayout = readonly (readonly SelectTeamGroup[])[];
