import { useParams, useNavigate } from 'react-router-dom'
import { posts } from '../data/blog'
import FadeIn from '../components/FadeIn'
import Navbar from '../components/Navbar'

export default function PostDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linen">
        <p className="label text-mist">Post not found.</p>
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

        {/* Date */}
        <FadeIn delay={0.1}>
          <span className="label text-accent mb-4 block">{post.date}</span>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.2} duration={1}>
          <h1
            className="font-serif text-ink mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.05', letterSpacing: '-0.02em' }}
          >
            {post.title}
          </h1>
        </FadeIn>

        {/* Links */}
        {(post.medium || post.linkedin) && (
          <FadeIn delay={0.3}>
            <div className="flex items-center gap-8 mb-10">
              {post.medium && (
                <a
                  href={post.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label text-mist hover:text-ink transition-colors duration-300"
                >
                  Read on Medium ↗
                </a>
              )}
              {post.linkedin && (
                <a
                  href={post.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label text-accent hover:text-ink transition-colors duration-300"
                >
                  Read on LinkedIn ↗
                </a>
              )}
            </div>
          </FadeIn>
        )}

        {/* Divider */}
        <FadeIn delay={0.35}>
          <div className="divider mb-16" />
        </FadeIn>

        {/* Body */}
        <div className="flex flex-col gap-8">
          {post.body.map((para, i) => (
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
