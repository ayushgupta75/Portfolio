import { site, nav } from '../data/content'
import useScrollDirection from '../hooks/useScrollDirection'
import useActiveSection from '../hooks/useActiveSection'

const SECTION_IDS = nav.map(({ href }) => href.replace('#', ''))

export default function Navbar() {
  const { scrollDir, atTop } = useScrollDirection()
  const active = useActiveSection(SECTION_IDS)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-edge"
      style={{
        backgroundColor: '#F5F0E8',
        transition: 'box-shadow 0.3s ease',
        boxShadow: atTop ? 'none' : '0 1px 20px rgba(28,25,23,0.06)',
      }}
    >
      <nav className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* Logo / Name */}
        <a href="#" className="font-serif text-lg text-ink tracking-wide">
          {site.name}
        </a>

        {/* Nav Links */}
        <ul className="flex items-center gap-10">
          {nav.map(({ label, href }) => {
            const id = href.replace('#', '')
            const isActive = active === id
            return (
              <li key={label}>
                <a
                  href={href}
                  className="label transition-colors duration-300"
                  style={{ color: isActive ? '#1C1917' : '#9C9189' }}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

      </nav>
    </header>
  )
}
