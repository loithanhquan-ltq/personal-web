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
    <footer className="relative z-10 border-t border-gray-200 bg-white py-8 dark:border-white/[0.07] dark:bg-[#161b22]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-500 dark:text-[#7d8590] md:flex-row">
        <p className="mono text-xs uppercase tracking-[0.15em]">&copy; {new Date().getFullYear()} Loi Thanh Quan</p>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
              className="mono text-xs uppercase tracking-[0.12em] hover:text-[#0072BD] dark:hover:text-[#4da6ff]">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mono fixed bottom-5 right-5 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-gray-600 shadow-sm dark:border-white/[0.07] dark:bg-[#161b22] dark:text-[#8b949e]"
          aria-label="Back to top"
        >
          Top
        </button>
      )}
    </footer>
  );
}

export default Footer;
