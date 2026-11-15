import { lazy, Suspense, useState } from "react";
import Navbar from "../components/layout/Navbar";
import DeferredMount from "../components/DeferredMount";
import Hero from "../components/sections/Hero";
import BrandValues from "../components/sections/BrandValues";
import ShopTheEdit from "../components/sections/ShopTheEdit";
import SizeGuide from "../components/sections/SizeGuide";
import FeaturedSpotlight from "../components/sections/FeaturedSpotlight";
import Footer from "../components/sections/Footer";

const CollectionStory = lazy(() => import("../components/sections/CollectionStory"));
const PressMentions = lazy(() => import("../components/sections/PressMentions"));
const InstagramWall = lazy(() => import("../components/sections/InstagramWall"));

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = () => setCartCount((c) => c + 1);

  return (
    <main className="relative w-full bg-bg-primary">
      <Navbar cartCount={cartCount} />
      <Hero />
      <Suspense fallback={null}>
        <CollectionStory />
      </Suspense>
      <BrandValues />
      <ShopTheEdit onAddToCart={handleAddToCart} />
      <SizeGuide />
      <FeaturedSpotlight />
      <DeferredMount minHeight="760px">
        <Suspense fallback={null}>
          <PressMentions />
        </Suspense>
      </DeferredMount>
      <DeferredMount minHeight="720px">
        <Suspense fallback={null}>
          <InstagramWall />
        </Suspense>
      </DeferredMount>
      <Footer />
    </main>
  );
}