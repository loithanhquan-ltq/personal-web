import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-steel-950"
    >
      <div className="text-center">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-cyan-400/30 border-t-cyan-300" />
        <p className="mt-4 text-sm uppercase tracking-[0.24em] text-neon-cyan">Initializing Portfolio</p>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
