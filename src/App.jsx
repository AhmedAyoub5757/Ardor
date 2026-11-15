import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { initLenis } from "./lib/lenis";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  useEffect(() => {
    const lenis = initLenis();

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