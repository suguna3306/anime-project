import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { Anime } from "@/data/anime";
import { Poster } from "./Poster";

export function AnimeModal({ anime, onClose }: { anime: Anime | null; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  return (
    <AnimatePresence>
      {anime && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.86, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.86, y: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="glass film-grain relative w-full max-w-3xl overflow-hidden rounded-3xl shadow-[0_40px_120px_-30px_rgba(0,0,0,1)]"
          >
            <div className="relative h-52 overflow-hidden sm:h-64">
              <Poster anime={anime} className="scale-125" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 h-9 w-9 rounded-full bg-black/50 text-foreground backdrop-blur transition-colors hover:bg-primary/60"
              >
                ✕
              </button>
            </div>

            <div className="flex gap-5 p-6 sm:p-8">
              <div className="hidden aspect-[2/3] w-32 shrink-0 overflow-hidden rounded-xl border sm:block">
                <Poster anime={anime} />
              </div>
              <div className="min-w-0">
                <h2 className="text-display text-4xl uppercase sm:text-5xl">{anime.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {anime.year} • {anime.type === "movie" ? anime.runtime : `${anime.episodes} Episodes`} •{" "}
                  <span className="font-bold text-gold">⭐ {anime.rating.toFixed(1)}</span>
                </p>
                <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                  {anime.languages.join(" • ")}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {anime.genres.map((g) => (
                    <span key={g} className="rounded-full border px-3 py-1 text-xs text-foreground/80">
                      {g}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm italic leading-relaxed text-foreground/85">"{anime.story}"</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
