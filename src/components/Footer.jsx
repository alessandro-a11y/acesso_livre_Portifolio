export default function Footer({ c, onNavigate }) {
  const links = [
    { label: "Sobre",    page: "sobre"    },
    { label: "Recursos", page: "recursos" },
    { label: "Blog",     page: "blog"     },
    { label: "Contato",  page: "contato"  },
  ];

  return (
    <>
      <style>{`
        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-links {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .footer-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 20px;
          }
          .footer-links {
            justify-content: center;
            gap: 16px;
          }
        }
      `}</style>

      <footer style={{
        background: c.footer,
        borderTop: `1px solid ${c.bgCardBorder}`,
        padding: "32px 24px",
      }}>
        <div className="footer-inner">
          <p style={{
            color: c.textMuted,
            fontSize: 12,
            fontFamily: "Georgia, serif",
            margin: 0,
          }}>
            Todos os direitos reservados ©2026 — Acesso Livre
          </p>
          <div className="footer-links">
            {links.map(l => (
              <a
                key={l.page}
                href="#"
                onClick={(e) => { e.preventDefault(); onNavigate(l.page); }}
                style={{
                  color: c.textMuted,
                  fontSize: 12,
                  fontFamily: "Georgia, serif",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.target.style.color = c.accent}
                onMouseLeave={e => e.target.style.color = c.textMuted}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}