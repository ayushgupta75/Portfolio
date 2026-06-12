// ─────────────────────────────────────────
//  SITE CONTENT — Edit anything here.
//  No need to touch any component files.
// ─────────────────────────────────────────

// ─────────────────────────────────────────
//  FEATURE FLAGS — comment out to disable
// ─────────────────────────────────────────
export const features = {
  // chatbot:    true,  // ← comment this line out to disable chatbot
  // beyondCode: true,  // ← comment this line out to disable Beyond Code section
}

export const site = {
  name:     'Ayush Gupta',
  initials: 'AG',
  tagline:  'I build intelligent systems.',
  subTagline: 'Software Engineer. AI & LLM Builder. Grad student at Virginia Tech.',
  location: 'Blacksburg, VA',
  email:    'ayushguptamtc@gmail.com',
}

export const nav = [
  { label: 'Now',        href: '#now'        },
  { label: 'Experience', href: '#experience' },
  { label: 'Work',       href: '#work'       },
  { label: 'Writing',    href: '#writing'    },
  { label: 'Passion',    href: '#beyond',    feature: 'beyondCode' },
  { label: 'Contact',    href: '#contact'    },
]

export const hero = {
  eyebrow:  'Software Engineer & AI Builder',
  heading:  'Living the life,\none git push at a time.',
  tagline:  'I build agentic systems, RAG pipelines, and production-grade backends — the kind that process millions of records and still ship on time.',
  cta: {
    label: 'See my work',
    href:  '#work',
  },
}
// This is not required
// export const about = {
//   eyebrow:  'About Me',
//   heading:  'A developer who gives a damn.',
//   bio: [
//     'I\'m Ayush — a developer based in India. I build web experiences that are fast, thoughtful, and intentional.',
//     'I believe great software is quiet. It doesn\'t shout — it just works, beautifully.',
//     'This site is a living document of my life, my work, and the things I\'m figuring out along the way.',
//   ],
// }

export const beyondCode = {
  eyebrow: 'Beyond Code',
  heading: 'Life outside the terminal.',
  items: [
    {
      slug:        'photography',
      icon:        '📷',
      label:       'Photography',
      description: 'Finding stillness in a single frame.',
    },
    {
      slug:        'gym',
      icon:        '🏋️',
      label:       'Gym',
      description: 'Discipline that carries into everything.',
    },
    {
      slug:        'reading',
      icon:        '📖',
      label:       'Reading',
      description: 'Ideas that rewire how I think.',
    },
    {
      slug:        'travel',
      icon:        '✈️',
      label:       'Travel',
      description: 'New places, new perspectives.',
    },
    {
      slug:        'gaming',
      icon:        '🎮',
      label:       'Gaming',
      description: 'Strategy, stories, and the occasional rage-quit.',
    },
  ],
}

export const now = {
  eyebrow: 'Now',
  heading: 'What I\'m up to.',
  items: [
    'Finishing my Master\'s in Computer Engineering at Virginia Tech (May 2026).',
    'Teaching Assistant for Computer Systems — mentoring 300+ grad students.',
    'Building agentic AI systems with LangGraph, Claude, and RAG.',
    'Actively looking for full-time Software Engineering roles.',
  ],
  updatedAt: 'June 2026',
}

export const work = {
  eyebrow:  'Work',
  heading:  'Things I\'ve built.',
  projects: [
    {
      slug:        'legal-llm',
      title:       'US Law Research Engine',
      description: 'Production-grade agentic RAG system over the US Constitution and federal codes — 3x more accurate retrieval at 10.8ms latency, outperforming LlamaIndex by 73% in query speed.',
      tags:        ['Python', 'LangGraph', 'Claude AI', 'Qdrant', 'AWS'],
      year:        '2025',
      image:       'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    },
    {
      slug:        'llm-finetuning',
      title:       'LLM Fine-Tuning: Loss-Based Data Selection',
      description: 'Curated 15K high-signal examples from 100K using loss-based difficulty sampling; fine-tuned Qwen2.5-3B with DeepSpeed ZeRO-3 — outperformed random selection by 34.2 points on MATH-500.',
      tags:        ['PyTorch', 'Qwen2.5-3B', 'DeepSpeed', 'HuggingFace'],
      year:        '2025',
      image:       'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
    },
    {
      slug:        'market-prediction',
      title:       'Financial Market Prediction & Backtesting Engine',
      description: 'End-to-end ML pipeline over OHLCV, fundamentals, and news signals with leakage-safe feature engineering, deployed as a FastAPI inference service with model versioning and API-triggered retraining.',
      tags:        ['PyTorch', 'scikit-learn', 'MLflow', 'FastAPI', 'Docker'],
      year:        '2024',
      image:       'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    },
  ],
}

export const experience = {
  eyebrow: 'Experience',
  heading: 'Where I\'ve worked.',
  jobs: [
    {
      company:     'Virginia Tech',
      role:        'Graduate Teaching Assistant – Computer Systems',
      duration:    'Jan 2025 — May 2026',
      location:    'Blacksburg, VA',
      description: 'Mentored 300+ graduate students through assembly-level programming, packet analysis, and performance-related system concepts.',
    },
    {
      company:     'Clearwater Analytics',
      role:        'Software Engineer',
      duration:    'May 2022 — Aug 2024',
      location:    'Remote',
      description: 'Built RAG pipelines over financial records, decomposed a monolithic reconciliation service into microservices processing 1M+ securities/day, and cut reconciliation time from 2 hours to 45 minutes.',
    },
    {
      company:     'Cognizant',
      role:        'Programmer Analyst',
      duration:    'Jul 2020 — May 2022',
      location:    'On-site',
      description: 'Optimized transaction-retrieval APIs reducing p95 latency by 20%, built a GraphQL shipment-tracking module saving 20 hrs/month, and containerized microservices cutting deployment time by 78%.',
    },
  ],
}

export const education = {
  eyebrow: 'Education',
  heading: 'Where I\'ve studied.',
  schools: [
    {
      school:   'Virginia Tech',
      degree:   'Master\'s in Computer Engineering',
      duration: 'Aug 2024 — May 2026',
      location: 'Blacksburg, VA',
      gpa:      '3.9 / 4.0',
    },
    {
      school:   'VIT University',
      degree:   'Bachelor of Technology, ECE',
      duration: 'Jul 2016 — May 2020',
      location: 'Vellore, India',
    },
  ],
}

export const contact = {
  eyebrow:  'Contact',
  heading:  'Let\'s talk.',
  body:     'Whether it\'s a role, a project, or just a hello — my inbox is open.',
  email:    'ayushguptamtc@gmail.com',
  socials: [
    { label: 'GitHub',   href: 'https://github.com/ayushgupta75' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/guptaayush75' },
  ],
}
