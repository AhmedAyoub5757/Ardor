import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const chapters = [
  {
    id: "01",
    title: "The Embers Edit",
    tag: "Outerwear",
    copy: "Structured coats and raw wool, built for the first cold front. Heavy where it matters, cut close everywhere else.",
    image: "/story-embers.png",
  },
  {
    id: "02",
    title: "Night Walk",
    tag: "After Dark",
    copy: "Low light, long shadows. Pieces designed to move through the city after the sun gives up.",
    image: "/story-nightwalk.png",
  },
  {
    id: "03",
    title: "Raw Material",
    tag: "Texture Study",
    copy: "Unfinished edges, visible seams. A study in fabric left to speak for itself.",
    image: "/story-rawmaterial.png",
  },
  {
    id: "04",
    title: "Second Skin",
    tag: "Knitwear",
    copy: "Fitted, quiet, close to the body. The layer underneath everything else.",
    image: "/story-secondskin.png",
  },
];

export default function CollectionStory() {
  const containerRef = useRef(null);
  const n = chapters.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Horizontal track movement: 0 -> -(n-1) * 100vw
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(n - 1) * 100}%`]
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-bg-primary"
      style={{ height: `calc(${n * 100}vh + 260px)` }}
    >
      <header className="relative z-10 flex min-h-[260px] flex-col justify-end gap-8 border-t border-border-subtle px-6 pb-12 pt-24 md:flex-row md:items-end md:justify-between md:px-16 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-3 text-xs tracking-[0.2em] uppercase text-text-secondary">
            02 — The Collection
          </p>
          <h2 className="font-display text-[40px] leading-[0.95] text-text-primary md:text-[64px]">
            Four stories, <em className="italic">one thread.</em>
          </h2>
        </motion.div>
        <p className="max-w-[280px] text-sm leading-relaxed text-text-secondary md:text-right">
          A seasonal study in texture, movement, and the layers that carry you
          through the city.
        </p>
      </header>

      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {/* Chapter progress dots */}
        <div className="absolute bottom-10 left-6 md:left-16 z-30 flex items-center gap-2">
          {chapters.map((c, i) => {
            const start = i / n;
            const end = (i + 1) / n;
            return (
              <Dot
                key={c.id}
                scrollYProgress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </div>

        {/* Horizontal track */}
        <motion.div
          style={{ x }}
          className="flex h-full"
          transition={{ ease: "linear" }}
        >
          {chapters.map((chapter, i) => (
            <Panel
              key={chapter.id}
              chapter={chapter}
              index={i}
              total={n}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Progress Dot ---------------- */
function Dot({ scrollYProgress, start, end }) {
  const width = useTransform(
    scrollYProgress,
    [start, (start + end) / 2, end],
    ["20px", "32px", "20px"]
  );
  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, start - 0.05),
      start,
      end,
      Math.min(1, end + 0.05),
    ],
    [0.3, 1, 1, 0.3]
  );

  return (
    <motion.div
      style={{ width, opacity }}
      className="h-[3px] bg-accent-orange rounded-full"
    />
  );
}

/* ---------------- Panel ---------------- */
function Panel({ chapter, index, total, scrollYProgress }) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;

  // Image parallax within its own panel window
  const imageScale = useTransform(
    scrollYProgress,
    [start, mid, end],
    [1.15, 1, 1.15]
  );
  const imageX = useTransform(
    scrollYProgress,
    [start, end],
    ["-6%", "6%"]
  );

  // Text drifts opposite direction, slight fade at panel edges
  const textY = useTransform(scrollYProgress, [start, end], ["20px", "-20px"]);
  const textOpacity = useTransform(
    scrollYProgress,
    [start, start + 0.08, end - 0.08, end],
    [0, 1, 1, 0]
  );

  return (
    <div className="relative w-full h-full flex-shrink-0 overflow-hidden">
      {/* Full-bleed image with parallax */}
      <motion.div
        style={{ scale: imageScale, x: imageX }}
        className="absolute inset-0"
      >
        <img
          src={chapter.image}
          alt={`${chapter.title} ${chapter.tag.toLowerCase()} campaign`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      {/* Chapter number — large, top area */}
      <motion.span
        style={{ opacity: textOpacity }}
        className="absolute top-24 right-6 md:right-16 font-display text-[90px] md:text-[160px] leading-none text-white/20 select-none"
      >
        {chapter.id}
      </motion.span>

      {/* Mood copy block */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="absolute bottom-16 md:bottom-20 left-6 md:left-16 max-w-[90%] md:max-w-[480px]"
      >
        <span className="inline-block text-xs tracking-[0.2em] uppercase text-accent-orange mb-3">
          {chapter.tag}
        </span>
        <h3 className="font-display italic text-[40px] md:text-[64px] leading-[0.95] text-white mb-4">
          {chapter.title}
        </h3>
        <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-[380px]">
          {chapter.copy}
        </p>
      </motion.div>
    </div>
  );
}