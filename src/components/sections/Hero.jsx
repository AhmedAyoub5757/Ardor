import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const marqueeItems = [
  "Wear the feeling",
  "The Embers Edit",
  "Made for the bold",
];
const avatarTones = ["amber", "rose", "olive"];

function Avatar({ tone }) {
  const tones = {
    amber: ["#D8A26A", "#714734", "#F2C6A0"],
    rose: ["#B97869", "#39272B", "#DFA78B"],
    olive: ["#9F9C72", "#303A2B", "#D6B08D"],
  };
  const [background, hair, skin] = tones[tone];

  return (
    <svg viewBox="0 0 40 40" role="img" aria-label="Community member">
      <circle cx="20" cy="20" r="20" fill={background} />
      <path d="M7 39c1.8-8.3 7-12.4 13-12.4S31.2 30.7 33 39" fill={skin} />
      <circle cx="20" cy="17" r="7.5" fill={skin} />
      <path
        d="M12 17.5c0-7.5 3.2-11 8.3-11 5.2 0 8.5 3.8 7.7 10.6-1.6-2.6-3.8-4.1-6.7-4.5-2.4 2.4-5.3 3.9-9.3 4.9Z"
        fill={hair}
      />
      <circle cx="17.3" cy="17.8" r=".7" fill="#18181B" />
      <circle cx="22.7" cy="17.8" r=".7" fill="#18181B" />
    </svg>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: image moves down slower, headlines drift apart as you scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const leftTextX = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const rightTextX = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const easeOut = [0.16, 1, 0.3, 1];

  return (
    <section
      ref={sectionRef}
      className="relative isolate w-full min-h-screen bg-bg-primary pt-28 pb-10 md:pt-0 md:pb-0"
    >
      {/* ============ DESKTOP / TABLET LAYOUT ============ */}
      <div className="hidden md:block relative w-full h-screen">
        {/* Top-right context tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: easeOut }}
          style={{ opacity: fade }}
          className="absolute top-28 right-10 lg:right-16 z-20 text-right"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-text-secondary">
            Autumn / Winter
          </p>
          <p className="text-xs tracking-[0.2em] uppercase text-text-secondary">
            Collection 02
          </p>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: easeOut }}
          style={{ opacity: fade }}
          className="absolute left-8 top-28 z-20 border-t border-border-subtle pt-3 text-xs tracking-[0.2em] uppercase text-accent-orange lg:left-16"
        >
          Essential Layers
        </motion.span>

        {/* Left headline */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: easeOut }}
          style={{ x: leftTextX }}
          className="absolute left-[12%] lg:left-[18%] top-[30%] z-0 max-w-[280px] lg:max-w-[360px]"
        >
          <h1 className="font-heading text-[56px] font-light leading-[0.9] tracking-[-0.06em] text-text-primary lg:text-[80px] xl:text-[96px]">
            Made
            <br />
            for
          </h1>
        </motion.div>

        {/* Right headline */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: easeOut }}
          style={{ x: rightTextX }}
          className="absolute left-[calc(50%+180px)] top-[42%] z-0 md:left-[calc(50%+180px)] lg:left-[calc(50%+220px)]"
        >
          <h1 className="font-heading text-[38px] font-light italic leading-[0.9] tracking-[-0.07em] text-text-primary md:text-[48px] lg:text-[80px] xl:text-[96px]">
            the
            <br />
            bold
          </h1>
        </motion.div>

        {/* Center model image */}
        <motion.div
          initial={{ opacity: 0, y: 180, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2.2, delay: 0.1, ease: easeOut }}
          style={{ y: imageY }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-[78vh] lg:h-[85vh] w-[340px] lg:w-[420px]"
        >
          <img
            src="/hero.png"
            alt="ARDOR Autumn Winter Collection"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Lower-left body copy + collection indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: easeOut }}
          style={{ opacity: fade }}
          className="absolute left-8 lg:left-16 bottom-16 z-20 max-w-[220px]"
        >
          <p className="text-sm text-text-secondary leading-relaxed mb-6">
            Pieces built for cold mornings and long nights — structured, raw,
            unmistakably ARDOR.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
            <span className="text-xs tracking-[0.15em] uppercase text-text-primary">
              01 / The Embers Edit
            </span>
          </div>
        </motion.div>

        {/* Mid-right: avatars + CTA + counter + accent icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: easeOut }}
          style={{ opacity: fade }}
          className="absolute right-8 lg:right-16 top-[62%] z-20 flex flex-col items-end gap-4"
        >
          {/* Accent icon */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-5 mb-1"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2c1 3-2 4-2 7a4 4 0 1 0 8 0c0-1-1-2-1-2 1 3-1 4-2 4a2 2 0 0 1-2-2c0-2 2-3 2-6 0-1-1-2-3-1z"
                fill="#FF6B00"
              />
            </svg>
          </motion.div>

          {/* Avatars + plus button */}
          <div className="flex items-center">
            {avatarTones.map((tone, i) => (
              <div
                key={tone}
                className="w-9 h-9 rounded-full border-2 border-bg-primary overflow-hidden bg-border-subtle -ml-3 first:ml-0"
                style={{ zIndex: avatarTones.length - i }}
              >
                <Avatar tone={tone} />
              </div>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full bg-accent-orange text-white flex items-center justify-center -ml-3 z-0 text-base font-medium"
              aria-label="Join community"
            >
              +
            </motion.button>
          </div>

          {/* Social proof counter */}
          <div className="text-right">
            <p className="font-display text-2xl text-text-primary leading-none">
              24K+
            </p>
            <p className="text-xs tracking-[0.15em] uppercase text-text-secondary mt-1">
              Styled this week
            </p>
          </div>
        </motion.div>
      </div>

      {/* ============ MOBILE LAYOUT ============ */}
      <div className="md:hidden flex flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="absolute left-6 top-28 hidden text-left text-[11px] tracking-[0.2em] uppercase text-accent-orange"
        >
          Essential Layers
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
          className="font-heading text-[48px] font-light leading-[0.9] tracking-[-0.06em] text-text-primary"
        >
          Made for <span className="italic">the bold</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 1.03 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.25, ease: easeOut }}
          className="mt-6 w-full max-w-[280px] aspect-[3/4] rounded-sm overflow-hidden"
        >
          <img
            src="/hero.png"
            alt="ARDOR Autumn Winter Collection"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6 text-sm text-text-secondary leading-relaxed max-w-[280px]"
        >
          Pieces built for cold mornings and long nights — structured, raw,
          unmistakably ARDOR.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex items-center gap-2 mt-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
          <span className="text-xs tracking-[0.15em] uppercase text-text-primary">
            01 / The Embers Edit
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col items-center gap-3 mt-8"
        >
          <div className="flex items-center">
            {avatarTones.map((tone, i) => (
              <div
                key={tone}
                className="w-9 h-9 rounded-full border-2 border-bg-primary overflow-hidden bg-border-subtle -ml-3 first:ml-0"
                style={{ zIndex: avatarTones.length - i }}
              >
                <Avatar tone={tone} />
              </div>
            ))}
            <button className="w-9 h-9 rounded-full bg-accent-orange text-white flex items-center justify-center -ml-3 text-base font-medium">
              +
            </button>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl text-text-primary leading-none">
              24K+
            </p>
            <p className="text-xs tracking-[0.15em] uppercase text-text-secondary mt-1">
              Styled this week
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 z-[9999] w-[calc(100%+120px)] -translate-x-1/2 overflow-hidden bg-text-primary text-bg-primary">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="flex w-max items-center py-4 pl-4 will-change-transform md:py-5"
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span className="px-8 text-xs tracking-[0.3em] uppercase md:px-12 md:text-sm">
                {item}
              </span>
              <span className="text-accent-orange" aria-hidden="true">
                ✦
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}