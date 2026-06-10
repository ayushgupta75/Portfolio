import ChatMessage from './ChatMessage'
import TypingIndicator from './TypingIndicator'

export default function MessageList({ messages, loading, bottomRef }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {messages.map((msg, i) => (
        <ChatMessage key={i} msg={msg} />
      ))}
      {loading && <TypingIndicator />}
      <div ref={bottomRef} />
    </div>
  )
}
