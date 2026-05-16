import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-steel-980"
    >
      <div className="w-full max-w-lg rounded-2xl border border-cyan-300/20 bg-steel-900/65 p-6 shadow-hud backdrop-blur">
        <p className="mono text-xs uppercase tracking-[0.2em] text-cyan-200">Boot Sequence</p>
        <h2 className="mt-2 text-xl font-semibold text-slate-100">Loi Thanh Quan</h2>
        <div className="mt-4 space-y-3 text-sm text-slate-300">
          <p>$ init control-center ... ok</p>
          <p>$ load telemetry-stream ... ok</p>
          <p>$ validate safety-interlocks ... ok</p>
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-steel-800">
          <div className="h-1.5 w-full origin-left animate-pulse bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-300" />
        </div>
        <p className="mono mt-3 text-xs uppercase tracking-[0.2em] text-cyan-300">system online</p>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
