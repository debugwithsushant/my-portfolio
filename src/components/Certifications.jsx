import { certifications } from '../data/certifications'

export default function Certifications() {
  const certs2025 = certifications.filter((c) => c.year === 2025)
  const certs2026 = certifications.filter((c) => c.year === 2026)

  return (
    <section id="certifications" className="section reveal">
      <div className="container">

        <span className="section-label">09 / Certifications</span>
        <h2 className="section-title">
          Credentials & <span className="gradient-text">Certifications</span>
        </h2>
        <div className="section-divider" />

        {/* 2025 group */}
        <YearGroup year="2025" certs={certs2025} />

        {/* 2026 group */}
        <YearGroup year="2026" certs={certs2026} />

      </div>
    </section>
  )
}

/* Year heading + cert cards grid */
function YearGroup({ year, certs }) {
  return (
    <div style={{ marginBottom: '48px' }}>

      {/* Year heading */}
      <p style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.8rem',
        color: '#00C6FF',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <span style={{
          flex: 1,
          height: '1px',
          background: 'rgba(0,198,255,0.2)',
        }} />
        {year}
        <span style={{
          flex: 1,
          height: '1px',
          background: 'rgba(0,198,255,0.2)',
        }} />
      </p>

      {/* Cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: '16px',
      }}>
        {certs.map((cert) => (
          <CertCard key={cert.name} cert={cert} />
        ))}
      </div>
    </div>
  )
}

/* Single cert card */
function CertCard({ cert }) {
  return (
    <div className="glass-card" style={{
      padding: '20px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
    }}>

      {/* Icon circle */}
      <div style={{
        width: '42px',
        height: '42px',
        borderRadius: '12px',
        background: `${cert.color}20`,
        border: `1px solid ${cert.color}60`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.1rem',
        flexShrink: 0,
      }}>
        {cert.icon}
      </div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <p style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 600,
          fontSize: '0.88rem',
          marginBottom: '4px',
          color: 'var(--text)',
          lineHeight: 1.4,
        }}>
          {cert.name}
        </p>
        <p style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.72rem',
          color: 'var(--muted)',
          marginBottom: '6px',
        }}>
          {cert.issuer} · {cert.date}
        </p>

        {/* Pending badge */}
        {cert.pending && (
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.68rem',
            color: '#00F5D4',
            background: 'rgba(0,245,212,0.1)',
            border: '1px solid rgba(0,245,212,0.3)',
            padding: '2px 8px',
            borderRadius: '100px',
          }}>
            🔜 Coming Soon
          </span>
        )}
      </div>
    </div>
  )
}