import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PROPERTIES } from '../../data/properties'
import { DEVELOPERS } from '../../data/developers'
import './TopDevelopers.css'

function TopDevelopers() {
  const trackRef = useRef(null)
  const navigate = useNavigate()

  function scroll(direction) {
    trackRef.current?.scrollBy({ left: direction * 320, behavior: 'smooth' })
  }

  return (
    <section className="top-developers">
      <div className="top-developers__header">
        <h2>Top Developers Projects</h2>
        <div className="top-developers__controls">
          <button className="top-developers__arrow" aria-label="Previous" onClick={() => scroll(-1)}>
            <ChevronLeft size={18} />
          </button>
          <button className="top-developers__arrow" aria-label="Next" onClick={() => scroll(1)}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="top-developers__track" ref={trackRef}>
        {DEVELOPERS.map((dev) => {
          const totalProjects = PROPERTIES.filter((p) => p.developer === dev.name).length
          return (
            <button
              className="developer-card"
              key={dev.id}
              onClick={() => navigate(`/developer/${dev.slug}`)}
            >
              <span className="developer-card__years">{dev.years}</span>
              <span className="developer-card__name">{dev.name}</span>

              <div className="developer-card__hill">
                <span className="developer-card__label">TOTAL PROJECTS</span>
                <span className="developer-card__count">{totalProjects}</span>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default TopDevelopers
