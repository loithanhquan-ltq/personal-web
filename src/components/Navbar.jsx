import { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../data/content";

function Navbar({ isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full px-4 pt-4 md:px-8">
      <nav className="hud-card mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 md:px-5">
        <a href="#home" className="mono text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 md:text-sm">
          LTQ / Robotics Command
        </a>

        <ul className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="mono text-xs uppercase tracking-[0.16em] text-slate-300 transition hover:text-cyan-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            type="button"
            className="mono rounded-xl border border-cyan-300/30 bg-steel-900/80 px-3 py-2 text-xs uppercase tracking-[0.15em] text-cyan-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </nav>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="hud-card mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl md:hidden"
      >
        <ul className="space-y-2 p-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="mono block py-2 text-xs uppercase tracking-[0.18em] text-slate-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}

export default Navbar;
