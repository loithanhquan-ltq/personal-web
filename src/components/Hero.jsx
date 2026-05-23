import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { heroStats, heroTypingPhrases } from "../data/content";

const heroImage  = `${import.meta.env.BASE_URL}assets/bosch.png`;
const avatarImage = `${import.meta.env.BASE_URL}assets/avatar.jpeg`;

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
        }, 1800);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [phraseIndex]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-10 pt-24">
      <div className="absolute inset-0 grid-overlay opacity-60" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* LEFT — identity */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="mono mb-5 inline-flex rounded border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">
              Mechatronics Engineer
            </p>

            {/* Name + avatar */}
            <div className="flex items-center gap-4">
              <img
                src={avatarImage}
                alt="Loi Thanh Quan"
                className="h-14 w-14 flex-shrink-0 rounded-full border border-gray-200 object-cover object-top shadow-sm md:h-16 md:w-16"
              />
              <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Loi Thanh Quan
              </h1>
            </div>

            <p className="terminal-caret mono mt-5 min-h-[1.5rem] text-sm text-[#0072BD] md:text-base">
              {typed}
            </p>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-gray-500">
              Based in Ho Chi Minh City — building autonomous systems at the intersection of robotics, embedded AI, and control theory.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-6">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                  <p className="mono mt-0.5 text-[11px] uppercase tracking-[0.18em] text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-[#0072BD] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                View Projects
              </a>
              <a
                href={resumeUrl}
                className="rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Bosch image */}
          <motion.div
            className="overflow-hidden rounded-2xl shadow-md"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.55, ease: "easeOut" }}
          >
            <img
              src={heroImage}
              alt="Bosch autonomous vehicle concept at engineering showcase"
              className="h-[420px] w-full object-cover object-center md:h-[500px]"
              loading="eager"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
