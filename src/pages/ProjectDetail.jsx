import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { getProject } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return <Navigate to="/" replace />
  }

  const { title, tagline, platforms, stack, links, screenshots, sections } = project

  return (
    <>
      <Nav />

      <section className="detail-hero wrap">
        <Link to="/#progetti" className="back-link">← Tutti i progetti</Link>
        <div className="detail-head">
          <div>
            <h1>{title}</h1>
            <p className="detail-tagline">{tagline}</p>
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
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i}>{paragraph}</p>
                  ),
                )}
              </div>
            ))}

            {screenshots.length > 0 && (
              <div className="screenshots">
                {screenshots.map((src) => (
                  <img key={src} src={src} alt={`Screenshot di ${title}`} />
                ))}
              </div>
            )}
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
      </section>

      <Footer />
    </>
  )
}
