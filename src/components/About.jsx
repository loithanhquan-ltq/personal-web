import SectionHeading from "./SectionHeading";
import { profileSummary } from "../data/content";

function About() {
  return (
    <section id="about" className="section-container">
      <SectionHeading
        eyebrow="About"
        title="Mechatronics engineer with a systems-level approach to robotics"
        description="I design and build robotics systems where embedded intelligence, control theory, and mechanical precision converge into deployable autonomous platforms."
      />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="hud-card rounded-2xl p-6">
          <p className="mono text-xs uppercase tracking-[0.22em] text-blue-600">Profile</p>
          <h3 className="mt-3 text-2xl font-semibold text-gray-900">{profileSummary.name}</h3>
          <p className="mono text-sm uppercase tracking-[0.18em] text-gray-500">{profileSummary.role}</p>
          <p className="mt-4 text-gray-600">{profileSummary.mission}</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {profileSummary.quickStats.map((stat) => (
              <div key={stat.label} className="instrument-panel">
                <p className="mono text-[11px] uppercase tracking-[0.18em] text-gray-500">{stat.label}</p>
                <p className="mt-2 text-xl font-semibold text-gray-800">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <p className="mono mb-2 text-xs uppercase tracking-[0.2em] text-blue-600">Research Interests</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {profileSummary.researchInterests.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mono mb-2 text-xs uppercase tracking-[0.2em] text-blue-600">Technical Domains</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {profileSummary.technicalDomains.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <article className="hud-card rounded-2xl p-6">
          <p className="mono text-xs uppercase tracking-[0.2em] text-blue-600">Architecture Coverage</p>
          <div className="mt-4 grid gap-3">
            {profileSummary.architecture.map((layer, index) => (
              <div key={layer} className="instrument-panel flex items-center justify-between">
                <span className="mono text-xs uppercase tracking-[0.16em] text-gray-500">Layer {index + 1}</span>
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

          <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-3">
            <p className="mono text-xs text-blue-600">Reliability indicators</p>
            <div className="mt-3 space-y-3">
              <div>
                <div className="mono mb-1 flex justify-between text-[11px] uppercase text-gray-500">
                  <span>failure containment</span>
                  <span>98%</span>
                </div>
                <div className="h-1.5 rounded-full bg-gray-200">
                  <div className="h-1.5 w-[98%] rounded-full bg-green-500" />
                </div>
              </div>
              <div>
                <div className="mono mb-1 flex justify-between text-[11px] uppercase text-gray-500">
                  <span>verification coverage</span>
                  <span>93%</span>
                </div>
                <div className="h-1.5 rounded-full bg-gray-200">
                  <div className="h-1.5 w-[93%] rounded-full bg-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
