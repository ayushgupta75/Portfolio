// ─────────────────────────────────────────
//  SITE CONTENT — Edit anything here.
//  No need to touch any component files.
// ─────────────────────────────────────────

export const site = {
  name:     'Ayush Gupta',
  initials: 'AG',
  tagline:  'I build things for the web.',
  subTagline: 'Developer. Craftsman. Lifelong learner.',
  location: 'India',
  email:    'ayushguptakonto@gmail.com',
}

export const nav = [
  { label: 'Work',    href: '#work'    },
  { label: 'Now',     href: '#now'     },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow:  'Developer & Builder',
  heading:  'Living the life,\none git push at a time.',
  tagline:  'I care about the details — the ones most people skip.',
  cta: {
    label: 'See my work',
    href:  '#work',
  },
}

export const about = {
  eyebrow:  'About Me',
  heading:  'A developer who gives a damn.',
  bio: [
    'I\'m Ayush — a developer based in India. I build web experiences that are fast, thoughtful, and intentional.',
    'I believe great software is quiet. It doesn\'t shout — it just works, beautifully.',
    'This site is a living document of my life, my work, and the things I\'m figuring out along the way.',
  ],
}

export const now = {
  eyebrow: 'Now',
  heading: 'What I\'m up to.',
  items: [
    'Building this portfolio — one section at a time.',
    'Exploring new system design patterns.',
    'Reading, thinking, and writing more.',
  ],
  updatedAt: 'May 2026',
}

export const work = {
  eyebrow:  'Work',
  heading:  'Things I\'ve built.',
  projects: [
    {
      title:       'Project One',
      description: 'A short description of what this project is and why it matters.',
      tags:        ['React', 'Node.js'],
      link:        '#',
      year:        '2025',
      image:       'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    },
    {
      title:       'Project Two',
      description: 'A short description of what this project is and why it matters.',
      tags:        ['Vite', 'Tailwind'],
      link:        '#',
      year:        '2025',
      image:       'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&q=80',
    },
  ],
}

export const contact = {
  eyebrow:  'Contact',
  heading:  'Let\'s talk.',
  body:     'Whether it\'s a project, an idea, or just a hello — my inbox is open.',
  email:    'ayushguptamtc@gmail.com',
  socials: [
    { label: 'GitHub',   href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'Twitter',  href: 'https://twitter.com/' },
  ],
}
