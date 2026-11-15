import { motion } from "framer-motion";
import Reveal from "../Reveal";

const easeOut = [0.16, 1, 0.3, 1];

const shopLinks = ["New Arrivals", "Outerwear", "Knitwear", "Denim", "Footwear"];
const companyLinks = ["About", "Collections", "Press", "Careers", "Contact"];
const legalLinks = ["Privacy Policy", "Terms of Service", "Shipping & Returns"];

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M16 3c.4 2.3 1.9 3.8 4 4v3c-1.5 0-2.9-.4-4-1.2V15a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.1a3 3 0 1 0 2 2.8V3h3Z"
        stroke="currentColor"
        strokeWidth="0.3"
        fill="currentColor"
      />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M9.5 17c.5-1.5 1.3-4.6 1.6-6 .2-.8.1-1.6-.8-1.6-1.1 0-1.9 1.1-1.9 2.5 0 .9.3 1.5.3 1.5s-1.1 4.6-1.3 5.4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M11.1 12.8c.2.9.9 1.5 1.8 1.5 1.9 0 3.1-1.7 3.1-4 0-1.8-1.5-3.3-3.6-3.3-2.6 0-4.1 1.9-4.1 3.8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------------- Payment icons (inline, generic marks) ---------------- */
function VisaMark() {
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
      <rect x="0.5" y="0.5" width="37" height="23" rx="3.5" stroke="currentColor" strokeOpacity="0.3" />
      <text x="19" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor" fontFamily="sans-serif">
        VISA
      </text>
    </svg>
  );
}

function MastercardMark() {
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
      <rect x="0.5" y="0.5" width="37" height="23" rx="3.5" stroke="currentColor" strokeOpacity="0.3" />
      <circle cx="16" cy="12" r="6" fill="currentColor" opacity="0.5" />
      <circle cx="22" cy="12" r="6" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

function PaypalMark() {
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
      <rect x="0.5" y="0.5" width="37" height="23" rx="3.5" stroke="currentColor" strokeOpacity="0.3" />
      <text x="19" y="16" textAnchor="middle" fontSize="8" fontWeight="700" fill="currentColor" fontFamily="sans-serif">
        PayPal
      </text>
    </svg>
  );
}

function ApplePayMark() {
  return (
    <svg width="38" height="24" viewBox="0 0 38 24" fill="none">
      <rect x="0.5" y="0.5" width="37" height="23" rx="3.5" stroke="currentColor" strokeOpacity="0.3" />
      <text x="19" y="16" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="currentColor" fontFamily="sans-serif">
        Pay
      </text>
    </svg>
  );
}

/* ---------------- Link column ---------------- */
function LinkColumn({ title, links, delay }) {
  return (
    <Reveal delay={delay}>
      <h4 className="text-xs tracking-[0.2em] uppercase text-text-secondary mb-5">
        {title}
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="/shop"
              className="text-sm text-text-primary hover:text-accent-orange transition-colors duration-300"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full bg-bg-primary border-t border-border-subtle pt-20 md:pt-24 pb-8 overflow-hidden">
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        {/* Top grid: brand + link columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-14 mb-20">
          {/* Brand block */}
          <div className="col-span-2 md:col-span-2">
            <Reveal>
              <a href="/" className="font-display text-3xl text-text-primary inline-block mb-5">
                ARDOR
              </a>
              <p className="text-sm text-text-secondary leading-relaxed max-w-[280px] mb-6">
                Structured essentials for people who dress like the season
                already changed. Designed in small batches, built to outlast
                the trend.
              </p>
              <div className="flex items-center gap-4 text-text-primary">
                <a href="#" aria-label="Instagram" className="hover:text-accent-orange transition-colors duration-300">
                  <InstagramIcon />
                </a>
                <a href="#" aria-label="TikTok" className="hover:text-accent-orange transition-colors duration-300">
                  <TikTokIcon />
                </a>
                <a href="#" aria-label="Pinterest" className="hover:text-accent-orange transition-colors duration-300">
                  <PinterestIcon />
                </a>
              </div>
            </Reveal>
          </div>

          <LinkColumn title="Shop" links={shopLinks} delay={0.1} />
          <LinkColumn title="Company" links={companyLinks} delay={0.2} />
          <LinkColumn title="Legal" links={legalLinks} delay={0.3} />
        </div>

        {/* Divider */}
        <Reveal delay={0.35}>
          <div className="w-full h-px bg-border-subtle mb-8" />
        </Reveal>

        {/* Bottom bar: copyright + payment icons */}
        <Reveal delay={0.4} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-xs text-text-secondary order-2 sm:order-1">
            © {new Date().getFullYear()} ARDOR Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-text-secondary order-1 sm:order-2">
            <VisaMark />
            <MastercardMark />
            <PaypalMark />
            <ApplePayMark />
          </div>
        </Reveal>
      </div>

      {/* Oversized faint wordmark, bleeding off the bottom — editorial close */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.5, ease: easeOut }}
        className="pointer-events-none select-none mt-12 md:mt-16 text-center"
      >
        <span className="font-display text-[22vw] md:text-[18vw] leading-none text-text-primary/[0.04] whitespace-nowrap">
          ARDOR
        </span>
      </motion.div>
    </footer>
  );
}