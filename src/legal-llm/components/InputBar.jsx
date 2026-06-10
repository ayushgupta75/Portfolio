import { useState, useRef } from 'react'

export default function InputBar({ onSend, loading }) {
  const [input, setInput] = useState('')
  const textareaRef = useRef(null)

  const handleSend = () => {
    if (!input.trim() || loading) return
    onSend(input.trim())
    setInput('')
    if (textareaRef.current) textareaRef.current.style.height = 'auto'
  }

  const canSend = input.trim() && !loading

  return (
    <div style={{ padding: '16px 24px 24px', background: '#f9fafb' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{
          display: 'flex', alignItems: 'flex-end', gap: '12px',
          background: '#ffffff', border: '1px solid #e5e7eb',
          borderRadius: '16px', padding: '12px 12px 12px 16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        }}>
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={e => {
              setInput(e.target.value)
              e.target.style.height = 'auto'
              e.target.style.height = Math.min(e.target.scrollHeight, 160) + 'px'
            }}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
            placeholder="Ask a legal question..."
            style={{
              flex: 1, background: 'transparent', border: 'none', outline: 'none',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '14px', color: '#111827', resize: 'none',
              lineHeight: '1.6', minHeight: '24px', maxHeight: '160px',
              overflow: 'hidden',
            }}
          />
          <button
            onClick={handleSend}
            disabled={!canSend}
            style={{
              width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
              background: canSend ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : '#e5e7eb',
              border: 'none', cursor: canSend ? 'pointer' : 'not-allowed',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.15s',
              boxShadow: canSend ? '0 2px 8px rgba(99,102,241,0.35)' : 'none',
            }}
          >
            <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <p style={{ textAlign: 'center', fontSize: '11px', color: '#9ca3af', marginTop: '10px' }}>
          Legal LLM can make mistakes. Always consult a qualified attorney for legal decisions.
        </p>
      </div>
    </div>
  )
}
