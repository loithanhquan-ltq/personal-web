import { useEffect, useState } from "react";
import { socialLinks } from "../data/content";

function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative z-10 border-t border-white/15 bg-white/30 py-8 backdrop-blur dark:bg-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-700 md:flex-row dark:text-slate-300">
        <p>(c) {new Date().getFullYear()} Mechatronics Engineer. All rights reserved.</p>

        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-cyan-600 dark:hover:text-neon-cyan">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {showTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-card"
          aria-label="Back to top"
        >
          Top
        </button>
      ) : null}
    </footer>
  );
}

export default Footer;
