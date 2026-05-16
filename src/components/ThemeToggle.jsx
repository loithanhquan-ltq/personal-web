function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="glass inline-flex h-10 w-10 items-center justify-center rounded-full border text-lg transition hover:scale-105"
      aria-label="Toggle dark mode"
      title="Toggle theme"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}

export default ThemeToggle;
