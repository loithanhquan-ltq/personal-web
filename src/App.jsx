import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import EngineeringVisualizations from "./components/EngineeringVisualizations";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Publications from "./components/Publications";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") !== "light");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  const sectionAnimation = useMemo(
    () => ({
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.6 }
    }),
    []
  );

  return (
    <div className="min-h-screen bg-[#f0f0f4] text-gray-800 transition-colors duration-500">
      <ParticleBackground />
      <AnimatePresence>{loading ? <LoadingScreen key="loader" /> : null}</AnimatePresence>

      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((v) => !v)} />

      <main className="relative z-10">
        <Hero />
        <motion.div {...sectionAnimation}>
          <About />
        </motion.div>
        <motion.div {...sectionAnimation}>
          <Skills />
        </motion.div>
        <motion.div {...sectionAnimation}>
          <Projects />
        </motion.div>
        <motion.div {...sectionAnimation}>
          <EngineeringVisualizations />
        </motion.div>
        <motion.div {...sectionAnimation}>
          <Timeline />
        </motion.div>
        <motion.div {...sectionAnimation}>
          <Publications />
        </motion.div>
        <motion.div {...sectionAnimation}>
          <Contact />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
