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
    <footer className="relative z-10 border-t border-cyan-300/20 bg-steel-950/80 py-8 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-300 md:flex-row">
        <p className="mono text-xs uppercase tracking-[0.15em]">(c) {new Date().getFullYear()} LTQ Robotics Systems Lab</p>

        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="mono text-xs uppercase tracking-[0.12em] hover:text-cyan-200">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {showTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mono fixed bottom-5 right-5 rounded-full border border-cyan-300/35 bg-steel-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100 shadow-card"
          aria-label="Back to top"
        >
          Top
        </button>
      ) : null}
    </footer>
  );
}

export default Footer;
