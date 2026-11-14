import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1];

export default function Manifesto() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-bg-primary"
      style={{ height: "220vh" }}
    >
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-0">
        <ManifestoLine
          text="STYLE IS BORROWED."
          scrollYProgress={scrollYProgress}
          image="/manifesto-1.jpg"
          direction="ltr"
          imageWidth={34}
          speed={[0, 1]}
        />
        <ManifestoLine
          text="ARDOR IS EARNED."
          scrollYProgress={scrollYProgress}
          image="/manifesto-2.jpg"
          direction="rtl"
          imageWidth={28}
          speed={[0, 1]}
          className="mt-2 md:mt-4"
        />
      </div>
    </section>
  );
}

/* ---------------- Single manifesto line with image-reveal mask ---------------- */
function ManifestoLine({
  text,
  scrollYProgress,
  image,
  direction = "ltr",
  imageWidth = 30,
  speed = [0, 1],
  className = "",
}) {
  // Position of the image's LEFT edge, in % of the line's own width
  const leftPercent = useTransform(
    scrollYProgress,
    speed,
    direction === "ltr"
      ? [-imageWidth, 100 + imageWidth]
      : [100 + imageWidth, -imageWidth]
  );

  // Right inset = 100 - left - width, so the box always has exactly `imageWidth`
  const rightInset = useTransform(leftPercent, (l) => 100 - l - imageWidth);

  // Slight scale pulse on the image as it transits, for extra polish
  const imageScale = useTransform(
    scrollYProgress,
    [speed[0], (speed[0] + speed[1]) / 2, speed[1]],
    [1.12, 1, 1.12]
  );

  const clipPath = useMotionTemplate`inset(0 ${rightInset}% 0 ${leftPercent}%)`;
  const imageLeft = useMotionTemplate`${leftPercent}%`;

  return (
    <div
      className={`relative w-full max-w-[1400px] overflow-hidden leading-none ${className}`}
    >
      {/* Black base text — always visible */}
      <h2 className="font-display text-[42px] sm:text-[64px] md:text-[96px] lg:text-[128px] text-text-primary tracking-tight text-center select-none">
        {text}
      </h2>

      {/* Moving image, positioned absolutely, same height as the line */}
      <motion.div
        style={{
          left: imageLeft,
          width: `${imageWidth}%`,
          scale: imageScale,
        }}
        className="absolute top-0 h-full z-10 overflow-hidden"
      >
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(1) contrast(1.05)" }}
        />
      </motion.div>

      {/* White text duplicate, clipped to the image's exact bounds, drawn on top */}
      <motion.h2
        aria-hidden="true"
        style={{ clipPath }}
        className="absolute inset-0 z-20 font-display text-[42px] sm:text-[64px] md:text-[96px] lg:text-[128px] text-white tracking-tight text-center select-none pointer-events-none"
      >
        {text}
      </motion.h2>
    </div>
  );
}