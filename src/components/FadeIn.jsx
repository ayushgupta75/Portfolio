import { motion } from 'framer-motion'

const variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(8px)',
    y: 10,
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
  },
}

/**
 * FadeIn — wraps any element with a blur fade animation.
 *
 * Props:
 *   delay    — stagger delay in seconds (default 0)
 *   duration — animation duration in seconds (default 0.8)
 *   once     — only animate once when scrolled into view (default true)
 */
export default function FadeIn({ children, delay = 0, duration = 0.8, className = '', once = true }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
