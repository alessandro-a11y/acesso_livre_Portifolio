import { useState } from "react";
import { ButtonLink } from "./Button";
import { navLinks } from "../data/content";
import logoImg from "../assets/logo.png";

const APP_URL = "https://acessolivre.vercel.app";

export default function Navbar({ theme, c, onToggleTheme, currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const handleNav = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      <style>{`
        .navbar-links { display: flex; }
        .navbar-actions { display: flex; }
        .mobile-only { display: none !important; }
        .mobile-menu { display: none; }

        @media (max-width: 768px) {
          .navbar-links { display: none !important; }
          .navbar-actions { display: none !important; }
          .mobile-only { display: flex !important; align-items: center; gap: 12px; }
          .mobile-menu { display: ${menuOpen ? "flex" : "none"}; }
        }
      `}</style>

      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 24px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: theme === "dark" ? "#161616ee" : "#FEFFFEee",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${c.bgCardBorder}`,
      }}>
        {/* Logo */}
        <div style={{ cursor: "pointer" }} onClick={() => handleNav("home")}>
          <img
            src={logoImg}
            alt="Acesso Livre"
            style={{ width: 48, height: 48, objectFit: "contain", borderRadius: 10, display: "block" }}
          />
        </div>

        {/* Desktop links - ALINHADOS À DIREITA */}
        <div className="navbar-links" style={{ 
          flex: 1, 
          justifyContent: "flex-end", 
          alignItems: "center", 
          gap: 28, 
          marginRight: 28 
        }}>
          {navLinks.map((item) => (
            <a
              key={item.page}
              onClick={(e) => { e.preventDefault(); handleNav(item.page); }}
              href="#"
              style={{
                color: currentPage === item.page ? c.accent : c.navText,
                textDecoration: "none",
                fontSize: 14,
                fontFamily: "Georgia, serif",
                fontWeight: currentPage === item.page ? 700 : 400,
                cursor: "pointer",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="navbar-actions" style={{ alignItems: "center", gap: 16 }}>
          <button
            onClick={onToggleTheme}
            style={{
              background: "transparent",
              border: `1px solid ${c.accent}55`,
              borderRadius: "50%",
              width: 36,
              height: 36,
              color: c.accent,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className={theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
          </button>
          <ButtonLink href={APP_URL} accent={c.btnPrimary}>Começar</ButtonLink>
        </div>

        {/* Mobile Controls */}
        <div className="mobile-only">
          <button
            onClick={onToggleTheme}
            style={{
              background: "transparent",
              border: `1px solid ${c.accent}55`,
              borderRadius: "50%",
              width: 34,
              height: 34,
              color: c.accent,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className={theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
          </button>
          <button
            onClick={toggleMenu}
            style={{ background: "transparent", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5 }}
          >
            <span style={{ display: "block", width: 22, height: 2, background: c.text, borderRadius: 2, transition: "0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ display: "block", width: 22, height: 2, background: c.text, borderRadius: 2, transition: "0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: 22, height: 2, background: c.text, borderRadius: 2, transition: "0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>
      </nav>

      <div className="mobile-menu" style={{ flexDirection: "column", background: theme === "dark" ? "#1a1a1a" : "#fff", borderBottom: `1px solid ${c.bgCardBorder}`, position: "sticky", top: 73, zIndex: 99 }}>
        {navLinks.map((item) => (
          <a key={item.page} onClick={(e) => { e.preventDefault(); handleNav(item.page); }} href="#" style={{ color: currentPage === item.page ? c.accent : c.navText, textDecoration: "none", fontSize: 15, padding: "14px 24px", borderBottom: `1px solid ${c.bgCardBorder}`, display: "block" }}>{item.label}</a>
        ))}
        <div style={{ padding: "16px 24px" }}>
          <ButtonLink href={APP_URL} accent={c.btnPrimary} style={{ width: "100%", textAlign: "center" }}>Começar</ButtonLink>
        </div>
      </div>
    </>
  );
}