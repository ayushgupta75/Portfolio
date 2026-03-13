# Future RAG Backend

This folder is reserved for the backend layer that will power resume-based RAG later.

Suggested next additions:

- `api/`: chat and retrieval endpoints
- `rag/loaders/`: PDF and document loaders
- `rag/chains/`: LangChain chains and orchestration
- `rag/vectorstore/`: embeddings and retrieval storage
- `lib/`: environment and shared backend helpers

Keep the retrieval logic here, not in the frontend modules.
