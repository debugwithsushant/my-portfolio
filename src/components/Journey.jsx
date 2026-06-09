const timelineData = [
  {
    year: '2023',
    title: 'Started Programming',
    desc: 'Enrolled in B.Sc CS at Sangola Mahavidyalaya. First programs in C and C++. Built logic, learned algorithms, discovered the joy of building with code.',
    color: '#00C6FF',
  },
  {
    year: '2024',
    title: 'Java & Web Development',
    desc: 'Mastered Core Java, OOP, JDBC, Hibernate. Learned HTML, CSS, JavaScript. Database management with MySQL and Oracle.',
    color: '#7B61FF',
  },
  {
    year: '2025',
    title: 'Full Stack, Data & 5 Internships',
    desc: 'Built with Spring Boot and React. Completed 5 internships at Infosys, Axcentra, Cognifyz, VaultofCodes. Earned 15+ certifications. TCS NQT 82.59%.',
    color: '#00F5D4',
  },
  {
    year: '2026',
    title: 'AI, Cloud & Graduation',
    desc: 'Built BankBot AI with Ollama and NLP. Earned Microsoft Azure AZ-900. Learned ASP.NET Core, SQL Server, Docker. B.Sc graduation.',
    color: '#00C6FF',
  },
  {
    year: 'Future →',
    title: 'Software Engineer at Scale',
    desc: 'First full-time role. Contributing to real products. Open source. AI-powered applications. Always building. Always learning.',
    color: '#00F5D4',
    isFuture: true,
  },
]

export default function Journey() {
  return (
    <section id="journey" className="section reveal">
      <div className="container">

        <span className="section-label">04 / Journey</span>
        <h2 className="section-title">
          My <span className="gradient-text">Journey</span>
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '16px' }}>
          From writing my first C program to building AI applications.
        </p>
        <div className="section-divider" />

        {/* Timeline wrapper */}
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>

          {/* Center vertical line */}
          <div className="timeline-line" style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, #00C6FF, rgba(0,198,255,0.05))',
            transform: 'translateX(-50%)',
          }} />

          {/* Timeline items */}
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0
            return (
              <div
                key={item.year}
                className="reveal"
                style={{
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  paddingBottom: '48px',
                  transitionDelay: `${index * 0.1}s`,
                  position: 'relative',
                }}
              >
                {/* Dot on center line */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '24px',
                  transform: 'translateX(-50%)',
                  width: item.isFuture ? '20px' : '16px',
                  height: item.isFuture ? '20px' : '16px',
                  borderRadius: item.isFuture ? '4px' : '50%',
                  background: '#050816',
                  border: `2px solid ${item.color}`,
                  boxShadow: `0 0 12px ${item.color}`,
                  zIndex: 2,
                  transform: item.isFuture
                    ? 'translateX(-50%) rotate(45deg)'
                    : 'translateX(-50%)',
                }} />

                {/* Content card */}
                <div
                  className="glass-card"
                  style={{
                    width: '44%',
                    padding: '24px',
                    marginLeft: isLeft ? '0' : 'auto',
                  }}
                >
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.82rem',
                    color: item.color,
                    fontWeight: 500,
                    display: 'block',
                    marginBottom: '6px',
                  }}>
                    {item.year}
                  </span>
                  <h3 style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    marginBottom: '10px',
                    color: 'var(--text)',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.88rem',
                    color: 'var(--muted)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile — single column, dot on left */}
      <style>{`
        @media (max-width: 768px) {
          .timeline-line { left: 16px !important; }
          .reveal > div[style*="44%"] {
            width: 85% !important;
            margin-left: auto !important;
          }
          .reveal > div[style*="left: 50%"][style*="top: 24px"] {
            left: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}