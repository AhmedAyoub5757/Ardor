import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import CollectionStory from "../components/sections/CollectionStory";
import Manifesto from "../components/sections/Manifesto";

export default function Home() {
  return (
    <main className="relative w-full bg-bg-primary">
      <Navbar cartCount={2} />
      <Hero />
      <CollectionStory />
      <Manifesto />
    </main>
  );
}