import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";
import type { Anime } from "@/data/anime";
import { Poster } from "./Poster";

export function AnimeCard({ anime, onOpen }: { anime: Anime; onOpen: (a: Anime) => void }) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [8, -8]), { stiffness: 220, damping: 20 });
  const ry = useSpring(useTransform(px, [0, 1], [-10, 10]), { stiffness: 220, damping: 20 });
  const sheenX = useTransform(px, [0, 1], ["-20%", "120%"]);

  function move(e: PointerEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }

  return (
    <motion.div
      className="group relative w-[260px] shrink-0 sm:w-[280px]"
      style={{ perspective: 1000 }}
      onPointerMove={move}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
    >
      <motion.button
        type="button"
        onClick={() => onOpen(anime)}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="glass film-grain relative block w-full overflow-hidden rounded-2xl text-left shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] transition-shadow duration-300 group-hover:shadow-[0_35px_70px_-20px_rgba(0,0,0,0.95)]"
      >
        <div className="relative aspect-[2/3] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={false}
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Poster anime={anime} />
          </motion.div>

          <div className="absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-xs font-bold text-gold backdrop-blur">
            ⭐ {anime.rating.toFixed(1)}
          </div>

          <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="text-display text-2xl uppercase text-foreground drop-shadow">{anime.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {anime.year} • {anime.type === "movie" ? anime.runtime : `${anime.episodes} Episodes`}
            </p>

            <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-400 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
              <div className="overflow-hidden">
                <p className="pt-2 text-[11px] uppercase tracking-wide text-muted-foreground">
                  {anime.languages.join(" • ")}
                </p>
                <p className="text-[11px] uppercase tracking-wide" style={{ color: anime.glow }}>
                  {anime.genres.join(" • ")}
                </p>
                <p className="mt-2 line-clamp-3 text-xs italic text-foreground/80">"{anime.story}"</p>
              </div>
            </div>
          </div>

          {/* light reflection sweep */}
          <motion.div
            className="pointer-events-none absolute inset-y-0 w-1/3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              left: sheenX,
              background: "linear-gradient(105deg, transparent, rgba(255,255,255,0.16), transparent)",
            }}
          />
        </div>
      </motion.button>
    </motion.div>
  );
}
