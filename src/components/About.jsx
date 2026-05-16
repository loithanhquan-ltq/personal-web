import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section id="about" className="section-container">
      <SectionHeading
        eyebrow="About"
        title="Engineering intelligence where hardware meets software"
        description="I design robust mechatronic systems that combine mechanics, electronics, and AI-driven software. My work focuses on practical innovation for robotics, automation, and embedded control."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <article className="glass rounded-2xl p-6">
          <h3 className="mb-3 text-xl font-semibold">Professional Overview</h3>
          <p className="text-slate-700 dark:text-slate-300">
            I transform ideas into production-grade engineering systems, from prototype robotics platforms to industrial automation workflows. I value reliability, speed, and measurable performance gains.
          </p>

          <img
            src="/assets/quan.jpeg"
            alt="Profile placeholder"
            className="mt-5 h-56 w-full rounded-xl object-cover"
            loading="lazy"
          />
        </article>

        <article className="glass rounded-2xl p-6">
          <h3 className="mb-3 text-xl font-semibold">Core Passion Areas</h3>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>Robotics and autonomous navigation</li>
            <li>Embedded systems and real-time control loops</li>
            <li>AI-enhanced computer vision pipelines</li>
            <li>Industrial automation and smart factories</li>
            <li>Control systems with simulation-backed validation</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default About;
