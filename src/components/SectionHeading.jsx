import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="mb-10 max-w-3xl"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-500 dark:text-neon-cyan">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      <p className="mt-4 text-slate-600 dark:text-slate-300">{description}</p>
    </motion.div>
  );
}

export default SectionHeading;
