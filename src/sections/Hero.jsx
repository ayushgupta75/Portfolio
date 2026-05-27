import { hero } from '../data/content'
import FadeIn from '../components/FadeIn'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 max-w-6xl mx-auto">

      {/* Eyebrow label */}
      <FadeIn delay={0.1}>
        <span className="label text-accent mb-6 block">
          {hero.eyebrow}
        </span>
      </FadeIn>

      {/* Main heading */}
      <FadeIn delay={0.25} duration={1}>
        <h1
          className="font-serif text-ink mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: '1.05', letterSpacing: '-0.02em' }}
        >
          {hero.heading.split('\n').map((line, i) => (
            <span key={i} className="block">
              {i === 1
                ? <em style={{ fontStyle: 'italic' }}>{line}</em>
                : line
              }
            </span>
          ))}
        </h1>
      </FadeIn>

      {/* Divider */}
      <FadeIn delay={0.45}>
        <div className="divider w-16 mb-6" />
      </FadeIn>

      {/* Tagline */}
      <FadeIn delay={0.55}>
        <p className="font-sans font-light text-mist text-lg tracking-wide max-w-md mb-10">
          {hero.tagline}
        </p>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.7}>
        <a
          href={hero.cta.href}
          className="label text-accent hover:text-ink transition-colors duration-300 flex items-center gap-3 w-fit"
        >
          {hero.cta.label}
          <span className="text-base">↓</span>
        </a>
      </FadeIn>

    </section>
  )
}
