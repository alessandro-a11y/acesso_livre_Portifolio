import { ButtonLink, ButtonOutline } from "./Button";
import heroDark  from "../assets/hero-dark.png";
import heroLight from "../assets/hero-light.png";

const APP_URL = "https://acessolivre.vercel.app";

export default function Hero({ c, theme }) {
  const heroImg = theme === "dark" ? heroDark : heroLight;

  return (
    <>
      <style>{`
        .hero-section {
          display: flex;
          flex-direction: row;
          align-items: center;
          min-height: 520px;
          overflow: hidden;
          position: relative;
        }
        .hero-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 64px 48px 64px 64px;
          max-width: 620px;
          z-index: 2;
        }
        .hero-image-wrapper {
          flex: 1.2;
          height: 100%;
          align-self: stretch;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center bottom;
          display: block;
        }

        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            min-height: auto;
            text-align: center;
          }
          .hero-text {
            padding: 60px 24px 20px;
            max-width: 100%;
            align-items: center;
          }
          .hero-image-wrapper {
            width: 100%;
            min-height: 300px;
            flex: none;
          }
          .hero-image-wrapper img {
            object-fit: contain; /* Garante que a ilustração não seja cortada no mobile */
            object-position: center bottom;
            width: 90%; /* Pequena margem lateral */
            margin: 0 auto;
          }
          .hero-btn-group {
            justify-content: center;
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-text">
          <h1 style={{
            color: c.text,
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 800,
            lineHeight: 1.1,
            margin: "0 0 20px",
            fontFamily: "Georgia, serif",
          }}>
            Comunicação<br />
            acessível para<br />
            todos, sem exceção!
          </h1>

          <p style={{
            color: c.textBody,
            fontSize: "clamp(15px, 1.5vw, 16px)",
            lineHeight: 1.6,
            margin: "0 0 32px",
            maxWidth: 450,
            fontFamily: "Georgia, serif",
          }}>
            Eliminamos barreiras para conectar pessoas com diferentes formas de
            comunicação, promovendo a inclusão de verdade.
          </p>

          <div className="hero-btn-group" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <ButtonLink href={APP_URL} accent={c.btnPrimary}>Começar</ButtonLink>
            <ButtonOutline color={c.text} borderColor={c.btnSecondaryBorder}>Sobre</ButtonOutline>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={heroImg}
            alt="Duas pessoas se comunicando"
          />
        </div>
      </section>
    </>
  );
}