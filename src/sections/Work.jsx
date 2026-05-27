import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { work } from '../data/content'
import FadeIn from '../components/FadeIn'

function ProjectRow({ project }) {
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()

  return (
    <FadeIn delay={0.1 * project.index}>
      <li
        className="group relative cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => navigate(`/work/${project.slug}`)}
      >
        <div className="flex items-start justify-between py-8 border-b border-edge gap-8">

          {/* Left — index + title + description */}
          <div className="flex items-start gap-6 flex-1">
            <span className="italic-serif text-accent text-sm mt-1 w-6 shrink-0">
              {String(project.index).padStart(2, '0')}
            </span>
            <div>
              <h3
                className="font-serif text-ink mb-2 transition-colors duration-300 group-hover:text-accent"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', letterSpacing: '-0.01em' }}
              >
                {project.title}
              </h3>
              <p className="font-sans font-light text-mist text-sm leading-relaxed max-w-md">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="label text-mist border border-edge px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — year + arrow */}
          <div className="flex flex-col items-end gap-4 shrink-0">
            <span className="italic-serif text-mist text-sm">{project.year}</span>
            <span
              className="label text-accent opacity-0 group-hover:opacity-100"
              style={{ transition: 'opacity 0.3s ease' }}
            >
              View →
            </span>
          </div>

          {/* Hover image */}
          {project.image && (
            <div
              className="absolute right-24 top-1/2 -translate-y-1/2 w-52 h-36 overflow-hidden rounded pointer-events-none z-10 shadow-lg"
              style={{
                opacity: hovered ? 1 : 0,
                transform: `translateY(-50%) scale(${hovered ? 1 : 0.95})`,
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          )}
        </div>
      </li>
    </FadeIn>
  )
}

export default function Work() {
  return (
    <section id="work" className="py-32 px-8 max-w-6xl mx-auto">

      <FadeIn><div className="divider mb-16" /></FadeIn>

      <FadeIn delay={0.1}>
        <span className="label text-accent mb-6 block">{work.eyebrow}</span>
      </FadeIn>

      <FadeIn delay={0.2} duration={1}>
        <h2
          className="font-serif text-ink mb-16"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
        >
          {work.heading}
        </h2>
      </FadeIn>

      <ul className="flex flex-col">
        {work.projects.map((project, i) => (
          <ProjectRow key={project.slug} project={{ ...project, index: i + 1 }} />
        ))}
      </ul>

    </section>
  )
}
