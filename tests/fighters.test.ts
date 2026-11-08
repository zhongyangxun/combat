import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { fighters } from "../src/data/fighters";
import { HIDDEN_LAYOUT, SELECT_LAYOUT } from "../src/data/layout";
import type { MoveCategory } from "../src/types";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const portraitsDir = join(root, "public/assets/portraits");

const MOVE_CATEGORIES: readonly MoveCategory[] = ["special", "super", "throw"];
const BUTTONS = new Set(["X", "Y", "A", "B"]);
const DIRECTIONS = new Set(["↑", "↗", "→", "↘", "↓", "↙", "←", "↖"]);
const MODIFIERS = new Set(["近身", "空中", "蓄力", "连按", "+", "·", "/"]);
const COLOR_RE = /^#[0-9a-fA-F]{6}$/;

function tokenizeCommand(command: string): string[] {
  return command.replaceAll("·", " · ").replaceAll("+", " + ").trim().split(/\s+/).filter(Boolean);
}

function isValidToken(token: string): boolean {
  if (BUTTONS.has(token) || DIRECTIONS.has(token) || MODIFIERS.has(token)) {
    return true;
  }
  if (token.includes("/")) {
    return token.split("/").every((part) => BUTTONS.has(part) || DIRECTIONS.has(part));
  }
  return false;
}

describe("fighters data integrity", () => {
  it("has unique non-empty fighter ids", () => {
    const ids = fighters.map((fighter) => fighter.id);
    expect(ids.every((id) => id.length > 0)).toBe(true);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("requires profile fields and valid colors", () => {
    for (const fighter of fighters) {
      expect(fighter.name.trim().length).toBeGreaterThan(0);
      expect(fighter.en.trim().length).toBeGreaterThan(0);
      expect(fighter.team.trim().length).toBeGreaterThan(0);
      expect(fighter.style.trim().length).toBeGreaterThan(0);
      expect(fighter.quote.trim().length).toBeGreaterThan(0);
      expect(fighter.color).toMatch(COLOR_RE);
      expect(fighter.moves.length).toBeGreaterThan(0);
    }
  });

  it("validates move categories and command tokens", () => {
    for (const fighter of fighters) {
      for (const move of fighter.moves) {
        const [name, en, command, category] = move;
        expect(name.trim().length).toBeGreaterThan(0);
        expect(en.trim().length).toBeGreaterThan(0);
        expect(command.trim().length).toBeGreaterThan(0);
        expect(MOVE_CATEGORIES).toContain(category);

        for (const token of tokenizeCommand(command)) {
          expect(isValidToken(token), `${fighter.id}: ${command} → ${token}`).toBe(true);
        }
      }
    }
  });

  it("has a portrait file for every fighter", () => {
    for (const fighter of fighters) {
      const portraitPath = join(portraitsDir, `${fighter.id}.png`);
      expect(existsSync(portraitPath), portraitPath).toBe(true);
    }
  });

  it("references only known fighter ids in select layouts", () => {
    const knownIds = new Set(fighters.map((fighter) => fighter.id));
    const layoutIds = [
      ...SELECT_LAYOUT.flatMap((row) => row.flatMap((group) => group.ids)),
      ...HIDDEN_LAYOUT
    ].filter((id): id is string => typeof id === "string");

    for (const id of layoutIds) {
      expect(knownIds.has(id), `unknown layout id: ${id}`).toBe(true);
    }
  });
});
