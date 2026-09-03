import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const { slug, title, platforms, summary, stack } = project
  return (
    <article className="card">
      <div className="card-head">
        <h3>{title}</h3>
        <div className="platforms">
          {platforms.map((p) => (
            <span className="platform" key={p}>{p}</span>
          ))}
        </div>
      </div>
      <p>{summary}</p>
      <div className="stack">
        {stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <div className="card-links">
        <Link to={`/progetti/${slug}`}>Dettagli →</Link>
      </div>
    </article>
  )
}
