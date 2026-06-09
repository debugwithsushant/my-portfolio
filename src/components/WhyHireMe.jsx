const cards = [
  {
    icon: '🎓',
    color: '#00C6FF',
    title: 'Strong Academic Performance',
    desc: '9.21 CGPA in B.Sc Computer Science. Consistent top performance demonstrating discipline, focus, and intellectual capability across 3 years.',
  },
  {
    icon: '💻',
    color: '#7B61FF',
    title: 'Real Project Experience',
    desc: '8 public GitHub projects — AI chatbots, full-stack platforms, REST APIs, data dashboards. All built from scratch with documentation.',
  },
  {
    icon: '🧠',
    color: '#00F5D4',
    title: 'Problem Solving Mindset',
    desc: '44+ problems across LeetCode (21) and GFG (23) in Java. Arrays, Hash Tables, DP, Binary Search, Backtracking. Daily practice.',
  },
  {
    icon: '⚡',
    color: '#00C6FF',
    title: 'Fast Learner & Self-Driven',
    desc: '15+ certifications earned independently — Java, Python, Azure, ASP.NET, SQL, React, Agile, DSA, DBMS. Always building something new.',
  },
  {
    icon: '🏢',
    color: '#7B61FF',
    title: 'Industry-Tested Experience',
    desc: '5 internships completed — Infosys Springboard×2 (AI + Full Stack), Axcentra (Data), Cognifyz (Java), VaultofCodes (Java). Real agile teams.',
  },
  {
    icon: '🤝',
    color: '#00F5D4',
    title: 'Clear Communicator',
    desc: 'Active LinkedIn (173 connections). Clean GitHub READMEs and documentation. Fluent in English, Hindi, and Marathi.',
  },
]

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="section reveal">
      <div className="container">

        <span className="section-label">08 / Why Hire Me?</span>
        <h2 className="section-title">
          Why Hire <span className="gradient-text">Me?</span>
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '16px', fontSize: '1rem' }}>
          Here is why I will add real value from day one.
        </p>
        <div className="section-divider" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {cards.map((card) => (
            <div
              key={card.title}
              className="glass-card"
              style={{
                padding: '28px',
                borderTop: `3px solid ${card.color}`,
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.3), 0 0 30px ${card.color}40`
                e.currentTarget.style.transform = 'translateY(-6px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Icon with glow */}
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: `${card.color}18`,
                border: `1px solid ${card.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.6rem',
              }}>
                {card.icon}
              </div>

              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '1.02rem',
                color: 'var(--text)',
              }}>
                {card.title}
              </h3>

              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.85rem',
                color: 'var(--muted)',
                lineHeight: 1.7,
                margin: 0,
              }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}