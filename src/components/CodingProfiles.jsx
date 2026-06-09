import { codingProfiles } from '../data/codingProfiles'

export default function CodingProfiles() {
  return (
    <section id="coding" className="section reveal">
      <div className="container">

        <span className="section-label">11 / Problem Solving</span>
        <h2 className="section-title">
          Coding <span className="gradient-text">Profiles</span>
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '16px' }}>
          Consistent practice across multiple platforms — building DSA foundations.
        </p>
        <div className="section-divider" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '20px',
        }}>
          {codingProfiles.map((profile) => (
            <ProfileCard key={profile.platform} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProfileCard({ profile }) {
  return (
    <div
      className="glass-card"
      style={{
        padding: '24px',
        borderTop: `3px solid ${profile.color}`,
        transition: 'box-shadow 0.3s, transform 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 30px ${profile.color}40`
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Platform name + badge */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px',
      }}>
        <h3 style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          fontSize: '1rem',
          color: 'var(--text)',
        }}>
          {profile.platform}
        </h3>
        <span style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.68rem',
          color: profile.color,
          background: `${profile.color}15`,
          border: `1px solid ${profile.color}40`,
          padding: '2px 10px',
          borderRadius: '100px',
        }}>
          {profile.username}
        </span>
      </div>

      {/* Solved count — big */}
      <div style={{
        fontFamily: 'Syne, sans-serif',
        fontWeight: 800,
        fontSize: '2rem',
        color: profile.color,
        margin: '12px 0 4px',
        lineHeight: 1,
      }}>
        {profile.solved}
      </div>

      {/* Detail lines */}
      <p style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.78rem',
        color: 'var(--muted)',
        marginBottom: '4px',
      }}>
        {profile.detail}
      </p>
      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.78rem',
        color: 'var(--muted)',
        marginBottom: '16px',
      }}>
        {profile.extra}
      </p>

      {/* View Profile link */}
      <a
        href={profile.url}
        target={profile.url.startsWith('http') ? '_blank' : '_self'}
        rel="noreferrer"
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.8rem',
          color: 'var(--muted)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          transition: 'color 0.3s',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = profile.color }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)' }}
      >
        View Profile →
      </a>
    </div>
  )
}