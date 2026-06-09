import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section reveal">
      <div className="container">

        <span className="section-label">06 / Experience</span>
        <h2 className="section-title">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="section-divider" />

        {/* Timeline wrapper */}
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>

          {/* Center vertical line */}
          <div className="exp-line" style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, #00C6FF, rgba(0,198,255,0.05))',
            transform: 'translateX(-50%)',
          }} />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="reveal exp-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 40px 1fr',
                gap: '20px',
                marginBottom: '48px',
                transitionDelay: `${index * 0.1}s`,
                alignItems: 'start',
              }}
            >
              {/* LEFT — period + company */}
              <div style={{ textAlign: 'right', paddingTop: '4px' }}>
                <p style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.8rem',
                  color: exp.color,
                  marginBottom: '4px',
                }}>
                  {exp.period}
                </p>
                <p style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: 'var(--text)',
                  marginBottom: '6px',
                }}>
                  {exp.company}
                </p>
                {/* Mode badge */}
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.68rem',
                  color: 'var(--muted)',
                  border: '1px solid var(--glass-border)',
                  padding: '2px 8px',
                  borderRadius: '100px',
                }}>
                  {exp.mode}
                </span>
              </div>

              {/* CENTER — dot */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '6px',
              }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: '#050816',
                  border: `2px solid ${exp.color}`,
                  boxShadow: `0 0 12px ${exp.color}`,
                  flexShrink: 0,
                  zIndex: 2,
                  position: 'relative',
                }} />
              </div>

              {/* RIGHT — role + highlights */}
              <div className="glass-card" style={{ padding: '20px 24px' }}>
                <h3 style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--text)',
                  marginBottom: '12px',
                }}>
                  {exp.role}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {exp.highlights.map((point, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      gap: '10px',
                      fontSize: '0.875rem',
                      color: 'var(--muted)',
                      lineHeight: 1.6,
                    }}>
                      <span style={{ color: '#00F5D4', flexShrink: 0, marginTop: '2px' }}>→</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile — single column */}
      <style>{`
        @media (max-width: 768px) {
          .exp-line { display: none !important; }
          .exp-row {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .exp-row > div:nth-child(1) { text-align: left !important; }
          .exp-row > div:nth-child(2) { display: none !important; }
        }
      `}</style>
    </section>
  )
}