import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { allAnime, type Anime } from "@/data/anime";

export function SearchBar({ onOpen }: { onOpen: (a: Anime) => void }) {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return [];
    return allAnime.filter((a) => a.title.toLowerCase().includes(t) || a.genres.some((g) => g.toLowerCase().includes(t)));
  }, [q]);

  return (
    <section id="search" className="mx-auto max-w-3xl scroll-mt-28 px-6 py-20">
      <p className="text-center text-xs uppercase tracking-[0.35em] text-primary">Find something to watch</p>
      <h2 className="text-display mt-2 text-center text-4xl uppercase sm:text-5xl">Search</h2>

      <div className="glass mt-8 flex items-center gap-3 rounded-full px-5 py-3">
        <span className="text-muted-foreground">⌕</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search anime titles or genres…"
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
        {q && (
          <button onClick={() => setQ("")} className="text-xs text-muted-foreground hover:text-foreground">
            clear
          </button>
        )}
      </div>

      <AnimatePresence mode="popLayout">
        {q.trim() && (
          <motion.ul
            key="results"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-5 space-y-2"
          >
            {results.length === 0 && (
              <li className="glass rounded-xl px-5 py-4 text-sm text-muted-foreground">No anime found.</li>
            )}
            {results.map((a, i) => (
              <motion.li
                key={a.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <button
                  onClick={() => onOpen(a)}
                  className="glass flex w-full items-center justify-between gap-4 rounded-xl px-5 py-3 text-left transition-colors hover:bg-primary/15"
                >
                  <span>
                    <span className="text-display text-xl uppercase">{a.title}</span>
                    <span className="ml-3 text-xs text-muted-foreground">
                      {a.year} • {a.type === "movie" ? a.runtime : `${a.episodes} Ep`}
                    </span>
                  </span>
                  <span className="shrink-0 text-sm font-bold text-gold">⭐ {a.rating.toFixed(1)}</span>
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </section>
  );
}
