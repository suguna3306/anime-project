import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Carousel } from "@/components/Carousel";
import { SearchBar } from "@/components/SearchBar";
import { AnimeModal } from "@/components/AnimeModal";
import { Footer } from "@/components/Footer";
import { movies, series, type Anime } from "@/data/anime";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ANIMEVERSE — Cinematic Anime Movie & Series Discovery" },
      {
        name: "description",
        content:
          "Discover 20 hand-picked anime films and series in a cinematic catalogue with ratings, genres, languages and runtimes.",
      },
      { property: "og:title", content: "ANIMEVERSE — Cinematic Anime Discovery" },
      {
        property: "og:description",
        content: "A small, premium catalogue of the best anime movies and series.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState<Anime | null>(null);

  useEffect(() => {
    let destroy: (() => void) | undefined;
    let raf = 0;
    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
      const loop = (t: number) => {
        lenis.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      destroy = () => {
        cancelAnimationFrame(raf);
        lenis.destroy();
      };
    });
    return () => destroy?.();
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero onOpen={setActive} />
      <Carousel id="movies" eyebrow="🎬 Cinema" title="Anime Movies" items={movies} onOpen={setActive} />
      <Carousel id="series" eyebrow="📺 Binge" title="Anime Series" items={series} onOpen={setActive} />
      <SearchBar onOpen={setActive} />
      <Footer />
      <AnimeModal anime={active} onClose={() => setActive(null)} />
    </main>
  );
}
