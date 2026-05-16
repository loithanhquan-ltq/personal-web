import { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../data/content";

function Navbar({ isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full px-4 pt-4 md:px-8">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3">
        <a href="#home" className="text-sm font-semibold uppercase tracking-[0.2em]">
          MECHATRONICS
        </a>

        <ul className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-700 transition hover:text-cyan-600 dark:text-slate-200 dark:hover:text-neon-cyan"
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
            className="glass rounded-xl px-3 py-2 text-sm md:hidden"
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
        className="glass mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl md:hidden"
      >
        <ul className="space-y-2 p-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="block py-2 text-sm">
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
