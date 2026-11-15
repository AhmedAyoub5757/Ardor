import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import CollectionStory from "../components/sections/CollectionStory";
import BrandValues from "../components/sections/BrandValues";

export default function Home() {
  return (
    <main className="relative w-full bg-bg-primary">
      <Navbar cartCount={2} />
      <Hero />
      <CollectionStory />
      <BrandValues />
    </main>
  );
}