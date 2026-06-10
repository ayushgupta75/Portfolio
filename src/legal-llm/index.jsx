import { useEffect, useRef } from 'react'
import { useChat } from './hooks/useChat'
import TopBar from './components/TopBar'
import Sidebar from './components/Sidebar'
import EmptyState from './components/EmptyState'
import MessageList from './components/MessageList'
import InputBar from './components/InputBar'

export default function LegalLLMChat() {
  const { messages, loading, send, lastMeta } = useChat()
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100vh',
      background: '#f9fafb', fontFamily: 'Inter, system-ui, sans-serif',
    }}>
      <TopBar />

      {/* Body: sidebar + chat */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        <Sidebar lastMeta={lastMeta} />

        {/* Chat area */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px 0' }}>
            <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
              {messages.length === 0
                ? <EmptyState onSuggest={send} />
                : <MessageList messages={messages} loading={loading} bottomRef={bottomRef} />
              }
            </div>
          </div>

          <InputBar onSend={send} loading={loading} />
        </div>

      </div>
    </div>
  )
}
