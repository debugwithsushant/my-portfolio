const learningAreas = [
  { name: 'Data Analytics',        icon: '📊', tag: 'Exploring',   color: '#00C6FF' },
  { name: 'Business Intelligence', icon: '📈', tag: 'Beginner',    color: '#7B61FF' },
  { name: 'Azure Cloud',           icon: '☁️', tag: 'Advancing',   color: '#00F5D4' },
  { name: 'Cloud Support',         icon: '🔧', tag: 'Exploring',   color: '#00C6FF' },
  { name: 'Docker',                icon: '🐳', tag: 'Beginner',    color: '#7B61FF' },
  { name: 'DevOps',                icon: '⚙️', tag: 'Exploring',   color: '#00F5D4' },
  { name: 'AI Engineering',        icon: '🤖', tag: 'In Progress', color: '#00C6FF' },
  { name: 'Machine Learning',      icon: '🧠', tag: 'Exploring',   color: '#7B61FF' },
  { name: 'Cybersecurity',         icon: '🔐', tag: 'Interested',  color: '#00F5D4' },
  { name: 'SOC Operations',        icon: '🛡️', tag: 'Exploring',   color: '#00C6FF' },
  { name: 'LLM Applications',      icon: '💬', tag: 'In Progress', color: '#7B61FF' },
  { name: 'RAG Architecture',      icon: '🔍', tag: 'Exploring',   color: '#00F5D4' },
  { name: 'System Design',         icon: '🏗️', tag: 'Learning',    color: '#00C6FF' },
  { name: 'Appwrite',              icon: '📦', tag: 'Beginner',    color: '#7B61FF' },
]

export default function Learning() {
  return (
    <section id="learning" className="section reveal">
      <div className="container">

        <span className="section-label">12 / Learning</span>
        <h2 className="section-title">
          Currently <span className="gradient-text">Exploring</span>
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '16px' }}>
          Beyond my current stack — areas I am actively growing into.
        </p>
        <div className="section-divider" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(155px, 1fr))',
          gap: '14px',
        }}>
          {learningAreas.map((item) => (
            <div
              key={item.name}
              className="glass-card"
              style={{
                padding: '24px 16px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 12px 30px ${item.color}25`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Icon */}
              <span style={{ fontSize: '2rem', lineHeight: 1 }}>{item.icon}</span>

              {/* Name */}
              <span style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '0.88rem',
                color: 'var(--text)',
                lineHeight: 1.3,
              }}>
                {item.name}
              </span>

              {/* Tag badge */}
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.68rem',
                color: item.color,
                background: `${item.color}15`,
                border: `1px solid ${item.color}40`,
                padding: '3px 10px',
                borderRadius: '100px',
              }}>
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}