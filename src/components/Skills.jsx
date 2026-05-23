import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import CircularGauge from "./CircularGauge";
import RadarChart from "./RadarChart";
import { radarMetrics, skillSet, systemHealth } from "../data/content";

function Skills() {
  return (
    <section id="skills" className="section-container">
      <SectionHeading
        eyebrow="Skills"
        title="Capability matrix across robotics domains"
        description="Technical proficiency mapped across engineering disciplines, from embedded software to system-level autonomy."
      />

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <article className="hud-card rounded-2xl p-5 md:p-6">
          <p className="mono text-xs uppercase tracking-[0.2em] text-blue-600">Core Capabilities</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {skillSet.slice(0, 6).map((skill) => (
              <CircularGauge key={skill.name} label={skill.name} value={skill.level} />
            ))}
          </div>
        </article>

        <article className="hud-card rounded-2xl p-5 md:p-6">
          <p className="mono text-xs uppercase tracking-[0.2em] text-blue-600">Competency Radar</p>
          <div className="mt-4 grid items-center gap-4 md:grid-cols-[0.95fr_1.05fr]">
            <RadarChart metrics={radarMetrics} />
            <div className="space-y-3">
              {systemHealth.map((metric) => (
                <div key={metric.label}>
                  <div className="mono mb-1 flex justify-between text-[11px] uppercase tracking-[0.15em] text-gray-500">
                    <span>{metric.label}</span>
                    <span>{metric.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-300"
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {skillSet.map((skill, index) => (
          <motion.article
            key={skill.name}
            className="hud-card rounded-xl p-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03 }}
          >
            <div className="mono mb-2 flex items-center justify-between text-xs uppercase tracking-[0.14em]">
              <h3 className="text-gray-700">{skill.name}</h3>
              <span className="text-blue-600">{skill.level}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-gray-200">
              <motion.div
                className="h-1.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.03 }}
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
