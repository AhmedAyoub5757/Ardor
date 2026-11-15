import { useState } from "react";
import { motion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1];

const posts = [
  {
    id: "p1",
    model: "Freya Lindqvist",
    handle: "@freya.lin",
    likes: "12.4k",
    caption: "Ember Wool Coat in the wild ✌️",
    image: "/ugc-1.webp",
    rotate: -6,
    offsetY: 0,
  },
  {
    id: "p2",
    model: "Imani Okafor",
    handle: "@imani.o",
    likes: "9.1k",
    caption: "Still thinking about this fit",
    image: "/ugc-2.webp",
    rotate: 4,
    offsetY: 36,
  },
  {
    id: "p3",
    model: "Saoirse Byrne",
    handle: "@saoirse.b",
    likes: "15.8k",
    caption: "Raw Edge Denim >>>",
    image: "/ugc-3.webp",
    rotate: -3,
    offsetY: -18,
  },
  {
    id: "p4",
    model: "Mateo Rinaldi",
    handle: "@mateo.rin",
    likes: "7.6k",
    caption: "Cinder boots, day two",
    image: "/ugc-4.webp",
    rotate: 7,
    offsetY: 20,
  },
  {
    id: "p5",
    model: "Haruka Mori",
    handle: "@haruka.m",
    likes: "18.2k",
    caption: "ARDOR did it again",
    image: "/ugc-5.webp",
    rotate: -5,
    offsetY: -8,
  },
  {
    id: "p6",
    model: "Kofi Mensah",
    handle: "@kofi.m",
    likes: "10.9k",
    caption: "Ash knit, no notes",
    image: "/ugc-6.webp",
    rotate: 5,
    offsetY: 30,
  },
];

function HeartIcon({ filled }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill={filled ? "currentColor" : "none"}>
      <path
        d="M8 13.5S2 10 2 5.8C2 3.7 3.6 2.3 5.5 2.3c1.1 0 2.1.5 2.5 1.3.4-.8 1.4-1.3 2.5-1.3C12.4 2.3 14 3.7 14 5.8c0 4.2-6 7.7-6 7.7Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PostCard({ post, index }) {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, rotate: 0, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, rotate: post.rotate, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        type: "spring",
        stiffness: 120,
        damping: 14,
      }}
      whileHover={{ rotate: 0, scale: 1.06, zIndex: 20 }}
      onClick={() => setActive((v) => !v)}
      style={{ marginTop: post.offsetY }}
      className="relative group cursor-pointer select-none"
    >
      <div className="relative w-full aspect-[4/5] bg-bg-surface p-2.5 pb-10 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={post.image}
            alt={`${post.model} wearing ARDOR`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />

          {/* Hover/tap reveal overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="absolute inset-0 bg-black/55 flex flex-col justify-end p-4 pointer-events-none"
          >
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{
                y: active ? 0 : 16,
                opacity: active ? 1 : 0,
              }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05, ease: easeOut }}
            >
              <p className="text-white text-sm font-medium">{post.model}</p>
              <p className="text-white/70 text-xs mb-2">{post.handle}</p>
              <p className="text-white/90 text-xs leading-relaxed mb-3 max-w-[85%]">
                {post.caption}
              </p>
              <div className="flex items-center gap-1.5 text-white">
                <HeartIcon filled />
                <span className="text-xs">{post.likes}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Polaroid-style caption strip */}
        <p className="absolute bottom-2.5 left-3 right-3 text-[11px] tracking-[0.1em] uppercase text-text-secondary truncate">
          {post.handle}
        </p>
      </div>
    </motion.div>
  );
}

export default function InstagramWall() {
  return (
    <section className="relative w-full bg-bg-primary py-24 md:py-36 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="px-6 md:px-16 mb-16 md:mb-24 flex items-end justify-between flex-wrap gap-4"
      >
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-text-secondary mb-3">
            08 — Worn by You
          </p>
          <h2 className="font-display text-[36px] sm:text-[48px] md:text-[60px] leading-[0.95] text-text-primary">
            Tagged in <em className="italic">the wild.</em>
          </h2>
        </div>
        <a
          href="#"
          className="text-sm text-text-primary border-b border-text-primary pb-0.5 hover:text-accent-orange hover:border-accent-orange transition-colors duration-300 whitespace-nowrap"
        >
          Follow @ardor
        </a>
      </motion.div>

      {/* Scattered grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-10 md:gap-y-16 px-6 md:px-20 max-w-6xl mx-auto">
        {posts.map((post, i) => (
          <PostCard key={post.id} post={post} index={i} />
        ))}
      </div>
    </section>
  );
}