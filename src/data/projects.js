// ─────────────────────────────────────────
//  PROJECT DETAILS — Edit this file to
//  update individual project pages.
//  Each slug must match the one in content.js
// ─────────────────────────────────────────

export const projectDetails = {
  'legal-llm': {
    github:  'https://github.com/ayushgupta75',
    demo:    'https://ayushgupta.us/legal-llm/',
    body: [
      'Built a production-grade agentic RAG system over the US Constitution and federal codes. The core challenge was legal text: dense, hierarchical, and full of cross-references that naive chunkers butcher. I designed a domain-aware legal chunker that respects section boundaries, which is why retrieval is 3x more accurate than off-the-shelf approaches.',
      'The system uses a LangGraph query router that classifies incoming queries and routes them accordingly — simple lookups go straight to Qdrant vector search at 10.8ms latency, while complex multi-hop questions get handed off to a ReAct agent built with LangChain. The agent can call legal APIs autonomously across multiple reasoning rounds before producing an answer.',
      'Benchmarked against LlamaIndex\'s standard pipeline and outperformed it by 73% in query speed. The real win wasn\'t just speed — it was that the answers were actually grounded in the right sections of law, not hallucinated summaries.',
    ],
  },

  'llm-finetuning': {
    github:  'https://github.com/ayushgupta75',
    demo:    null,
    body: [
      'The premise: not all training data is equally useful. Instead of fine-tuning on the full 100K dataset, I used per-sample loss as a proxy for difficulty — selecting only examples where the model\'s loss fell in the 25th–75th percentile. Too easy and the model learns nothing; too hard and it can\'t generalize. The middle band is the signal.',
      'Fine-tuned Qwen2.5-3B-Instruct using DeepSpeed ZeRO-3 across A100 GPUs. The loss-selected model (trained on 15K examples) outperformed the randomly-sampled baseline by 34.2 percentage points on MATH-500 — a significant gap for a pure data-curation intervention with no architecture changes.',
      'Also evaluated across GPQA-Diamond and MMLU to study specialization trade-offs. The findings validate data-centric approaches to LLM fine-tuning: curating what you train on matters as much as how you train.',
    ],
  },

  'market-prediction': {
    github:  'https://github.com/ayushgupta75',
    demo:    null,
    body: [
      'An end-to-end financial ML pipeline built for reproducibility and production use. It ingests OHLCV price data, fundamentals, and news signals for a configurable universe of 10–100+ tickers, performs leakage-safe feature engineering (no future data bleeds into training windows), and generates labels for a tunable 1–5 day forecast horizon.',
      'The best-performing model is deployed as a FastAPI REST inference service with model versioning and reloadable artifacts. An API-triggered retraining workflow means you can retrain on new data without redeploying — experiments are reproducible and the production model can be updated safely.',
      'The emphasis throughout was on correctness: financial ML is notoriously easy to overfit by accidentally leaking future information. Every preprocessing step is designed to be strictly causal.',
    ],
  },
}
