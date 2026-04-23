import { useState } from "react";

export default function Contato({ c }) {
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.nome || !form.email || !form.mensagem) return;
    setEnviando(true);
    await new Promise(r => setTimeout(r, 1200));
    setEnviando(false);
    setEnviado(true);
  };

  const inputStyle = {
    width: "100%",
    background: c.bgCard,
    border: `1px solid ${c.bgCardBorder}`,
    borderRadius: 10,
    padding: "12px 16px",
    color: c.textBody,
    fontFamily: "Georgia, serif",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    color: c.textBody,
    fontFamily: "Georgia, serif",
    fontSize: 13,
    fontWeight: 600,
    marginBottom: 6,
    display: "block",
  };

  const InfoCard = ({ icon, title, text }) => (
    <div style={{
      display: "flex",
      gap: 16,
      alignItems: "flex-start",
      background: c.bgCard,
      border: `1px solid ${c.bgCardBorder}`,
      borderRadius: 14,
      padding: "20px",
    }}>
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: `${c.accent}20`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 20,
        flexShrink: 0,
      }}>{icon}</div>
      <div>
        <div style={{ color: c.text, fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{title}</div>
        <div style={{ color: c.textBody, fontFamily: "Georgia, serif", fontSize: 13, lineHeight: 1.5 }}>{text}</div>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        .contato-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 64px 48px;
        }
        .contato-body {
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
        }
        .contato-form {
          flex: 2 1 360px;
          min-width: 0;
        }
        .contato-info {
          flex: 1 1 240px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-width: 0;
        }
        .nome-email-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .nome-email-row > div {
          flex: 1 1 160px;
          min-width: 0;
        }

        @media (max-width: 768px) {
          .contato-container {
            padding: 40px 20px;
          }
          .contato-body {
            flex-direction: column;
            gap: 32px;
          }
          .contato-form {
            flex: none;
            width: 100%;
          }
          .contato-info {
            flex: none;
            width: 100%;
          }
          .nome-email-row {
            flex-direction: column;
          }
          .nome-email-row > div {
            flex: none;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .contato-container {
            padding: 56px 36px;
          }
          .contato-body {
            gap: 32px;
          }
        }
      `}</style>

      <div className="contato-container">
        <div style={{ maxWidth: 560, marginBottom: 56 }}>
          <p style={{ color: c.accent, fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", fontFamily: "Georgia, serif", margin: "0 0 12px" }}>
            CONTATO
          </p>
          <h1 style={{ color: c.text, fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.2, fontFamily: "Georgia, serif", margin: "0 0 16px" }}>
            Fale com a gente
          </h1>
          <p style={{ color: c.textBody, fontSize: "clamp(13px, 1.5vw, 15px)", lineHeight: 1.8, fontFamily: "Georgia, serif", margin: 0 }}>
            Tem dúvidas, sugestões ou quer colaborar? Estamos sempre abertos para ouvir.
          </p>
        </div>

        <div className="contato-body">
          {/* Formulário */}
          <div className="contato-form">
            {enviado ? (
              <div style={{
                background: `${c.accent}15`,
                border: `1px solid ${c.accent}44`,
                borderRadius: 16,
                padding: "48px 32px",
                textAlign: "center",
              }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ color: c.text, fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 800, margin: "0 0 10px" }}>
                  Mensagem enviada!
                </h3>
                <p style={{ color: c.textBody, fontFamily: "Georgia, serif", fontSize: 14 }}>
                  Obrigado pelo contato. Retornaremos em breve.
                </p>
                <button
                  onClick={() => { setEnviado(false); setForm({ nome: "", email: "", assunto: "", mensagem: "" }); }}
                  style={{
                    marginTop: 20,
                    background: "transparent",
                    border: `1px solid ${c.accent}`,
                    color: c.accent,
                    borderRadius: 20,
                    padding: "8px 24px",
                    fontFamily: "Georgia, serif",
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >Enviar outra mensagem</button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div className="nome-email-row">
                  <div>
                    <label style={labelStyle}>Nome *</label>
                    <input name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = c.accent}
                      onBlur={e => e.target.style.borderColor = c.bgCardBorder} />
                  </div>
                  <div>
                    <label style={labelStyle}>E-mail *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="seu@email.com" style={inputStyle}
                      onFocus={e => e.target.style.borderColor = c.accent}
                      onBlur={e => e.target.style.borderColor = c.bgCardBorder} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Assunto</label>
                  <input name="assunto" value={form.assunto} onChange={handleChange} placeholder="Como podemos ajudar?" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = c.accent}
                    onBlur={e => e.target.style.borderColor = c.bgCardBorder} />
                </div>

                <div>
                  <label style={labelStyle}>Mensagem *</label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Escreva sua mensagem aqui..."
                    rows={6}
                    style={{ ...inputStyle, resize: "vertical", minHeight: 140 }}
                    onFocus={e => e.target.style.borderColor = c.accent}
                    onBlur={e => e.target.style.borderColor = c.bgCardBorder}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={enviando || !form.nome || !form.email || !form.mensagem}
                  style={{
                    background: (!form.nome || !form.email || !form.mensagem) ? `${c.accent}55` : c.accent,
                    color: "#fff",
                    border: "none",
                    borderRadius: 28,
                    padding: "13px 32px",
                    fontWeight: 700,
                    fontSize: 15,
                    fontFamily: "Georgia, serif",
                    cursor: (!form.nome || !form.email || !form.mensagem) ? "not-allowed" : "pointer",
                    alignSelf: "flex-start",
                    transition: "opacity 0.2s",
                    width: "100%",
                    maxWidth: 240,
                  }}
                >
                  {enviando ? "Enviando..." : "Enviar mensagem"}
                </button>
              </div>
            )}
          </div>

          {/* Info lateral */}
          <div className="contato-info">
            <InfoCard icon="📧" title="E-mail" text="contato@acessolivre.com.br" />
            <InfoCard icon="🌐" title="Plataforma" text="acessolivre.vercel.app" />
            <InfoCard icon="📍" title="Localização" text="Brasil — atendimento remoto em todo o território nacional" />
            <InfoCard icon="⏰" title="Horário" text="Segunda a sexta, das 9h às 18h (horário de Brasília)" />
          </div>
        </div>
      </div>
    </>
  );
}