import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1];

export default function FeaturedSpotlight() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Each image drifts at a different speed -> depth, no pinning/scroll-jack
  const yBack = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["-14%", "16%"]);
  const yFront = useTransform(scrollYProgress, [0, 1], ["-22%", "22%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-bg-primary pb-16 pt-24 md:pb-24 md:pt-0 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:min-h-screen">
        {/* ============ LEFT: image collage ============ */}
        <div className="relative w-full md:w-1/2 h-[70vh] md:h-auto px-6 md:px-0">
          {/* Back image — largest, furthest */}
          <motion.div
            style={{ y: yBack }}
            initial={{ opacity: 0, scale: 1.08 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: easeOut }}
            className="absolute left-0 md:left-[8%] top-0 md:top-[8%] w-[70%] md:w-[62%] h-[85%] md:h-[78%] overflow-hidden"
          >
            <img
              src="/spotlight-1.webp"
              alt="ARDOR seasonal campaign portrait in warm evening light"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Mid image — overlapping, offset lower-right */}
          <motion.div
            style={{ y: yMid }}
            initial={{ opacity: 0, x: 40, scale: 1.05 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, delay: 0.15, ease: easeOut }}
            className="absolute right-0 md:right-[2%] bottom-0 md:bottom-[6%] w-[58%] md:w-[48%] h-[55%] md:h-[52%] overflow-hidden z-10 ring-8 ring-bg-primary"
          >
            <img
              src="/spotlight-2.webp"
              alt="Close detail from the ARDOR Embers Edit campaign"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Front image — small accent, top-right, closest/fastest */}
          <motion.div
            style={{ y: yFront }}
            initial={{ opacity: 0, y: -30, scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.35, ease: easeOut }}
            className="hidden md:block absolute right-[14%] top-0 w-[26%] h-[30%] overflow-hidden z-20 ring-8 ring-bg-primary"
          >
            <img
              src="/spotlight-3.webp"
              alt="Textural fabric detail from the ARDOR seasonal campaign"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* ============ RIGHT: copy + CTA ============ */}
        <div className="w-full md:w-1/2 flex items-center px-6 md:px-16 mt-14 md:mt-0">
          <div className="max-w-[460px]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="text-xs tracking-[0.2em] uppercase text-text-secondary mb-4"
            >
              06 — Seasonal Campaign
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
              className="font-display text-[40px] sm:text-[52px] md:text-[64px] leading-[0.95] text-text-primary mb-6"
            >
              The Embers Edit,
              <br />
              <em className="italic">in full.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
              className="text-sm md:text-base text-text-secondary leading-relaxed mb-10"
            >
              Nineteen pieces built for the season's first cold front — heavy
              wool, raw denim, and leather that only gets better with wear.
              Available for a limited run.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
            >
              <motion.a
                href="#"
                whileHover="hover"
                className="relative inline-flex items-center gap-3 overflow-hidden bg-text-primary text-white pl-7 pr-6 py-4 text-sm tracking-[0.1em] uppercase"
              >
                <motion.span
                  variants={{ hover: { x: -4 } }}
                  transition={{ duration: 0.3, ease: easeOut }}
                >
                  Explore the Collection
                </motion.span>
                <motion.span
                  variants={{ hover: { x: 4 } }}
                  transition={{ duration: 0.3, ease: easeOut }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.span>
                <motion.span
                  variants={{ hover: { scaleX: 1 } }}
                  initial={{ scaleX: 0 }}
                  transition={{ duration: 0.4, ease: easeOut }}
                  className="absolute inset-0 bg-accent-orange -z-10 origin-left"
                  style={{ transformOrigin: "left" }}
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}