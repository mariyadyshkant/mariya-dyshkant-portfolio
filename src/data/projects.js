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
    tagline: 'Gestione di un catalogo di workshop',
    summary:
      'Applicazione full-stack per la gestione di un catalogo corsi: backend Laravel con pannello di amministrazione (CRUD completo, autenticazione), API REST pubblica consumata da un frontend React separato.',
    platforms: ['Web'],
    stack: ['PHP', 'Laravel', 'React', `SQLite`],
    links: { demo: 'https://corsorama.mariyadyshkant.com', code: `https://github.com/mariyadyshkant/workshop-catalog.git` },
    screenshots: [
      '/corsorama-shot-home.jpg',
      '/corsorama-shot-catalogo.jpg',
      '/corsorama-shot-dettaglio.jpg',
      '/corsorama-shot-admin.jpg',
    ],
    sections: [
      {
        heading: 'Il mio ruolo',
        body: [
          'Progetto di specializzazione Laravel al termine del percorso Boolean, poi ripreso e rifinito nel tempo — pannello di amministrazione, funzionalità aggiuntive, deploy',
        ],
      },
      {
        heading: 'Architettura',
        body: ['Monorepo con due parti distinte: un backend *Laravel* che gestisce sia un pannello di amministrazione (viste Blade, autenticazione Breeze, CRUD completo per corsi/categorie/livelli/docenti) sia una *API REST* pubblica; e un frontend *React* separato che consuma quell`API per mostrare il catalogo ai visitatori.'],
      },
      {
        heading: 'Modello dati',
        body: ['Quattro entità collegate: Corsi, Categorie, Livelli, Docenti — con relazioni dirette (un corso appartiene a una categoria, un livello, un docente). I corsi supportano **soft delete** (eliminazione reversibile) e, per i corsi in presenza, città e posti disponibili.'],
      },{
        heading: 'Validazione',
        body: ['Le regole di validazione dell`area admin sono centralizzate in classi **Form Request** dedicate per ogni risorsa, invece di essere scritte inline nei controller — mantiene i controller più puliti e le regole riutilizzabili.'],
      },{
        heading: 'Deploy',
        body: ['Backend su *Railway* (con volume persistente per il database SQLite), frontend su *Netlify*, comunicazione protetta da configurazione *CORS* tra i due domini.'],
      },{
        heading: 'Prossimi sviluppi',
        body: ['Il pannello di amministrazione e l`API sono già completi e funzionanti. La prossima funzionalità pianificata è un sistema di prenotazione con *autenticazione pubblica*: gli utenti potranno registrarsi e prenotare direttamente un posto nei corsi (il bottone "Prenota" già visibile nella pagina di dettaglio è una anteprima di questa funzionalità, non ancora collegata a una logica reale).'],
      },
    ],
  },

  financed: {
    slug: 'financed',
    title: 'financeD',
    tagline: 'Gestione delle finanze personali',
    summary:
      'App personale di gestione finanze: importa gli estratti conto Revolut, categorizza le spese, traccia stipendi e turni di lavoro. Include anche un bot Telegram per registrare spese al volo e una versione mobile con backend dedicato.',
    platforms: ['Desktop', 'Mobile · in corso'],
    stack: ['Electron', 'Svelte', 'FastAPI', 'SQLite / Turso'],
    links: { demo: null, code: 'https://github.com/mariyadyshkant/finance-hub-desktop-app.git' },
    video: `/financed-demo.mp4`,
    screenshots: [
      '/financed-shot-dashboard.jpg',
      '/financed-shot-consuntivo.jpg',
      '/financed-shot-budget.jpg',
      '/financed-shot-categorie.jpg',
      '/financed-shot-icone.jpg',
    ],
    sections: [
      {
        heading: 'Il mio ruolo',
        body: [
          `Progetto personale, sviluppato con l'assistenza di Claude Code per l'implementazione — le decisioni architetturali, le ricerche e le scelte di prodotto sono mie.`,
        ],
      },
      {
        heading: `Cosa fa, sotto il cofano`,
        body: [
          [`Importa automaticamente gli estratti conto Revolut e categorizza le spese`],

          
          [`Pianificazione budget — budget mensile totale e per categoria, spese ricorrenti pianificate, modificabili mese per mese`],
          [`Previsione stipendio — tariffa oraria media pesata dagli stipendi passati (più peso ai mesi recenti), usata per stimare lo stipendio dei mesi futuri in base alle ore già registrate nei turni`],
          [`Integrazione Splitwise — amici, gruppi e spese condivise recuperati direttamente in app tramite le API di Splitwise`,
        ],
      ],
      },
      {
        heading: 'Perché Turso invece di Postgres',
        body: [
          'Il progetto nasce dalla migrazione di una precedente app web scritta in *SQLite*. Passare a Postgres avrebbe significato riscrivere buona parte delle query; *Turso* mi ha permesso di restare nella sintassi SQLite aggiungendo accesso al database da internet in qualsiasi momento — cosa che un database solo locale non permetteva.',
        ],
      },
      {
        heading: `Il bot Telegram`,
        body: [`Nato da un'esigenza reale: registrare le spese al volo, da qualsiasi posto, con il database sempre raggiungibile e reattivo. Inizialmente usava l'API di Claude per interpretare il testo della spesa, poi sono passata a *Gemini* per una ragione pratica: generare una API key Claude richiedeva credito a pagamento, mentre Gemini offriva un livello gratuito sufficiente.`,

        ],

      },
      {
        heading: `Backend mobile su Fly.io`,
        body: [`La versione mobile dell'app parla con un backend ospitato separatamente (a differenza della versione desktop, che gira in locale e non ha bisogno di protezione). Ho scelto *Fly.io* perché non va mai in sleep — l'app resta reattiva.

          Per proteggere un backend raggiungibile da internet, ho aggiunto un'autenticazione a token condiviso: ogni richiesta deve portare un header **X-API-Token** che corrisponde a un valore segreto impostato lato server. Se il valore manca o è sbagliato, il backend risponde **401**. Il controllo si attiva solo quando il backend gira su Fly.io — in locale, per l'app desktop, resta disattivato e il comportamento non cambia. Non è un sistema di autenticazione completo (niente OAuth, niente utenti multipli) — è proporzionato a un'app pensata per un solo utente: io.`,

        ],

      },
      {
        heading: `Testing reale`,
        body: [`Ho impostato una pipeline di release automatizzata (build firmate per macOS, supporto Linux) su *GitHub Actions*, perché volevo che l'app fosse davvero installabile da altri: l'ho fatta testare ai miei compagni di corso, e i problemi emersi mi hanno permesso di sistemare diversi bug prima del rilascio`,

        ],

      },
    ],
  },

  sylla: {
    slug: 'sylla',
    title: 'Sylla',
    tagline: 'Organizzazione di lezioni e appunti',
    summary:
      'App desktop per tracciare le lezioni dei corsi che segui: calendario generato automaticamente dagli orari, trascrizione locale delle registrazioni, note elaborate via AI su richiesta.',
    platforms: ['Desktop · in corso'],
    stack: ['Electron', 'Alpine.js', 'SQLite'],
    links: { demo: null, code: `https://github.com/mariyadyshkant/sylla-ai-driven-pj.git` },
    screenshots: [],
    sections: [
      {
        heading: 'Visione',
        body: [
          `Un'app desktop personale, single-user, per tenere traccia delle lezioni dei corsi che seguo (al momento due, pensata per estendersi a corsi futuri). L'obiettivo: non perdere il filo tra materiali, registrazioni e appunti sparsi tra corsi diversi che vanno avanti in parallelo.`,
        ],
      },
      {
        heading: 'Come funzionerebbe',
        body: [`Un corso ha un orario settimanale ricorrente e un periodo (data inizio/fine): da questi, l'app genererebbe automaticamente tutte le lezioni previste, in stato "programmata". Le lezioni si "compilano" man mano che si svolgono davvero — argomenti trattati, materiali, note libere.
          
          Per le lezioni registrate: caricamento manuale del file audio/video (nessun download automatico dalle piattaforme, troppo fragile da gestire), estrazione audio e trascrizione locale e gratuita (whisper.cpp + ffmpeg — niente cloud per questo passaggio), e un pulsante opzionale per elaborare la trascrizione in note strutturate tramite un'API AI esterna, solo su richiesta.  
          `],
        
      },
      {
        heading: `Scelte tecniche e perché`,
        body: [[`Electron: app desktop cross-platform riusando competenze HTML/CSS/JS`],
          [`Alpine.js invece di un framework pesante come React: reattività leggera, sufficiente per la scala del progetto`],
          [`SQLite: storage locale su file, adatto a un uso single-user senza server`],
          [`whisper.cpp + ffmpeg: trascrizione interamente offline, zero costi ricorrenti`],
          [`L'API AI esterna resta opzionale by design: l'app deve restare utilizzabile anche senza, il costo per chiamata resta a carico dell'utente con una propria API key`],
      ]
      },
      {
        heading: `Un secondo componente pianificato: statistiche di studio`,
        body: [`Un microservizio separato e containerizzato (Python/FastAPI, Docker), pensato per leggere periodicamente i dati esportati da Sylla e calcolare statistiche tipo "quante ore ho studiato questa settimana" su una dashboard dedicata — indipendente dall'app principale, nessuna connessione di rete diretta tra i due.`],

      },
      {
        heading: `Fuori scope, volutamente`,
        body: [`Autenticazione multi-utente, sincronizzazione cloud, download automatico dalle piattaforme di registrazione, board/kanban.`],

      },
      {
        heading: `Stato attuale`,
        body: [`Fase di progettazione: modello dati, architettura e scelte tecniche sono definite; lo sviluppo del codice deve ancora iniziare.`],

      },
    ],
  },
}

export const projectList = Object.values(projects)

export function getProject(slug) {
  return projects[slug]
}

export default projects
