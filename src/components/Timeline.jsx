import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { timelineItems } from "../data/content";

function Timeline() {
  return (
    <section id="timeline" className="section-container">
      <SectionHeading
        eyebrow="Mission Log"
        title="Experience timeline with R&D milestones"
        description="Chronological log of engineering missions, development initiatives, and research-focused technical achievements."
      />

      <div className="relative ml-2 border-l border-cyan-400/35 pl-8">
        {timelineItems.map((item, index) => (
          <motion.article
            key={item.title}
            className="hud-card relative mb-6 rounded-2xl p-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <span className="absolute -left-[2.16rem] top-6 h-3.5 w-3.5 rounded-full border-2 border-cyan-400 bg-steel-980" />
            <div className="flex flex-wrap items-center gap-3">
              <p className="mono text-xs uppercase tracking-[0.18em] text-cyan-200">{item.year}</p>
              <span className="tech-pill">{item.type}</span>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-slate-100">{item.title}</h3>
            <p className="text-sm text-slate-300">{item.subtitle}</p>
            <p className="mt-3 text-sm text-slate-300">{item.details}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
