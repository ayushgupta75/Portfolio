import { contact } from '../data/content'
import FadeIn from '../components/FadeIn'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 max-w-6xl mx-auto">

      <FadeIn><div className="divider mb-16" /></FadeIn>

      <FadeIn delay={0.1}>
        <span className="label text-accent mb-6 block">{contact.eyebrow}</span>
      </FadeIn>

      <FadeIn delay={0.2} duration={1}>
        <h2
          className="font-serif text-ink mb-8"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
        >
          {contact.heading}
        </h2>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="font-sans font-light text-mist text-lg leading-relaxed max-w-md mb-12">
          {contact.body}
        </p>
      </FadeIn>

      <FadeIn delay={0.4}>
        <a
          href={`mailto:${contact.email}`}
          className="font-serif italic-serif text-ink hover:text-accent transition-colors duration-300 block mb-16"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
        >
          {contact.email}
        </a>
      </FadeIn>

      <FadeIn delay={0.5}>
        <div className="divider mb-10" />
      </FadeIn>

      <FadeIn delay={0.6}>
        <ul className="flex items-center gap-10">
          {contact.socials.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="label text-mist hover:text-ink transition-colors duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>

    </section>
  )
}
