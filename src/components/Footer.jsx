import { useState, useEffect } from 'react'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/debugwithsushant',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/sushant-pawar1232',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/sushant4912/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.396a.5.5 0 0 0-.003-.707.499.499 0 0 0-.707.003l-2.396 2.396a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-1.093-1.44-1.079-2.083a2.368 2.368 0 0 1 .587-1.615l3.855-4.128 5.406-5.788a1.5 1.5 0 0 1 2.211.03l3.312 3.338a1.5 1.5 0 0 1-.03 2.211l-2.056 1.92a.5.5 0 0 0 .687.726l2.056-1.92a2.5 2.5 0 0 0 .05-3.684l-3.312-3.338A2.374 2.374 0 0 0 13.483 0z"/>
      </svg>
    ),
  },
  {
    label: 'GFG',
    href: 'https://www.geeksforgeeks.org/profile/sushantpara21',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.029-.016 3.49 3.49 0 0 1-1.108-.704l-.395-.39-.395.39a3.49 3.49 0 0 1-1.108.704 4.51 4.51 0 0 1-3.029.016 3.691 3.691 0 0 1-1.104-.695 3.19 3.19 0 0 1-.565-.745L8.04 12l1.11-2.315c.143-.28.334-.532.565-.745.332-.29.722-.505 1.104-.695a4.51 4.51 0 0 1 3.029.016c.386.15.753.354 1.108.704l.395.39.395-.39a3.49 3.49 0 0 1 1.108-.704 4.51 4.51 0 0 1 3.029-.016c.382.19.772.405 1.104.695.231.213.422.465.565.745L23 12l-1.55 2.315zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:sushantpawar1232@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const [showBtn, setShowBtn] = useState(false)

  /* Show scroll-to-top button after scrolling 400px */
  useEffect(() => {
    function onScroll() { setShowBtn(window.scrollY > 400) }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* ── Recruiter CTA Banner ─────────────────── */}
      <div style={{
        background:   'linear-gradient(135deg, rgba(0,198,255,0.06), rgba(123,97,255,0.06))',
        borderTop:    '1px solid rgba(0,198,255,0.15)',
        borderBottom: '1px solid rgba(0,198,255,0.15)',
        padding:      '60px 40px',
        textAlign:    'center',
      }}>
        <h2 style={{
          fontFamily:    'Syne, sans-serif',
          fontWeight:    800,
          fontSize:      'clamp(1.8rem, 4vw, 2.5rem)',
          letterSpacing: '-0.03em',
          marginBottom:  '12px',
        }}>
          <span className="gradient-text">Looking for a Software Developer?</span>
        </h2>
        <p style={{
          fontFamily:   'DM Sans, sans-serif',
          color:        'var(--muted)',
          fontSize:     '1.05rem',
          marginBottom: '32px',
        }}>
          Let's build something impactful together.
        </p>
        <div style={{
          display:        'flex',
          justifyContent: 'center',
          gap:            '16px',
          flexWrap:       'wrap',
        }}>
          <a
            href="https://linkedin.com/in/sushant-pawar1232"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            📅 View LinkedIn
          </a>
          <a
            href="/my-portfolio/resume1.pdf"
            download
            className="btn-primary"
          >
            📥 Download Resume
          </a>
        </div>
      </div>

      {/* ── Footer Proper ────────────────────────── */}
      <footer style={{
        background:  'var(--bg2)',
        borderTop:   '1px solid rgba(255,255,255,0.06)',
        padding:     '48px 40px',
        textAlign:   'center',
      }}>

        {/* Logo */}
        <span className="gradient-text" style={{
          fontFamily:   'Syne, sans-serif',
          fontWeight:   800,
          fontSize:     '2rem',
          display:      'block',
          marginBottom: '8px',
          letterSpacing: '-0.02em',
        }}>
          SP.
        </span>

        {/* Name */}
        <p style={{
          fontFamily:   'Syne, sans-serif',
          fontWeight:   600,
          fontSize:     '1rem',
          marginBottom: '4px',
          color:        'var(--text)',
        }}>
          Sushant Pawar
        </p>

        {/* Role */}
        <p style={{
          fontFamily:   'DM Sans, sans-serif',
          fontSize:     '0.9rem',
          color:        'var(--muted)',
          marginBottom: '24px',
        }}>
          Software Developer & Full Stack Developer
        </p>

        {/* Social icons row */}
        <div style={{
          display:        'flex',
          justifyContent: 'center',
          gap:            '12px',
          marginBottom:   '24px',
          flexWrap:       'wrap',
        }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noreferrer"
              title={s.label}
              className="glass-card"
              style={{
                width:          '40px',
                height:         '40px',
                borderRadius:   '50%',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                fontSize:       '1rem',
                transition:     'box-shadow 0.3s, transform 0.3s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,198,255,0.4)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{
          width:     '100%',
          height:    '1px',
          background: 'rgba(255,255,255,0.06)',
          margin:    '0 0 24px',
        }} />

        {/* Bottom text */}
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize:   '0.85rem',
          color:      'var(--muted)',
          marginBottom: '6px',
        }}>
          Designed & Built by Sushant Pawar · 2026
        </p>
        <p style={{
          fontFamily:  'DM Sans, sans-serif',
          fontStyle:   'italic',
          fontSize:    '0.82rem',
          color:       'var(--muted)',
        }}>
          "Always building. Always learning."
        </p>
      </footer>

      {/* ── Scroll to Top Button ─────────────────── */}
      {showBtn && (
        <button
          onClick={scrollToTop}
          title="Back to top"
          style={{
            position:       'fixed',
            bottom:         '28px',
            right:          '28px',
            width:          '48px',
            height:         '48px',
            borderRadius:   '50%',
            background:     'linear-gradient(135deg, #00C6FF, #7B61FF)',
            border:         'none',
            cursor:         'pointer',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            fontSize:       '1.2rem',
            color:          '#fff',
            boxShadow:      '0 4px 20px rgba(0,198,255,0.4)',
            zIndex:         999,
            transition:     'transform 0.3s, box-shadow 0.3s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
        >
          ↑
        </button>
      )}
    </>
  )
}