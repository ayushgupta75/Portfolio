// ─────────────────────────────────────────
//  BLOG CONTENT — Edit this file to
//  add, edit or remove posts.
// ─────────────────────────────────────────

export const links = {
  eyebrow: 'Links',
  heading: 'Find me on the internet.',
  items: [
    { label: 'LinkedIn',  href: 'https://linkedin.com/',   description: 'Professional profile'  },
    { label: 'GitHub',    href: 'https://github.com/',     description: 'Code & projects'       },
    { label: 'Medium',    href: 'https://medium.com/',     description: 'Writing & articles'    },
    { label: 'Twitter',   href: 'https://twitter.com/',    description: 'Thoughts in 280 chars' },
  ],
}

export const blogMeta = {
  eyebrow: 'Writing',
  heading: 'Thoughts & ideas.',
}

export const posts = [
  {
    slug:    'first-post',
    title:   'This is my first post.',
    date:    'May 2026',
    summary: 'A short summary of what this post is about. One or two lines max.',
    medium:  '#',   // ← add Medium article URL (or null to hide)
    linkedin: '#',  // ← add LinkedIn post URL (or null to hide)
    body: [
      'This is the first paragraph of your post. Write whatever you want here — thoughts, learnings, opinions, stories.',
      'This is the second paragraph. Keep going. There are no rules.',
      'This is the third paragraph. End with something worth remembering.',
    ],
  },
  {
    slug:    'on-building-things',
    title:   'On building things.',
    date:    'April 2026',
    summary: 'A short summary of what this post is about. One or two lines max.',
    medium:  '#',   // ← add Medium article URL (or null to hide)
    linkedin: '#', // ← no LinkedIn post for this
    body: [
      'This is the first paragraph of your post. Write whatever you want here — thoughts, learnings, opinions, stories.',
      'This is the second paragraph. Keep going. There are no rules.',
      'This is the third paragraph. End with something worth remembering.',
    ],
  },
]
