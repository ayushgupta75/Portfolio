# ayushgupta.us

Personal portfolio website — a living document of my work, writing, and life.

**Live →** [ayushgupta.us](https://ayushgupta.us)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| Routing | React Router v6 |
| Hosting | AWS Amplify |
| DNS / CDN | Cloudflare |

---

## Project Structure

```
src/
├── data/                  # All site content — edit here, never in components
│   ├── content.js         # Single source of truth: nav, hero, work, experience, etc.
│   ├── projects.js        # Extended project details (body copy, links)
│   ├── blog.js            # Blog posts
│   └── beyond.js          # Passion / hobby detail pages
│
├── sections/              # Home page sections (rendered in order)
│   ├── Hero.jsx
│   ├── Now.jsx
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Work.jsx
│   ├── Blog.jsx
│   ├── BeyondCode.jsx
│   └── Contact.jsx
│
├── pages/                 # Detail pages (React Router routes)
│   ├── ProjectDetail.jsx  # /work/:slug
│   ├── PostDetail.jsx     # /writing/:slug
│   └── PursuitDetail.jsx  # /beyond/:slug
│
├── components/            # Shared UI primitives
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── CommandBar.jsx     # ⌘K chatbot overlay
│   ├── FadeIn.jsx         # Blur-fade scroll animation wrapper
│   └── ScrollToTop.jsx
│
└── hooks/
    ├── useScrollDirection.js
    └── useActiveSection.js
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Content Editing

**All content lives in `src/data/` — no component files need to be touched.**

| File | What to edit |
|---|---|
| `content.js` | Nav links, hero copy, work projects, experience, education, contact |
| `projects.js` | Per-project detail pages (body copy, GitHub link, demo link) |
| `blog.js` | Blog posts (title, date, body, Medium / LinkedIn links) |
| `beyond.js` | Passion / hobby detail pages (body copy) |

---

## Feature Flags

Toggle features on/off with a single comment in `src/data/content.js`:

```js
export const features = {
  chatbot:    true,  // ← comment out to disable the ⌘K chatbot
  beyondCode: true,  // ← comment out to disable the Passion section + navbar link
}
```

---

## Routes

| Path | Page |
|---|---|
| `/` | Home (all sections) |
| `/work/:slug` | Project detail |
| `/writing/:slug` | Blog post detail |
| `/beyond/:slug` | Passion / hobby detail |

---

## Design System

Custom Tailwind tokens defined in `tailwind.config.js`:

```js
colors: {
  linen:  '#F5F0E8',   // background
  ink:    '#1C1917',   // primary text
  mist:   '#9C9189',   // secondary text
  bronze: '#7D6E63',   // accent
  edge:   '#E2DBD0',   // borders / dividers
}

fonts: {
  serif: 'Playfair Display',   // headings
  sans:  'Inter',              // body
}
```

Global utility classes in `src/index.css`:

| Class | Usage |
|---|---|
| `.label` | Small-caps tracking style for eyebrows and meta text |
| `.divider` | Horizontal rule in `edge` color |
| `.text-accent` | Bronze accent color |
| `.italic-serif` | Playfair Display italic |

---

## Deployment

The site is deployed on **AWS Amplify** with automatic deploys on every push to `main`.

DNS is managed via **Cloudflare** with Full SSL mode. A Cloudflare Worker (`portfolio-router`) handles path-based routing — proxying `/legal-llm/*` to an EC2 instance while serving everything else from Amplify.

---

## License

This is a personal portfolio. The code is open for reference, but the content (copy, images, personal details) belongs to Ayush Gupta.
