import type { Anime } from "@/data/anime";

/** Stylized generated poster art — cinematic gradient + light shapes + title. */
export function Poster({ anime, className = "" }: { anime: Anime; className?: string }) {
  const initials = anime.title
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 3)
    .map((w) => w[0])
    .join("");

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{ background: `linear-gradient(160deg, ${anime.from} 0%, #07070c 62%)` }}
      aria-hidden
    >
      <div
        className="absolute -right-1/4 top-[-20%] h-[70%] w-[90%] rounded-full blur-3xl"
        style={{ background: anime.to, opacity: 0.55 }}
      />
      <div
        className="absolute bottom-[-30%] left-[-25%] h-[60%] w-[80%] rounded-full blur-3xl"
        style={{ background: anime.glow, opacity: 0.28 }}
      />
      <div
        className="absolute inset-x-0 top-1/2 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${anime.glow}, transparent)`, opacity: 0.5 }}
      />
      <div
        className="absolute left-1/2 top-[38%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rotate-45 border"
        style={{ borderColor: anime.glow, opacity: 0.25 }}
      />
      <span
        className="text-display absolute left-1/2 top-[36%] -translate-x-1/2 -translate-y-1/2 text-6xl opacity-90"
        style={{ color: anime.glow, textShadow: `0 0 40px ${anime.glow}` }}
      >
        {initials}
      </span>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
    </div>
  );
}
