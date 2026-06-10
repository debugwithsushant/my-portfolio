import { certifications } from '../data/certifications'

export default function Certifications() {
  const certs2025    = certifications.filter((c) => c.year === 2025 && !c.isDocument)
  const certs2026    = certifications.filter((c) => c.year === 2026 && !c.isDocument)
  const documents    = certifications.filter((c) => c.isDocument)

  return (
    <section id="certifications" className="section reveal">
      <div className="container">

        <span className="section-label">09 / Certifications</span>
        <h2 className="section-title">
          Credentials & <span className="gradient-text">Certifications</span>
        </h2>
        <div className="section-divider" />

        {/* 2025 Certifications */}
        <YearGroup year="2025" certs={certs2025} />

        {/* 2026 Certifications */}
        <YearGroup year="2026" certs={certs2026} />

        {/* Academic Documents */}
        <div style={{ marginBottom: '48px' }}>

          {/* Section heading */}
          <p style={{
            fontFamily:    'JetBrains Mono, monospace',
            fontSize:      '0.8rem',
            color:         '#00C6FF',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom:  '20px',
            display:       'flex',
            alignItems:    'center',
            gap:           '12px',
          }}>
            <span style={{ flex: 1, height: '1px', background: 'rgba(0,198,255,0.2)' }} />
            Academic Documents
            <span style={{ flex: 1, height: '1px', background: 'rgba(0,198,255,0.2)' }} />
          </p>

          <div style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap:                 '16px',
          }}>
            {documents.map((doc) => (
              <DocumentCard key={doc.name} doc={doc} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

/* Year heading + cert cards grid */
function YearGroup({ year, certs }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <p style={{
        fontFamily:    'JetBrains Mono, monospace',
        fontSize:      '0.8rem',
        color:         '#00C6FF',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom:  '20px',
        display:       'flex',
        alignItems:    'center',
        gap:           '12px',
      }}>
        <span style={{ flex: 1, height: '1px', background: 'rgba(0,198,255,0.2)' }} />
        {year}
        <span style={{ flex: 1, height: '1px', background: 'rgba(0,198,255,0.2)' }} />
      </p>

      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap:                 '16px',
      }}>
        {certs.map((cert) => (
          <CertCard key={cert.name} cert={cert} />
        ))}
      </div>
    </div>
  )
}

/* Regular cert card */
function CertCard({ cert }) {
  const cardContent = (
    <div className="glass-card" style={{
      padding:    '20px',
      display:    'flex',
      alignItems: 'flex-start',
      gap:        '16px',
      cursor:     cert.link ? 'pointer' : 'default',
      transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
    }}
      onMouseEnter={(e) => {
        if (cert.link) {
          e.currentTarget.style.borderColor = cert.color
          e.currentTarget.style.transform   = 'translateY(-4px)'
          e.currentTarget.style.boxShadow   = `0 12px 30px ${cert.color}25`
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--glass-border)'
        e.currentTarget.style.transform   = 'translateY(0)'
        e.currentTarget.style.boxShadow   = 'none'
      }}
    >
      {/* Icon circle */}
      <div style={{
        width:          '42px',
        height:         '42px',
        borderRadius:   '12px',
        background:     `${cert.color}20`,
        border:         `1px solid ${cert.color}60`,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        fontSize:       '1.1rem',
        flexShrink:     0,
      }}>
        {cert.icon}
      </div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <p style={{
          fontFamily:   'Syne, sans-serif',
          fontWeight:   600,
          fontSize:     '0.88rem',
          marginBottom: '4px',
          color:        'var(--text)',
          lineHeight:   1.4,
        }}>
          {cert.name}
        </p>
        <p style={{
          fontFamily:   'JetBrains Mono, monospace',
          fontSize:     '0.72rem',
          color:        'var(--muted)',
          marginBottom: '6px',
        }}>
          {cert.issuer} · {cert.date}
        </p>

        {/* Pending badge */}
        {cert.pending && (
          <span style={{
            fontFamily:   'JetBrains Mono, monospace',
            fontSize:     '0.68rem',
            color:        '#00F5D4',
            background:   'rgba(0,245,212,0.1)',
            border:       '1px solid rgba(0,245,212,0.3)',
            padding:      '2px 8px',
            borderRadius: '100px',
          }}>
            🔜 Coming Soon
          </span>
        )}

        {/* View certificate link */}
        {cert.link && !cert.pending && (
          <span style={{
            fontFamily:   'JetBrains Mono, monospace',
            fontSize:     '0.68rem',
            color:        cert.color,
            display:      'inline-flex',
            alignItems:   'center',
            gap:          '4px',
            marginTop:    '4px',
          }}>
            View Certificate →
          </span>
        )}
      </div>
    </div>
  )

  /* If link exists — wrap in anchor tag */
  if (cert.link) {
    return (
      <a
        href={cert.link}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: 'none' }}
      >
        {cardContent}
      </a>
    )
  }

  /* No link — plain div */
  return cardContent
}

/* Document card — bigger, with View button */
function DocumentCard({ doc }) {
  return (
    <div className="glass-card" style={{
      padding:        '24px',
      display:        'flex',
      alignItems:     'flex-start',
      gap:            '20px',
      borderTop:      `3px solid ${doc.color}`,
    }}>

      {/* Icon */}
      <div style={{
        width:          '52px',
        height:         '52px',
        borderRadius:   '14px',
        background:     `${doc.color}20`,
        border:         `1px solid ${doc.color}60`,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        fontSize:       '1.4rem',
        flexShrink:     0,
      }}>
        {doc.icon}
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <p style={{
          fontFamily:   'Syne, sans-serif',
          fontWeight:   700,
          fontSize:     '0.95rem',
          marginBottom: '4px',
          color:        'var(--text)',
          lineHeight:   1.4,
        }}>
          {doc.name}
        </p>
        <p style={{
          fontFamily:   'JetBrains Mono, monospace',
          fontSize:     '0.72rem',
          color:        'var(--muted)',
          marginBottom: '14px',
          lineHeight:   1.5,
        }}>
          {doc.issuer}
        </p>

        {/* View button or Coming Soon */}
        {doc.docUrl ? (
          <a
            href={doc.docUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            style={{ padding: '8px 18px', fontSize: '0.8rem' }}
          >
            📄 {doc.docLabel}
          </a>
        ) : (
          <span style={{
            display:      'inline-flex',
            alignItems:   'center',
            gap:          '6px',
            fontFamily:   'JetBrains Mono, monospace',
            fontSize:     '0.78rem',
            color:        '#00F5D4',
            background:   'rgba(0,245,212,0.08)',
            border:       '1px solid rgba(0,245,212,0.3)',
            padding:      '8px 16px',
            borderRadius: '8px',
          }}>
            🔜 Degree Certificate — Coming Soon
          </span>
        )}
      </div>
    </div>
  )
}