import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { timelineItems } from "../data/content";

function Timeline() {
  return (
    <section id="timeline" className="section-container">
      <SectionHeading
        eyebrow="Timeline"
        title="Experience, education, and R&D milestones"
        description="A chronological record of roles, research initiatives, and academic achievements."
      />

      <div className="relative ml-2 border-l border-blue-200 pl-5 sm:pl-8">
        {timelineItems.map((item, index) => (
          <motion.article
            key={item.title}
            className="hud-card relative mb-6 rounded-2xl p-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <span className="absolute -left-[1.5rem] top-6 h-3.5 w-3.5 rounded-full border-2 border-blue-500 bg-blue-600 sm:-left-[2.16rem]" />
            <div className="flex flex-wrap items-center gap-3">
              <p className="mono text-xs uppercase tracking-[0.18em] text-blue-600">{item.year}</p>
              <span className="tech-pill">{item.type}</span>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.subtitle}</p>
            <p className="mt-3 text-sm text-gray-600">{item.details}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
