# Portfolio Starter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-yellow?logo=javascript)](https://www.javascript.com/)
[![HTML5](https://img.shields.io/badge/HTML-5-E34C26?logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)

A modern, modular portfolio starter built with vanilla JavaScript and CSS. Designed for professional customization, rapid deployment, and future extensibility with AI-powered resume retrieval (RAG).

**Perfect for:** developers, designers, product managers, and other professionals who want a clean, maintainable portfolio without framework overhead.

## ✨ Features

- **Zero-dependency frontend** — Vanilla JavaScript, HTML5, and CSS3 only
- **Data-driven architecture** — Separate content from presentation; edit `src/data/` without touching components
- **Design token system** — Centralized color and spacing tokens for rapid theming
- **Responsive & accessible** — Mobile-first responsive design with semantic HTML
- **Module-based structure** — Easy to add, remove, or reorder portfolio sections
- **RAG-ready backend boundary** — Planned LangChain integration for resume-based AI chat
- **Deployment-ready** — Works on GitHub Pages, Netlify, Vercel, or any static host
- **Performance optimized** — No build step required; instant startup and zero runtime bloat

## 📦 Project Structure

```
.
├── index.html              # Page entry point
├── src/
│   ├── app/               # Application bootstrapping
│   │   ├── boot.js       # Initialization and DOM mounting
│   │   └── main.js       # Entry point
│   ├── components/        # Reusable UI components
│   │   ├── common/       # Base components (Button, Link, SectionHeading)
│   │   ├── layout/       # Layout components (Navigation)
│   │   ├── pages/        # Page compositions (HomePage)
│   │   └── sections/     # Section renderers (Hero, About, Experience, etc.)
│   ├── data/             # 📝 Editable portfolio content
│   │   ├── site.js       # Main data aggregator
│   │   ├── hero.js       # Hero section content
│   │   ├── about.js      # About section content
│   │   ├── experience.js # Work experience entries
│   │   ├── education.js  # Education entries
│   │   ├── projects.js   # Project showcase data
│   │   ├── contact.js    # Contact information
│   │   └── navigation.js # Navigation menu items
│   ├── utils/            # Helper functions
│   │   ├── dom.js        # DOM manipulation utilities
│   │   └── animation.js  # Animation helpers
│   └── styles/           # CSS organization
│       ├── tokens.css    # Design system (colors, spacing, fonts)
│       ├── base.css      # Element resets and defaults
│       ├── layout.css    # Layout structure and grid
│       ├── components.css # Component-specific styles
│       ├── sections.css  # Section-specific styles
│       ├── utilities.css # Utility classes
│       └── main.css      # Master stylesheet import
├── server/               # 🚀 Reserved for RAG backend (future)
├── docs/                 # Documentation
│   └── architecture.md   # Architecture and design decisions
└── README.md             # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ (for local development) or Python 3.6+ (alternative)
- A modern web browser

### Installation & Local Development

```bash
# Clone the repository
git clone <your-repo-url>
cd Portfolio

# Option 1: Using Python (built-in on macOS/Linux)
python3 -m http.server 8000

# Option 2: Using Node.js with http-server
npx http-server

# Option 3: Using Node.js with live-server (auto-refresh)
npx live-server
```

Open your browser to `http://localhost:8000` and start developing.

## ✏️ Customization Guide

### 1. **Update Your Content**

All portfolio content is in `src/data/`. Edit these files to personalize your site:

```javascript
// src/data/hero.js
export const heroData = {
  greeting: "Hi, I'm [Your Name]",
  tagline: "Your profession and expertise",
  cta: "View My Work",
};

// src/data/about.js
export const aboutData = {
  headline: "About Me",
  paragraphs: ["Your bio here..."],
};

// src/data/experience.js
export const experienceData = [
  {
    company: "Company Name",
    role: "Job Title",
    startDate: "Jan 2023",
    endDate: "Present",
    description: "What you did...",
  },
];

// Similar structure for education.js, projects.js, contact.js
```

### 2. **Customize the Design**

Update colors, fonts, and spacing in `src/styles/tokens.css`:

```css
:root {
  /* Colors */
  --color-primary: #3b82f6;
  --color-secondary: #1f2937;
  --color-accent: #f59e0b;
  --color-background: #ffffff;
  --color-text: #111827;

  /* Typography */
  --font-serif: "Fraunces", serif;
  --font-sans: "Space Grotesk", sans-serif;
  --font-size-base: 16px;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
}
```

### 3. **Add New Sections**

1. Create a new section renderer in `src/components/sections/`:

```javascript
// src/components/sections/MyNewSection.js
import { renderSectionHeading } from "../common/SectionHeading.js";

export const renderMyNewSection = (data) => `
  <section class="my-new-section">
    ${renderSectionHeading(data.title)}
    <div class="section-content">
      ${data.content}
    </div>
  </section>
`;
```

2. Add data in `src/data/myNewSection.js`
3. Import and compose in `src/components/pages/HomePage.js`
4. Add to the data aggregator in `src/data/site.js`

### 4. **Modify Navigation**

Edit `src/data/navigation.js` to add or remove navigation links:

```javascript
export const navigationData = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
```

## 🌐 Deployment

### GitHub Pages

1. Push code to a GitHub repository
2. Go to **Settings → Pages**
3. Select "Deploy from branch" and choose your branch
4. Your site is live at `https://yourusername.github.io/Portfolio`

### Netlify

```bash
# Drag and drop the project folder into Netlify
# Or connect your Git repo for continuous deployment
```

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Traditional Hosting

Upload all files (except `node_modules/` if any) to your hosting provider's public directory.

## 🤖 Future Work: AI-Powered Resume Retrieval (RAG)

The project is architected to scale with backend capabilities. The `server/` directory is reserved for the following planned features:

### Phase 1: Backend Foundation (Q3 2026)
- [ ] **Document Processing**: PDF and text resume parsers
- [ ] **Vector Embeddings**: Integration with OpenAI or Hugging Face embeddings
- [ ] **Vector Store**: ChromaDB or Pinecone for embeddings storage
- [ ] **REST API Endpoints**: `/api/chat` and `/api/retrieve` endpoints

### Phase 2: RAG System (Q4 2026)
- [ ] **LangChain Integration**: Resume-based retrieval chains
- [ ] **Semantic Search**: Query resume content by meaning, not just keywords
- [ ] **Context Augmentation**: Retrieve relevant resume sections for chat responses
- [ ] **Memory Management**: Conversation history and context windows

### Phase 3: Frontend Chat UI (Q1 2027)
- [ ] **Chat Component**: Interactive chat widget in the portfolio
- [ ] **Real-time Streaming**: SSE or WebSocket for streaming responses
- [ ] **Context Awareness**: Surface relevant resume sections with citations
- [ ] **Analytics**: Track common questions and user engagement

### Architecture Overview (Future)

```
Frontend (Current)          Backend (Future)
┌──────────────────┐       ┌────────────────────┐
│ Portfolio Site   │──────→│ REST API (FastAPI) │
│ - Chat Widget    │←──────│ - /api/chat        │
│ - Forms          │       │ - /api/retrieve    │
└──────────────────┘       └────────────────────┘
                                  │
                           ┌──────┴──────┐
                           │             │
                      ┌────▼───┐   ┌────▼────┐
                      │ Vector  │   │ LangChain
                      │ Store   │   │ Chains
                      │(Chroma) │   │(RAG)
                      └────┬────┘   └────┬─────┘
                           │             │
                      ┌────▼─────────────▼────┐
                      │  Resume Documents      │
                      │  + Embeddings          │
                      └────────────────────────┘
```

## 📚 Documentation

- [Architecture Guide](docs/architecture.md) — Design decisions and component relationships
- [Component API](src/components/) — Self-documenting component modules
- [Data Structure](src/data/) — Portfolio content schema

## 🛠️ Development

### Code Standards

- **JavaScript**: ES2020+ with no transpilation needed
- **CSS**: CSS Grid and Flexbox for layout; custom properties for theming
- **HTML**: Semantic HTML5 with proper ARIA labels
- **Performance**: <50KB total bundle size; <100ms FCP

### Git Workflow

```bash
# Create a feature branch
git checkout -b feature/add-testimonials

# Make changes, commit
git add .
git commit -m "feat: add testimonials section"

# Push and open a pull request
git push origin feature/add-testimonials
```

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository
2. **Create a feature branch**: `git checkout -b feature/your-feature`
3. **Make changes** and test locally
4. **Commit** with clear messages: `git commit -m "feat: describe your change"`
5. **Push** to your fork: `git push origin feature/your-feature`
6. **Open a Pull Request** with a description of your changes

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

You are free to use, modify, and distribute this starter for personal or commercial projects.

## 💬 Questions & Support

- **Issues**: Open an [issue](../../issues) for bugs or feature requests
- **Discussions**: Start a [discussion](../../discussions) for questions
- **Contact**: Reach out through the contact section in the portfolio

---

**Built with ❤️ for professionals who want a portfolio that grows with them.**
