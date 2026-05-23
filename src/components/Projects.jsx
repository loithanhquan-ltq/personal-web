import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

function FeaturedCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="hud-card overflow-hidden rounded-2xl"
    >
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-gray-100 bg-gray-50 px-6 py-3">
        <span className="mono text-[10px] uppercase tracking-[0.25em] text-[#0072BD]">
          Featured — {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-base font-semibold text-gray-900">{project.title}</h3>
      </div>

      {/* Body */}
      <div className="grid divide-gray-100 lg:grid-cols-[1.6fr_1fr] lg:divide-x">
        {/* Left: description + arch + tech + outcome */}
        <div className="p-6">
          <p className="text-sm leading-relaxed text-gray-600">{project.description}</p>

          <div className="mt-5">
            <p className="mono mb-2 text-[11px] uppercase tracking-[0.2em] text-[#0072BD]">System Architecture</p>
            <div className="flex flex-wrap gap-2">
              {project.architecture.map((a) => (
                <span key={a} className="rounded border border-blue-100 bg-blue-50 px-2 py-0.5 text-xs text-blue-700">
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>

          <p className="mt-5 text-sm text-gray-600">
            <span className="font-medium text-gray-800">Outcome — </span>
            {project.outcome}
          </p>

          <div className="mt-5 flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#0072BD] px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
            >
              GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-300 px-4 py-2 text-xs font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Demo
              </a>
            )}
          </div>
        </div>

        {/* Right: benchmarks */}
        <div className="p-6">
          <p className="mono mb-4 text-[11px] uppercase tracking-[0.2em] text-[#77AC30]">Benchmarks</p>
          <div className="space-y-3">
            {project.benchmarks.map((b) => (
              <div key={b.label} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-gray-500">{b.label}</p>
                <p className="mt-1.5 text-2xl font-bold text-gray-900">{b.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CompactCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="hud-card flex flex-col rounded-xl p-5"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-gray-900">{project.title}</h3>
        <span className="mono flex-shrink-0 text-[10px] uppercase tracking-wider text-gray-300">
          {String(index + featured.length + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="mt-2 line-clamp-2 text-sm text-gray-500">{project.description}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="tech-pill">{t}</span>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#0072BD] px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-blue-700"
        >
          GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gray-300 px-3.5 py-1.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-container">
      <SectionHeading
        eyebrow="Projects"
        title="Systems built and shipped"
        description="Selected work with documented architecture, engineering constraints, and measured outcomes."
      />

      {/* Featured */}
      <div className="space-y-6">
        {featured.map((project, i) => (
          <FeaturedCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* Compact grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {rest.map((project, i) => (
          <CompactCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
