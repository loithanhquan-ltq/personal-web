import SectionHeading from "./SectionHeading";
import { profileSummary } from "../data/content";

function About() {
  return (
    <section id="about" className="section-container">
      <SectionHeading
        eyebrow="Engineering Profile"
        title="Research-oriented mechatronics engineer with systems-level architecture depth"
        description="Professional summary presented in scientific format, with emphasis on domain focus, measurable output, and reliability-centered design."
      />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="hud-card rounded-2xl p-6">
          <p className="mono text-xs uppercase tracking-[0.22em] text-cyan-300">Abstract</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-100">{profileSummary.name}</h3>
          <p className="mono text-sm uppercase tracking-[0.18em] text-slate-300">{profileSummary.role}</p>
          <p className="mt-4 text-slate-300">{profileSummary.mission}</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {profileSummary.quickStats.map((stat) => (
              <div key={stat.label} className="instrument-panel">
                <p className="mono text-[11px] uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
                <p className="mt-2 text-xl font-semibold text-cyan-100">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <p className="mono mb-2 text-xs uppercase tracking-[0.2em] text-cyan-200">Research Interests</p>
              <ul className="space-y-2 text-sm text-slate-300">
                {profileSummary.researchInterests.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mono mb-2 text-xs uppercase tracking-[0.2em] text-cyan-200">Technical Domains</p>
              <ul className="space-y-2 text-sm text-slate-300">
                {profileSummary.technicalDomains.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <article className="hud-card rounded-2xl p-6">
          <p className="mono text-xs uppercase tracking-[0.2em] text-cyan-200">Architecture Coverage</p>
          <div className="mt-4 grid gap-3">
            {profileSummary.architecture.map((layer, index) => (
              <div key={layer} className="instrument-panel flex items-center justify-between">
                <span className="mono text-xs uppercase tracking-[0.16em] text-slate-400">Layer {index + 1}</span>
                <span className="tech-pill">{layer}</span>
              </div>
            ))}
          </div>

          <img
            src={profileSummary.portrait}
            alt="Portrait of the engineer"
            className="mt-6 h-64 w-full rounded-xl object-cover"
            loading="lazy"
          />

          <div className="mt-4 rounded-xl border border-cyan-300/20 bg-steel-950/70 p-3">
            <p className="mono text-xs text-cyan-200">Reliability indicators</p>
            <div className="mt-3 space-y-3">
              <div>
                <div className="mono mb-1 flex justify-between text-[11px] uppercase text-slate-400">
                  <span>failure containment</span>
                  <span>98%</span>
                </div>
                <div className="h-1.5 rounded-full bg-steel-800"><div className="h-1.5 w-[98%] rounded-full bg-teal-300" /></div>
              </div>
              <div>
                <div className="mono mb-1 flex justify-between text-[11px] uppercase text-slate-400">
                  <span>verification coverage</span>
                  <span>93%</span>
                </div>
                <div className="h-1.5 rounded-full bg-steel-800"><div className="h-1.5 w-[93%] rounded-full bg-cyan-300" /></div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
