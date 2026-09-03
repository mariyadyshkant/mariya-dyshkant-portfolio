import Nav from '../components/Nav'
import SectionDivider from '../components/SectionDivider'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import { projectList } from '../data/projects'

export default function Home() {
  return (
    <>
      <Nav />

      <section className="hero wrap">
        <p className="role">Junior Web Developer</p>
        <h1>
          <img className="signature" src="/firma-mariya-dyshkant.png" alt="Mariya Dyshkant" />
        </h1>
        <p className="tagline">
          Dal ragionamento clinico al ragionamento sui sistemi: oggi progetto e sviluppo applicazioni
          full-stack, con un occhio rivolto a backend e architetture scalabili.
        </p>
        <div className="cta">
          <a className="btn primary" href="#progetti">Guarda i progetti</a>
          <a className="btn ghost" href="#contatti">Contattami</a>
        </div>
      </section>

      <SectionDivider />

      <section id="about" className="wrap about">
        <span className="eyebrow">About</span>
        <h2>Dal bisturi al debugger</h2>
        <p>
          Anni di studio in Medicina mi hanno insegnato a leggere sistemi complessi, cercare cause
          profonde e non fermarmi al primo sintomo. Quando ho scoperto lo sviluppo software,{' '}
          <strong>i sistemi sono rimasti il fulcro del mio interesse</strong> — solo che ora invece di
          organi e apparati, lavoro con componenti, API e basi di dati.
        </p>
        <p>
          Oggi sono una Junior Full-Stack Developer in formazione continua (Boolean, Pacific Dev), con
          un interesse crescente per il backend, le architetture scalabili e il modo in cui i sistemi
          comunicano tra loro.
        </p>
      </section>

      <SectionDivider />

      <section id="progetti" className="wrap">
        <span className="eyebrow">Progetti</span>
        <h2>Cosa ho costruito finora</h2>
        <div className="projects-grid">
          {projectList.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <SectionDivider />

      <section id="skills" className="wrap">
        <span className="eyebrow">Competenze</span>
        <h2>Stack e strumenti</h2>
        <div className="skills-grid">
          <div className="skills-col">
            <h4>Frontend</h4>
            <div className="skill-badges">
              <SkillBadge code="HT" name="HTML" status="solid" />
              <SkillBadge code="CSS" name="CSS" status="solid" />
              <SkillBadge code="JS" name="JavaScript" status="solid" />
              <SkillBadge code="RE" name="React.js" status="solid" />
              <SkillBadge code="VT" name="Vite" status="solid" />
              <SkillBadge code="BS" name="Bootstrap" status="solid" />
            </div>
          </div>
          <div className="skills-col">
            <h4>Backend</h4>
            <div className="skill-badges">
              <SkillBadge code="PHP" name="PHP" status="solid" />
              <SkillBadge code="LV" name="Laravel" status="solid" />
              <SkillBadge code="MVC" name="MVC" status="solid" />
              <SkillBadge code="ND" name="Node.js · Express" status="solid" />
              <SkillBadge code="SQL" name="MySQL" status="solid" />
              <SkillBadge code="API" name="REST API" status="solid" />
            </div>
          </div>
          <div className="skills-col">
            <h4>Tools</h4>
            <div className="skill-badges">
              <SkillBadge code="GIT" name="Git · GitHub" status="solid" />
              <SkillBadge code="VS" name="VS Code" status="solid" />
              <SkillBadge code="PM" name="Postman" status="solid" />
              <SkillBadge code="FIG" name="Figma" status="solid" />
              <SkillBadge code="NF" name="Netlify" status="solid" />
              <SkillBadge code="I/D" name="CI/CD" status="solid" />
            </div>
          </div>
          <div className="skills-col">
            <h4>In corso</h4>
            <div className="skill-badges">
              <SkillBadge code="DK" name="Docker" status="progress" />
              <SkillBadge code="GCR" name="GCR" status="progress" />
              <SkillBadge code="TS" name="TypeScript" status="progress" />
              <SkillBadge code="TW" name="TailWind" status="progress" />
              <SkillBadge code="LLM" name="LLM APIs" status="progress" />
            </div>
          </div>
          <div className="skills-legend">
            <span><span className="status solid" /> Consolidato</span>
            <span><span className="status progress" /> In apprendimento</span>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="contatti" className="wrap contact">
        <span className="eyebrow">Contatti</span>
        <h2>Parliamone</h2>
        <p style={{ color: 'var(--ink-soft)', maxWidth: '50ch' }}>
          Sono aperta a opportunità come Junior Full-Stack Developer. Scrivimi pure, o guarda il mio
          profilo su GitHub e LinkedIn.
        </p>
        <div className="contact-actions">
          <a className="btn primary" href="mailto:mariya.dyshkant@gmail.com">Scrivimi →</a>
          <div className="social-links">
            <a href="https://github.com/mariyadyshkant" target="_blank" rel="noopener" aria-label="GitHub">
              <svg><use href="#github-icon" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/mariyadyshkant/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg><use href="#linkedin-icon" /></svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

function SkillBadge({ code, name, status }) {
  return (
    <div className="skill-badge">
      <span className="mono">{code}</span>
      <span className="name">{name}</span>
      <span className={`status ${status}`} />
    </div>
  )
}
