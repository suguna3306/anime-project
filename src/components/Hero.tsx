import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "@/assets/hero.jpg";
import { allAnime, type Anime } from "@/data/anime";

const featured: Anime = allAnime.find((a) => a.id === "attack-on-titan")!;

export function Hero({ onOpen }: { onOpen: (a: Anime) => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="film-grain relative h-[92vh] min-h-[620px] w-full overflow-hidden">
      <motion.img
        src={heroImg}
        alt="Cinematic anime skyline at dusk"
        width={1920}
        height={1088}
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(220,50,60,0.22),transparent_55%)]" />

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xs uppercase tracking-[0.4em] text-primary"
        >
          Featured Series
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.6 }}
          className="text-display mt-3 max-w-3xl text-6xl uppercase sm:text-8xl"
        >
          {featured.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="mt-4 text-sm text-muted-foreground"
        >
          {featured.year} • {featured.genres.join(" • ")} •{" "}
          <span className="font-bold text-gold">⭐ {featured.rating.toFixed(1)}</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36 }}
          className="mt-4 max-w-xl text-base italic text-foreground/85"
        >
          "{featured.story}"
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.44 }}
          className="mt-8 flex gap-3"
        >
          <button
            onClick={() => onOpen(featured)}
            className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_var(--primary)] transition-transform hover:scale-105"
          >
            Explore
          </button>
          <a
            href="#movies"
            className="glass rounded-full px-7 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            Browse Catalogue
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
