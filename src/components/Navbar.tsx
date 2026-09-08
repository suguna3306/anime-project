import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#movies", label: "Movies" },
  { href: "#series", label: "Series" },
  { href: "#search", label: "Search" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "glass py-3 shadow-[0_10px_30px_-20px_black]" : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="text-display text-2xl uppercase tracking-[0.2em]">
          Anime<span className="text-primary">verse</span>
        </a>
        <ul className="flex items-center gap-6 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
