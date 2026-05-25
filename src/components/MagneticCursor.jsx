import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const READ_SPRING = { stiffness: 260, damping: 30 };

function MagneticCursor() {
  const [visible,  setVisible]  = useState(false);
  const [hovering, setHovering] = useState(false);
  const seenRef = useRef(false);
  const xRef    = useRef(null);
  const yRef    = useRef(null);

  // Crosshair snaps exactly; readout follows with gentle lag
  const dotX = useMotionValue(-200);
  const dotY = useMotionValue(-200);
  const readX = useSpring(dotX, READ_SPRING);
  const readY = useSpring(dotY, READ_SPRING);

  // Readout sits 16px below-right of the lagged position
  const readoutX = useTransform(readX, (x) => x + 16);
  const readoutY = useTransform(readY, (y) => y + 16);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      // Direct DOM writes — no re-render on every mousemove
      if (xRef.current) xRef.current.textContent = `X: ${String(e.clientX).padStart(4, "0")}`;
      if (yRef.current) yRef.current.textContent = `Y: ${String(e.clientY).padStart(4, "0")}`;
      if (!seenRef.current) {
        seenRef.current = true;
        setVisible(true);
      }
    };

    const onOver = (e) => {
      const el = e.target.closest('a, button, input, textarea, select, label, [role="button"]');
      setHovering(!!el);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => { if (seenRef.current) setVisible(true); };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [dotX, dotY]);

  if (!visible) return null;

  return (
    <>
      {/* Precision crosshair — snaps to cursor, dims on hover */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x: dotX, y: dotY }}
        animate={{ opacity: hovering ? 0.38 : 0.82 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden="true">
            {/* 2×2 square center point — machined, not a soft dot */}
            <rect x="39" y="39" width="2" height="2" fill="var(--cursor-c)" />
            {/* Arms — 32px each, 4px gap at center */}
            <line x1="40" y1="4"  x2="40" y2="36" stroke="var(--cursor-c)" strokeWidth="0.75" />
            <line x1="40" y1="44" x2="40" y2="76" stroke="var(--cursor-c)" strokeWidth="0.75" />
            <line x1="4"  y1="40" x2="36" y2="40" stroke="var(--cursor-c)" strokeWidth="0.75" />
            <line x1="44" y1="40" x2="76" y2="40" stroke="var(--cursor-c)" strokeWidth="0.75" />
          </svg>
        </div>
      </motion.div>

      {/* Coordinate readout — spring lag, freezes on hover */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x: readoutX, y: readoutY }}
        animate={{ opacity: hovering ? 0.28 : 0.72 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        <p
          className="select-none whitespace-nowrap font-mono text-[7px] leading-[1.75] tracking-[0.1em]"
          style={{ color: "var(--cursor-c)" }}
        >
          <span ref={xRef}>X: ----</span>
          <br />
          <span ref={yRef}>Y: ----</span>
        </p>
      </motion.div>
    </>
  );
}

export default MagneticCursor;
