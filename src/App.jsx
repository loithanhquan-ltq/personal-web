import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Videos from "./components/Videos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    const html = document.documentElement;
    html.classList.add("theme-transitioning");
    setIsDark((v) => !v);
    setTimeout(() => html.classList.remove("theme-transitioning"), 350);
  };

  const sectionAnimation = useMemo(
    () => ({
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.15 },
      transition: { duration: 0.6 },
    }),
    []
  );

  return (
    <div className="min-h-screen bg-[--bg-main] text-[--text-main]">
      <ParticleBackground />
      <AnimatePresence>{loading ? <LoadingScreen key="loader" /> : null}</AnimatePresence>

      <Navbar isDark={isDark} onToggle={handleToggle} />

      <main className="relative z-10">
        <Hero />
        <motion.div {...sectionAnimation}><About /></motion.div>
        <motion.div {...sectionAnimation}><Projects /></motion.div>
        <motion.div {...sectionAnimation}><Skills /></motion.div>
        <motion.div {...sectionAnimation}><Experience /></motion.div>
        <motion.div {...sectionAnimation}><Videos /></motion.div>
        <motion.div {...sectionAnimation}><Contact /></motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
