import SectionHeading from "./SectionHeading";
import { publications } from "../data/content";

function Publications() {
  return (
    <section id="research" className="section-container">
      <SectionHeading
        eyebrow="Publications / Research"
        title="Scientific output, technical writing, and innovation assets"
        description="A curated research section for papers, whitepapers, conference contributions, and patent-track concepts."
      />

      <div className="grid gap-4">
        {publications.map((item) => (
          <article key={item.title} className="hud-card rounded-xl p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
              <span className="tech-pill">{item.type}</span>
            </div>
            <p className="mt-2 text-sm text-slate-300">{item.venue}</p>
            <p className="mono mt-1 text-xs uppercase tracking-[0.15em] text-cyan-200">{item.year}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Publications;
