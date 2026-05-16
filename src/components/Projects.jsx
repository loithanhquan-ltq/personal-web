import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";

function Projects() {
  return (
    <section id="projects" className="section-container">
      <SectionHeading
        eyebrow="Projects"
        title="Selected mechatronics and AI systems"
        description="Each project balances software architecture, control reliability, and deployment realism."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            className="group glass flex h-full flex-col overflow-hidden rounded-2xl"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm text-slate-700 dark:text-slate-300">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-700 dark:text-cyan-300">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-slate-900"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-cyan-500/50 px-4 py-2 text-xs font-semibold text-cyan-700 transition hover:bg-cyan-500/10 dark:text-cyan-300"
                >
                  Live Demo
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
