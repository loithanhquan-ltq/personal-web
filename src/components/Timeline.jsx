import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { timelineItems } from "../data/content";

function Timeline() {
  return (
    <section id="timeline" className="section-container">
      <SectionHeading
        eyebrow="Timeline"
        title="Experience, education, and certifications"
        description="A focused progression through robotics engineering, controls, and automation delivery."
      />

      <div className="relative ml-3 border-l border-cyan-400/40 pl-8">
        {timelineItems.map((item, index) => (
          <motion.article
            key={item.title}
            className="glass relative mb-6 rounded-2xl p-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <span className="absolute -left-[2.2rem] top-7 h-4 w-4 rounded-full border-2 border-cyan-500 bg-white dark:bg-steel-900" />
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-neon-cyan">{item.year}</p>
            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-300">{item.subtitle} - {item.type}</p>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{item.details}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
