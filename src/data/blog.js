// ─────────────────────────────────────────
//  BLOG CONTENT — Edit this file to
//  add, edit or remove posts.
// ─────────────────────────────────────────

// export const links = {
//   eyebrow: 'Links',
//   heading: 'Find me on the internet.',
//   items: [
//     { label: 'LinkedIn',  href: 'https://linkedin.com/',   description: 'Professional profile'  },
//     { label: 'GitHub',    href: 'https://github.com/',     description: 'Code & projects'       },
//     { label: 'Medium',    href: 'https://medium.com/',     description: 'Writing & articles'    },
//     { label: 'Twitter',   href: 'https://twitter.com/',    description: 'Thoughts in 280 chars' },
//   ],
// }

export const blogMeta = {
  eyebrow: 'Writing',
  heading: 'Thoughts & ideas.',
}

export const posts = [
  {
    slug:     'legal-agentic-rag',
    title:    'Legal Agentic RAG: How I Built a System That Retrieves US Law With 3x Better Precision Than LlamaIndex',
    date:     'June 2026',
    summary:  'Standard RAG pipelines fail on legal text. Here\'s how I built Constitution Compass — a domain-aware agentic retrieval system over 1.16M legal chunks that outperforms LlamaIndex by 73% in query speed and returns 3x more accurate results.',
    medium:   null,
    linkedin: 'https://www.linkedin.com/pulse/legal-agentic-rag-how-i-built-system-retrieves-us-law-ayush-gupta-nfece/',
    body: [
      'Legal documents have a problem that breaks standard RAG pipelines: meaning lives in specific sections, not scattered throughout the text. When I fed the US Constitution into a conventional token-based chunker, the Fourth Amendment ended up sharing an embedding vector with three other amendments. Ask about unreasonable searches — you get noise. That\'s not a retrieval problem. That\'s a chunking problem.',
      'So I built a custom legal chunker that splits recursively along structural boundaries — Articles, Amendments, Titles, Sections — not arbitrary token limits. Each chunk represents exactly one legal concept. That single decision is what drives the 3x precision improvement over LlamaIndex\'s standard pipeline, which scored zero relevant results on the same Fourth Amendment query where ours returned 10/10.',
      'The system — Constitution Compass — indexes the full body of US federal law: the Constitution, all 54 titles of the US Code, the Code of Federal Regulations, and live case law. 1.16 million chunks, stored in Qdrant (switched from PostgreSQL/pgvector because Qdrant builds and maintains its HNSW index automatically on every upsert, no table locks). For embeddings, I moved off OpenAI\'s API to a locally-hosted all-MiniLM-L6-v2 — zero cost, lower latency, and the superior chunking meant we didn\'t need a larger model to compensate.',
      'Query routing is handled by LangGraph. Simple lookups go straight to vector search at 10.8ms latency. Complex, multi-hop questions — the kind that require reasoning across multiple statutes — get routed to a ReAct agent built with LangChain, which autonomously selects legal APIs and reasons across multiple rounds before answering. The whole thing runs on a t3.small EC2 (2 vCPUs, 2GB RAM) with swap and memory-mapped Qdrant config.',
      'The biggest lesson: chunking is not a preprocessing detail. It is the most consequential decision in a RAG system. General-purpose splitting heuristics are built for general-purpose text. Legal text, medical text, financial filings — these have structure that encodes meaning. Ignore it and your retrieval will be wrong in ways that are hard to debug, because the embeddings look reasonable and the vector search returns results. They\'re just the wrong ones.',
    ],
  },
]
