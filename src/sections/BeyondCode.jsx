import { useNavigate } from 'react-router-dom'
import { beyondCode } from '../data/content'
import FadeIn from '../components/FadeIn'

export default function BeyondCode() {
  const navigate = useNavigate()

  return (
    <section id="beyond" className="py-32 px-8 max-w-6xl mx-auto">

      {/* Eyebrow */}
      <FadeIn>
        <span className="label text-accent mb-6 block">{beyondCode.eyebrow}</span>
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0.1} duration={1}>
        <h2
          className="font-serif text-ink mb-16"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
        >
          {beyondCode.heading}
        </h2>
      </FadeIn>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-edge">
        {beyondCode.items.map((item, i) => (
          <FadeIn key={item.label} delay={0.1 + i * 0.08}>
            <div
              onClick={() => navigate(`/beyond/${item.slug}`)}
              className="bg-linen px-6 py-8 flex flex-col gap-3 h-full cursor-pointer group transition-colors duration-300 hover:bg-edge"
            >
              <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
              <span className="font-serif text-ink text-lg group-hover:text-accent transition-colors duration-300">
                {item.label}
              </span>
              <p className="font-sans font-light text-mist text-sm leading-relaxed">
                {item.description}
              </p>
              <span className="label text-accent mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Read more →
              </span>
            </div>
          </FadeIn>
        ))}
      </div>

    </section>
  )
}
