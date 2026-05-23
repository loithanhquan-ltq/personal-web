import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#f0f0f4]"
    >
      <div className="w-full max-w-lg rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <p className="mono text-xs uppercase tracking-[0.2em] text-blue-600">Initializing</p>
        <h2 className="mt-2 text-xl font-semibold text-gray-800">Loi Thanh Quan</h2>
        <div className="mt-4 space-y-2 font-mono text-sm text-gray-500">
          <p>Loading profile data ... done</p>
          <p>Rendering visualizations ... done</p>
          <p>Building project index ... done</p>
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-gray-100">
          <div className="h-1.5 w-full origin-left animate-pulse bg-gradient-to-r from-blue-500 via-blue-400 to-matlab-cyan" />
        </div>
        <p className="mono mt-3 text-xs uppercase tracking-[0.2em] text-green-600">ready</p>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
