// Dati di tutti i progetti del portfolio.
// Ogni voce alimenta sia la card breve in home sia la pagina di dettaglio /progetti/:slug.
// Le pagine di dettaglio sono generiche (vedi src/pages/ProjectDetail.jsx): per aggiungere
// un nuovo progetto basta aggiungere una voce qui, non serve scrivere un nuovo componente.

const projects = {
  fluffman: {
    slug: 'fluffman',
    title: 'Fluffman',
    tagline: '*E-commerce di articoli per animali domestici*',
    summary:
      'E-commerce di articoli per animali domestici, progetto finale in team del bootcamp di Boolean. Mio ruolo: frontend React (componenti, refactor wishlist/carrello in Context API) e migrazione del database da MySQL a PostgreSQL per il deployment in produzione.',
    platforms: ['Web'],
    stack: ['React 19', 'Vite', 'React Router 7', 'Bootstrap', 'Node.js', 'Express 5', 'PostgreSQL'],
    links: {
      demo: 'https://fluffman.mariyadyshkant.com',
      code: 'https://github.com/mariyadyshkant/fluffman-project-work',
    },
    video: '/fluffman-demo.mp4',
    screenshots: ['/fluffman-shot-home.jpg', '/fluffman-shot-cane.jpg'],
    sections: [
      {
        heading: 'Il mio ruolo',
        body: [
          'Progetto finale in team (5 persone) durante il bootcamp di Boolean.',
          '*Frontend React*: componenti prodotto, sistema di preferiti e carrello, validazione del checkout. Più un intervento *backend* successivo, per necessità di deploy: la migrazione del database da MySQL a PostgreSQL.',
        ],
      },
      {
        heading: 'Stack',
        body: [
          '*Lato frontend*: React 19 + Vite, React Router 7 per il routing, Bootstrap per lo stile.',
          '*Lato backend*: Node.js + Express 5 (ES modules) come API REST pura — nessun templating server-side, comunicazione via **fetch()** su endpoint JSON.',
          '*Lato database*: PostgreSQL (Railway)',
        ],
      },
      {
        heading: 'Cosa fa, sotto il cofano',
        body: [
          'Il catalogo è organizzato su 6 entità collegate:',
          ['Prodotti', 'Marche', 'Animali', 'Immagini', 'Acquisti', 'Acquisti↔Prodotti (tabella ponte)'],
          'La tabella ponte salva uno snapshot di prezzo e quantità al momento dell’acquisto — pattern realistico da e-commerce, non un semplice carrello.',
          'Il checkout gira dentro una transazione con row-locking (**SELECT ... FOR UPDATE**): blocca la riga di ogni prodotto mentre verifica e decrementa lo stock, con rollback automatico se la quantità richiesta non è più disponibile. Serve a evitare overselling in caso di richieste concorrenti sullo stesso prodotto.',
        ],
      },
      {
        heading: 'La sfida tecnica che ho affrontato',
        body: [
          'Per deployare il sito ho migrato l’intero backend da MySQL a PostgreSQL (da **mysql2** a **pg**), su 7 controller: sintassi dei placeholder diversa (**?** contro **$1, $2...**), forma diversa del risultato delle query, API di transazione completamente diversa.',
          'Il punto più interessante: una query di prodotti correlati usava **HAVING** senza **GROUP BY** per filtrare riga per riga — cosa che MySQL permette silenziosamente ma che PostgreSQL rifiuta perché non è SQL standard. L’ho risolta riscrivendo la query con una subquery che calcola il punteggio di correlazione e filtra a un livello esterno.',
        ],
      },
      {
        heading: 'Cosa ho imparato lavorando sul frontend',
        body: [
          '*Wishlist* e *carrello* sono partiti come state locale dentro il singolo componente prodotto — funzionava, finché non serviva sincronizzare il conteggio nell’header con quello che succedeva altrove nella pagina. Li ho rifattorizzati in due **Context React** condivisi, eliminando la logica duplicata tra componenti e un bug reale sul badge del contatore che a volte mostrava un numero sbagliato.',
        ],
      },
      {
        heading: 'Cosa non c’è (volutamente)',
        body: [
          'Nessuna autenticazione utenti, nessun pannello admin, nessuna integrazione di pagamento reale — è un progetto didattico e questo era fuori scope.',
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
      {
        heading: 'Stack',
        body: ['PHP + Laravel sul backend, database MySQL.'],
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
