import { experience } from '../data/content'
import FadeIn from '../components/FadeIn'

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-8 max-w-6xl mx-auto">

      <FadeIn><div className="divider mb-16" /></FadeIn>

      <FadeIn delay={0.1}>
        <span className="label text-accent mb-6 block">{experience.eyebrow}</span>
      </FadeIn>

      <FadeIn delay={0.2} duration={1}>
        <h2
          className="font-serif text-ink mb-16"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
        >
          {experience.heading}
        </h2>
      </FadeIn>

      <ul className="flex flex-col">
        {experience.jobs.map((job, i) => (
          <FadeIn key={i} delay={0.1 * (i + 1)}>
            <li className="flex items-start justify-between py-8 border-b border-edge gap-8">
              <div className="flex items-start gap-6 flex-1">
                <span className="italic-serif text-accent text-sm mt-1 w-6 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3
                    className="font-serif text-ink mb-1"
                    style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', letterSpacing: '-0.01em' }}
                  >
                    {job.company}
                  </h3>
                  <p className="label text-accent mb-3">{job.role}</p>
                  <p className="font-sans font-light text-mist text-sm leading-relaxed max-w-md">
                    {job.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className="italic-serif text-mist text-sm">{job.duration}</span>
                <span className="label text-mist">{job.location}</span>
              </div>
            </li>
          </FadeIn>
        ))}
      </ul>

    </section>
  )
}
