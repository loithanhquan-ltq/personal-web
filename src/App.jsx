import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ParticleBackground from "./components/ParticleBackground";
import GitHubGraph from "./components/GitHubGraph";
import BlogPlaceholder from "./components/BlogPlaceholder";

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") !== "light");
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const total = Number(localStorage.getItem("visit-count") || "0") + 1;
    localStorage.setItem("visit-count", String(total));
    setVisits(total);
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
    <div className="min-h-screen bg-slate-100 text-slate-900 transition-colors duration-500 dark:bg-steel-950 dark:text-slate-100">
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
          <Timeline />
        </motion.div>
        <motion.div {...sectionAnimation}>
          <GitHubGraph visits={visits} />
        </motion.div>
        <motion.div {...sectionAnimation}>
          <BlogPlaceholder />
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
