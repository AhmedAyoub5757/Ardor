import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import { initLenis } from "./lib/lenis";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  useEffect(() => {
    const lenis = initLenis();

    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;