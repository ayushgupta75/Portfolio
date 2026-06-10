import { motion } from 'framer-motion'

export default function ChatMessage({ msg }) {
  const isUser = msg.role === 'user'
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        display: 'flex', gap: '12px',
        flexDirection: isUser ? 'row-reverse' : 'row',
        alignItems: 'flex-start',
      }}
    >
      <div style={{
        width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
        background: isUser
          ? 'linear-gradient(135deg, #10b981, #059669)'
          : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: isUser ? '12px' : '15px', fontWeight: 700, color: 'white',
      }}>
        {isUser ? 'U' : '⚖️'}
      </div>

      <div style={{
        maxWidth: '80%',
        background: isUser ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : '#ffffff',
        color: isUser ? '#ffffff' : (msg.isError ? '#9ca3af' : '#111827'),
        borderRadius: isUser ? '18px 4px 18px 18px' : '4px 18px 18px 18px',
        padding: '12px 16px',
        fontSize: '14px', lineHeight: '1.6',
        fontStyle: msg.isError ? 'italic' : 'normal',
        boxShadow: isUser
          ? '0 4px 16px rgba(99,102,241,0.3)'
          : '0 2px 8px rgba(0,0,0,0.06)',
        border: isUser ? 'none' : '1px solid #f3f4f6',
        whiteSpace: 'pre-wrap',
      }}>
        {msg.text}
      </div>
    </motion.div>
  )
}
