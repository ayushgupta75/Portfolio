import { useState, useEffect } from 'react'

/**
 * Returns 'up' or 'down' based on scroll direction.
 * Also returns `atTop` — true when page is near the top.
 */
export default function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState('up')
  const [atTop, setAtTop]         = useState(true)

  useEffect(() => {
    let lastY = window.scrollY

    const handler = () => {
      const currentY = window.scrollY
      setAtTop(currentY < 10)
      setScrollDir(currentY > lastY ? 'down' : 'up')
      lastY = currentY
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return { scrollDir, atTop }
}
