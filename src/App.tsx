import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Archive } from "./components/Archive";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MobileNav } from "./components/MobileNav";
import { Notation } from "./components/Notation";
import { Topbar } from "./components/Topbar";
import { useFavorites } from "./hooks/useFavorites";
import { playTick } from "./lib/audio";
import { ensureSelectedVisible, fighterMap } from "./lib/fighters";
import type { MoveCategory } from "./types";
import "./styles.css";

export function App() {
  const [fighterId, setFighterId] = useState("kyo");
  const [team, setTeam] = useState("all");
  const [category, setCategory] = useState<MoveCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [sound, setSound] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const activeFighterId = useMemo(
    () => ensureSelectedVisible(fighterId, team, query),
    [fighterId, team, query]
  );

  const handleSelectFighter = useCallback(
    (id: string) => {
      if (!fighterMap[id]) return;
      setFighterId(id);
      playTick(sound, 360);
    },
    [sound]
  );

  const handleTeamChange = useCallback(
    (nextTeam: string) => {
      setTeam(nextTeam);
      setFighterId((current) => ensureSelectedVisible(current, nextTeam, query));
      playTick(sound, 280);
    },
    [query, sound]
  );

  const handleQueryChange = useCallback(
    (nextQuery: string) => {
      setQuery(nextQuery);
      setFighterId((current) => ensureSelectedVisible(current, team, nextQuery));
    },
    [team]
  );

  const handleCategoryChange = useCallback(
    (nextCategory: MoveCategory | "all") => {
      setCategory(nextCategory);
      playTick(sound, 420);
    },
    [sound]
  );

  const handleExpandedChange = useCallback(
    (nextExpanded: boolean) => {
      setExpanded(nextExpanded);
      playTick(sound, nextExpanded ? 440 : 300);
    },
    [sound]
  );

  const handleToggleFavorite = useCallback(() => {
    toggleFavorite(activeFighterId);
    playTick(sound, 520);
  }, [activeFighterId, sound, toggleFavorite]);

  const handleToggleSound = useCallback(() => {
    setSound((prev) => {
      const next = !prev;
      playTick(next, 600);
      return next;
    });
  }, []);

  const handleMobileSearch = useCallback(() => {
    document.getElementById("roster")?.scrollIntoView();
    window.setTimeout(() => searchInputRef.current?.focus(), 350);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/" && document.activeElement !== searchInputRef.current) {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
      if (event.key === "Escape" && document.activeElement === searchInputRef.current) {
        setQuery("");
        searchInputRef.current?.blur();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <div className="noise" aria-hidden="true"></div>
      <Topbar sound={sound} onToggleSound={handleToggleSound} />
      <main>
        <Hero />
        <Notation />
        <Archive
          fighterId={activeFighterId}
          team={team}
          category={category}
          query={query}
          expanded={expanded}
          favorites={favorites}
          searchInputRef={searchInputRef}
          onFighterChange={handleSelectFighter}
          onTeamChange={handleTeamChange}
          onCategoryChange={handleCategoryChange}
          onQueryChange={handleQueryChange}
          onExpandedChange={handleExpandedChange}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>
      <Footer />
      <MobileNav
        favorited={favorites.has(activeFighterId)}
        onSearch={handleMobileSearch}
        onFavorite={handleToggleFavorite}
      />
    </>
  );
}
