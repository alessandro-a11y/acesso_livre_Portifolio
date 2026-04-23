import { useState, useEffect, useCallback } from "react";
import { UserIcon } from "../assets/icons";
import { ButtonLink } from "./Button";
import { useDepoimentos } from "../hooks/useDepoimentos";

const APP_URL = "https://acessolivre.vercel.app";

const getCardsPerPage = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

const TestimonialCard = ({ c, nome, texto }) => (
  <div style={{
    background: c.bgCard,
    border: `1px solid ${c.bgCardBorder}`,
    borderRadius: 16,
    padding: "24px 20px",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    flex: "1 1 0",
    minWidth: 0,
  }}>
    <p style={{
      color: c.textBody,
      fontSize: "clamp(13px, 1.5vw, 13.5px)",
      lineHeight: 1.6,
      fontFamily: "Georgia, serif",
      fontStyle: "italic",
      margin: 0,
      flexGrow: 1,
    }}>
      "{texto}"
    </p>
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <UserIcon />
      <div style={{ color: c.text, fontWeight: 700, fontSize: 13, fontFamily: "Georgia, serif" }}>
        {nome}
      </div>
    </div>
  </div>
);

const LoadingCards = ({ c, count }) => (
  <div style={{ display: "flex", gap: 24 }}>
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} style={{
        flex: 1,
        height: 180,
        borderRadius: 16,
        background: `${c.accent}15`,
        animation: "pulse 1.5s ease-in-out infinite",
      }} />
    ))}
  </div>
);

const NavButton = ({ onClick, disabled, c, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      width: 40,
      height: 40,
      borderRadius: "50%",
      border: `2px solid ${disabled ? c.bgCardBorder : c.accent}`,
      background: "transparent",
      color: disabled ? c.bgCardBorder : c.accent,
      cursor: disabled ? "default" : "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.2s",
      flexShrink: 0,
    }}
  >
    {children}
  </button>
);

export default function Testimonials({ c, sectionBg }) {
  const { depoimentos, loading, error } = useDepoimentos();
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(1);

  // Recompute cards per page on resize
  useEffect(() => {
    const handleResize = () => {
      const next = getCardsPerPage();
      setCardsPerPage((prev) => {
        if (prev !== next) {
          setPage(0);
          return next;
        }
        return prev;
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(depoimentos.length / cardsPerPage);

  const goTo = useCallback((nextPage, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setPage(nextPage);
      setAnimating(false);
    }, 300);
  }, [animating]);

  const prev = () => page > 0 && goTo(page - 1, -1);
  const next = () => page < totalPages - 1 && goTo(page + 1, 1);

  useEffect(() => {
    if (depoimentos.length <= cardsPerPage) return;
    const timer = setInterval(() => {
      setPage((p) => {
        const nextP = (p + 1) % totalPages;
        setDirection(1);
        setAnimating(true);
        setTimeout(() => setAnimating(false), 300);
        return nextP;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [depoimentos.length, totalPages, cardsPerPage]);

  const visibleCards = depoimentos.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  const gridCols = cardsPerPage === 1 ? "1fr" : cardsPerPage === 2 ? "repeat(2, 1fr)" : "repeat(3, 1fr)";

  return (
    <section style={{ padding: "64px 48px 80px", background: sectionBg, marginTop: 32 }}>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:.4} 50%{opacity:.8} }
        @keyframes slideIn  { from { opacity: 0; transform: translateX(40px);  } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideOut { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }

        .testimonials-section { padding: 64px 48px 80px !important; }
        .testimonials-inner { max-width: 1100px; margin: 0 auto; }

        @media (max-width: 768px) {
          .testimonials-section { padding: 48px 24px 64px !important; }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .testimonials-section { padding: 56px 36px 72px !important; }
        }
      `}</style>

      <div className="testimonials-inner">
        {/* Cabeçalho */}
        <p style={{
          color: c.accent,
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
          margin: "0 0 8px",
          fontFamily: "Georgia, serif",
        }}>
          DEPOIMENTOS
        </p>

        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
          marginBottom: 16,
        }}>
          <div>
            <h2 style={{
              color: c.text,
              fontSize: "clamp(20px, 3vw, 34px)",
              fontWeight: 800,
              margin: "0 0 12px",
              fontFamily: "Georgia, serif",
            }}>
              O que dizem sobre nós
            </h2>
            <p style={{
              color: c.textBody,
              fontSize: "clamp(13px, 1.5vw, 14px)",
              lineHeight: 1.6,
              maxWidth: 540,
              margin: 0,
              fontFamily: "Georgia, serif",
            }}>
              Conheça histórias reais de pessoas que transformaram sua comunicação usando o Acesso Livre.
            </p>
          </div>

          {!loading && depoimentos.length > cardsPerPage && (
            <div style={{ display: "flex", gap: 10 }}>
              <NavButton onClick={prev} disabled={page === 0} c={c}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </NavButton>
              <NavButton onClick={next} disabled={page === totalPages - 1} c={c}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </NavButton>
            </div>
          )}
        </div>

        {/* Cards */}
        <div style={{ marginBottom: 40, minHeight: 180 }}>
          {loading && <LoadingCards c={c} count={cardsPerPage} />}

          {error && (
            <p style={{ color: c.textMuted, fontFamily: "Georgia, serif", fontSize: 14 }}>{error}</p>
          )}

          {!loading && !error && depoimentos.length === 0 && (
            <p style={{ color: c.textMuted, fontFamily: "Georgia, serif", fontSize: 14 }}>
              Nenhum depoimento encontrado.
            </p>
          )}

          {!loading && !error && depoimentos.length > 0 && (
            <div style={{
              display: "grid",
              gridTemplateColumns: gridCols,
              gap: 24,
              animation: `${direction === 1 ? "slideIn" : "slideOut"} 0.3s ease`,
            }}>
              {visibleCards.map((d) => (
                <TestimonialCard key={d.id} c={c} nome={d.nome} texto={d.texto} />
              ))}
            </div>
          )}
        </div>

        {/* Indicadores */}
        {!loading && totalPages > 1 && (
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 40 }}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > page ? 1 : -1)}
                style={{
                  width: i === page ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: "none",
                  background: i === page ? c.accent : `${c.accent}40`,
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "center" }}>
          <ButtonLink
            href={APP_URL}
            accent={c.btnPrimary}
            style={{ width: "100%", maxWidth: 480, padding: "14px 64px", fontSize: 16, textAlign: "center" }}
          >
            Começar
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}