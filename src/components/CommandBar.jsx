import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CommandBar() {
  const [open, setOpen]       = useState(false)
  const [input, setInput]     = useState('')
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const inputRef              = useRef(null)
  const bottomRef             = useRef(null)

  // Open on ⌘K or Ctrl+K
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(prev => !prev)
      }
      if (e.key === '/' && e.target.tagName !== 'INPUT') {
        e.preventDefault()
        setOpen(prev => !prev)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async () => {
    if (!input.trim() || loading) return
    const question = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: question }])
    setLoading(true)

    // ── Plug in your API here ──
    // const res = await fetch('https://your-api-endpoint.com/chat', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     // 'Authorization': 'Bearer YOUR_API_KEY',   ← add if needed
    //   },
    //   body: JSON.stringify({ message: question }),
    // })
    // const data = await res.json()
    // setMessages(prev => [...prev, { role: 'assistant', text: data.reply }])
    // setLoading(false)

    // ── Remove this block once API is connected ──
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: 'The Claude API is not connected yet. Add your API key to enable responses.',
      }])
      setLoading(false)
    }, 800)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[998] bg-ink/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Command Bar */}
          <motion.div
            className="fixed top-1/2 left-1/2 z-[999] w-full max-w-xl -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.96, y: '-48%' }}
            animate={{ opacity: 1, scale: 1,    y: '-50%' }}
            exit={{    opacity: 0, scale: 0.96, y: '-48%' }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="bg-linen border border-edge shadow-2xl overflow-hidden"
              style={{ boxShadow: '0 32px 80px rgba(28,25,23,0.18)' }}
            >

              {/* Messages */}
              {messages.length > 0 && (
                <div className="max-h-72 overflow-y-auto px-6 pt-6 flex flex-col gap-5">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                      <span className="label text-mist">
                        {msg.role === 'user' ? 'You' : 'Ayush'}
                      </span>
                      <p
                        className={`font-sans font-light text-sm leading-relaxed px-4 py-3 max-w-sm ${
                          msg.role === 'user'
                            ? 'bg-edge text-ink'
                            : 'bg-bronze/10 text-ink border border-edge'
                        }`}
                      >
                        {msg.text}
                      </p>
                    </div>
                  ))}

                  {/* Loading */}
                  {loading && (
                    <div className="flex flex-col gap-1 items-start">
                      <span className="label text-mist">Ayush</span>
                      <div className="px-4 py-3 border border-edge">
                        <div className="flex gap-1">
                          {[0, 1, 2].map(i => (
                            <motion.div
                              key={i}
                              className="w-1 h-1 rounded-full bg-bronze"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={bottomRef} />
                </div>
              )}

              {/* Divider if messages exist */}
              {messages.length > 0 && <div className="divider mt-4" />}

              {/* Input */}
              <div className="flex items-center gap-4 px-6 py-5">
                <span className="italic-serif text-accent text-sm shrink-0">AG</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && send()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent font-sans font-light text-ink text-sm outline-none placeholder:text-mist"
                />
                {input.trim() && (
                  <button
                    onClick={send}
                    className="label text-accent hover:text-ink transition-colors duration-300 shrink-0"
                  >
                    Send
                  </button>
                )}
              </div>

              {/* Footer hint */}
              <div className="px-6 pb-4 flex items-center justify-between">
                <span className="label text-mist" style={{ fontSize: '0.6rem' }}>
                  Press ESC to close
                </span>
                <span className="label text-mist" style={{ fontSize: '0.6rem' }}>
                  ↵ to send
                </span>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
