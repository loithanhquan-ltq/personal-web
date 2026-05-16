function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="mono inline-flex h-10 items-center justify-center rounded-full border border-cyan-300/40 bg-steel-900/80 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 transition hover:bg-steel-800"
      aria-label="Toggle dark mode"
      title="Toggle theme"
    >
      {isDark ? "Dark" : "Light"}
    </button>
  );
}

export default ThemeToggle;
