import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand" style={{ textDecoration: 'none' }}>
          Costruisco ingranaggi, un sistema alla volta
        </Link>
        <nav>
          <Link to="/#about">About</Link>
          <Link to="/#progetti">Progetti</Link>
          <Link to="/#skills">Skills</Link>
          <Link to="/#contatti">Contatti</Link>
        </nav>
      </div>
    </header>
  )
}
