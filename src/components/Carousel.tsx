import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Anime } from "@/data/anime";
import { AnimeCard } from "./AnimeCard";

export function Carousel({
  id,
  title,
  eyebrow,
  items,
  onOpen,
}: {
  id: string;
  title: string;
  eyebrow: string;
  items: Anime[];
  onOpen: (a: Anime) => void;
}) {
  const track = useRef<HTMLDivElement>(null);
  const section = useRef<HTMLElement>(null);
  const inView = useInView(section, { once: true, margin: "-80px" });

  const scrollBy = (dir: number) => {
    track.current?.scrollBy({ left: dir * 600, behavior: "smooth" });
  };

  // mouse drag
  const drag = useRef({ down: false, x: 0, left: 0 });

  return (
    <motion.section
      id={id}
      ref={section}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative scroll-mt-24 py-14"
    >
      <div className="mx-auto flex max-w-7xl items-end justify-between px-6">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-primary">{eyebrow}</p>
          <h2 className="text-display mt-2 text-4xl uppercase sm:text-5xl">{title}</h2>
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            className="glass h-10 w-10 rounded-full text-lg transition-colors hover:bg-primary/25"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollBy(1)}
            className="glass h-10 w-10 rounded-full text-lg transition-colors hover:bg-primary/25"
          >
            ›
          </button>
        </div>
      </div>

      <div
        ref={track}
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 [scroll-padding-left:1.5rem] lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
        onPointerDown={(e) => {
          drag.current = { down: true, x: e.clientX, left: track.current?.scrollLeft ?? 0 };
        }}
        onPointerMove={(e) => {
          if (!drag.current.down || !track.current) return;
          track.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
        }}
        onPointerUp={() => (drag.current.down = false)}
        onPointerLeave={() => (drag.current.down = false)}
      >
        {items.map((a, i) => (
          <motion.div
            key={a.id}
            className="snap-start"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.4), ease: "easeOut" }}
          >
            <AnimeCard anime={a} onOpen={onOpen} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
