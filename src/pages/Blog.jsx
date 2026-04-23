import { useState } from "react";

const posts = [
  {
    categoria: "Acessibilidade",
    titulo: "Como a Libras está transformando a comunicação digital",
    resumo: "A Língua Brasileira de Sinais é usada por mais de 10 milhões de brasileiros. Entenda como a tecnologia está tornando a comunicação em Libras cada vez mais acessível no ambiente digital.",
    data: "15 Abr 2026",
    leitura: "5 min",
  },
  {
    categoria: "Tecnologia",
    titulo: "Transcrição automática: como funciona e por que importa",
    resumo: "Os sistemas de reconhecimento de fala evoluíram muito nos últimos anos. Conheça a tecnologia por trás da transcrição em tempo real e como ela beneficia pessoas com deficiência auditiva.",
    data: "08 Abr 2026",
    leitura: "7 min",
  },
  {
    categoria: "Inclusão",
    titulo: "Design inclusivo: por que acessibilidade é responsabilidade de todos",
    resumo: "Criar produtos digitais acessíveis não é apenas uma obrigação legal — é um compromisso ético. Saiba como o design inclusivo beneficia não só pessoas com deficiência, mas todos os usuários.",
    data: "01 Abr 2026",
    leitura: "6 min",
  },
  {
    categoria: "Comunidade",
    titulo: "Depoimentos que nos motivam a continuar",
    resumo: "Histórias reais de usuários que tiveram sua comunicação transformada pelo Acesso Livre. Cada relato reforça nossa missão de construir uma plataforma verdadeiramente inclusiva.",
    data: "25 Mar 2026",
    leitura: "4 min",
  },
  {
    categoria: "Tecnologia",
    titulo: "Áudio descritivo: dando voz ao que os olhos não veem",
    resumo: "Para pessoas com deficiência visual, o áudio descritivo é uma ponte para o mundo digital. Entenda como desenvolvemos esse recurso e os desafios técnicos que superamos.",
    data: "18 Mar 2026",
    leitura: "8 min",
  },
  {
    categoria: "Acessibilidade",
    titulo: "Legislação de acessibilidade digital no Brasil: o que você precisa saber",
    resumo: "A Lei Brasileira de Inclusão (Lei 13.146/2015) e as diretrizes WCAG estabelecem padrões para acessibilidade digital. Veja como nossa plataforma se alinha a essas diretrizes.",
    data: "10 Mar 2026",
    leitura: "9 min",
  },
];

const categorias = ["Todos", "Acessibilidade", "Tecnologia", "Inclusão", "Comunidade"];

export default function Blog({ c }) {
  const [filtro, setFiltro] = useState("Todos");

  const filtrados = filtro === "Todos" ? posts : posts.filter(p => p.categoria === filtro);

  return (
    <>
      <style>{`
        .blog-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 64px 48px;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        @media (max-width: 768px) {
          .blog-container {
            padding: 40px 20px;
          }
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .blog-container {
            padding: 56px 36px;
          }
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <div className="blog-container">
        <div style={{ maxWidth: 600, marginBottom: 48 }}>
          <p style={{ color: c.accent, fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", fontFamily: "Georgia, serif", margin: "0 0 12px" }}>
            BLOG
          </p>
          <h1 style={{ color: c.text, fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.2, fontFamily: "Georgia, serif", margin: "0 0 16px" }}>
            Notícias e artigos sobre inclusão
          </h1>
          <p style={{ color: c.textBody, fontSize: "clamp(13px, 1.5vw, 15px)", lineHeight: 1.8, fontFamily: "Georgia, serif", margin: 0 }}>
            Conteúdo sobre acessibilidade, tecnologia assistiva e inclusão digital.
          </p>
        </div>

        {/* Filtros */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              style={{
                background: filtro === cat ? c.accent : "transparent",
                color: filtro === cat ? "#fff" : c.textBody,
                border: `1px solid ${filtro === cat ? c.accent : c.bgCardBorder}`,
                borderRadius: 20,
                padding: "6px 16px",
                fontSize: 13,
                fontFamily: "Georgia, serif",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >{cat}</button>
          ))}
        </div>

        {/* Posts */}
        <div className="blog-grid">
          {filtrados.map((post, i) => (
            <div
              key={i}
              style={{
                background: c.bgCard,
                border: `1px solid ${c.bgCardBorder}`,
                borderRadius: 16,
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 8px 32px ${c.accent}22`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{
                  background: `${c.accent}20`, color: c.accent,
                  fontSize: 11, fontWeight: 700, fontFamily: "Georgia, serif",
                  padding: "3px 12px", borderRadius: 20, letterSpacing: "0.5px",
                }}>{post.categoria}</span>
                <span style={{ color: c.textMuted, fontSize: 12, fontFamily: "Georgia, serif" }}>{post.leitura} de leitura</span>
              </div>

              <h3 style={{ color: c.text, fontFamily: "Georgia, serif", fontSize: "clamp(14px, 1.5vw, 16px)", fontWeight: 700, lineHeight: 1.4, margin: 0 }}>
                {post.titulo}
              </h3>

              <p style={{ color: c.textBody, fontFamily: "Georgia, serif", fontSize: "clamp(12px, 1.3vw, 13.5px)", lineHeight: 1.6, margin: 0, flexGrow: 1 }}>
                {post.resumo}
              </p>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 8, borderTop: `1px solid ${c.bgCardBorder}` }}>
                <span style={{ color: c.textMuted, fontSize: 12, fontFamily: "Georgia, serif" }}>{post.data}</span>
                <span style={{ color: c.accent, fontSize: 13, fontFamily: "Georgia, serif", fontWeight: 600 }}>Ler mais →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}