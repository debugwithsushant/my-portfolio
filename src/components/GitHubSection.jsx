import { useState, useEffect, useRef, useMemo } from 'react'

const FALLBACK_REPOS = [
  { name: 'health-dashboard',               description: 'React health dashboard with patient data API',          language: 'JavaScript', stargazers_count: 1, html_url: 'https://github.com/debugwithsushant/health-dashboard' },
  { name: 'StudentManagementSystem',        description: 'ASP.NET Core API with EF Core + SQL Server + Swagger',  language: 'C#',         stargazers_count: 2, html_url: 'https://github.com/debugwithsushant/StudentManagementSystem' },
  { name: 'Cognifyz-Java-Internship',       description: 'Core Java internship — OOP, multithreading',            language: 'Java',       stargazers_count: 2, html_url: 'https://github.com/debugwithsushant/Cognifyz-Java-Internship' },
  { name: 'LeetCode-Coding-Problem-Solving',description: 'LeetCode solutions in Java — DSA journey',             language: 'Java',       stargazers_count: 1, html_url: 'https://github.com/debugwithsushant/LeetCode-Coding-Problem-Solving' },
  { name: 'BankBot-AI',                           description: 'BankBot AI — Python Streamlit Ollama NLP chatbot',      language: 'Python',     stargazers_count: 1, html_url: 'https://github.com/debugwithsushant/BankBot-AI' },
  { name: 'Food-delivery-website',          description: 'Responsive food delivery website frontend',              language: 'HTML',       stargazers_count: 1, html_url: 'https://github.com/debugwithsushant/Food-delivery-website' },
]

const LANG_COLORS = {
  JavaScript: '#F7DF1E',
  Java:       '#007396',
  Python:     '#3776AB',
  'C#':       '#239120',
  HTML:       '#E34F26',
  CSS:        '#1572B6',
}

const LANGUAGES = [
  { name: 'Java',       pct: 35, color: '#007396' },
  { name: 'C#',         pct: 25, color: '#239120' },
  { name: 'Python',     pct: 18, color: '#3776AB' },
  { name: 'JavaScript', pct: 12, color: '#F7DF1E' },
  { name: 'HTML',       pct:  7, color: '#E34F26' },
  { name: 'Other',      pct:  3, color: '#A9A9B3' },
]

const STATS = [
  { value: '17',   label: 'Public Repos'   },
  { value: '230+', label: 'Contributions'  },
  { value: '12',   label: 'Day Max Streak' },
  { value: '21+',  label: 'Active Days'    },
]

export default function GitHubSection() {
  const [repos,    setRepos]    = useState([])
  const [loading,  setLoading]  = useState(true)
  const [animated, setAnimated] = useState(false)
  const langRef = useRef(null)

  /* Generate heatmap once — won't re-randomize on re-render */
  const heatmapCells = useMemo(() => {
    const pool = []
    const weights = [
      { opacity: 0,    weight: 40 },
      { opacity: 0.15, weight: 25 },
      { opacity: 0.4,  weight: 18 },
      { opacity: 0.7,  weight: 10 },
      { opacity: 1.0,  weight:  7 },
    ]
    weights.forEach(({ opacity, weight }) => {
      for (let i = 0; i < weight; i++) pool.push(opacity)
    })
    return Array.from({ length: 364 }, () => pool[Math.floor(Math.random() * pool.length)])
  }, [])

  /* Fetch GitHub repos — cache 1 hour in sessionStorage */
  useEffect(() => {
    async function fetchRepos() {
      try {
        const cached = sessionStorage.getItem('sp_github')
        if (cached) {
          const { repos: r, time } = JSON.parse(cached)
          if (Date.now() - time < 3_600_000) {
            setRepos(r)
            setLoading(false)
            return
          }
        }
        const res = await fetch(
          'https://api.github.com/users/debugwithsushant/repos?sort=updated&per_page=6'
        )
        if (!res.ok) throw new Error('API failed')
        const data = await res.json()
        sessionStorage.setItem('sp_github', JSON.stringify({ repos: data, time: Date.now() }))
        setRepos(data)
      } catch {
        setRepos(FALLBACK_REPOS)
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [])

  /* Animate language bars when visible */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.3 }
    )
    if (langRef.current) observer.observe(langRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="github" className="section reveal">
      <div className="container">

        <span className="section-label">13 / GitHub</span>
        <h2 className="section-title">
          GitHub <span className="gradient-text">Activity</span>
        </h2>
        <div className="section-divider" />

        {/* ── ROW 1: Stats + Heatmap | Language Bars ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '28px',
          marginBottom: '28px',
        }}
          className="github-top"
        >

          {/* LEFT — Stats + Heatmap */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Stats 2×2 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
            }}>
              {STATS.map((s) => (
                <div key={s.label} className="glass-card" style={{
                  padding: '20px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily:   'Syne, sans-serif',
                    fontWeight:   800,
                    fontSize:     '1.6rem',
                    color:        '#00C6FF',
                    marginBottom: '4px',
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontFamily:    'JetBrains Mono, monospace',
                    fontSize:      '0.7rem',
                    color:         'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Heatmap */}
            <div className="glass-card" style={{ padding: '20px' }}>
              <p style={{
                fontFamily:    'JetBrains Mono, monospace',
                fontSize:      '0.72rem',
                color:         'var(--muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom:  '14px',
              }}>
                Contribution Activity
              </p>

              <div style={{ display: 'flex', gap: '3px', overflowX: 'auto', paddingBottom: '4px' }}>
                {Array.from({ length: 52 }, (_, col) => (
                  <div key={col} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    {Array.from({ length: 7 }, (_, row) => {
                      const opacity = heatmapCells[col * 7 + row]
                      return (
                        <div
                          key={row}
                          style={{
                            width:      '11px',
                            height:     '11px',
                            borderRadius: '2px',
                            background: opacity === 0
                              ? 'rgba(255,255,255,0.05)'
                              : `rgba(0,198,255,${opacity})`,
                            transition: 'transform 0.2s',
                            cursor:     'default',
                            flexShrink: 0,
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.4)' }}
                          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div style={{
                display:    'flex',
                alignItems: 'center',
                gap:        '5px',
                marginTop:  '10px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize:   '0.68rem',
                color:      'var(--muted)',
              }}>
                <span>Less</span>
                {[0.05, 0.15, 0.4, 0.7, 1].map((o) => (
                  <div key={o} style={{
                    width: '11px', height: '11px',
                    borderRadius: '2px',
                    background: `rgba(0,198,255,${o})`,
                  }} />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>

          {/* RIGHT — Language bars */}
          <div ref={langRef} className="glass-card" style={{ padding: '28px' }}>
            <p style={{
              fontFamily:    'JetBrains Mono, monospace',
              fontSize:      '0.72rem',
              color:         '#7B61FF',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom:  '24px',
            }}>
              Top Languages
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {LANGUAGES.map((lang) => (
                <div key={lang.name}>
                  <div style={{
                    display:       'flex',
                    justifyContent: 'space-between',
                    marginBottom:  '7px',
                    fontFamily:    'JetBrains Mono, monospace',
                    fontSize:      '0.82rem',
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {/* Language color dot */}
                      <span style={{
                        width: '10px', height: '10px',
                        borderRadius: '50%',
                        background: lang.color,
                        flexShrink: 0,
                      }} />
                      <span style={{ color: 'var(--text)' }}>{lang.name}</span>
                    </span>
                    <span style={{ color: 'var(--muted)' }}>{lang.pct}%</span>
                  </div>
                  {/* Bar track */}
                  <div style={{
                    height:       '7px',
                    borderRadius: '4px',
                    background:   'rgba(255,255,255,0.08)',
                    overflow:     'hidden',
                  }}>
                    <div style={{
                      height:     '100%',
                      borderRadius: '4px',
                      background: lang.color,
                      width:      animated ? `${lang.pct}%` : '0%',
                      transition: 'width 1.5s ease',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── ROW 2: Recent Repos — full width 3-column grid ── */}
        <div>
          <p style={{
            fontFamily:    'JetBrains Mono, monospace',
            fontSize:      '0.75rem',
            color:         '#7B61FF',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom:  '20px',
          }}>
            Recent Repositories
          </p>

          {loading ? (
            <p style={{
              color:      'var(--muted)',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize:   '0.82rem',
            }}>
              Loading repos...
            </p>
          ) : (
            <div style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap:                 '16px',
            }}
              className="repos-grid"
            >
              {repos.slice(0, 6).map((repo) => (
                <RepoCard key={repo.name} repo={repo} />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .github-top { grid-template-columns: 1fr !important; }
          .repos-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

/* Single repo card */
function RepoCard({ repo }) {
  return (
    <div className="glass-card" style={{ padding: '20px 24px' }}>

      {/* Repo name */}
      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        style={{
          fontFamily:   'Syne, sans-serif',
          fontWeight:   600,
          fontSize:     '0.95rem',
          color:        'var(--text)',
          display:      'block',
          marginBottom: '8px',
          transition:   'color 0.3s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#00C6FF' }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text)' }}
      >
        {repo.name}
      </a>

      {/* Description */}
      {repo.description && (
        <p style={{
          fontFamily:       'DM Sans, sans-serif',
          fontSize:         '0.82rem',
          color:            'var(--muted)',
          lineHeight:       1.6,
          marginBottom:     '14px',
          display:          '-webkit-box',
          WebkitLineClamp:  2,
          WebkitBoxOrient:  'vertical',
          overflow:         'hidden',
        }}>
          {repo.description}
        </p>
      )}

      {/* Language dot + name + stars */}
      <div style={{
        display:    'flex',
        alignItems: 'center',
        gap:        '16px',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize:   '0.75rem',
        color:      'var(--muted)',
      }}>
        {repo.language && (
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{
              width:        '10px',
              height:       '10px',
              borderRadius: '50%',
              background:   LANG_COLORS[repo.language] || '#A9A9B3',
              flexShrink:   0,
            }} />
            {repo.language}
          </span>
        )}
        <span>⭐ {repo.stargazers_count}</span>
      </div>
    </div>
  )
}