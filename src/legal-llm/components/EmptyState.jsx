import { motion } from 'framer-motion'
import { SUGGESTIONS } from '../constants'

export default function EmptyState({ onSuggest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ textAlign: 'center', paddingTop: '48px' }}
    >
      <div style={{
        width: '56px', height: '56px', borderRadius: '16px',
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '26px', margin: '0 auto 20px',
        boxShadow: '0 8px 24px rgba(99,102,241,0.25)',
      }}>
        ⚖️
      </div>
      <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#111827', margin: '0 0 8px' }}>
        How can I help you today?
      </h2>
      <p style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 40px' }}>
        Ask any legal question — I'll do my best to explain clearly.
      </p>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px',
        maxWidth: '520px', margin: '0 auto',
      }}>
        {SUGGESTIONS.map((s) => (
          <button
            key={s.text}
            onClick={() => onSuggest(s.text)}
            style={{
              display: 'flex', alignItems: 'flex-start', gap: '10px',
              background: '#ffffff', border: '1px solid #e5e7eb',
              borderRadius: '12px', padding: '14px 16px',
              cursor: 'pointer', textAlign: 'left',
              transition: 'all 0.15s', fontSize: '13px',
              color: '#374151', fontWeight: 500,
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#6366f1'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(99,102,241,0.12)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#e5e7eb'
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)'
            }}
          >
            <span style={{ fontSize: '18px', lineHeight: 1 }}>{s.icon}</span>
            <span>{s.text}</span>
          </button>
        ))}
      </div>
    </motion.div>
  )
}
