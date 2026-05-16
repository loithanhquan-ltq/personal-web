import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const phrases = [
  "Designing autonomous machines.",
  "Engineering precision automation.",
  "Building intelligent robotic systems."
];

function Hero() {
  const [typed, setTyped] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    let charIndex = 0;

    const interval = setInterval(() => {
      charIndex += 1;
      setTyped(phrase.slice(0, charIndex));
      if (charIndex >= phrase.length) {
        clearInterval(interval);
        setTimeout(() => {
          setTyped("");
          setPhraseIndex((p) => (p + 1) % phrases.length);
        }, 1200);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [phraseIndex]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-overlay opacity-30" aria-hidden="true" />
      <div className="section-container relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-neon-cyan"
          >
            Command Interface Online
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-semibold leading-tight md:text-6xl"
          >
            Mechatronics Engineer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="terminal-caret mt-6 max-w-2xl text-lg text-slate-700 dark:text-slate-300"
          >
            {typed}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a href="#projects" className="rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500">
              View Projects
            </a>
            <a href={resumeUrl} className="glass rounded-full px-6 py-3 text-sm font-semibold">
              Download Resume
            </a>
            <a href="#contact" className="glass rounded-full px-6 py-3 text-sm font-semibold">
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="glass relative overflow-hidden rounded-3xl p-6 shadow-glow">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="rounded-2xl border border-white/15 bg-steel-900 p-4 text-xs text-neon-mint">
              <p>&gt; boot robotics_core --mode=autonomous</p>
              <p>&gt; calibrate sensors --all</p>
              <p>&gt; verify control_loop --stability</p>
              <p className="text-cyan-300">SYSTEM STATUS: NOMINAL</p>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="glass animate-float rounded-xl p-3 text-sm">Precision Controls</div>
              <div className="glass animate-float rounded-xl p-3 text-sm [animation-delay:0.2s]">Embedded Intelligence</div>
              <div className="glass animate-float rounded-xl p-3 text-sm [animation-delay:0.4s]">Real-Time Systems</div>
              <div className="glass animate-float rounded-xl p-3 text-sm [animation-delay:0.6s]">Robotics Navigation</div>
            </div>

            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
              <span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70 animate-scan" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
