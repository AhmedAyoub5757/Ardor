import { motion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1];

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
