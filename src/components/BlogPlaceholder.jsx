import SectionHeading from "./SectionHeading";

function BlogPlaceholder() {
  return (
    <section id="blog" className="section-container">
      <SectionHeading
        eyebrow="Blog"
        title="Engineering notes and deep dives"
        description="A curated blog section can improve SEO and showcase your technical communication to recruiters."
      />
      <div className="glass rounded-2xl p-6">
        <p className="text-slate-700 dark:text-slate-300">
          Coming soon: articles on robotics architecture, control systems tuning, simulation-to-real transfer, and embedded AI optimization.
        </p>
      </div>
    </section>
  );
}

export default BlogPlaceholder;
