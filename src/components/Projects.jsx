import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";

function Projects() {
  return (
    <section id="projects" className="section-container">
      <SectionHeading
        eyebrow="Projects"
        title="A portfolio of systems with measurable outcomes"
        description="Each project is documented with architecture, technical constraints, benchmark metrics, and real-world deployment impact."
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute left-3 top-3 rounded border border-blue-200 bg-white/90 px-3 py-1">
                <p className="mono text-[10px] uppercase tracking-[0.2em] text-blue-700">Project {String(index + 1).padStart(2, "0")}</p>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-3 text-sm text-gray-600">{project.description}</p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="instrument-panel">
                  <p className="mono mb-2 text-[11px] uppercase tracking-[0.18em] text-blue-600">Architecture</p>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {project.architecture.map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-blue-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="instrument-panel">
                  <p className="mono mb-2 text-[11px] uppercase tracking-[0.18em] text-orange-600">Challenges</p>
                  <ul className="space-y-1 text-xs text-gray-600">
                    {project.challenges.map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-orange-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {project.benchmarks.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-gray-200 bg-gray-50 p-2">
                    <p className="mono text-[10px] uppercase tracking-[0.15em] text-gray-500">{metric.label}</p>
                    <p className="mt-1 text-sm font-semibold text-green-700">{metric.value}</p>
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

              <p className="mt-4 text-sm text-gray-600">
                <span className="font-medium text-gray-800">Outcome:</span> {project.outcome}
              </p>

              <div className="mt-5 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-gray-300 px-4 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Demo
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
