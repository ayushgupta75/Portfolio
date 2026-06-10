export default function TopBar() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 24px', height: '60px',
      background: '#ffffff', borderBottom: '1px solid #e5e7eb',
      position: 'sticky', top: 0, zIndex: 10,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '15px',
          }}>
            ⚖️
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#111827', lineHeight: 1.2 }}>Legal LLM</div>
            <div style={{ fontSize: '11px', color: '#6b7280', lineHeight: 1.2 }}>AI Legal Assistant</div>
          </div>
        </div>
      </div>

      <div style={{
        fontSize: '11px', color: '#9ca3af', background: '#f9fafb',
        border: '1px solid #e5e7eb', borderRadius: '20px', padding: '4px 10px',
      }}>
        Not legal advice
      </div>
    </div>
  )
}
