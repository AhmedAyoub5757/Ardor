import { motion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1];

const values = [
  {
    id: "01",
    title: "Raw Materials",
    copy: "Sourced wool, full-grain leather, untreated cotton — nothing synthetic pretending to be something else.",
    icon: (
      <>
        <motion.path
          d="M6 26C6 14 14 6 26 6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeOut, delay: 0.1 }}
        />
        <motion.path
          d="M6 26c6-2 10-6 20-20"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeOut, delay: 0.35 }}
        />
        <motion.circle
          cx="23"
          cy="9"
          r="1.6"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1.1 }}
        />
      </>
    ),
  },
  {
    id: "02",
    title: "Slow Craft",
    copy: "Small batches, cut and finished by hand. No rushing a seam that's meant to outlast the trend.",
    icon: (
      <>
        <motion.path
          d="M5 23c6 4 16 4 22 0"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: easeOut, delay: 0.1 }}
        />
        <motion.path
          d="M9 23V9a3 3 0 0 1 3-3h2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.5 }}
        />
        <motion.circle
          cx="14"
          cy="6"
          r="1.6"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        />
      </>
    ),
  },
  {
    id: "03",
    title: "Built to Last",
    copy: "Reinforced seams, tested hardware. Designed to be repaired, not replaced each season.",
    icon: (
      <>
        <motion.path
          d="M16 4 6 8v8c0 7 4.5 11.5 10 13 5.5-1.5 10-6 10-13V8L16 4Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: easeOut, delay: 0.1 }}
        />
        <motion.path
          d="M12 16l3 3 6-6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut, delay: 1 }}
        />
      </>
    ),
  },
  {
    id: "04",
    title: "Zero Excess",
    copy: "Pattern-cut to minimize waste, packaged without plastic. What we don't use, we don't make.",
    icon: (
      <>
        <motion.path
          d="M16 5a11 11 0 1 1-7.8 3.2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: easeOut, delay: 0.1 }}
        />
        <motion.path
          d="M5 4v5h5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.9 }}
        />
      </>
    ),
  },
];

export default function BrandValues() {
  return (
    <section className="relative w-full bg-bg-primary py-24 md:py-36">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="px-6 md:px-16 mb-16 md:mb-20"
      >
        <p className="text-xs tracking-[0.2em] uppercase text-text-secondary mb-3">
          04 — What We Stand For
        </p>
        <h2 className="font-display text-[36px] sm:text-[48px] md:text-[60px] leading-[0.95] text-text-primary max-w-[600px]">
          Made with <em className="italic">intent</em>, not convenience.
        </h2>
      </motion.div>

      {/* Values grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8 px-6 md:px-16">
        {values.map((value, i) => (
          <motion.div
            key={value.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: easeOut }}
            className="flex flex-col items-start"
          >
            <span className="text-xs tracking-[0.15em] text-text-secondary mb-5">
              {value.id}
            </span>

            <div className="w-8 h-8 mb-6 text-accent-orange">
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                {value.icon}
              </svg>
            </div>

            <h3 className="font-display text-xl md:text-2xl text-text-primary mb-3">
              {value.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed max-w-[260px]">
              {value.copy}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}