# Acesso Livre — Frontend

Landing page do projeto **Acesso Livre** — comunicação acessível para todos.

## 📁 Estrutura

```
src/
├── App.jsx                      # Componente raiz
├── main.jsx                     # Entry point React
├── assets/
│   └── icons.jsx                # Todos os SVGs
├── components/
│   ├── Button.jsx               # ButtonPrimary e ButtonOutline
│   ├── Footer.jsx
│   ├── Hero.jsx                 # Seção hero (título + imagem)
│   ├── HowItWorks.jsx           # Seção "Como Funciona"
│   ├── Navbar.jsx               # Barra de navegação
│   └── Testimonials.jsx         # Depoimentos (consome API)
├── data/
│   └── content.js               # Textos e listas estáticas
├── hooks/
│   └── useDepoimentos.js        # Fetch GET /api/depoimentos
└── styles/
    └── theme.js                 # Paleta de cores dark/light
```

## 🚀 Como rodar

```bash
# 1. Copie o arquivo de variáveis de ambiente
cp .env.example .env

# 2. Preencha VITE_API_URL no .env com a URL da sua API

# 3. Instale as dependências
npm install

# 4. Rode em desenvolvimento
npm run dev
```

Abra **http://localhost:5173** no navegador.

## 🔑 Variáveis de ambiente

| Variável       | Descrição                          |
|----------------|------------------------------------|
| `VITE_API_URL` | URL base da API no CleverCloud     |

> As credenciais do banco (`MYSQL_*`) ficam **apenas no backend** — nunca no frontend.

## 🖼️ Trocar a imagem do Hero

Em `src/components/Hero.jsx`, substitua `<HeroImagePlaceholder />` por:

```jsx
<img
  src="/assets/hero.png"
  alt="Duas pessoas se comunicando em Libras"
  style={{ width: "100%", maxWidth: 420, borderRadius: 24 }}
/>
```

## 🖼️ Trocar o logo

Em `src/components/Navbar.jsx`:

```jsx
// 1. Importe a imagem
import logoImg from "../assets/logo.png";

// 2. Substitua o placeholder pelo <img>
<img src={logoImg} alt="Acesso Livre" style={{ width: 42, height: 42, objectFit: "cover", borderRadius: 8 }} />
```

## 🎨 Temas

Suporta **Dark** e **Light** — toggle no canto direito da navbar.
Cores centralizadas em `src/styles/theme.js`.

## ⚙️ CORS

Certifique-se de que o backend tem a URL do frontend em `ALLOWED_ORIGINS`:
- Desenvolvimento: `http://localhost:5173`
- Produção: URL do seu domínio
