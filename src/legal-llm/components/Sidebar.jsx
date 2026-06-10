const SECTIONS = [
  { key: 'vector', label: 'Vector Query', icon: '🔍' },
  { key: 'agent',  label: 'Agent',        icon: '🤖' },
  { key: 'live',   label: 'Live Tool',    icon: '⚡' },
]

export default function Sidebar({ lastMeta }) {
  const activeRoute = lastMeta?.route ?? null

  return (
    <div style={{
      width: '260px', flexShrink: 0,
      background: '#ffffff', borderRight: '1px solid #e5e7eb',
      display: 'flex', flexDirection: 'column',
      overflowY: 'auto',
    }}>
      <div style={{ padding: '20px 20px 12px', borderBottom: '1px solid #f3f4f6' }}>
        <p style={{
          fontSize: '11px', fontWeight: 600, color: '#9ca3af',
          letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0,
        }}>
          Debug Panel
        </p>
      </div>

      {SECTIONS.map((section, i) => {
        const isActive = activeRoute === section.key
        return (
          <div
            key={section.key}
            style={{
              padding: '16px 20px',
              borderBottom: i < SECTIONS.length - 1 ? '1px solid #f3f4f6' : 'none',
              background: isActive ? '#fafafa' : 'transparent',
              transition: 'background 0.2s',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{ fontSize: '14px' }}>{section.icon}</span>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#374151' }}>{section.label}</span>
              {isActive && (
                <span style={{
                  marginLeft: 'auto', fontSize: '10px', fontWeight: 600,
                  color: '#6366f1', background: '#eef2ff',
                  padding: '2px 7px', borderRadius: '20px',
                }}>
                  active
                </span>
              )}
            </div>

            {isActive && lastMeta ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {/* Latency */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  background: '#f9fafb', borderRadius: '6px', padding: '8px 10px',
                }}>
                  <span style={{ fontSize: '11px', color: '#6b7280' }}>Latency</span>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#374151' }}>
                    {lastMeta.latency_ms ? `${(lastMeta.latency_ms / 1000).toFixed(2)}s` : '—'}
                  </span>
                </div>

                {/* Citations */}
                {lastMeta.citations?.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Citations
                    </span>
                    {lastMeta.citations.map((c, idx) => (
                      <div key={idx} style={{
                        fontSize: '11px', color: '#4b5563', lineHeight: '1.4',
                        background: '#f3f4f6', borderRadius: '6px',
                        padding: '6px 8px',
                      }}>
                        {c}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div style={{
                background: '#f9fafb', border: '1px dashed #e5e7eb',
                borderRadius: '8px', padding: '12px',
                fontSize: '11px', color: '#9ca3af', lineHeight: '1.5', fontStyle: 'italic',
              }}>
                Waiting for a {section.label.toLowerCase()} response…
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
