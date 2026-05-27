import { useState, useEffect } from 'react'

/**
 * Tracks which section is currently in view.
 * Pass an array of section ids e.g. ['work', 'now', 'contact']
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )

      observer.observe(el)
      return observer
    })

    return () => observers.forEach((o) => o?.disconnect())
  }, [ids])

  return active
}
