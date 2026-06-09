export default function Seeking() {
  const roles = [
    'Software Developer',
    'Java Developer',
    'Full Stack Developer',
    'Backend Developer',
  ]

  const workModes = [
    { icon: '🌐', mode: 'Remote',   badge: 'Preferred', color: '#00F5D4' },
    { icon: '🔄', mode: 'Hybrid',   badge: 'Open to',   color: '#00C6FF' },
    { icon: '🏢', mode: 'On-site',  badge: 'Open to',   color: '#00C6FF' },
  ]

  return (
    <section id="seeking" className="section reveal">
      <div className="container">

        <span className="section-label">02 / Currently Seeking</span>
        <h2 className="section-title">
          Open to <span className="gradient-text">Opportunities</span>
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '16px', fontSize: '1rem' }}>
          I am actively looking for my first full-time role.
        </p>
        <div className="section-divider" />

        {/* 2-column grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'start',
        }}
          className="seeking-grid"
        >

          {/* LEFT — Role cards */}
          <div>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: '#00C6FF',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              Target Roles
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
            }}>
              {roles.map((role) => (
                <div key={role} className="glass-card" style={{ padding: '16px 20px' }}>
                  <span style={{ color: '#00F5D4', marginRight: '8px' }}>✅</span>
                  <span style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                  }}>
                    {role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Work preferences */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <p style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 600,
              fontSize: '1rem',
              marginBottom: '20px',
            }}>
              Open to:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {workModes.map((item) => (
                <div key={item.mode} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <span style={{ fontSize: '0.95rem' }}>
                    {item.icon} {item.mode}
                  </span>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.72rem',
                    color: item.color,
                    border: `1px solid ${item.color}`,
                    padding: '2px 10px',
                    borderRadius: '100px',
                  }}>
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>

            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: 'var(--muted)',
              marginBottom: '20px',
            }}>
              📍 Anywhere in India
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '20px',
            }}>
              <span className="pulse-dot" style={{ background: '#22c55e' }} />
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.8rem',
                color: '#22c55e',
              }}>
                Immediately available
              </span>
            </div>

            <a
              href="/my-portfolio/resume.pdf"
              download
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              📥 Download Resume
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .seeking-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}