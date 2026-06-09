import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section reveal">
      <div className="container">

        <span className="section-label">07 / Projects</span>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="section-divider" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '28px',
        }}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <div
      className="glass-card"
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Gradient preview top */}
      <div style={{
        height: '180px',
        background: project.gradient,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
        {/* Big faded icon */}
        <span style={{ fontSize: '5rem', opacity: 0.3 }}>
          {project.icon}
        </span>
        {/* Category badge */}
        <span style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.7rem',
          background: 'rgba(5,8,22,0.7)',
          border: '1px solid var(--glass-border)',
          padding: '4px 12px',
          borderRadius: '100px',
          color: 'var(--text)',
        }}>
          {project.category}
        </span>
      </div>

      {/* Card body */}
      <div style={{
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: '12px',
      }}>

        {/* Number + title */}
        <div>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.7rem',
            color: 'var(--muted)',
          }}>
            {project.number}
          </span>
          <h3 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: '1.15rem',
            marginTop: '4px',
            color: 'var(--text)',
          }}>
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.85rem',
          color: 'var(--muted)',
          lineHeight: 1.7,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {project.description}
        </p>

        {/* Metrics 2x2 grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px',
        }}>
          {project.metrics.map((m) => (
            <div key={m} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(0,198,255,0.06)',
              border: '1px solid rgba(0,198,255,0.15)',
              borderRadius: '8px',
              padding: '6px 10px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              color: 'var(--muted)',
            }}>
              <span style={{ color: '#00F5D4', flexShrink: 0 }}>✓</span>
              {m}
            </div>
          ))}
        </div>

        {/* Stack tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.stack.map((tech) => (
            <span key={tech} style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem',
              color: '#00C6FF',
              background: 'rgba(0,198,255,0.08)',
              border: '1px solid rgba(0,198,255,0.2)',
              borderRadius: '6px',
              padding: '3px 10px',
            }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Repo coming soon note */}
        {project.repoNote && (
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.72rem',
            color: 'var(--muted)',
          }}>
            🔜 {project.repoNote}
          </span>
        )}

        {/* Buttons — pushed to bottom */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginTop: 'auto',
          paddingTop: '8px',
        }}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            style={{ flex: 1, justifyContent: 'center', padding: '10px' }}
          >
            ⌥ GitHub
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ flex: 1, justifyContent: 'center', padding: '10px' }}
            >
              ↗ Live Demo
            </a>
          ) : (
            <button
              disabled
              className="btn-primary"
              style={{
                flex: 1,
                justifyContent: 'center',
                padding: '10px',
                opacity: 0.4,
                cursor: 'not-allowed',
              }}
            >
              ↗ Demo Soon
            </button>
          )}
        </div>
      </div>
    </div>
  )
}