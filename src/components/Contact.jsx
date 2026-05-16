import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { contactEndpoints } from "../data/content";

function Contact() {
  return (
    <section id="contact" className="section-container pb-28">
      <SectionHeading
        eyebrow="Secure Communication Terminal"
        title="Initiate engineering collaboration channel"
        description="Terminal-inspired contact interface for research discussions, robotics opportunities, and advanced systems design engagements."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="hud-card rounded-2xl p-6">
          <p className="mono mb-4 text-xs uppercase tracking-[0.2em] text-cyan-200">Comms Protocol</p>
          <div className="rounded-xl border border-cyan-300/20 bg-steel-950/85 p-4 font-mono text-sm text-teal-300">
            <p>$ boot secure_terminal --auth=public-key</p>
            <p>$ handshake established ...</p>
            <p className="text-cyan-200">$ encrypted link status: verified</p>
            <p className="mt-3 text-slate-300">Available routes:</p>
            <ul className="mt-2 space-y-2 text-xs text-slate-300">
              {contactEndpoints.map((endpoint) => (
                <li key={endpoint}>- {endpoint}</li>
              ))}
            </ul>
            <p className="terminal-caret mt-4 text-cyan-100">awaiting command</p>
          </div>

          <ul className="mt-5 space-y-2 text-sm text-slate-300">
            <li>
              Email: <a href="mailto:you@example.com" className="text-cyan-200">you@example.com</a>
            </li>
            <li>
              LinkedIn: <a href="https://linkedin.com/in/your-handle" className="text-cyan-200">linkedin.com/in/your-handle</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/your-username" className="text-cyan-200">github.com/your-username</a>
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
          <p className="mono text-xs uppercase tracking-[0.2em] text-cyan-200">Transmit Message</p>
          <label className="text-sm text-slate-300">
            Name / Organization
            <input
              className="mt-1 w-full rounded-lg border border-cyan-300/25 bg-steel-950/75 px-3 py-2 text-slate-100 outline-none focus:border-cyan-300"
              name="name"
            />
          </label>
          <label className="text-sm text-slate-300">
            Return Channel
            <input
              className="mt-1 w-full rounded-lg border border-cyan-300/25 bg-steel-950/75 px-3 py-2 text-slate-100 outline-none focus:border-cyan-300"
              name="email"
              type="email"
            />
          </label>
          <label className="text-sm text-slate-300">
            Technical Brief
            <textarea
              className="mt-1 w-full rounded-lg border border-cyan-300/25 bg-steel-950/75 px-3 py-2 text-slate-100 outline-none focus:border-cyan-300"
              rows="5"
              name="message"
            />
          </label>
          <button type="submit" className="mt-2 rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-steel-980 hover:bg-cyan-400">
            Encrypt & Send
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
