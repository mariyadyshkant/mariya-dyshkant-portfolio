const GAP = 24 // spazio minimo sotto la navbar quando l'elemento è più alto dello schermo

// Scorre all'elemento centrandolo nello spazio sotto la navbar sticky;
// se è più alto dello schermo, allinea il suo inizio in alto con un po' d'aria.
export function scrollToSection(el, behavior = 'smooth') {
  const navH = document.querySelector('header.nav')?.offsetHeight ?? 0
  const available = window.innerHeight - navH
  const rect = el.getBoundingClientRect()
  const top = rect.top + window.scrollY
  const offset = rect.height + GAP * 2 <= available ? (available - rect.height) / 2 : GAP
  window.scrollTo({ top: Math.max(0, top - navH - offset), behavior })
}
