# Portfolio Architecture

## Frontend

- `src/react/`: React application (entry point `main.jsx`)
- `src/react/components/common/`: base reusable components (Button, Link, SectionHeading, Reveal, TagList)
- `src/react/components/features/`: section-specific card components (HeroCard, ExperienceCard, ProjectCard, etc.)
- `src/react/components/layout/`: structural layout components (PageShell, Header, Navigation, Main, Footer)
- `src/react/components/sections/`: top-level page sections composed from feature cards
- `src/data/`: editable portfolio content
- `src/styles/`: design tokens, element resets, and breakpoint mixins

## Future RAG Boundary

- `server/` is the future backend boundary for resume ingestion, embeddings, retrieval, and chat APIs.
- The frontend should only call backend endpoints and render responses.
- Resume files can later live under `public/` or a storage layer, but retrieval orchestration should stay server-side.
