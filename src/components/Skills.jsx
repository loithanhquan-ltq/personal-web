import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillSet } from "../data/content";

function Skills() {
  return (
    <section id="skills" className="section-container">
      <SectionHeading
        eyebrow="Skills"
        title="Technical stack for intelligent machines"
        description="A balanced profile across software, controls, robotics middleware, and embedded systems integration."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {skillSet.map((skill, index) => (
          <motion.article
            key={skill.name}
            className="glass rounded-2xl p-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
          >
            <div className="mb-2 flex items-center justify-between text-sm">
              <h3 className="font-medium">{skill.name}</h3>
              <span className="text-cyan-700 dark:text-neon-cyan">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-300/70 dark:bg-white/10">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
