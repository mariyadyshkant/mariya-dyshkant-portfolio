import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollToSection'

// React Router non scorre da solo agli anchor (#about, #progetti...): lo facciamo qui.
// - Cambio pagina (home <-> dettaglio): salto istantaneo, niente animazione dal basso verso l'alto.
// - Stessa pagina (clic sulla navbar): scroll fluido alla sezione.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()
  const prevPath = useRef(null)

  useEffect(() => {
    const pageChanged = prevPath.current !== pathname
    prevPath.current = pathname
    const behavior = pageChanged ? 'instant' : 'smooth'

    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      // aspetta il render della pagina prima di cercare l'elemento
      const frame = requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) scrollToSection(el, behavior)
      })
      return () => cancelAnimationFrame(frame)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
