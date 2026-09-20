import { useState } from 'react'
import { Clapperboard, MapPin, Play } from 'lucide-react'
import './ReelsCarousel.css'

// Placeholder data - admin will replace `thumbnail`/`videoUrl` with real reel content later.
const LOCALITIES = [
  { id: 1, name: 'Kharadi', reelCount: 24 },
  { id: 2, name: 'Hadapsar', reelCount: 7 },
  { id: 3, name: 'Manjari', reelCount: 4 },
  { id: 4, name: 'Wagholi', reelCount: 7 },
  { id: 5, name: 'Keshav Nagar', reelCount: 4 },
  { id: 6, name: 'Ravet', reelCount: 9 },
  { id: 7, name: 'Chinchwad', reelCount: 4 },
  { id: 8, name: 'Dhanori', reelCount: 7 },
  { id: 9, name: 'Mundhwa', reelCount: 11 },
]

const VISIBLE_RANGE = 4

function ReelsCarousel() {
  const [activeIndex, setActiveIndex] = useState(4)

  return (
    <section className="reels" id="reels">
      <div className="reels__heading">
        <div className="reels__eyebrow">
          <Clapperboard size={16} />
          EXPLORE PROJECTS BY REELS
        </div>
        <h2>Discover Localities in 60 Seconds</h2>
        <p>Short reels. Real projects. Right in your area.</p>
      </div>

      <div className="reels__stage">
        {LOCALITIES.map((locality, index) => {
          const offset = index - activeIndex
          if (Math.abs(offset) > VISIBLE_RANGE) return null

          const isActive = offset === 0
          const distance = Math.abs(offset)

          return (
            <button
              key={locality.id}
              className={`reel-card ${isActive ? 'is-active' : ''}`}
              style={{
                transform: `translateX(${offset * 135}px) rotateY(${offset * -28}deg) scale(${1 - distance * 0.1})`,
                opacity: 1 - distance * 0.2,
                zIndex: 10 - distance,
              }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="reel-card__thumbnail">
                <span className="reel-card__brand">MDN</span>

                <div className="reel-card__info">
                  <span className="reel-card__location">
                    <MapPin size={14} />
                    {locality.name}
                  </span>
                  <span className="reel-card__count">{locality.reelCount} Reels</span>
                </div>

                <span className="reel-card__play">
                  <Play size={20} fill="currentColor" />
                </span>

                {isActive && <span className="reel-card__explore">Explore →</span>}
              </div>
            </button>
          )
        })}
      </div>

      <div className="reels__dots">
        {LOCALITIES.map((locality, index) => (
          <button
            key={locality.id}
            className={`reels__dot ${index === activeIndex ? 'is-active' : ''}`}
            aria-label={`Show ${locality.name}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default ReelsCarousel
