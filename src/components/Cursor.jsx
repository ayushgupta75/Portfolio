import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [pos, setPos]         = useState({ x: 0, y: 0 })
  const [hovering, setHover]  = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const onEnter = (e) => {
      if (e.target.closest('a, button')) setHover(true)
    }
    const onLeave = (e) => {
      if (e.target.closest('a, button')) setHover(false)
    }

    const onHide = () => setVisible(false)
    const onShow = () => setVisible(true)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', onEnter)
    window.addEventListener('mouseout', onLeave)
    document.addEventListener('mouseleave', onHide)
    document.addEventListener('mouseenter', onShow)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onEnter)
      window.removeEventListener('mouseout', onLeave)
      document.removeEventListener('mouseleave', onHide)
      document.removeEventListener('mouseenter', onShow)
    }
  }, [visible])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-bronze"
        animate={{
          x: pos.x - (hovering ? 20 : 16),
          y: pos.y - (hovering ? 20 : 16),
          width:   hovering ? 40 : 32,
          height:  hovering ? 40 : 32,
          opacity: visible ? (hovering ? 0.7 : 0.45) : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 22, mass: 0.5 }}
      />

      {/* Inner dot — always visible, shrinks on hover */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-bronze"
        animate={{
          x:       pos.x - (hovering ? 3 : 2),
          y:       pos.y - (hovering ? 3 : 2),
          width:   hovering ? 6 : 4,
          height:  hovering ? 6 : 4,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.3 }}
      />
    </>
  )
}
