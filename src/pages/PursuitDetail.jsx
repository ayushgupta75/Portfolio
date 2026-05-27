import { useParams, useNavigate } from 'react-router-dom'
import { pursuits } from '../data/beyond'
import FadeIn from '../components/FadeIn'
import Navbar from '../components/Navbar'

export default function PursuitDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const pursuit = pursuits.find(p => p.slug === slug)

  if (!pursuit) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linen">
        <p className="label text-mist">Page not found.</p>
      </div>
    )
  }

  return (
    <div className="bg-linen min-h-screen">
      <Navbar />

      <div className="max-w-3xl mx-auto px-8 pt-32 pb-24">

        {/* Back */}
        <FadeIn>
          <button
            onClick={() => navigate(-1)}
            className="label text-mist hover:text-ink transition-colors duration-300 flex items-center gap-2 mb-16"
          >
            ← Back
          </button>
        </FadeIn>

        {/* Icon */}
        <FadeIn delay={0.1}>
          <span className="block mb-4" style={{ fontSize: '2.5rem' }}>{pursuit.icon}</span>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.2} duration={1}>
          <h1
            className="font-serif text-ink mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.05', letterSpacing: '-0.02em' }}
          >
            {pursuit.label}
          </h1>
        </FadeIn>

        {/* Tagline */}
        <FadeIn delay={0.3}>
          <p className="font-sans font-light text-mist text-lg mb-12">
            {pursuit.description}
          </p>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay={0.35}>
          <div className="divider mb-16" />
        </FadeIn>

        {/* Body */}
        <div className="flex flex-col gap-8">
          {pursuit.body.map((para, i) => (
            <FadeIn key={i} delay={0.35 + i * 0.1}>
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
