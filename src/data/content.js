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
  tagline:  'I build things for the web.',
  subTagline: 'Developer. Craftsman. Lifelong learner.',
  location: 'United States',
  email:    'ayushguptakonto@gmail.com',
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
  eyebrow:  'Developer & Builder',
  heading:  'Living the life,\none git push at a time.',
  tagline:  'I care about the details — the ones most people skip.',
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
    'Building this portfolio — one section at a time.',
    'Exploring new system design patterns.',
    'Reading, thinking, and building more.',
  ],
  updatedAt: 'May 2026',
}

export const work = {
  eyebrow:  'Work',
  heading:  'Things I\'ve built.',
  projects: [
    {
      slug:        'legal-llm',
      title:       'legal-llm',
      description: 'A short description of what this project is and why it matters.',
      tags:        ['React', 'Node.js'],
      year:        '2025',
      image:       'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    },
    {
      slug:        'project-two',
      title:       'Project Two',
      description: 'A short description of what this project is and why it matters.',
      tags:        ['Vite', 'Tailwind'],
      year:        '2025',
      image:       'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&q=80',
    },
  ],
}

export const experience = {
  eyebrow: 'Experience',
  heading: 'Where I\'ve worked.',
  jobs: [
    {
      company:     'Company One',
      role:        'Software Engineer',
      duration:    '2024 — Present',
      location:    'Remote',
      description: 'A short line about what you did and the impact you made.',
    },
    {
      company:     'Company Two',
      role:        'Frontend Developer',
      duration:    '2023 — 2024',
      location:    'On-site',
      description: 'A short line about what you did and the impact you made.',
    },
  ],
}

export const education = {
  eyebrow: 'Education',
  heading: 'Where I\'ve studied.',
  schools: [
    {
      school:   'University One',
      degree:   'Bachelor of Science in Computer Science',
      duration: '2019 — 2023',
      location: 'City, State',
    },
    {
      school:   'School Two',
      degree:   'High School Diploma',
      duration: '2015 — 2019',
      location: 'City, State',
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
    // { label: 'Twitter',  href: 'https://twitter.com/' },
  ],
}
