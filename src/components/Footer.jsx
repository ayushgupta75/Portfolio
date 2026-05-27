import { site } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-8 py-10 max-w-6xl mx-auto">

      {/* Top divider */}
      <div className="divider mb-8" />

      <div className="flex items-center justify-between">

        {/* Left — name */}
        <span className="label text-mist">
          {site.name} © {year}
        </span>

        {/* Right — credit */}
        <span className="label text-mist">
          Designed & Built by me
        </span>

      </div>

    </footer>
  )
}
