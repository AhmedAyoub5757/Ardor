import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-bg-primary">
      <Navbar cartCount={2} />

      {/* Hero placeholder — we'll replace this next */}
      <section className="h-screen flex items-center justify-center">
        <p className="text-text-secondary">Hero section coming next</p>
      </section>
    </main>
  );
}