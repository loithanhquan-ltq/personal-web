import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { projects } from "../data/content";

const featured = projects.filter((p) => p.featured);
const rest      = projects.filter((p) => !p.featured);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function FeaturedCard({ project, index }) {
  return (
    <TiltCard maxTilt={4} variants={item} className="hud-card overflow-hidden rounded-2xl">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-gray-100 bg-gray-50 px-6 py-3 dark:border-white/[0.05] dark:bg-[#1c2128]">
        <span className="mono text-[10px] uppercase tracking-[0.25em] text-[#0072BD] dark:text-[#4da6ff]">
          Featured — {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-base font-semibold text-gray-900 dark:text-[#e6edf3]">{project.title}</h3>
      </div>

      {/* Body */}
      <div className="grid divide-gray-100 dark:divide-white/[0.05] lg:grid-cols-[1.6fr_1fr] lg:divide-x">
        <div className="p-6">
          <p className="text-sm leading-relaxed text-gray-600 dark:text-[#8b949e]">{project.description}</p>

          <div className="mt-5">
            <p className="mono mb-2 text-[11px] uppercase tracking-[0.2em] text-[#0072BD] dark:text-[#4da6ff]">System Architecture</p>
            <div className="flex flex-wrap gap-2">
              {project.architecture.map((a) => (
                <span key={a} className="rounded border border-blue-100 bg-blue-50 px-2 py-0.5 text-xs text-blue-700 dark:border-blue-800/50 dark:bg-blue-950/30 dark:text-blue-400">
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
          </div>

          <p className="mt-5 text-sm text-gray-600 dark:text-[#8b949e]">
            <span className="font-medium text-gray-800 dark:text-[#c9d1d9]">Outcome — </span>
            {project.outcome}
          </p>

          <div className="mt-5 flex gap-3">
            <a href={project.github} target="_blank" rel="noreferrer"
              className="rounded-full bg-[#0072BD] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-700 dark:bg-[#4da6ff] dark:text-[#0d1117] dark:hover:bg-blue-300">
              GitHub
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer"
                className="rounded-full border border-gray-300 px-4 py-2.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-white/[0.1] dark:text-[#c9d1d9] dark:hover:bg-[#1c2128]">
                Demo
              </a>
            )}
          </div>
        </div>

        {/* Benchmarks */}
        <div className="p-6">
          <p className="mono mb-4 text-[11px] uppercase tracking-[0.2em] text-[#77AC30]">Benchmarks</p>
          <div className="space-y-3">
            {project.benchmarks.map((b) => (
              <div key={b.label} className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-white/[0.06] dark:bg-[#1c2128]">
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-gray-500 dark:text-[#7d8590]">{b.label}</p>
                <p className="mt-1.5 text-2xl font-bold text-gray-900 dark:text-[#e6edf3]">{b.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

function CompactCard({ project, index }) {
  return (
    <TiltCard variants={item} className="hud-card flex flex-col rounded-xl p-5">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-gray-900 dark:text-[#e6edf3]">{project.title}</h3>
        <span className="mono flex-shrink-0 text-[10px] uppercase tracking-wider text-gray-300 dark:text-[#484f58]">
          {String(index + featured.length + 1).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-[#7d8590]">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((t) => <span key={t} className="tech-pill">{t}</span>)}
      </div>
      <div className="mt-auto pt-4 flex gap-2">
        <a href={project.github} target="_blank" rel="noreferrer"
          className="rounded-full bg-[#0072BD] px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-blue-700 dark:bg-[#4da6ff] dark:text-[#0d1117] dark:hover:bg-blue-300">
          GitHub
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer"
            className="rounded-full border border-gray-300 px-3.5 py-1.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-50 dark:border-white/[0.1] dark:text-[#c9d1d9] dark:hover:bg-[#1c2128]">
            Demo
          </a>
        )}
      </div>
    </TiltCard>
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
      <motion.div
        className="space-y-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
      >
        {featured.map((project, i) => (
          <FeaturedCard key={project.title} project={project} index={i} />
        ))}
      </motion.div>
      <motion.div
        className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
      >
        {rest.map((project, i) => (
          <CompactCard key={project.title} project={project} index={i} />
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
