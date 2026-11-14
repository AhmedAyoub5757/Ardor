import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "Shop", "Collections", "About", "Contact"];

/* ---------------- Hamburger Icon ---------------- */
function HamburgerIcon({ open }) {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
      <motion.line
        x1="0" y1="1" x2="22" y2="1"
        stroke="#18181B" strokeWidth="1.5" strokeLinecap="round"
        animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
        style={{ originX: "11px", originY: "1px" }}
        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.line
        x1="0" y1="8" x2="22" y2="8"
        stroke="#18181B" strokeWidth="1.5" strokeLinecap="round"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.line
        x1="0" y1="15" x2="22" y2="15"
        stroke="#18181B" strokeWidth="1.5" strokeLinecap="round"
        animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
        style={{ originX: "11px", originY: "15px" }}
        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
      />
    </svg>
  );
}

/* ---------------- Cart Icon ---------------- */
function CartIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 8H18L17 20H7L6 8Z"
        stroke="#18181B" strokeWidth="1.5" strokeLinejoin="round"
      />
      <path
        d="M9 8V6a3 3 0 0 1 6 0v2"
        stroke="#18181B" strokeWidth="1.5" strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------------- Account Icon ---------------- */
function AccountIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="3.5" stroke="#18181B" strokeWidth="1.5" />
      <path
        d="M4.5 20c1.5-4 4.5-6 7.5-6s6 2 7.5 6"
        stroke="#18181B" strokeWidth="1.5" strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------------- Icon Button Wrapper ---------------- */
function IconButton({ children, onClick, label, badge }) {
  return (
    <motion.button
      onClick={onClick}
      aria-label={label}
      className="relative flex items-center justify-center w-10 h-10"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {children}
      {badge !== undefined && badge > 0 && (
        <span className="absolute top-1 right-1 bg-accent-orange text-white text-[10px] leading-none w-4 h-4 rounded-full flex items-center justify-center font-sans">
          {badge}
        </span>
      )}
    </motion.button>
  );
}

/* ---------------- Navbar ---------------- */
export default function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-0 left-0 w-full z-50 bg-transparent"
      >
        <div className="relative flex items-center justify-between px-5 sm:px-8 md:px-12 h-20 md:h-24">
          {/* Left: Hamburger */}
          <motion.button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            className="flex items-center justify-center w-10 h-10 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <HamburgerIcon open={menuOpen} />
          </motion.button>

          {/* Center: Logo */}
          <a
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-xl sm:text-2xl md:text-[28px] tracking-wide text-text-primary select-none"
          >
            ARDOR
          </a>

          {/* Right: Cart + Account */}
          <div className="flex items-center gap-1 sm:gap-2 z-10">
            <IconButton label="Cart" badge={cartCount}>
              <CartIcon />
            </IconButton>
            <IconButton label="Account">
              <AccountIcon />
            </IconButton>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-bg-primary flex flex-col items-start justify-center px-8 md:px-16"
          >
            <nav className="flex flex-col gap-3 md:gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 40, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-display italic text-4xl sm:text-5xl md:text-6xl text-text-primary hover:text-accent-orange transition-colors duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-8 left-8 md:left-16 text-text-secondary text-sm tracking-wide"
            >
              Wear the Fire
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}