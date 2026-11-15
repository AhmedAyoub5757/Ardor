import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/sections/Footer";

const easeOut = [0.16, 1, 0.3, 1];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="flex min-h-[calc(100vh-360px)] flex-col items-center justify-center bg-bg-primary px-6 pb-24 pt-32 text-center"
        aria-labelledby="not-found-heading"
      >
        <p className="mb-5 text-xs tracking-[0.2em] uppercase text-text-secondary">
          The missing edit
        </p>
        <h1
          id="not-found-heading"
          className="font-display text-[clamp(7rem,20vw,14rem)] leading-[0.75] tracking-[-0.06em] text-text-primary"
        >
          4<em className="italic">0</em>4
        </h1>
        <p className="mt-10 max-w-md font-display text-2xl italic text-text-primary sm:text-3xl">
          This page walked off the runway.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-3 bg-text-primary px-7 py-4 text-sm tracking-[0.1em] uppercase text-white transition-colors duration-300 hover:bg-accent-orange"
        >
          Return home
          <span aria-hidden="true">→</span>
        </Link>
      </motion.main>
      <Footer />
    </>
  );
}
