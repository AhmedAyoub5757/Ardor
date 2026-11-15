import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import CollectionStory from "../components/sections/CollectionStory";
import BrandValues from "../components/sections/BrandValues";
import ShopTheEdit from "../components/sections/ShopTheEdit";
import FeaturedSpotlight from "../components/sections/FeaturedSpotlight";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((c) => c + 1);
  };

  return (
    <main className="relative w-full bg-bg-primary">
      <Navbar cartCount={cartCount} />
      <Hero />
      <CollectionStory />
      <BrandValues />
      <ShopTheEdit onAddToCart={handleAddToCart} />
      <FeaturedSpotlight />
    </main>
  );
}