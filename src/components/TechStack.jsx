import { techStack } from '../data/skills'

export default function TechStack() {
  return (
    <section id="skills" className="section reveal">
      <div className="container">

        <span className="section-label">05 / Stack</span>
        <h2 className="section-title">
          Tools I <span className="gradient-text">Work With</span>
        </h2>
        <div className="section-divider" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {techStack.map((group) => (
            <div key={group.category}>

              {/* Category label */}
              <p style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                color: group.color,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '14px',
              }}>
                {group.category}
              </p>

              {/* Chips row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {group.chips.map((chip) => (
                  <Chip key={chip} label={chip} color={group.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Single chip with hover effect */
function Chip({ label, color }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 18px',
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: '10px',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.82rem',
        color: 'var(--text)',
        cursor: 'default',
        transition: 'border-color 0.25s, color 0.25s, transform 0.25s, box-shadow 0.25s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#00C6FF'
        e.currentTarget.style.color       = '#00C6FF'
        e.currentTarget.style.transform   = 'translateY(-3px)'
        e.currentTarget.style.boxShadow   = '0 8px 20px rgba(0,198,255,0.15)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--glass-border)'
        e.currentTarget.style.color       = 'var(--text)'
        e.currentTarget.style.transform   = 'translateY(0)'
        e.currentTarget.style.boxShadow   = 'none'
      }}
    >
      {/* Colored dot */}
      <span style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: color,
        flexShrink: 0,
      }} />
      {label}
    </span>
  )
}