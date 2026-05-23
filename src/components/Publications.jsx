import SectionHeading from "./SectionHeading";
import { publications } from "../data/content";

function Publications() {
  return (
    <section id="research" className="section-container">
      <SectionHeading
        eyebrow="Research"
        title="Publications, papers, and technical writing"
        description="Conference contributions, journal articles, whitepapers, and patent-track work."
      />

      <div className="grid gap-4">
        {publications.map((item) => (
          <article key={item.title} className="hud-card rounded-xl p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
              <span className="tech-pill flex-shrink-0">{item.type}</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{item.venue}</p>
            <p className="mono mt-1 text-xs uppercase tracking-[0.15em] text-blue-600">{item.year}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Publications;
