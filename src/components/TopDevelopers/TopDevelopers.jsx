import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './TopDevelopers.css'

// Placeholder data - admin will add/edit real developers here (or from a CMS later).
const DEVELOPERS = [
  { id: 1, name: 'Mantra Properties', years: '10y +', totalProjects: 15 },
  { id: 2, name: 'Majestique Landmarks', years: '18y +', totalProjects: 26 },
  { id: 3, name: 'Saheel Properties', years: '19y +', totalProjects: 10 },
  { id: 4, name: 'Rohan Builders', years: '32y +', totalProjects: 11 },
  { id: 5, name: 'VTP Realty', years: '39y +', totalProjects: 27 },
]

function TopDevelopers() {
  const trackRef = useRef(null)

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
        {DEVELOPERS.map((dev) => (
          <div className="developer-card" key={dev.id}>
            <span className="developer-card__years">{dev.years}</span>
            <span className="developer-card__name">{dev.name}</span>

            <div className="developer-card__hill">
              <span className="developer-card__label">TOTAL PROJECTS</span>
              <span className="developer-card__count">{dev.totalProjects}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TopDevelopers
