import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="mb-10 max-w-4xl"
    >
      <p className="mono mb-3 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-slate-100 md:text-4xl">{title}</h2>
      <p className="mt-4 max-w-3xl text-slate-300">{description}</p>
    </motion.div>
  );
}

export default SectionHeading;
