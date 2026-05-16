import { Suspense, lazy, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { heroMetrics, heroTypingPhrases, telemetrySeries } from "../data/content";

const RoboticsScene = lazy(() => import("./RoboticsScene"));

function Hero() {
  const [typed, setTyped] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
  const graphMax = Math.max(...telemetrySeries);

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

  useEffect(() => {
    gsap.to(".circuit-trace", {
      strokeDashoffset: 0,
      duration: 2.8,
      stagger: 0.2,
      repeat: -1,
      ease: "none"
    });
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-10 pt-28 md:pb-16">
      <div className="absolute inset-0 grid-overlay opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 blueprint-bg opacity-20" aria-hidden="true" />

      <div className="section-container relative z-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="hud-frame hud-card p-5 md:p-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mono mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300"
          >
            Robotics Command Interface / Online
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-semibold leading-tight md:text-6xl"
          >
           Loi Thanh Quan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="terminal-caret mono mt-6 max-w-2xl text-sm text-cyan-100 md:text-base"
          >
            {typed}
          </motion.p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {heroMetrics.map((metric) => (
              <article key={metric.label} className="instrument-panel">
                <p className="mono text-[11px] uppercase tracking-[0.18em] text-slate-400">{metric.label}</p>
                <p className="mt-2 text-2xl font-semibold text-cyan-100">{metric.value}</p>
                <p className="mono mt-1 text-xs text-teal-300">{metric.delta}</p>
              </article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a href="#projects" className="rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-steel-980 transition hover:bg-cyan-400">
              Inspect Case Studies
            </a>
            <a href={resumeUrl} className="rounded-full border border-cyan-300/40 bg-steel-900/80 px-6 py-3 text-sm font-semibold text-cyan-100">
              Download Research CV
            </a>
            <a href="#contact" className="rounded-full border border-cyan-300/40 bg-steel-900/80 px-6 py-3 text-sm font-semibold text-cyan-100">
              Open Secure Terminal
            </a>
          </motion.div>

          <div className="mt-8 overflow-hidden rounded-xl border border-cyan-300/20 bg-steel-950/70 p-3">
            <svg viewBox="0 0 460 140" className="h-28 w-full" role="img" aria-label="Telemetry signal waveform">
              <polyline
                fill="none"
                stroke="rgba(55, 247, 199, 0.95)"
                strokeWidth="2.2"
                points={telemetrySeries
                  .map((v, i) => `${(i / (telemetrySeries.length - 1)) * 460},${132 - (v / graphMax) * 112}`)
                  .join(" ")}
              />
            </svg>
            <div className="mono mt-2 flex justify-between text-[11px] uppercase tracking-[0.16em] text-slate-400">
              <span>signal processing stream</span>
              <span>120 hz</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative space-y-4"
        >
          <div className="hud-card overflow-hidden rounded-3xl p-4 md:p-6">
            <div className="mb-3 flex items-center justify-between">
              <p className="mono text-xs uppercase tracking-[0.2em] text-cyan-200">3D Robotics Twin</p>
              <p className="mono animate-flicker text-xs uppercase tracking-[0.18em] text-emerald-300">tracking</p>
            </div>
            <Suspense
              fallback={
                <div className="flex h-[280px] items-center justify-center md:h-[340px]">
                  <p className="mono text-xs uppercase tracking-[0.2em] text-cyan-200">Loading 3D model...</p>
                </div>
              }
            >
              <RoboticsScene />
            </Suspense>
            <div className="scanline" />
          </div>

          <div className="hud-card rounded-2xl p-4">
            <p className="mono text-[11px] uppercase tracking-[0.2em] text-cyan-200">Live Circuit Trace</p>
            <svg className="mt-3 h-24 w-full" viewBox="0 0 500 120" role="img" aria-label="Animated circuit paths">
              <path className="circuit-trace" d="M10 30 H120 V90 H220 V40 H360 V80 H490" stroke="#41d9ff" strokeWidth="2" fill="none" strokeDasharray="280" strokeDashoffset="280" />
              <path className="circuit-trace" d="M10 70 H80 V20 H200 V76 H320 V42 H490" stroke="#2cf7c7" strokeWidth="2" fill="none" strokeDasharray="280" strokeDashoffset="280" />
              <circle cx="120" cy="90" r="4" fill="#41d9ff" className="animate-glowPulse" />
              <circle cx="360" cy="80" r="4" fill="#2cf7c7" className="animate-glowPulse" />
            </svg>
            <p className="mono mt-2 text-xs text-slate-400">Coordinate frame: X+ Forward | Y+ Left | Z+ Up</p>
            <span className="absolute left-0 top-0 h-[2px] w-1/3 animate-telemetry bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
          </div>

          <div className="hud-card rounded-2xl p-4">
            <p className="mono text-xs uppercase tracking-[0.2em] text-cyan-200">System status</p>
            <div className="mt-3 grid grid-cols-3 gap-3 text-center">
              <div className="instrument-panel p-2">
                <p className="mono text-[10px] uppercase text-slate-400">navigation</p>
                <p className="text-sm font-semibold text-emerald-300">Nominal</p>
              </div>
              <div className="instrument-panel p-2">
                <p className="mono text-[10px] uppercase text-slate-400">vision</p>
                <p className="text-sm font-semibold text-cyan-200">Tracking</p>
              </div>
              <div className="instrument-panel p-2">
                <p className="mono text-[10px] uppercase text-slate-400">safety</p>
                <p className="text-sm font-semibold text-amber-300">Monitored</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
