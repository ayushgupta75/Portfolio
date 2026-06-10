import { useState } from 'react'
import { API_URL } from '../constants'

export function useChat() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [threadId, setThreadId] = useState(null)
  const [lastMeta, setLastMeta] = useState(null) // { citations, route, latency_ms }

  const send = async (text) => {
    const question = text.trim()
    if (!question || loading) return

    setMessages(prev => [...prev, { role: 'user', text: question }])
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: question, thread_id: threadId }),
      })
      if (!res.ok) throw new Error(`Server error: ${res.status}`)

      const data = await res.json()

      setThreadId(data.thread_id)
      setLastMeta({
        citations: data.citations ?? [],
        route: data.route,
        latency_ms: data.latency_ms,
      })
      setMessages(prev => [...prev, { role: 'assistant', text: data.answer }])
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: 'Backend not connected yet. Set VITE_LEGAL_LLM_API_URL to your API endpoint.',
        isError: true,
      }])
    } finally {
      setLoading(false)
    }
  }

  return { messages, loading, send, lastMeta }
}
