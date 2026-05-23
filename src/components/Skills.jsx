import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import RadarChart from "./RadarChart";
import { radarMetrics, skillSet, techStack } from "../data/content";

const GROUPS = ["Robotics", "Software", "Embedded", "Control"];
const GROUP_COLORS = { Robotics: "bg-[#0072BD]", Software: "bg-[#77AC30]", Embedded: "bg-[#E87722]", Control: "bg-purple-500" };
const GROUP_TEXT   = { Robotics: "text-[#0072BD] dark:text-[#4da6ff]", Software: "text-[#77AC30]", Embedded: "text-[#E87722]", Control: "text-purple-500" };

function Skills() {
  return (
    <section id="skills" className="section-container">
      <SectionHeading
        eyebrow="Skills"
        title="Capability across the mechatronics stack"
        description="From bare-metal firmware to autonomous navigation — technical depth mapped across engineering disciplines."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Radar */}
        <div className="hud-card rounded-2xl p-6">
          <p className="mono mb-4 text-xs uppercase tracking-[0.2em] text-[#0072BD] dark:text-[#4da6ff]">Competency Radar</p>
          <RadarChart metrics={radarMetrics} />
          <div className="mt-4 grid grid-cols-3 gap-2">
            {radarMetrics.map((m) => (
              <div key={m.axis} className="rounded-lg border border-gray-200 bg-gray-50 p-2 text-center dark:border-white/[0.06] dark:bg-[#1c2128]">
                <p className="mono text-[10px] uppercase tracking-[0.15em] text-gray-500 dark:text-[#7d8590]">{m.axis}</p>
                <p className="mt-0.5 text-sm font-semibold text-gray-800 dark:text-[#e6edf3]">{m.value}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skill bars */}
        <div className="hud-card rounded-2xl p-6">
          <p className="mono mb-5 text-xs uppercase tracking-[0.2em] text-[#0072BD] dark:text-[#4da6ff]">Core Skills</p>
          <div className="space-y-3">
            {GROUPS.map((group) => {
              const items = skillSet.filter((s) => s.group === group);
              return (
                <div key={group}>
                  <p className={`mono mb-2 text-[10px] uppercase tracking-[0.2em] ${GROUP_TEXT[group]}`}>{group}</p>
                  <div className="space-y-2">
                    {items.map((skill, idx) => (
                      <motion.div key={skill.name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.04 }}>
                        <div className="mono mb-1 flex justify-between text-[11px] text-gray-500 dark:text-[#7d8590]">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-gray-200 dark:bg-[#30363d]">
                          <motion.div
                            className={`h-1.5 rounded-full ${GROUP_COLORS[group]}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.04, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tech stack */}
      <div className="mt-6 hud-card rounded-2xl p-6">
        <p className="mono mb-5 text-xs uppercase tracking-[0.2em] text-[#0072BD] dark:text-[#4da6ff]">Tech Stack</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {techStack.map((cat) => (
            <div key={cat.category}>
              <p className="mono mb-2 text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-[#6e7681]">{cat.category}</p>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => <span key={item} className="tech-pill">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
