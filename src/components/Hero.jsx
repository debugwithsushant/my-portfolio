import { useState, useEffect, useRef } from 'react'

/* All roles for the typewriter */
const ROLES = [
  'Software Developer',
  'Java Developer',
  'Full Stack Developer',
  'Backend Developer',
  'Python Developer',
  'React Developer',
  'Technical Support Engineer',
  'Application Support Engineer',
  'QA Tester',
  'IT Support',
  'Cloud Engineer',
]

/* Smooth scroll to a section by id */
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

/* Single stat card with count-up animation */
function StatCard({ value, label, isDecimal }) {
  const [count, setCount]   = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  /* Start counting when card enters viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  /* Count from 0 to target over ~2 seconds */
  useEffect(() => {
    if (!started) return
    const target   = parseFloat(value)
    const duration = 2000
    const steps    = 60
    const interval = duration / steps
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(2)) : Math.floor(current))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [started, value, isDecimal])

  return (
    <div ref={ref} className="glass-card" style={{
      padding:   '20px',
      textAlign: 'center',
    }}>
      <div className="gradient-text" style={{
        fontFamily: 'Syne, sans-serif',
        fontWeight: 800,
        fontSize:   '1.8rem',
        lineHeight: 1,
        marginBottom: '6px',
      }}>
        {isDecimal ? count.toFixed(2) : count}
        {label === 'Projects' || label === 'Technologies' ? '+' : ''}
      </div>
      <div style={{
        fontFamily:    'JetBrains Mono, monospace',
        fontSize:      '0.72rem',
        color:         'var(--muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      }}>
        {label}
      </div>
    </div>
  )
}

/* SVG fallback avatar — shown if profile.jpg is missing */
function AvatarFallback() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="200" height="200" fill="#0a0f22" />
      {/* Body — navy suit */}
      <ellipse cx="100" cy="230" rx="70" ry="60" fill="#1a237e" />
      {/* Shirt */}
      <ellipse cx="100" cy="210" rx="30" ry="40" fill="#e8eeff" />
      {/* Tie */}
      <polygon points="100,175 94,210 100,220 106,210" fill="#00C6FF" />
      {/* Head */}
      <circle cx="100" cy="95" r="42" fill="#f5c5a3" />
      {/* Hair */}
      <ellipse cx="100" cy="60" rx="42" ry="22" fill="#2c1810" />
      {/* Eyes */}
      <circle cx="86"  cy="95" r="5" fill="#2c1810" />
      <circle cx="114" cy="95" r="5" fill="#2c1810" />
      {/* Smile */}
      <path d="M 88 112 Q 100 122 112 112" stroke="#2c1810" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export default function Hero() {
  /* Typewriter state */
  const [displayText, setDisplayText] = useState('')
  const [roleIndex,   setRoleIndex]   = useState(0)
  const [isDeleting,  setIsDeleting]  = useState(false)
  const [imgError,    setImgError]    = useState(false)

  /* Typewriter effect using setTimeout */
  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    let timeout

    if (!isDeleting) {
      /* Still typing */
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        }, 80)
      } else {
        /* Finished typing — pause then start deleting */
        timeout = setTimeout(() => setIsDeleting(true), 1800)
      }
    } else {
      /* Deleting */
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1))
        }, 50)
      } else {
        /* Fully deleted — move to next role */
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % ROLES.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section id="hero" style={{
      minHeight:   '100vh',
      paddingTop:  '70px',
      display:     'flex',
      alignItems:  'center',
      position:    'relative',
      overflow:    'hidden',
    }}>

      {/* Background radial glow */}
      <div style={{
        position:   'absolute',
        inset:      0,
        background: 'radial-gradient(ellipse at 60% 40%, rgba(0,198,255,0.06) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(123,97,255,0.06) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      {/* Subtle grid lines */}
      <div style={{
        position:        'absolute',
        inset:           0,
        backgroundImage: 'linear-gradient(rgba(0,198,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,198,255,0.04) 1px, transparent 1px)',
        backgroundSize:  '60px 60px',
        pointerEvents:   'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap:                 '60px',
          alignItems:          'center',
        }}
          className="hero-grid"
        >

          {/* ── LEFT — Photo + Stats ──────────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>

            {/* Availability badge */}
            <div className="glass-card" style={{
              display:    'inline-flex',
              alignItems: 'center',
              gap:        '8px',
              padding:    '8px 16px',
              borderColor: 'rgba(0,245,212,0.3)',
              borderRadius: '100px',
            }}>
              <span className="pulse-dot" />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: '#00F5D4' }}>
                Available for Full-Time Opportunities
              </span>
            </div>

            {/* Floating photo ring */}
            <div className="animate-float" style={{ width: '320px', height: '320px' }}>
              {/* Spinning ring border */}
              <div style={{
                width:        '100%',
                height:       '100%',
                borderRadius: '50%',
                padding:      '4px',
                background:   'conic-gradient(#00C6FF, #7B61FF, #00F5D4, #00C6FF)',
                animation:    'spin-ring 8s linear infinite',
              }}>
                {/* Inner photo circle */}
                <div style={{
                  width:        '100%',
                  height:       '100%',
                  borderRadius: '50%',
                  overflow:     'hidden',
                  background:   '#0a0f22',
                }}>
                  {imgError ? (
                    <AvatarFallback />
                  ) : (
                    <img
                      src="/my-portfolio/profile.jpg"
                      alt="Sushant Pawar"
                      onError={() => setImgError(true)}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Stats 2×2 grid */}
            <div style={{
              display:             'grid',
              gridTemplateColumns: '1fr 1fr',
              gap:                 '12px',
              width:               '100%',
              maxWidth:            '320px',
            }}>
              <StatCard value={9.21}  label="CGPA"          isDecimal={true}  />
              <StatCard value={8}     label="Projects"       isDecimal={false} />
              <StatCard value={5}     label="Internships"    isDecimal={false} />
              <StatCard value={10}    label="Technologies"   isDecimal={false} />
            </div>
          </div>

            {/* ── RIGHT — Text Content ──────────────────── */}
            <div style={{
              display:       'flex',
              flexDirection: 'column',
              gap:           '16px',
              alignItems:    'flex-start',   /* desktop: left align */
            }}
              className="hero-right"
            >
              
            {/* Greeting */}
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize:   '0.9rem',
              color:      '#00F5D4',
            }}>
              👋 Hello, I'm
            </span>

            {/* Name */}
            <h1 className="gradient-text" style={{
              fontFamily:  'Syne, sans-serif',
              fontWeight:  800,
              fontSize:    'clamp(2.8rem, 5vw, 4.2rem)',
              lineHeight:  1.05,
              letterSpacing: '-0.03em',
              margin:      0,
            }}>
              Sushant Pawar
            </h1>

            {/* Typewriter */}
            <div style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize:   'clamp(1.2rem, 2.5vw, 1.6rem)',
              color:      '#00C6FF',
              minHeight:  '2rem',
              display:    'flex',
              alignItems: 'center',
            }}>
              {displayText}
              <span className="cursor-blink" />
            </div>

            {/* Tagline */}
            <p style={{
              fontFamily:  'DM Sans, sans-serif',
              color:       'var(--muted)',
              maxWidth:    '480px',
              lineHeight:  1.8,
              fontSize:    '1rem',
              margin:      0,
            }}>
              Building AI-powered applications and scalable software solutions
              that transform ideas into real-world products.
            </p>

            {/* Intro */}
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize:   '0.95rem',
              color:      'var(--muted)',
              maxWidth:   '480px',
              lineHeight: 1.8,
              margin:     0,
            }}>
              B.Sc Computer Science graduate passionate about Software Development,
              AI, Cloud Technologies, and building real-world applications.
            </p>

            {/* Primary buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
                <a
                href="/my-portfolio/resume.pdf"
                download
                className="btn-primary"
              >
                📥 Download Resume
              </a>
              <button
                onClick={() => scrollTo('projects')}
                className="btn-outline"
              >
                ⊞ View Projects
              </button>
            </div>

            {/* Social pills */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '4px' }}>
              {[
                { label: 'GitHub',    href: 'https://github.com/debugwithsushant' },
                { label: 'LinkedIn',  href: 'https://linkedin.com/in/sushant-pawar1232' },
                { label: 'Contact',   href: null, onClick: () => scrollTo('contact') },
              ].map((item) => (
                item.href ? (
                    <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-card"
                    style={{
                      padding:    '8px 16px',
                      borderRadius: '100px',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize:   '0.8rem',
                      color:      'var(--muted)',
                      display:    'inline-flex',
                      alignItems: 'center',
                      gap:        '6px',
                      transition: 'color 0.3s, border-color 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color        = '#00C6FF'
                      e.currentTarget.style.borderColor  = 'rgba(0,198,255,0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color        = 'var(--muted)'
                      e.currentTarget.style.borderColor  = 'var(--glass-border)'
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.label}
                    onClick={item.onClick}
                    className="glass-card"
                    style={{
                      padding:    '8px 16px',
                      borderRadius: '100px',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize:   '0.8rem',
                      color:      'var(--muted)',
                      display:    'inline-flex',
                      alignItems: 'center',
                      gap:        '6px',
                      border:     '1px solid var(--glass-border)',
                      cursor:     'pointer',
                      background: 'var(--glass-bg)',
                      transition: 'color 0.3s, border-color 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color       = '#00C6FF'
                      e.currentTarget.style.borderColor = 'rgba(0,198,255,0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color       = 'var(--muted)'
                      e.currentTarget.style.borderColor = 'var(--glass-border)'
                    }}
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile styles — injected via style tag ──── */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 40px !important;
          }
          .hero-grid > div:first-child {
            order: 1;
          }
          .hero-grid > div:last-child {
            order: 2;
            align-items: center;
          }
          .hero-grid p,
          .hero-grid h1 {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .animate-float {
            width: 240px !important;
            height: 240px !important;
          }
        }
      `}</style>
    </section>
  )
}