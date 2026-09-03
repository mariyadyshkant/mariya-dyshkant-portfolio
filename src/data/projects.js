// Dati di tutti i progetti del portfolio.
// Ogni voce alimenta sia la card breve in home sia la pagina di dettaglio /progetti/:slug.
// Le pagine di dettaglio sono generiche (vedi src/pages/ProjectDetail.jsx): per aggiungere
// un nuovo progetto basta aggiungere una voce qui, non serve scrivere un nuovo componente.

const projects = {
  fluffman: {
    slug: 'fluffman',
    title: 'Fluffman',
    tagline: 'E-commerce per articoli per animali domestici',
    summary:
      'E-commerce completo per articoli per animali domestici, progetto finale in team (5 persone) al bootcamp Boolean.',
    platforms: ['Web'],
    stack: ['React 19', 'Vite', 'React Router 7', 'Bootstrap', 'Node.js', 'Express 5', 'PostgreSQL'],
    links: {
      demo: 'https://fluffman.mariyadyshkant.com',
      code: 'https://github.com/mariyadyshkant/fluffman-project-work',
    },
    screenshots: [],
    sections: [
      {
        heading: 'Il progetto',
        body: [
          'E-commerce completo per articoli per animali domestici, progetto finale in team (5 persone) al bootcamp Boolean.',
        ],
      },
    ],
  },

  'corso-rama': {
    slug: 'corso-rama',
    title: 'Corsorama',
    tagline: 'Gestione di un catalogo corsi',
    summary:
      'Applicazione full-stack sviluppata in autonomia per la gestione di un catalogo corsi: CRUD completo, autenticazione e relazioni tra entità.',
    platforms: ['Web'],
    stack: ['PHP', 'Laravel', 'MySQL'],
    links: { demo: null, code: null },
    screenshots: [],
    sections: [
      {
        heading: 'Il progetto',
        body: [
          'Applicazione full-stack sviluppata in autonomia per la gestione di un catalogo corsi: CRUD completo, autenticazione e relazioni tra entità.',
        ],
      },
    ],
  },

  financed: {
    slug: 'financed',
    title: 'financeD',
    tagline: 'Gestione delle finanze personali',
    summary:
      'App desktop personale per la gestione delle finanze: importa automaticamente gli estratti conto Revolut, categorizza le spese e traccia stipendi e turni di lavoro.',
    platforms: ['Desktop', 'Mobile · in corso'],
    stack: ['Electron', 'Svelte', 'FastAPI', 'SQLite / Turso'],
    links: { demo: null, code: null },
    screenshots: [],
    sections: [
      {
        heading: 'Perché esiste',
        body: [
          'financeD nasce da un’esigenza concreta: smettere di fare i conti a fine mese aprendo fogli Excel e PDF bancari. È un’app desktop personale che importa automaticamente gli estratti conto Revolut, categorizza le spese, traccia stipendi e turni di lavoro, e si collega a un bot Telegram per registrare le spese in tempo reale dal telefono.',
        ],
      },
      {
        heading: 'Stack',
        body: [
          'Frontend in Svelte con Electron per il packaging desktop, backend in Python/FastAPI con database SQLite su Turso. Include un parser PDF per estratti conto Revolut, un sistema di budget mensile con suggerimenti basati sulla storia, e un bot Telegram su Fly.io per la registrazione spese in tempo reale.',
        ],
      },
    ],
  },

  sylla: {
    slug: 'sylla',
    title: 'Sylla',
    tagline: 'Organizzazione di studio e lavoro',
    summary:
      'App desktop per organizzare studio e lavoro su più fronti in parallelo, con blocchi tematici modificabili per ogni giorno della settimana.',
    platforms: ['Desktop'],
    stack: ['Electron', 'Alpine.js', 'SQLite'],
    links: { demo: null, code: null },
    screenshots: [],
    sections: [
      {
        heading: 'Il progetto',
        body: [
          'App desktop per organizzare lo studio e il lavoro su più fronti in parallelo (corso, ricerca lavoro, progetti personali, formazione AI), pensata per chi deve destreggiarsi tra impegni diversi senza perdere il filo. Ogni giorno della settimana è organizzato in blocchi tematici modificabili, con un diario di sviluppo che traccia i progressi nel tempo.',
        ],
      },
      {
        heading: 'Stack',
        body: ['Sviluppata con Electron, Alpine.js e SQLite, con persistenza dati completamente locale.'],
      },
    ],
  },
}

export const projectList = Object.values(projects)

export function getProject(slug) {
  return projects[slug]
}

export default projects
