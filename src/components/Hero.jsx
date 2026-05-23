import { Suspense, lazy, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { heroMetrics, heroTypingPhrases, telemetrySeries } from "../data/content";
import DashboardFrame from "./DashboardFrame";

const RoboticsScene = lazy(() => import("./RoboticsScene"));

const METRIC_ACCENTS = [
  "border-t-blue-500",
  "border-t-orange-500",
  "border-t-green-600",
  "border-t-purple-500",
];

const STATUS = [
  { label: "Navigation", value: "Nominal", color: "text-green-600" },
  { label: "Vision", value: "Tracking", color: "text-blue-600" },
  { label: "Safety", value: "Monitored", color: "text-amber-600" },
];

// MATLAB-style chart layout constants
const CW = 360, CH = 96;
const CP = { top: 6, right: 6, bottom: 22, left: 32 };
const cPlotW = CW - CP.left - CP.right;
const cPlotH = CH - CP.top - CP.bottom;
const Y_TICKS = [0, 25, 50, 75, 100];

function ActivityChart({ data }) {
  const max = Math.max(...data);
  const barSlot = cPlotW / data.length;
  const barW = barSlot * 0.65;
  const barOff = barSlot * 0.175;

  return (
    <svg viewBox={`0 0 ${CW} ${CH}`} className="w-full" aria-label="Commit activity chart">
      {/* Horizontal grid lines */}
      {Y_TICKS.map((t) => {
        const y = CP.top + cPlotH - (t / 100) * cPlotH;
        return (
          <line key={t}
            x1={CP.left} y1={y} x2={CP.left + cPlotW} y2={y}
            stroke="rgba(0,0,0,0.07)" strokeWidth="0.5"
          />
        );
      })}

      {/* Plot border box */}
      <rect
        x={CP.left} y={CP.top}
        width={cPlotW} height={cPlotH}
        fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5"
      />

      {/* Y axis labels */}
      {Y_TICKS.map((t) => {
        const y = CP.top + cPlotH - (t / 100) * cPlotH;
        return (
          <text key={t}
            x={CP.left - 3} y={y + 2.5}
            fill="#71717a" fontSize="7" textAnchor="end">
            {t}
          </text>
        );
      })}

      {/* Animated bars */}
      {data.map((v, i) => {
        const h = Math.max(2, (v / max) * cPlotH * 0.96);
        const x = CP.left + i * barSlot + barOff;
        const y = CP.top + cPlotH - h;
        return (
          <motion.rect key={i}
            x={x} width={barW} rx="1"
            fill="#0072BD"
            initial={{ height: 0, y: CP.top + cPlotH }}
            whileInView={{ height: h, y }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.035, ease: "easeOut" }}
          />
        );
      })}

      {/* X axis tick labels every 3rd bar */}
      {data.map((_, i) => {
        if (i % 3 !== 0) return null;
        const x = CP.left + i * barSlot + barSlot / 2;
        return (
          <text key={i}
            x={x} y={CH - 6}
            fill="#71717a" fontSize="6.5" textAnchor="middle">
            {`W${i + 1}`}
          </text>
        );
      })}
    </svg>
  );
}

function Hero() {
  const [typed, setTyped] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  useEffect(() => {
    const phrase = heroTypingPhrases[phraseIndex];
    let charIndex = 0;
    const interval = setInterval(() => {
      charIndex += 1;
      setTyped(phrase.slice(0, charIndex));
      if (charIndex >= phrase.length) {
        clearInterval(interval);
        setTimeout(() => {
          setTyped("");
          setPhraseIndex((p) => (p + 1) % heroTypingPhrases.length);
        }, 1200);
      }
    }, 45);
    return () => clearInterval(interval);
  }, [phraseIndex]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-10 pt-24">
      <div className="absolute inset-0 grid-overlay opacity-60" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT — DashboardFrame wraps the main card tightly */}
          <DashboardFrame padding="p-2.5 md:p-3">
            <div className="hud-card rounded-xl border-l-4 border-l-blue-600 p-5 md:p-7">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mono mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600"
              >
                Mechatronics Engineer
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl"
              >
                Loi Thanh Quan
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="terminal-caret mono mt-4 text-sm text-gray-500 md:text-base"
              >
                {typed}
              </motion.p>

              {/* Static bio */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="mt-3 max-w-lg text-sm leading-relaxed text-gray-500"
              >
                Based in Ho Chi Minh City — building autonomous systems at the intersection of robotics, embedded AI, and control theory.
              </motion.p>

              {/* Metrics with colored top borders */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {heroMetrics.map((metric, i) => (
                  <article key={metric.label} className={`instrument-panel border-t-2 ${METRIC_ACCENTS[i]}`}>
                    <p className="mono text-[10px] uppercase tracking-[0.16em] text-gray-400">{metric.label}</p>
                    <p className="mt-1.5 text-xl font-bold text-gray-800">{metric.value}</p>
                    <p className="mono mt-0.5 text-[10px] text-gray-500">{metric.delta}</p>
                  </article>
                ))}
              </div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-7 flex flex-wrap gap-3"
              >
                <a href="#projects" className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                  View Projects
                </a>
                <a href={resumeUrl} className="rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
                  Download CV
                </a>
                <a href="#contact" className="rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">
                  Get in Touch
                </a>
              </motion.div>

              {/* MATLAB-style activity chart */}
              <div className="mt-7 rounded-xl border border-gray-200 bg-white p-4">
                <div className="mono mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.16em]">
                  <span className="text-gray-500">Commit Activity</span>
                  <span className="text-blue-600">Past 18 Weeks</span>
                </div>
                <ActivityChart data={telemetrySeries} />
                <div className="mono mt-2 flex items-center gap-3 text-[10px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <span className="inline-block h-2 w-3 rounded-sm bg-blue-600 opacity-75" />
                    commits
                  </span>
                  <span>y-axis: relative activity (0–100)</span>
                </div>
              </div>
            </div>
          </DashboardFrame>

          {/* RIGHT — unified workspace card */}
          <motion.div
            className="hud-card overflow-hidden rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 }}
          >
            {/* Panel header */}
            <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-4 py-2.5">
              <p className="mono text-xs uppercase tracking-[0.2em] text-gray-500">Engineering Workspace</p>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                <span className="mono text-[9px] uppercase tracking-[0.15em] text-green-600">Live</span>
              </span>
            </div>

            {/* 3D robot */}
            <div className="px-4 pb-2 pt-3">
              <Suspense
                fallback={
                  <div className="flex h-[260px] items-center justify-center">
                    <p className="mono text-xs uppercase tracking-[0.2em] text-blue-600">Loading 3D model...</p>
                  </div>
                }
              >
                <RoboticsScene />
              </Suspense>
            </div>

            {/* System status header */}
            <div className="border-t border-gray-100 bg-gray-50 px-4 py-2.5">
              <p className="mono text-xs uppercase tracking-[0.2em] text-gray-500">System Status</p>
            </div>

            {/* Status cells with dividers */}
            <div className="grid grid-cols-3 divide-x divide-gray-100">
              {STATUS.map((s) => (
                <div key={s.label} className="p-3 text-center">
                  <p className="mono text-[10px] uppercase tracking-[0.12em] text-gray-400">{s.label}</p>
                  <p className={`mt-1 text-sm font-semibold ${s.color}`}>{s.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
