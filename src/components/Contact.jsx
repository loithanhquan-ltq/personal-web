import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function Contact() {
  return (
    <section id="contact" className="section-container pb-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let us build the next generation of intelligent systems"
        description="Open to full-time roles, research opportunities, and high-impact engineering collaborations."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="glass rounded-2xl p-6">
          <h3 className="mb-4 text-xl font-semibold">Contact Details</h3>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li>Email: <a href="mailto:you@example.com" className="text-cyan-700 dark:text-neon-cyan">you@example.com</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/your-handle" className="text-cyan-700 dark:text-neon-cyan">linkedin.com/in/your-handle</a></li>
            <li>GitHub: <a href="https://github.com/your-username" className="text-cyan-700 dark:text-neon-cyan">github.com/your-username</a></li>
            <li>Location: Ho Chi Minh City, Vietnam</li>
          </ul>
        </article>

        <motion.form
          className="glass grid gap-3 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
          aria-label="Contact form"
        >
          <label className="text-sm">
            Name
            <input className="mt-1 w-full rounded-lg border border-slate-300 bg-white/70 px-3 py-2 outline-none focus:ring dark:border-white/10 dark:bg-white/5" name="name" />
          </label>
          <label className="text-sm">
            Email
            <input className="mt-1 w-full rounded-lg border border-slate-300 bg-white/70 px-3 py-2 outline-none focus:ring dark:border-white/10 dark:bg-white/5" name="email" type="email" />
          </label>
          <label className="text-sm">
            Message
            <textarea className="mt-1 w-full rounded-lg border border-slate-300 bg-white/70 px-3 py-2 outline-none focus:ring dark:border-white/10 dark:bg-white/5" rows="5" name="message" />
          </label>
          <button type="submit" className="mt-2 rounded-full bg-cyan-600 px-5 py-2 text-sm font-semibold text-white hover:bg-cyan-500">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
