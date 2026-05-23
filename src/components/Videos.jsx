import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { videos } from "../data/content";

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#0072BD]" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

function VideoCard({ video, index, featured = false }) {
  const [playing, setPlaying] = useState(false);
  const isSample = video.id.startsWith("SAMPLE");
  const thumbUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
  const thumbFallback = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="hud-card overflow-hidden rounded-xl"
    >
      {/* Video / thumbnail area — 16:9 */}
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {playing && !isSample ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div
            className={`absolute inset-0 ${isSample ? "" : "cursor-pointer"} group`}
            onClick={() => !isSample && setPlaying(true)}
          >
            {isSample ? (
              /* Placeholder for sample videos */
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white">
                    <PlayIcon />
                  </div>
                  <p className="mono text-[10px] uppercase tracking-[0.2em] text-gray-400">Video coming soon</p>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={thumbUrl}
                  alt={video.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.src = thumbFallback; }}
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-lg transition duration-200 group-hover:scale-110">
                    <PlayIcon />
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Info */}
      <div className={`p-4 ${featured ? "md:p-5" : ""}`}>
        <h3 className={`font-semibold text-gray-900 ${featured ? "text-base" : "text-sm"}`}>
          {video.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{video.description}</p>
        {!isSample && (
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noreferrer"
            className="mono mt-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-[#0072BD] hover:underline"
          >
            Watch on YouTube ↗
          </a>
        )}
      </div>
    </motion.article>
  );
}

function Videos() {
  const [featured, ...rest] = videos;

  return (
    <section id="videos" className="section-container">
      <SectionHeading
        eyebrow="Videos"
        title="Engineering in motion"
        description="Project demos, system walkthroughs, and robotics experiments from the lab and field."
      />

      {/* Featured video */}
      <div className="mb-5">
        <VideoCard video={featured} index={0} featured />
      </div>

      {/* Remaining 4 in a 2×2 grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {rest.map((video, i) => (
          <VideoCard key={video.id} video={video} index={i + 1} />
        ))}
      </div>

      {/* Channel link */}
      <div className="mt-8 text-center">
        <a
          href="https://www.youtube.com/@roboticsltq"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 transition hover:border-[#0072BD] hover:text-[#0072BD]"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          View all videos on YouTube
        </a>
      </div>
    </section>
  );
}

export default Videos;
