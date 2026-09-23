import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Clapperboard, MapPin, Play } from 'lucide-react'
import { REELS } from '../../data/reels'
import './ReelsCarousel.css'

const VISIBLE_RANGE = 4

function ReelsCarousel() {
  const [activeIndex, setActiveIndex] = useState(4)
  const navigate = useNavigate()

  function handleCardClick(index, reel) {
    if (index === activeIndex) {
      navigate(`/reels/${reel.id}`)
    } else {
      setActiveIndex(index)
    }
  }

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
        {REELS.map((reel, index) => {
          const offset = index - activeIndex
          if (Math.abs(offset) > VISIBLE_RANGE) return null

          const isActive = offset === 0
          const distance = Math.abs(offset)

          return (
            <button
              key={reel.id}
              className={`reel-card ${isActive ? 'is-active' : ''}`}
              style={{
                transform: `translateX(${offset * 135}px) rotateY(${offset * -28}deg) scale(${1 - distance * 0.1})`,
                opacity: 1 - distance * 0.2,
                zIndex: 10 - distance,
              }}
              onClick={() => handleCardClick(index, reel)}
            >
              <div
                className="reel-card__thumbnail"
                style={
                  reel.videoId
                    ? { backgroundImage: `url(https://img.youtube.com/vi/${reel.videoId}/hqdefault.jpg)` }
                    : undefined
                }
              >
                {!reel.videoId && <span className="reel-card__brand">MDN</span>}
                {reel.videoId && <span className="reel-card__scrim" />}

                <div className="reel-card__info">
                  <span className="reel-card__location">
                    <MapPin size={14} />
                    {reel.locality}
                  </span>
                  <span className="reel-card__count">{reel.views} views</span>
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
        {REELS.map((reel, index) => (
          <button
            key={reel.id}
            className={`reels__dot ${index === activeIndex ? 'is-active' : ''}`}
            aria-label={`Show ${reel.locality}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default ReelsCarousel
