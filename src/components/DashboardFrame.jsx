import { motion } from "framer-motion";

const corners = [
  {
    pos: "top-0 left-0",
    borders: "border-l-2 border-t-2",
    initial: { x: -10, y: -10 },
    label: "SYS ONLINE",
    labelPos: "top-1.5 left-7",
    labelAlign: "",
  },
  {
    pos: "top-0 right-0",
    borders: "border-r-2 border-t-2",
    initial: { x: 10, y: -10 },
    label: "PORTFOLIO V2",
    labelPos: "top-1.5 right-7",
    labelAlign: "text-right",
  },
  {
    pos: "bottom-0 left-0",
    borders: "border-l-2 border-b-2",
    initial: { x: -10, y: 10 },
    label: "HCM · VIETNAM",
    labelPos: "bottom-1.5 left-7",
    labelAlign: "",
  },
  {
    pos: "bottom-0 right-0",
    borders: "border-r-2 border-b-2",
    initial: { x: 10, y: 10 },
    label: "© 2026",
    labelPos: "bottom-1.5 right-7",
    labelAlign: "text-right",
  },
];

function DashboardFrame({ children, padding = "p-5 md:p-7" }) {
  return (
    <div className={`relative ${padding}`}>
      {/* Marching dashes border */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <motion.rect
          x="0" y="0"
          width="100%" height="100%"
          fill="none"
          stroke="rgba(0, 114, 189, 0.45)"
          strokeWidth="1.5"
          strokeDasharray="7 5"
          animate={{ strokeDashoffset: [0, -12] }}
          transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Corner brackets */}
      {corners.map((c, i) => (
        <motion.div
          key={i}
          className={`corner-bracket absolute ${c.pos} h-5 w-5 ${c.borders} border-blue-500`}
          initial={{ opacity: 0, x: c.initial.x, y: c.initial.y }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.1 + i * 0.08, duration: 0.4, ease: "easeOut" }}
        />
      ))}

      {/* Corner labels */}
      {corners.map((c, i) => (
        <motion.p
          key={`lbl-${i}`}
          className={`mono absolute ${c.labelPos} ${c.labelAlign} text-[9px] uppercase tracking-[0.22em] text-gray-400`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 + i * 0.06, duration: 0.4 }}
        >
          {c.label}
        </motion.p>
      ))}

      {children}
    </div>
  );
}

export default DashboardFrame;
