import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { timelineItems, publications } from "../data/content";

const TYPE_COLORS = {
  Role:      "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800/50 dark:bg-blue-950/30 dark:text-blue-400",
  "R&D":     "border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-800/50 dark:bg-orange-950/30 dark:text-orange-400",
  Research:  "border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-800/50 dark:bg-purple-950/30 dark:text-purple-400",
  Education: "border-green-200 bg-green-50 text-green-700 dark:border-green-800/50 dark:bg-green-950/30 dark:text-green-400",
};

const PUB_TYPE_COLORS = {
  Conference: "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800/50 dark:bg-blue-950/30 dark:text-blue-400",
  Journal:    "border-green-200 bg-green-50 text-green-700 dark:border-green-800/50 dark:bg-green-950/30 dark:text-green-400",
  Whitepaper: "border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-800/50 dark:bg-orange-950/30 dark:text-orange-400",
  Patent:     "border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-800/50 dark:bg-purple-950/30 dark:text-purple-400",
};

function Experience() {
  return (
    <section id="experience" className="section-container">
      <SectionHeading
        eyebrow="Experience"
        title="Career, education, and research"
        description="Engineering roles, academic background, and published contributions."
      />

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Timeline */}
        <div>
          <p className="mono mb-6 text-xs uppercase tracking-[0.22em] text-[#0072BD] dark:text-[#4da6ff]">Career & Education</p>
          <div className="relative border-l border-blue-200 pl-5 sm:pl-7 dark:border-blue-900">
            {timelineItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative mb-6 last:mb-0"
              >
                <span className="absolute -left-[1.4rem] top-1.5 h-3 w-3 rounded-full border-2 border-[#0072BD] bg-[#0072BD] sm:-left-[1.9rem] dark:border-[#4da6ff] dark:bg-[#4da6ff]" />
                <div className="hud-card rounded-xl p-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="mono text-xs font-semibold text-[#0072BD] dark:text-[#4da6ff]">{item.year}</span>
                    <span className={`rounded border px-2 py-0.5 text-[10px] font-medium ${TYPE_COLORS[item.type] ?? "border-gray-200 bg-gray-50 text-gray-600 dark:border-white/[0.06] dark:bg-[#1c2128] dark:text-[#8b949e]"}`}>
                      {item.type}
                    </span>
                  </div>
                  <h3 className="mt-2 font-semibold text-gray-900 dark:text-[#e6edf3]">{item.title}</h3>
                  <p className="mono text-xs text-gray-500 dark:text-[#7d8590]">{item.subtitle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-[#8b949e]">{item.details}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div>
          <p className="mono mb-6 text-xs uppercase tracking-[0.22em] text-[#E87722]">Publications & Research</p>
          <div className="space-y-4">
            {publications.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="hud-card rounded-xl p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="flex-1 text-sm font-semibold leading-snug text-gray-900 dark:text-[#e6edf3]">{item.title}</h3>
                  <span className={`flex-shrink-0 rounded border px-2 py-0.5 text-[10px] font-medium ${PUB_TYPE_COLORS[item.type] ?? "border-gray-200 bg-gray-50 text-gray-600"}`}>
                    {item.type}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-[#8b949e]">{item.venue}</p>
                <p className="mono mt-1 text-[11px] uppercase tracking-[0.18em] text-[#0072BD] dark:text-[#4da6ff]">{item.year}</p>
              </motion.article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
