import { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "../data/content";

function Navbar({ isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-xl border border-gray-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-sm md:px-5">
        <a href="#home" className="mono text-xs font-semibold uppercase tracking-[0.24em] text-gray-800 md:text-sm">
          Loi Thanh Quan
        </a>

        <ul className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="mono text-xs uppercase tracking-[0.16em] text-gray-500 transition hover:text-blue-600"
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
            className="mono rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs uppercase tracking-[0.15em] text-gray-600 md:hidden"
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
        className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm md:hidden"
      >
        <ul className="space-y-2 p-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="mono block py-2 text-xs uppercase tracking-[0.18em] text-gray-600"
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
