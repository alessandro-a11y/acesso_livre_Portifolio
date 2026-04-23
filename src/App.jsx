import { useState } from "react";
import { palette } from "./styles/theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Sobre from "./pages/Sobre";
import Recursos from "./pages/Recursos";
import Blog from "./pages/Blog";
import Contato from "./pages/Contato";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [page, setPage] = useState("home");
  const c = palette[theme];

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: c.bg,
      transition: "background 0.4s ease",
      fontFamily: "Georgia, serif",
    }}>
      <Navbar theme={theme} c={c} onToggleTheme={toggleTheme} currentPage={page} onNavigate={navigate} />

      {page === "home" && (
        <>
          <Hero c={c} theme={theme} />
          <HowItWorks c={c} />
          <Testimonials c={c} sectionBg={c.sectionAlt} />
        </>
      )}
      {page === "sobre"    && <Sobre    c={c} />}
      {page === "recursos" && <Recursos c={c} />}
      {page === "blog"     && <Blog     c={c} />}
      {page === "contato"  && <Contato  c={c} />}

      <Footer c={c} onNavigate={navigate} />
    </div>
  );
}
