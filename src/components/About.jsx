import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profileSummary } from "../data/content";

function About() {
  return (
    <section id="about" className="section-container">
      <SectionHeading
        eyebrow="About"
        title="Building systems where intelligence meets the physical world"
        description="I'm a mechatronics engineer focused on autonomous robotics — from the sensor layer through to control and deployment."
      />

      <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">

        {/* Left — portrait */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <img
              src={profileSummary.portrait}
              alt={profileSummary.name}
              className="h-80 w-full object-cover lg:h-96"
              loading="lazy"
            />
            <div className="border-t border-gray-100 p-4">
              <p className="font-semibold text-gray-900">{profileSummary.name}</p>
              <p className="mono mt-0.5 text-xs uppercase tracking-[0.2em] text-[#0072BD]">{profileSummary.role}</p>
            </div>
          </div>
        </motion.div>

        {/* Right — bio + domains */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          {/* Bio */}
          <div className="hud-card rounded-2xl p-6">
            <p className="mono mb-3 text-xs uppercase tracking-[0.2em] text-[#0072BD]">Bio</p>
            <p className="leading-relaxed text-gray-600">{profileSummary.bio}</p>
          </div>

          {/* Domains + Interests */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="hud-card rounded-2xl p-5">
              <p className="mono mb-4 text-xs uppercase tracking-[0.2em] text-[#0072BD]">Technical Domains</p>
              <ul className="space-y-2.5">
                {profileSummary.technicalDomains.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0072BD]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hud-card rounded-2xl p-5">
              <p className="mono mb-4 text-xs uppercase tracking-[0.2em] text-[#E87722]">Research Interests</p>
              <ul className="space-y-2.5">
                {profileSummary.researchInterests.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E87722]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
