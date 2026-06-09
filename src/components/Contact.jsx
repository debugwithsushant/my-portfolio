import { useState } from 'react'

const FORMSPREE_URL = 'https://formspree.io/f/meewapve'

const contactInfo = [
  { icon: '✉️', label: 'EMAIL',    value: 'sushantpawar1232@gmail.com', href: 'mailto:sushantpawar1232@gmail.com' },
  { icon: '📱', label: 'PHONE',    value: '+91 9067215825',             href: 'tel:+919067215825' },
  { icon: '📍', label: 'LOCATION', value: 'Sangola, Solapur, Maharashtra', href: null },
  { icon: '💼', label: 'LINKEDIN', value: 'linkedin.com/in/sushant-pawar1232', href: 'https://linkedin.com/in/sushant-pawar1232' },
  { icon: '🐙', label: 'GITHUB',   value: 'github.com/debugwithsushant', href: 'https://github.com/debugwithsushant' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status,   setStatus]   = useState('idle')

  /* Update field value on change */
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  /* Submit to Formspree */
  function handleSubmit(e) {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill all fields.')
      return
    }

    setStatus('sending')

    fetch(FORMSPREE_URL, {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept':       'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          setStatus('success')
          setFormData({ name: '', email: '', message: '' })
          setTimeout(() => setStatus('idle'), 5000)
        } else {
          setStatus('error')
          setTimeout(() => setStatus('idle'), 5000)
        }
      })
      .catch(() => {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      })
  }

  /* Shared input style */
  const inputStyle = {
    width:        '100%',
    background:   'var(--glass-bg)',
    border:       '1px solid var(--glass-border)',
    borderRadius: '10px',
    padding:      '13px 16px',
    color:        'var(--text)',
    fontFamily:   'DM Sans, sans-serif',
    fontSize:     '0.9rem',
    outline:      'none',
    boxSizing:    'border-box',
    transition:   'border-color 0.3s, box-shadow 0.3s',
  }

  function onFocus(e) {
    e.target.style.borderColor = '#00C6FF'
    e.target.style.boxShadow   = '0 0 0 3px rgba(0,198,255,0.1)'
  }
  function onBlur(e) {
    e.target.style.borderColor = 'var(--glass-border)'
    e.target.style.boxShadow   = 'none'
  }

  return (
    <section id="contact" className="section reveal">
      <div className="container">

        <span className="section-label">15 / Contact</span>
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '16px' }}>
          Open to Software Developer roles — On-site · Hybrid · Remote
        </p>
        <div className="section-divider" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '40px',
          alignItems: 'start',
        }}
          className="contact-grid"
        >

          {/* LEFT — Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {contactInfo.map((item) => (
              <div key={item.label} className="glass-card" style={{
                padding:    '16px 20px',
                display:    'flex',
                alignItems: 'center',
                gap:        '16px',
              }}>
                {/* Icon circle */}
                <div style={{
                  width:          '44px',
                  height:         '44px',
                  borderRadius:   '12px',
                  background:     'rgba(0,198,255,0.1)',
                  border:         '1px solid rgba(0,198,255,0.2)',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  fontSize:       '1.1rem',
                  flexShrink:     0,
                }}>
                  {item.icon}
                </div>

                {/* Label + value */}
                <div>
                  <p style={{
                    fontFamily:    'JetBrains Mono, monospace',
                    fontSize:      '0.68rem',
                    color:         'var(--muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom:  '2px',
                  }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize:   '0.88rem',
                        color:      'var(--text)',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#00C6FF' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text)' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize:   '0.88rem',
                      color:      'var(--text)',
                    }}>
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — Formspree form */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{
              fontFamily:   'Syne, sans-serif',
              fontWeight:   700,
              fontSize:     '1.2rem',
              marginBottom: '24px',
              color:        'var(--text)',
            }}>
              Send a Message
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
                style={inputStyle}
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
                style={inputStyle}
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Tell me about the role or project..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
                style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
              />

              {/* Submit button */}
              <button
                onClick={handleSubmit}
                disabled={status === 'sending'}
                style={{
                  width:        '100%',
                  padding:      '14px',
                  background:   status === 'success'
                    ? 'linear-gradient(135deg, #00F5D4, #00C6FF)'
                    : status === 'error'
                    ? '#7f1d1d'
                    : 'linear-gradient(135deg, #00C6FF, #7B61FF)',
                  color:        status === 'success' ? '#000' : '#fff',
                  border:       'none',
                  borderRadius: '10px',
                  fontFamily:   'Syne, sans-serif',
                  fontWeight:   700,
                  fontSize:     '0.95rem',
                  cursor:       status === 'sending' ? 'not-allowed' : 'pointer',
                  opacity:      status === 'sending' ? 0.7 : 1,
                  transition:   'opacity 0.3s, transform 0.3s',
                }}
                onMouseEnter={(e) => {
                  if (status !== 'sending') e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {status === 'idle'    && 'Send Message →'}
                {status === 'sending' && 'Sending...'}
                {status === 'success' && '✓ Message Sent!'}
                {status === 'error'   && 'Something went wrong'}
              </button>

              {/* Success message */}
              {status === 'success' && (
                <p style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize:   '0.82rem',
                  color:      '#00F5D4',
                  textAlign:  'center',
                }}>
                  Your message has been sent! I'll reply within 24 hours.
                </p>
              )}

              {/* Error message */}
              {status === 'error' && (
                <p style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize:   '0.82rem',
                  color:      'var(--muted)',
                  textAlign:  'center',
                }}>
                  Something went wrong. Email me directly:{' '}
                  <a href="mailto:sushantpawar1232@gmail.com"
                    style={{ color: '#00C6FF' }}>
                    sushantpawar1232@gmail.com
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}