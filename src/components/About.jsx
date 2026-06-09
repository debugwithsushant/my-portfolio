export default function About() {
  const facts = [
    { icon: '🎓', label: '9.04 CGPA',            value: 'B.Sc ECS · 2026' },
    { icon: '☁️', label: 'Azure AZ-900',          value: 'Certified · Jan 2026' },
    { icon: '💼', label: '5 Internships',         value: 'Infosys×2 · Axcentra · Cognifyz · VaultofCodes' },
    { icon: '🏆', label: 'TCS NQT 82.59%',        value: 'Aug 2025' },
    { icon: '📍', label: 'Sangola, Maharashtra',  value: 'India' },
    { icon: '🌐', label: 'Open to Work',          value: 'On-site · Hybrid · Remote' },
  ]

  /* Words to highlight in primary color */
  function highlightText(text) {
    const keywords = ['Java', 'Python', 'Azure', 'Artificial Intelligence', '15+ certifications', '5 internships']
    let result = text
    keywords.forEach((word) => {
      result = result.replace(
        new RegExp(`(${word})`, 'g'),
        `<strong style="color:#00C6FF;font-weight:600;">$1</strong>`
      )
    })
    return result
  }

  const paragraphs = [
    'My journey into technology began in 2023 when I enrolled in B.Sc Computer Science at Sangola Mahavidyalaya. What started as curiosity about C and C++ quickly became a deep passion for building software and solving real-world problems through code.',
    'Over three years I expanded into Java, Python, Full Stack Development, REST APIs, Databases, Cloud with Azure and Artificial Intelligence — completing 15+ certifications and 5 internships along the way.',
    'Today I build everything from AI-powered banking chatbots to full-stack crypto platforms. I am actively seeking my first full-time Software Developer role where I can contribute from day one and grow fast.',
  ]

  return (
    <section id="about" className="section reveal">
      <div className="container">

        <span className="section-label">03 / About</span>
        <h2 className="section-title">
          Who I <span className="gradient-text">Am</span>
        </h2>
        <div className="section-divider" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '60px',
          alignItems: 'start',
        }}
          className="about-grid"
        >

          {/* LEFT — Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {paragraphs.map((para, i) => (
              <p
                key={i}
                dangerouslySetInnerHTML={{ __html: highlightText(para) }}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: 'var(--muted)',
                  lineHeight: 1.9,
                  fontSize: '0.97rem',
                }}
              />
            ))}
          </div>

          {/* RIGHT — Quick facts */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
          }}>
            {facts.map((fact) => (
              <div key={fact.label} className="glass-card" style={{ padding: '20px 16px' }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{fact.icon}</div>
                <div style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  marginBottom: '4px',
                  color: 'var(--text)',
                }}>
                  {fact.label}
                </div>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  color: 'var(--muted)',
                  lineHeight: 1.5,
                }}>
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}