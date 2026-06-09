import { achievements } from '../data/achievements'

export default function Achievements() {
  return (
    <section id="achievements" className="section reveal">
      <div className="container">

        <span className="section-label">10 / Achievements</span>
        <h2 className="section-title">
          Key <span className="gradient-text">Achievements</span>
        </h2>
        <div className="section-divider" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {achievements.map((item) => (
            <div key={item.title} className="glass-card" style={{
              padding: '24px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px',
            }}>

              {/* Emoji */}
              <span style={{ fontSize: '2.2rem', flexShrink: 0, lineHeight: 1 }}>
                {item.emoji}
              </span>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '8px',
                  marginBottom: '6px',
                }}>
                  <h3 style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: 'var(--text)',
                    lineHeight: 1.4,
                  }}>
                    {item.title}
                  </h3>
                  {/* Date badge */}
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.68rem',
                    color: '#00C6FF',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}>
                    {item.date}
                  </span>
                </div>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.82rem',
                  color: 'var(--muted)',
                  lineHeight: 1.5,
                  margin: 0,
                }}>
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}