import { now } from '../data/content'
import FadeIn from '../components/FadeIn'

export default function Now() {
  return (
    <section id="now" className="py-32 px-8 max-w-6xl mx-auto">

      <FadeIn><div className="divider mb-16" /></FadeIn>

      <FadeIn delay={0.1}>
        <span className="label text-accent mb-6 block">{now.eyebrow}</span>
      </FadeIn>

      <FadeIn delay={0.2} duration={1}>
        <h2
          className="font-serif text-ink mb-16"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
        >
          {now.heading}
        </h2>
      </FadeIn>

      <ul className="flex flex-col gap-8 max-w-xl mb-16">
        {now.items.map((item, i) => (
          <FadeIn key={i} delay={0.2 + i * 0.12}>
            <li className="flex items-start gap-5">
              <span className="italic-serif text-accent text-sm mt-1 w-5 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-sans font-light text-ink text-base leading-relaxed">
                {item}
              </p>
            </li>
          </FadeIn>
        ))}
      </ul>

      <FadeIn delay={0.5}>
        <p className="label text-mist">Last updated — {now.updatedAt}</p>
      </FadeIn>

    </section>
  )
}
