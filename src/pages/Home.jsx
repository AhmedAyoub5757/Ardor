import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <main className="relative w-full bg-bg-primary">
      <Navbar cartCount={2} />
      <Hero />
    </main>
  );
}