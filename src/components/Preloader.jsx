import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion === true;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const duration = reducedMotion ? 100 : 300;
    const timeout = window.setTimeout(() => setVisible(false), duration);

    return () => {
      window.clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={
            reducedMotion
              ? { opacity: 1 }
              : { clipPath: "inset(0 0 0% 0)", opacity: 1 }
          }
          animate={{ opacity: 1 }}
          exit={
            reducedMotion
              ? { opacity: 0 }
              : { clipPath: "inset(0 0 100% 0)", opacity: 0 }
          }
          transition={{
            duration: reducedMotion ? 0.1 : 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-bg-primary"
          role="status"
          aria-label="Loading ARDOR"
        >
          <div className="flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: reducedMotion ? 0.1 : 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-2xl tracking-wide text-text-primary sm:text-[28px]"
            >
              ARDOR
            </motion.span>
            <motion.span
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                delay: reducedMotion ? 0 : 0.2,
                duration: reducedMotion ? 0.1 : 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-3 h-px w-12 origin-left bg-accent-orange"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
