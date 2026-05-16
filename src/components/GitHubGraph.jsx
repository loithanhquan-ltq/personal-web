import SectionHeading from "./SectionHeading";

function GitHubGraph({ visits }) {
  const cells = Array.from({ length: 84 }, (_, i) => (i * 37) % 5);
  const shades = ["bg-slate-300/40 dark:bg-white/10", "bg-emerald-300/40", "bg-emerald-400/50", "bg-emerald-500/60", "bg-emerald-600/70"];

  return (
    <section className="section-container" aria-label="GitHub activity preview">
      <SectionHeading
        eyebrow="Open Source"
        title="Contribution pulse"
        description="Placeholder section for your GitHub contribution graph and open-source activity highlights."
      />

      <div className="glass rounded-2xl p-6">
        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: "repeat(14, minmax(0, 1fr))" }}
        >
          {cells.map((level, index) => (
            <span key={index} className={`h-4 w-4 rounded ${shades[level]}`} />
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">Visitor counter: {visits.toLocaleString()}</p>
      </div>
    </section>
  );
}

export default GitHubGraph;
