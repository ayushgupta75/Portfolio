import { useParams, useNavigate } from 'react-router-dom'
import { work } from '../data/content'
import { projectDetails } from '../data/projects'
import FadeIn from '../components/FadeIn'
import Navbar from '../components/Navbar'

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const project = work.projects.find(p => p.slug === slug)
  const details  = projectDetails[slug]

  if (!project || !details) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linen">
        <p className="label text-mist">Project not found.</p>
      </div>
    )
  }

  return (
    <div className="bg-linen min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-8 pt-32 pb-24">

        {/* Back */}
        <FadeIn>
          <button
            onClick={() => navigate(-1)}
            className="label text-mist hover:text-ink transition-colors duration-300 flex items-center gap-2 mb-16"
          >
            ← Back
          </button>
        </FadeIn>

        {/* Eyebrow — year */}
        <FadeIn delay={0.1}>
          <span className="label text-accent mb-4 block">{project.year}</span>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.2} duration={1}>
          <h1
            className="font-serif text-ink mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.05', letterSpacing: '-0.02em' }}
          >
            {project.title}
          </h1>
        </FadeIn>

        {/* Tags */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-3 mb-10">
            {project.tags.map(tag => (
              <span key={tag} className="label text-mist border border-edge px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Links — always visible */}
        <FadeIn delay={0.35}>
          <div className="flex items-center gap-8 mb-16">
            <a
              href={details.github}
              target="_blank"
              rel="noopener noreferrer"
              className="label text-mist hover:text-ink transition-colors duration-300"
            >
              GitHub ↗
            </a>
            <a
              href={details.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="label text-accent hover:text-ink transition-colors duration-300"
            >
              Live Demo ↗
            </a>
          </div>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay={0.4}>
          <div className="divider mb-16" />
        </FadeIn>

        {/* Image */}
        {project.image && (
          <FadeIn delay={0.45}>
            <div className="w-full h-72 overflow-hidden rounded mb-16">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          </FadeIn>
        )}

        {/* Body — paragraphs */}
        <div className="flex flex-col gap-6">
          {details.body.map((para, i) => (
            <FadeIn key={i} delay={0.5 + i * 0.1}>
              <p className="font-sans font-light text-ink text-lg leading-relaxed">
                {para}
              </p>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  )
}
