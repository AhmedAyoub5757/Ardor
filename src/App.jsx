import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { initLenis } from "./lib/lenis";
import Home from "./pages/Home";

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

  return <Home />;
}

export default App;