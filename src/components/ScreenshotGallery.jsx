import { useState } from 'react'

export default function ScreenshotGallery({ screenshots, video, title }) {
  const items = [
    ...(screenshots || []).map((src) => ({ type: 'image', src })),
    ...(video ? [{ type: 'video', src: video }] : []),
  ]

  const [index, setIndex] = useState(0)
  const [videoStarted, setVideoStarted] = useState(false)

  if (items.length === 0) return null

  const goTo = (i) => {
    setIndex(i)
    setVideoStarted(false)
  }
  const prev = () => goTo((index - 1 + items.length) % items.length)
  const next = () => goTo((index + 1) % items.length)
  const current = items[index]

  return (
    <div className="gallery">
      <div className="gallery-main">
        {items.length > 1 && (
          <button type="button" className="gallery-arrow gallery-arrow-prev" onClick={prev} aria-label="Precedente">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        {current.type === 'video' ? (
          videoStarted ? (
            <video src={current.src} controls autoPlay playsInline />
          ) : (
            <button type="button" className="gallery-video-poster" onClick={() => setVideoStarted(true)} aria-label="Riproduci video">
              <video src={current.src} preload="metadata" muted playsInline />
              <span className="gallery-play-btn">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </button>
          )
        ) : (
          <img src={current.src} alt={`Screenshot di ${title} (${index + 1}/${items.length})`} />
        )}

        {items.length > 1 && (
          <button type="button" className="gallery-arrow gallery-arrow-next" onClick={next} aria-label="Successivo">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}
      </div>

      {items.length > 1 && (
        <div className="gallery-thumbs">
          {items.map((item, i) => (
            <button
              type="button"
              key={item.src}
              className={i === index ? 'gallery-thumb active' : 'gallery-thumb'}
              onClick={() => goTo(i)}
              aria-label={item.type === 'video' ? 'Vai allo screencast' : `Vai allo screenshot ${i + 1}`}
            >
              {item.type === 'video' ? (
                <span className="gallery-thumb-video">
                  <video src={item.src} preload="metadata" muted playsInline />
                  <span className="gallery-thumb-play">▶</span>
                </span>
              ) : (
                <img src={item.src} alt="" loading="lazy" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
