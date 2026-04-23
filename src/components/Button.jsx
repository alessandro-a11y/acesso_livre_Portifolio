const hoverIn = (e, accent) => {
  e.currentTarget.style.transform = "scale(1.04)";
  e.currentTarget.style.boxShadow = `0 6px 24px ${accent}77`;
};
const hoverOut = (e, accent) => {
  e.currentTarget.style.transform = "scale(1)";
  e.currentTarget.style.boxShadow = `0 4px 16px ${accent}55`;
};

export const ButtonPrimary = ({ children, onClick, style = {}, accent = "#D97F5C" }) => (
  <button
    onClick={onClick}
    onMouseEnter={(e) => hoverIn(e, accent)}
    onMouseLeave={(e) => hoverOut(e, accent)}
    style={{
      background: accent,
      color: "#fff",
      border: "none",
      borderRadius: 28,
      padding: "12px 32px",
      fontWeight: 700,
      fontSize: 15,
      cursor: "pointer",
      fontFamily: "Georgia, serif",
      boxShadow: `0 4px 16px ${accent}55`,
      transition: "transform 0.15s, box-shadow 0.15s",
      ...style,
    }}
  >
    {children}
  </button>
);

export const ButtonLink = ({ children, href, accent = "#D97F5C", style = {} }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = `0 6px 24px ${accent}77`; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = `0 4px 16px ${accent}55`; }}
    style={{
      display: "inline-block",
      background: accent,
      color: "#fff",
      border: "none",
      borderRadius: 28,
      padding: "12px 32px",
      fontWeight: 700,
      fontSize: 15,
      cursor: "pointer",
      fontFamily: "Georgia, serif",
      boxShadow: `0 4px 16px ${accent}55`,
      transition: "transform 0.15s, box-shadow 0.15s",
      textDecoration: "none",
      ...style,
    }}
  >
    {children}
  </a>
);

export const ButtonOutline = ({ children, onClick, color, borderColor, style = {} }) => (
  <button
    onClick={onClick}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    style={{
      background: "transparent",
      color,
      border: `2px solid ${borderColor}`,
      borderRadius: 28,
      padding: "12px 32px",
      fontWeight: 600,
      fontSize: 15,
      cursor: "pointer",
      fontFamily: "Georgia, serif",
      transition: "transform 0.15s",
      ...style,
    }}
  >
    {children}
  </button>
);
