import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "Shop", "Collections", "About", "Contact"];
const menuFeatures = [
  {
    label: "The Embers Edit",
    image: "/story-embers.jpg",
    href: "#collection",
  },
  {
    label: "New arrivals",
    image: "/product-1-front.png",
    href: "#shop",
  },
];

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

    return () => {
      document.body.style.overflow = "";
    };
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
            aria-expanded={menuOpen}
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
            className="fixed inset-0 z-40 h-dvh overflow-hidden bg-bg-primary px-6 pb-6 pt-28 sm:px-8 md:px-12 md:pb-10 md:pt-32"
          >
            <div className="mx-auto grid h-full w-full max-w-7xl grid-cols-1 grid-rows-[1fr_minmax(140px,28vh)] gap-8 md:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.3fr)] md:grid-rows-1 md:gap-12 lg:gap-20">
              <nav className="flex min-h-0 flex-col justify-center gap-2 sm:gap-3">
                <p className="mb-3 text-xs tracking-[0.2em] uppercase text-text-secondary">
                  Explore ARDOR
                </p>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link}
                    href={link === "Home" ? "/" : `#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + i * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-fit font-display text-[clamp(2rem,5vw,4.5rem)] italic leading-none text-text-primary transition-colors duration-300 hover:text-accent-orange"
                  >
                    {link}
                  </motion.a>
                ))}
              </nav>

              <div className="grid min-h-0 grid-cols-2 gap-3 sm:gap-5 md:h-full">
                {menuFeatures.map((feature, i) => (
                  <motion.a
                    key={feature.label}
                    href={feature.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 24 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.25 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group relative min-h-0 overflow-hidden bg-border-subtle"
                  >
                    <img
                      src={feature.image}
                      alt={`${feature.label} editorial campaign`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span className="absolute bottom-4 left-4 right-4 font-display text-lg italic text-white sm:bottom-6 sm:left-6 sm:text-2xl">
                      {feature.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-6 left-6 hidden text-sm tracking-wide text-text-secondary sm:left-8 md:block md:left-12"
            >
              Wear the Fire
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}