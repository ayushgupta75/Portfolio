# Portfolio Starter

This is a static portfolio starter organized for long-term growth, with a clean separation between app bootstrapping, UI components, editable content data, utilities, styles, and a future backend boundary for RAG.

## Structure

- `index.html`: page shell
- `src/app/`: app startup and boot logic
- `src/components/`: common UI, layout, and section renderers
- `src/data/`: portfolio content split by domain
- `src/utils/`: DOM and animation helpers
- `src/styles/`: CSS tokens, layout, components, and sections
- `docs/`: architecture notes
- `server/`: reserved for future LangChain and RAG backend work

## Customize

1. Replace the sample content in `src/data/`.
2. Adjust colors and spacing in `src/styles/`.
3. Add new sections in `src/components/sections/` and compose them in `src/components/pages/HomePage.js`.

## Run locally

Because the site uses JavaScript modules, serve it with a small local server instead of opening `index.html` directly as a file.

Example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish

You can deploy this on GitHub Pages, Netlify, Vercel, or any static hosting service.
