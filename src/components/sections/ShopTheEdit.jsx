import { useState } from "react";
import { motion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1];

const products = [
  {
    id: "p1",
    name: "Ember Wool Coat",
    price: 328,
    category: "Outerwear",
    tag: "New",
    images: ["/product-1-front.png", "/product-1-back.jpg"],
  },
  {
    id: "p2",
    name: "Ash Knit Sweater",
    price: 148,
    category: "Knitwear",
    tag: "New",
    images: ["/product-2-front.png", "/product-2-back.jpg"],
  },
  {
    id: "p3",
    name: "Raw Edge Denim",
    price: 196,
    category: "Denim",
    tag: null,
    images: ["/product-3-front.png", "/product-3-back.jpg"],
  },
  {
    id: "p4",
    name: "Cinder Leather Boots",
    price: 284,
    category: "Footwear",
    tag: "Limited",
    images: ["/product-4-front.png", "/product-4-back.jpg"],
  },
];

/* ---------------- Cart Plus Icon ---------------- */
function AddIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 2.5v11M2.5 8h11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------------- Check Icon (added confirmation) ---------------- */
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8.5l3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------------- Product Card ---------------- */
function ProductCard({ product, index, onAddToCart }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    setAdded(true);
    onAddToCart?.(product);
    setTimeout(() => setAdded(false), 1800);
  };

  const isSoldOut = product.tag === "Sold Out";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: easeOut }}
      className="group flex flex-col"
    >
      {/* Image area with hover-swap */}
      <a
        href="#"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative block w-full aspect-[3/4] overflow-hidden bg-border-subtle mb-4"
      >
        <motion.img
          src={product.images[0]}
          alt={product.name}
          animate={{ opacity: hovered ? 0 : 1, scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.img
          src={product.images[1]}
          alt=""
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 1.04 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Tag badge */}
        {product.tag && (
          <span
            className={`absolute top-3 left-3 text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 ${
              isSoldOut
                ? "bg-text-secondary text-white"
                : "bg-accent-orange text-white"
            }`}
          >
            {product.tag}
          </span>
        )}
      </a>

      {/* Info row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col">
          <p className="text-[11px] tracking-[0.15em] uppercase text-text-secondary mb-1">
            {product.category}
          </p>
          <a href="#" className="font-display text-lg text-text-primary leading-snug hover:text-accent-orange transition-colors duration-300">
            {product.name}
          </a>
          <p className="text-sm text-text-primary mt-1">${product.price}</p>
        </div>

        {/* Add to cart button — always visible */}
        <motion.button
          onClick={handleAdd}
          disabled={isSoldOut}
          whileHover={!isSoldOut ? { scale: 1.08 } : {}}
          whileTap={!isSoldOut ? { scale: 0.92 } : {}}
          className={`relative flex items-center justify-center w-9 h-9 rounded-full shrink-0 mt-1 overflow-hidden ${
            isSoldOut
              ? "bg-border-subtle text-text-secondary cursor-not-allowed"
              : "bg-text-primary text-white"
          }`}
          aria-label={isSoldOut ? "Sold out" : `Add ${product.name} to cart`}
        >
          <motion.span
            animate={{ y: added ? -24 : 0, opacity: added ? 0 : 1 }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            <AddIcon />
          </motion.span>
          <motion.span
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: added ? 0 : 24, opacity: added ? 1 : 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="absolute text-accent-orange"
          >
            <CheckIcon />
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ---------------- Section ---------------- */
export default function ShopTheEdit({ onAddToCart }) {
  return (
    <section className="relative w-full bg-bg-primary py-24 md:py-36">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="flex items-end justify-between px-6 md:px-16 mb-12 md:mb-16"
      >
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-text-secondary mb-3">
            05 — New Arrivals
          </p>
          <h2 className="font-display text-[36px] sm:text-[48px] md:text-[60px] leading-[0.95] text-text-primary">
            Shop the <em className="italic">edit.</em>
          </h2>
        </div>
        <a
          href="#"
          className="hidden sm:inline-block text-sm text-text-primary border-b border-text-primary pb-0.5 hover:text-accent-orange hover:border-accent-orange transition-colors duration-300 whitespace-nowrap"
        >
          View All
        </a>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-8 px-6 md:px-16">
        {products.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            index={i}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {/* Mobile "View All" */}
      <div className="sm:hidden px-6 mt-10">
        <a
          href="#"
          className="inline-block text-sm text-text-primary border-b border-text-primary pb-0.5"
        >
          View All
        </a>
      </div>
    </section>
  );
}