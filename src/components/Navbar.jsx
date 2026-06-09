import { useState, useEffect } from 'react'

/* Smooth scroll to a section by its id */
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrolled,     setScrolled]     = useState(false)

  const navLinks = [
    { label: 'About',          id: 'about'          },
    { label: 'Stack',          id: 'skills'         },
    { label: 'Experience',     id: 'experience'     },
    { label: 'Projects',       id: 'projects'       },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact',        id: 'contact'        },
  ]

  /* Add shadow when user scrolls down */
  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 20) }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Highlight nav link based on which section is in view */
  useEffect(() => {
    function onScroll() {
      for (const link of [...navLinks].reverse()) {
        const el = document.getElementById(link.id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(link.id)
          return
        }
      }
      setActiveSection('')
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* Handle nav link click — close menu and scroll */
  function handleNavClick(id) {
    setMenuOpen(false)
    setTimeout(() => scrollTo(id), 50)
  }

  return (
    <>
      {/* ── Main Navbar ─────────────────────────────── */}
      <nav style={{
        position:        'fixed',
        top:             0,
        left:            0,
        right:           0,
        zIndex:          1000,
        height:          '70px',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'space-between',
        padding:         '0 40px',
        background:      'rgba(7, 11, 26, 0.85)',
        backdropFilter:  'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom:    '1px solid rgba(0, 198, 255, 0.1)',
        boxShadow:       scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        transition:      'box-shadow 0.3s ease',
      }}>

        {/* Logo */}
        <span
          className="gradient-text"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize:   '1.6rem',
            cursor:     'pointer',
            letterSpacing: '-0.02em',
          }}
        >
          SP.
        </span>

        {/* Desktop nav links */}
        <ul className="hide-mobile" style={{
          display:    'flex',
          gap:        '32px',
          listStyle:  'none',
          alignItems: 'center',
        }}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                style={{
                  background:    'none',
                  border:        'none',
                  cursor:        'pointer',
                  fontFamily:    'JetBrains Mono, monospace',
                  fontSize:      '0.82rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color:         activeSection === link.id ? '#00C6FF' : 'var(--muted)',
                  padding:       '4px 0',
                  position:      'relative',
                  transition:    'color 0.3s',
                }}
              >
                {link.label}
                {/* Underline — grows when active */}
                <span style={{
                  position:   'absolute',
                  bottom:     '-2px',
                  left:       0,
                  height:     '2px',
                  width:      activeSection === link.id ? '100%' : '0%',
                  background: '#00C6FF',
                  transition: 'width 0.3s ease',
                  borderRadius: '2px',
                }} />
              </button>
            </li>
          ))}
        </ul>

        {/* Right side — theme toggle + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="glass-card"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              width:      '38px',
              height:     '38px',
              border:     'none',
              cursor:     'pointer',
              display:    'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize:   '1rem',
              borderRadius: '50%',
              flexShrink: 0,
            }}
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="show-mobile"
            onClick={() => setMenuOpen(true)}
            style={{
              background: 'none',
              border:     'none',
              cursor:     'pointer',
              flexDirection: 'column',
              gap:        '5px',
              padding:    '4px',
              display:    'none',
            }}
          >
            <span style={{ width: '24px', height: '2px', background: 'var(--text)', display: 'block', borderRadius: '2px' }} />
            <span style={{ width: '24px', height: '2px', background: 'var(--text)', display: 'block', borderRadius: '2px' }} />
            <span style={{ width: '24px', height: '2px', background: 'var(--text)', display: 'block', borderRadius: '2px' }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Full-Screen Menu ──────────────────── */}
      {menuOpen && (
        <div style={{
          position:   'fixed',
          inset:      0,
          zIndex:     998,
          background: 'rgba(5, 8, 22, 0.98)',
          display:    'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap:        '32px',
        }}>

          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position:   'absolute',
              top:        '20px',
              right:      '24px',
              background: 'none',
              border:     'none',
              color:      'var(--text)',
              fontSize:   '2rem',
              cursor:     'pointer',
              lineHeight: 1,
            }}
          >
            ✕
          </button>

          {/* Mobile nav links */}
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={{
                background:  'none',
                border:      'none',
                cursor:      'pointer',
                fontFamily:  'Syne, sans-serif',
                fontWeight:  700,
                fontSize:    '1.8rem',
                color:       activeSection === link.id ? '#00C6FF' : 'var(--text)',
                transition:  'color 0.3s',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}