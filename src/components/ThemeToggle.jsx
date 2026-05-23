import { motion, AnimatePresence } from "framer-motion";

const SunIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#E87722" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2"  x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="4.22" y1="4.22"   x2="5.64"  y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="2"  y1="12" x2="4"  y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
    <line x1="4.22" y1="19.78"  x2="5.64"  y2="18.36" />
    <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#4da6ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

function ThemeToggle({ isDark, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 ${
        isDark
          ? "bg-[#1c2128] shadow-[0_0_12px_rgba(77,166,255,0.2)] ring-1 ring-[#4da6ff]/30"
          : "bg-gray-100 ring-1 ring-gray-200 hover:bg-gray-200"
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ rotate: -60, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0,   opacity: 1, scale: 1   }}
            exit={{    rotate: 60,  opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <MoonIcon />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 60,  opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0,   opacity: 1, scale: 1   }}
            exit={{    rotate: -60, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <SunIcon />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default ThemeToggle;
