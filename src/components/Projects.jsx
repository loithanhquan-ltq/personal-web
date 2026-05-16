import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";

function Projects() {
  return (
    <section id="projects" className="section-container">
      <SectionHeading
        eyebrow="Engineering Case Studies"
        title="Research-grade project portfolio with measurable outcomes"
        description="Each system is documented as a technical case study with architecture, constraints, benchmark metrics, and deployment impact."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            className="group hud-card flex h-full flex-col overflow-hidden rounded-2xl"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute left-3 top-3 rounded-full border border-cyan-300/40 bg-steel-950/80 px-3 py-1">
                <p className="mono text-[10px] uppercase tracking-[0.2em] text-cyan-200">Project ID {index + 1}</p>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{project.description}</p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="instrument-panel">
                  <p className="mono mb-2 text-[11px] uppercase tracking-[0.18em] text-cyan-200">Architecture</p>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {project.architecture.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="instrument-panel">
                  <p className="mono mb-2 text-[11px] uppercase tracking-[0.18em] text-cyan-200">Challenges</p>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {project.challenges.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {project.benchmarks.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-cyan-300/20 bg-steel-950/70 p-2">
                    <p className="mono text-[10px] uppercase tracking-[0.15em] text-slate-400">{metric.label}</p>
                    <p className="mt-1 text-sm font-semibold text-teal-300">{metric.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="tech-pill">
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm text-slate-300">Outcome: {project.outcome}</p>

              <div className="mt-5 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold text-steel-980 transition hover:bg-cyan-400"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-cyan-500/50 px-4 py-2 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-500/10"
                >
                  Simulation
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
