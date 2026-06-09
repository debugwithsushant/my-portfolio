import { blogs } from '../data/blogs'

export default function Blogs() {
  /* Opens the markdown file on GitHub when card is clicked */
  function openBlog(slug) {
    window.open(
      `https://github.com/debugwithsushant/my-portfolio/blob/main/blogs/${slug}.md`,
      '_blank'
    )
  }

  return (
    <section id="blogs" className="section reveal">
      <div className="container">

        <span className="section-label">14 / Blog</span>
        <h2 className="section-title">
          Thoughts & <span className="gradient-text">Writing</span>
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '16px' }}>
          Technical articles, learnings, and career insights.
        </p>
        <div className="section-divider" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} onOpen={openBlog} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BlogCard({ blog, onOpen }) {
  return (
    <div
      className="glass-card"
      onClick={() => onOpen(blog.slug)}
      style={{
        padding: '28px',
        cursor:  'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      {/* Date + read time */}
      <div style={{
        display:        'flex',
        justifyContent: 'space-between',
        fontFamily:     'JetBrains Mono, monospace',
        fontSize:       '0.72rem',
        color:          'var(--muted)',
      }}>
        <span>{blog.date}</span>
        <span>{blog.readTime}</span>
      </div>

      {/* Featured badge */}
      {blog.featured && (
        <span style={{
          display:    'inline-block',
          alignSelf:  'flex-start',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize:   '0.68rem',
          color:      '#00C6FF',
          background: 'rgba(0,198,255,0.1)',
          border:     '1px solid rgba(0,198,255,0.3)',
          padding:    '2px 10px',
          borderRadius: '100px',
        }}>
          ⭐ Featured
        </span>
      )}

      {/* Title */}
      <h3 style={{
        fontFamily:    'Syne, sans-serif',
        fontWeight:    700,
        fontSize:      '1.05rem',
        lineHeight:    1.4,
        letterSpacing: '-0.02em',
        color:         'var(--text)',
        margin:        0,
      }}>
        {blog.title}
      </h3>

      {/* Excerpt */}
      <p style={{
        fontFamily:      'DM Sans, sans-serif',
        fontSize:        '0.85rem',
        color:           'var(--muted)',
        lineHeight:      1.7,
        margin:          0,
        display:         '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow:        'hidden',
      }}>
        {blog.excerpt}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {blog.tags.map((tag) => (
          <span key={tag} style={{
            fontFamily:   'JetBrains Mono, monospace',
            fontSize:     '0.72rem',
            color:        '#7B61FF',
            background:   'rgba(123,97,255,0.1)',
            border:       '1px solid rgba(123,97,255,0.3)',
            padding:      '3px 10px',
            borderRadius: '6px',
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Read Article link */}
      <div style={{
        display:    'flex',
        alignItems: 'center',
        gap:        '6px',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize:   '0.82rem',
        fontWeight: 600,
        color:      '#00C6FF',
        marginTop:  'auto',
      }}>
        Read Article
        <span style={{ transition: 'transform 0.2s' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(4px)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)' }}
        >
          →
        </span>
      </div>
    </div>
  )
}