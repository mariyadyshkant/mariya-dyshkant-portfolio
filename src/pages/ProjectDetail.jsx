import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { getProject } from '../data/projects'

// Interpreta due sintassi nei testi (src/data/projects.js), senza HTML:
// **testo** -> evidenziazione "codice" (usata per sintassi/termini tecnici letterali)
// *testo*   -> evidenziazione corsiva in rosso (per dare risalto discorsivo, non da codice)
function renderInline(text) {
  const regex = /\*\*(.+?)\*\*|\*(.+?)\*/g
  const nodes = []
  let lastIndex = 0
  let key = 0
  let match
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index))
    if (match[1] !== undefined) {
      nodes.push(<strong className="hl" key={key++}>{match[1]}</strong>)
    } else {
      nodes.push(<em className="hl-italic" key={key++}>{match[2]}</em>)
    }
    lastIndex = regex.lastIndex
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex))
  return nodes
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return <Navigate to="/" replace />
  }

  const { title, tagline, platforms, stack, links, video, screenshots, sections } = project

  return (
    <>
      <Nav />

      <section className="detail-hero wrap">
        <Link to="/#progetti" className="back-link">← Tutti i progetti</Link>
        <div className="detail-head">
          <div>
            <h1>{title}</h1>
            <p className="detail-tagline">{renderInline(tagline)}</p>
          </div>
        </div>
        <div className="detail-links">
          {links?.demo && (
            <a className="btn primary" href={links.demo} target="_blank" rel="noopener">
              Demo live →
            </a>
          )}
          {links?.code && (
            <a className="btn ghost" href={links.code} target="_blank" rel="noopener">
              Codice →
            </a>
          )}
          {video && (
            <a className="btn ghost" href="#screencast">
              Screencast ↓
            </a>
          )}
        </div>
      </section>

      <section className="detail-body wrap">
        <div className="detail-grid">
          <div className="detail-main">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph, i) =>
                  Array.isArray(paragraph) ? (
                    <ul key={i}>
                      {paragraph.map((item) => (
                        <li key={item}>{renderInline(item)}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i}>{renderInline(paragraph)}</p>
                  ),
                )}
              </div>
            ))}
          </div>

          <aside className="detail-side">
            <h4>Piattaforme</h4>
            <div className="platforms">
              {platforms.map((p) => (
                <span className="platform" key={p}>{p}</span>
              ))}
            </div>
            <h4 style={{ marginTop: '26px' }}>Stack</h4>
            <div className="stack">
              {stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </aside>
        </div>

        {screenshots.length > 0 && (
          <>
            <h2 id="screencast" className="section-heading">Screencast</h2>
            <div className="screenshots">
              {screenshots.map((src) => (
                <figure key={src}>
                  <img src={src} alt={`Screenshot di ${title}`} loading="lazy" />
                </figure>
              ))}
            </div>
          </>
        )}

        {video && (
          <video className="detail-video" src={video} controls playsInline preload="none" />
        )}
      </section>

      <Footer />
    </>
  )
}
