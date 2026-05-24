import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/content";
import ThemeToggle from "./ThemeToggle";

function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return active;
}

const navVariants = {
  hidden: { opacity: 0, scale: 0.96, y: -8 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const linkVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.3 + i * 0.06, duration: 0.3, ease: "easeOut" },
  }),
};

function NavLink({ link, index, active, onClick }) {
  const isActive = active === link.href.replace("#", "");
  return (
    <motion.li custom={index} variants={linkVariants} initial="hidden" animate="visible">
      <motion.a
        href={link.href}
        onClick={onClick}
        className="relative flex flex-col items-center gap-0.5 text-sm font-medium text-gray-500 transition-colors dark:text-[#7d8590]"
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        style={{ color: isActive ? "var(--matlab-blue)" : undefined }}
      >
        <span className={isActive ? "" : "hover:text-gray-800 dark:hover:text-[#e6edf3]"}>
          {link.label}
        </span>
        <motion.span
          className="h-1 w-1 rounded-full bg-[#0072BD] dark:bg-[#4da6ff]"
          initial={false}
          animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
        />
      </motion.a>
    </motion.li>
  );
}

function Navbar({ isDark, onToggle }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  return (
    <header className="fixed top-0 z-40 w-full px-4 pt-4 md:px-8">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center rounded-xl border border-gray-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-sm dark:border-white/[0.07] dark:bg-[#161b22]/95 md:px-5"
      >
        {/* Left — identity anchor */}
        <a
          href="#home"
          className="mono text-sm font-bold tracking-[0.18em] text-gray-800 transition-colors hover:text-[#0072BD] dark:text-[#c9d1d9] dark:hover:text-[#4da6ff]"
          aria-label="Back to top"
        >
          LTQ
        </a>

        {/* Center — nav links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link, i) => (
            <NavLink key={link.href} link={link} index={i} active={active} />
          ))}
        </ul>

        {/* Right — theme toggle + mobile menu */}
        <div className="flex items-center justify-end gap-2">
          <ThemeToggle isDark={isDark} onToggle={onToggle} />
          <button
            type="button"
            className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-100 dark:border-white/[0.07] dark:bg-[#1c2128] dark:text-[#8b949e] dark:hover:bg-[#30363d] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Open menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-white/[0.07] dark:bg-[#161b22] md:hidden"
          >
            <ul className="p-3">
              {navLinks.map((link, i) => {
                const isActive = active === link.href.replace("#", "");
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                        isActive
                          ? "bg-blue-50 text-[#0072BD] dark:bg-blue-950/40 dark:text-[#4da6ff]"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-[#8b949e] dark:hover:bg-[#1c2128] dark:hover:text-[#e6edf3]"
                      }`}
                    >
                      <span className={`h-4 w-0.5 rounded-full ${isActive ? "bg-[#0072BD] dark:bg-[#4da6ff]" : "bg-transparent"}`} />
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
