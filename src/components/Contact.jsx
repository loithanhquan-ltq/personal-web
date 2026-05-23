import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { contactEndpoints } from "../data/content";

function Contact() {
  return (
    <section id="contact" className="section-container pb-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something together"
        description="Open to research collaborations, full-time engineering roles, and technical consulting. Reach out and I'll get back to you within 24 hours."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="hud-card rounded-2xl p-6">
          <p className="mono mb-4 text-xs uppercase tracking-[0.2em] text-blue-600">Contact Info</p>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <ul className="space-y-2 text-sm text-gray-600">
              {contactEndpoints.map((endpoint) => (
                <li key={endpoint} className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                  {endpoint}
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-5 space-y-2 text-sm text-gray-600">
            <li>
              Email: <a href="mailto:you@example.com" className="text-blue-600 hover:underline">you@example.com</a>
            </li>
            <li>
              LinkedIn: <a href="https://linkedin.com/in/your-handle" className="text-blue-600 hover:underline">linkedin.com/in/your-handle</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/your-username" className="text-blue-600 hover:underline">github.com/your-username</a>
            </li>
            <li>Location: Ho Chi Minh City, Vietnam</li>
          </ul>
        </article>

        <motion.form
          className="hud-card grid gap-3 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
          aria-label="Contact form"
        >
          <p className="mono text-xs uppercase tracking-[0.2em] text-blue-600">Send a Message</p>
          <label className="text-sm text-gray-700">
            Name
            <input
              className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-800 outline-none focus:border-blue-400 focus:bg-white"
              name="name"
              placeholder="Your name"
            />
          </label>
          <label className="text-sm text-gray-700">
            Email
            <input
              className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-800 outline-none focus:border-blue-400 focus:bg-white"
              name="email"
              type="email"
              placeholder="you@example.com"
            />
          </label>
          <label className="text-sm text-gray-700">
            Message
            <textarea
              className="mt-1 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-gray-800 outline-none focus:border-blue-400 focus:bg-white"
              rows="5"
              name="message"
              placeholder="Tell me about your project or opportunity..."
            />
          </label>
          <button type="submit" className="mt-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
