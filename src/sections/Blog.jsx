import { useNavigate } from 'react-router-dom'
import { blogMeta, posts } from '../data/blog'
import FadeIn from '../components/FadeIn'

export default function Blog() {
  const navigate = useNavigate()

  return (
    <section id="writing" className="py-32 px-8 max-w-6xl mx-auto">

      <FadeIn><div className="divider mb-16" /></FadeIn>

      <FadeIn delay={0.1}>
        <span className="label text-accent mb-6 block">{blogMeta.eyebrow}</span>
      </FadeIn>

      <FadeIn delay={0.2} duration={1}>
        <h2
          className="font-serif text-ink mb-16"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
        >
          {blogMeta.heading}
        </h2>
      </FadeIn>

      <ul className="flex flex-col">
        {posts.map((post, i) => (
          <FadeIn key={post.slug} delay={0.1 * (i + 1)}>
            <li
              className="group flex items-start justify-between py-8 border-b border-edge gap-8 cursor-pointer"
              onClick={() => navigate(`/writing/${post.slug}`)}
            >
              {/* Left — title + summary */}
              <div className="flex items-start gap-6 flex-1">
                <span className="italic-serif text-accent text-sm mt-1 w-6 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3
                    className="font-serif text-ink mb-2 transition-colors duration-300 group-hover:text-accent"
                    style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', letterSpacing: '-0.01em' }}
                  >
                    {post.title}
                  </h3>
                  <p className="font-sans font-light text-mist text-sm leading-relaxed max-w-md">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Right — date + arrow */}
              <div className="flex flex-col items-end gap-4 shrink-0">
                <span className="italic-serif text-mist text-sm">{post.date}</span>
                <span
                  className="label text-accent opacity-0 group-hover:opacity-100"
                  style={{ transition: 'opacity 0.3s ease' }}
                >
                  Read →
                </span>
              </div>
            </li>
          </FadeIn>
        ))}
      </ul>

    </section>
  )
}
