import { iconMap } from "../assets/icons";
import { features } from "../data/content";

const FeatureCard = ({ c, title, iconKey }) => (
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 14,
    flex: "1 1 120px",
    maxWidth: 180,
    minWidth: 100,
  }}>
    {iconMap[iconKey]}
    <p style={{
      color: c.textBody,
      fontSize: "clamp(12px, 1.5vw, 14px)",
      textAlign: "center",
      lineHeight: 1.4,
      fontFamily: "Georgia, serif",
      margin: 0,
      fontWeight: 600,
    }}>
      {title}
    </p>
  </div>
);

export default function HowItWorks({ c }) {
  return (
    <>
      <style>{`
        .how-section {
          padding: 64px 48px;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .how-grid {
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;
        }

        @media (max-width: 768px) {
          .how-section {
            padding: 48px 24px;
          }
          .how-grid {
            gap: 32px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .how-section {
            padding: 56px 36px;
          }
          .how-grid {
            gap: 40px;
          }
        }
      `}</style>

      <section className="how-section">
        <h2 style={{
          color: c.text,
          fontSize: "clamp(20px, 3vw, 34px)",
          fontWeight: 800,
          margin: "0 0 48px",
          fontFamily: "Georgia, serif",
          alignSelf: "flex-start",
        }}>
          Como Funciona?
        </h2>

        <div className="how-grid">
          {features.map((f) => (
            <FeatureCard key={f.id} c={c} title={f.title} iconKey={f.iconKey} />
          ))}
        </div>
      </section>
    </>
  );
}