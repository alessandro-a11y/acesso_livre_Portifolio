import { ButtonLink } from "../components/Button";

const APP_URL = "https://acessolivre.vercel.app";

// SVG icons sem emojis
const IconHand = ({ color }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8a6 6 0 0 0 12 0v-3a2 2 0 0 0-4 0"/>
  </svg>
);
const IconMic = ({ color }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <rect x="9" y="2" width="6" height="11" rx="3"/>
    <path d="M5 10a7 7 0 0 0 14 0M12 19v3M8 22h8"/>
  </svg>
);
const IconVolume = ({ color }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
  </svg>
);
const IconPhone = ({ color }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);
const IconGlobe = ({ color }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const IconCpu = ({ color }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
    <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
    <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/>
    <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/>
  </svg>
);

const iconComponents = { hand: IconHand, mic: IconMic, volume: IconVolume, phone: IconPhone, globe: IconGlobe, cpu: IconCpu };

const RecursoCard = ({ c, iconKey, title, desc, badge }) => {
  const Icon = iconComponents[iconKey];
  return (
    <div style={{
      background: c.bgCard, border: `1px solid ${c.bgCardBorder}`,
      borderRadius: 16, padding: "28px 24px",
      flex: "1 1 280px", maxWidth: 340, position: "relative",
    }}>
      {badge && (
        <span style={{
          position: "absolute", top: 16, right: 16,
          background: c.accent, color: "#fff",
          fontSize: 10, fontWeight: 700, fontFamily: "Georgia, serif",
          padding: "3px 10px", borderRadius: 20, letterSpacing: "0.5px",
        }}>{badge}</span>
      )}
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: `${c.accent}20`,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 16,
      }}>
        <Icon color={c.accent} />
      </div>
      <h3 style={{ color: c.text, fontFamily: "Georgia, serif", fontSize: 17, fontWeight: 700, margin: "0 0 10px" }}>{title}</h3>
      <p style={{ color: c.textBody, fontFamily: "Georgia, serif", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{desc}</p>
    </div>
  );
};

export default function Recursos({ c }) {
  const recursos = [
    { iconKey: "hand",   title: "Intérprete VLibras",        badge: "Gratuito", desc: "Tradução automática de texto para Libras com avatar 3D em tempo real, acessível diretamente no navegador." },
    { iconKey: "mic",    title: "Transcrição em Tempo Real",  badge: "Gratuito", desc: "Converte fala em texto instantaneamente, permitindo que pessoas com deficiência auditiva acompanhem conversas." },
    { iconKey: "volume", title: "Áudio Descritivo",           badge: "Gratuito", desc: "Descreve em áudio elementos visuais da tela, garantindo acesso completo para pessoas com deficiência visual." },
    { iconKey: "phone",  title: "Acesso Mobile",              badge: "Em breve", desc: "Versão otimizada para dispositivos móveis com todos os recursos de acessibilidade disponíveis na palma da mão." },
    { iconKey: "globe",  title: "Extensão para Navegador",    badge: "Em breve", desc: "Adicione acessibilidade a qualquer site com nossa extensão. Funciona no Chrome, Firefox e Edge." },
    { iconKey: "cpu",    title: "IA Adaptativa",              badge: "Em breve", desc: "Sistema de inteligência artificial que aprende o padrão de uso e sugere adaptações personalizadas para cada usuário." },
  ];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 48px" }}>

      <div style={{ maxWidth: 600, marginBottom: 56 }}>
        <p style={{ color: c.accent, fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", fontFamily: "Georgia, serif", margin: "0 0 12px" }}>
          RECURSOS
        </p>
        <h1 style={{ color: c.text, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.2, fontFamily: "Georgia, serif", margin: "0 0 16px" }}>
          Ferramentas para toda forma de comunicação
        </h1>
        <p style={{ color: c.textBody, fontSize: 15, lineHeight: 1.8, fontFamily: "Georgia, serif", margin: 0 }}>
          Desenvolvemos recursos pensados para tornar a comunicação mais inclusiva, acessível e eficiente para todos.
        </p>
      </div>

      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 64 }}>
        {recursos.map((r, i) => <RecursoCard key={i} c={c} {...r} />)}
      </div>

      <div style={{
        background: `${c.accent}15`, border: `1px solid ${c.accent}33`,
        borderRadius: 20, padding: "48px", textAlign: "center",
      }}>
        <h2 style={{ color: c.text, fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 800, margin: "0 0 12px" }}>
          Pronto para experimentar?
        </h2>
        <p style={{ color: c.textBody, fontFamily: "Georgia, serif", fontSize: 15, margin: "0 0 28px" }}>
          Todos os recursos gratuitos estão disponíveis agora. Sem cadastro.
        </p>
        <ButtonLink href={APP_URL} accent={c.accent}>Acessar a plataforma</ButtonLink>
      </div>
    </div>
  );
}
