import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
// import About from "../components/sections/About";
import CollectionStory from "../components/sections/CollectionStory";

export default function Home() {
  return (
    <main className="relative w-full bg-bg-primary">
      <Navbar cartCount={2} />
      <Hero />
      {/* <About /> */}
      <CollectionStory />
    </main>
  );
}