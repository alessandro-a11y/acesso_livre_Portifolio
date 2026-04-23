import { ButtonLink } from "../components/Button";

const APP_URL = "https://acessolivre.vercel.app";

const IconTarget = ({ color }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);

const IconEye = ({ color }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

const IconHeart = ({ color }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const IconUser = ({ color }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

const Card = ({ c, icon, title, text }) => (
  <div style={{
    background: c.bgCard,
    border: `1px solid ${c.bgCardBorder}`,
    borderRadius: 16,
    padding: "28px 24px",
    flex: "1 1 260px",
    maxWidth: 340,
  }}>
    <div style={{
      width: 52, height: 52, borderRadius: 14,
      background: `${c.accent}20`,
      display: "flex", alignItems: "center", justifyContent: "center",
      marginBottom: 16,
    }}>{icon}</div>
    <h3 style={{ color: c.text, fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>{title}</h3>
    <p style={{ color: c.textBody, fontFamily: "Georgia, serif", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{text}</p>
  </div>
);

export default function Sobre({ c }) {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 48px" }}>

      <div style={{ maxWidth: 680, marginBottom: 72 }}>
        <p style={{ color: c.accent, fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", fontFamily: "Georgia, serif", margin: "0 0 12px" }}>
          SOBRE NÓS
        </p>
        <h1 style={{ color: c.text, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.2, fontFamily: "Georgia, serif", margin: "0 0 20px" }}>
          Comunicação sem barreiras para todos
        </h1>
        <p style={{ color: c.textBody, fontSize: 16, lineHeight: 1.8, fontFamily: "Georgia, serif", margin: "0 0 32px" }}>
          O Acesso Livre nasceu da necessidade de conectar pessoas com diferentes formas de comunicação.
          Acreditamos que a inclusão começa quando a tecnologia se coloca a serviço de quem mais precisa.
        </p>
        <ButtonLink href={APP_URL} accent={c.accent}>Começar agora</ButtonLink>
      </div>

      {/* Missão, Visão, Valores */}
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 72 }}>
        <Card c={c} icon={<IconTarget color={c.accent} />} title="Missão"
          text="Eliminar barreiras de comunicação entre pessoas com e sem deficiência, promovendo inclusão real e acessibilidade digital para todos." />
        <Card c={c} icon={<IconEye color={c.accent} />} title="Visão"
          text="Ser a principal plataforma de comunicação acessível do Brasil, reconhecida pela inovação e pelo impacto social positivo." />
        <Card c={c} icon={<IconHeart color={c.accent} />} title="Valores"
          text="Inclusão, empatia, inovação e responsabilidade social guiam cada decisão que tomamos no desenvolvimento da plataforma." />
      </div>

      {/* Equipe */}
      <div>
        <h2 style={{ color: c.text, fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 800, fontFamily: "Georgia, serif", margin: "0 0 40px" }}>
          Nossa Equipe
        </h2>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {[
            { nome: "Equipe de Desenvolvimento", desc: "Responsável por construir e manter a plataforma com foco em acessibilidade e performance." },
            { nome: "Equipe de Design",           desc: "Cria interfaces intuitivas que qualquer pessoa consiga usar, independente de suas limitações." },
            { nome: "Equipe de Pesquisa",         desc: "Estuda as necessidades reais dos usuários para direcionar o desenvolvimento da plataforma." },
          ].map((m, i) => (
            <div key={i} style={{
              flex: "1 1 260px", maxWidth: 340,
              background: c.bgCard, border: `1px solid ${c.bgCardBorder}`,
              borderRadius: 16, padding: "24px",
              display: "flex", gap: 16, alignItems: "flex-start",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: `${c.accent}22`, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <IconUser color={c.accent} />
              </div>
              <div>
                <div style={{ color: c.text, fontWeight: 700, fontFamily: "Georgia, serif", fontSize: 14, marginBottom: 6 }}>{m.nome}</div>
                <div style={{ color: c.textBody, fontFamily: "Georgia, serif", fontSize: 13, lineHeight: 1.6 }}>{m.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
