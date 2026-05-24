import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { socialLinks } from "../data/content";

const INFO = [
  { label: "Location",     value: "Ho Chi Minh City, Vietnam" },
  { label: "Availability", value: "Open to full-time & research roles" },
  { label: "Response",     value: "Typically within 24 hours" },
];

function Contact() {
  return (
    <section id="contact" className="section-container pb-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="Open to research collaborations, full-time engineering roles, and technical consulting."
      />

      <div className="mx-auto max-w-2xl">
        <motion.div
          className="hud-card rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Info chips */}
          <div className="flex flex-wrap justify-center gap-3">
            {INFO.map((item) => (
              <div key={item.label} className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-center dark:border-white/[0.06] dark:bg-[#1c2128]">
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-gray-400 dark:text-[#6e7681]">{item.label}</p>
                <p className="mt-0.5 text-sm text-gray-700 dark:text-[#c9d1d9]">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Email CTA */}
          <a
            href="mailto:loithanhquan@gmail.com"
            className="mt-8 inline-block rounded-full bg-[#0072BD] px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 dark:bg-[#4da6ff] dark:text-[#0d1117] dark:hover:bg-blue-300"
          >
            loithanhquan@gmail.com
          </a>

          {/* Social links */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {socialLinks.filter((l) => l.label !== "Email").map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center rounded-full border border-gray-300 bg-white px-5 text-sm font-medium text-gray-700 transition hover:border-[#0072BD] hover:text-[#0072BD] dark:border-white/[0.1] dark:bg-[#161b22] dark:text-[#c9d1d9] dark:hover:border-[#4da6ff] dark:hover:text-[#4da6ff]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
