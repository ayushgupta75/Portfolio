# Portfolio Architecture

## Frontend

- `src/app/`: app startup and bootstrapping
- `src/components/`: reusable layout, common UI, and page sections
- `src/data/`: editable portfolio content
- `src/utils/`: DOM and animation helpers
- `src/styles/`: design tokens, layout, components, and section styling

## Future RAG Boundary

- `server/` is the future backend boundary for resume ingestion, embeddings, retrieval, and chat APIs.
- The frontend should only call backend endpoints and render responses.
- Resume files can later live under `public/` or a storage layer, but retrieval orchestration should stay server-side.
