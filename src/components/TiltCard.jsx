import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function TiltCard({ children, className = "", maxTilt = 6, variants }) {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    setIsTouch(mq.matches);
    const handler = (e) => setIsTouch(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 260, damping: 30 });
  const y = useSpring(rawY, { stiffness: 260, damping: 30 });

  const rotateX = useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]);
  const glint   = useTransform(
    [x, y],
    ([lx, ly]) =>
      `radial-gradient(circle at ${(lx + 0.5) * 100}% ${(ly + 0.5) * 100}%, rgba(255,255,255,0.08) 0%, transparent 60%)`
  );

  if (isTouch) {
    return (
      <motion.div variants={variants} className={`relative ${className}`}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        rawX.set((e.clientX - r.left) / r.width - 0.5);
        rawY.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { rawX.set(0); rawY.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`relative ${className}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"
        style={{ background: glint }}
      />
      {children}
    </motion.div>
  );
}

export default TiltCard;
