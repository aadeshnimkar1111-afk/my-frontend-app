import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { REGIONS, LOCALITIES_BY_REGION } from '../../data/localities'
import LocalityCardArt from './LocalityCardArt'
import './TrendingLocalities.css'

function TrendingLocalities() {
  const [activeRegion, setActiveRegion] = useState(REGIONS[0])
  const [selectedLocality, setSelectedLocality] = useState(null)
  const trackRef = useRef(null)

  function selectRegion(region) {
    setActiveRegion(region)
    setSelectedLocality(null)
    if (trackRef.current) trackRef.current.scrollLeft = 0
  }

  function scroll(direction) {
    trackRef.current?.scrollBy({ left: direction * 300, behavior: 'smooth' })
  }

  const localities = LOCALITIES_BY_REGION[activeRegion]

  return (
    <section className="trending-localities">
      <div className="trending-localities__header">
        <h2>Top Projects In Trending Localities</h2>
        <div className="trending-localities__controls">
          <button className="trending-localities__arrow" aria-label="Previous" onClick={() => scroll(-1)}>
            <ChevronLeft size={18} />
          </button>
          <button className="trending-localities__arrow" aria-label="Next" onClick={() => scroll(1)}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="trending-localities__tabs">
        {REGIONS.map((region) => (
          <button
            key={region}
            className={`trending-localities__tab ${activeRegion === region ? 'is-active' : ''}`}
            onClick={() => selectRegion(region)}
          >
            {region}
          </button>
        ))}
      </div>

      <div className="trending-localities__track" ref={trackRef}>
        {localities.map((locality) => (
          <article
            key={locality.name}
            className={`locality-card ${selectedLocality === locality.name ? 'is-selected' : ''}`}
            onClick={() => setSelectedLocality(locality.name)}
          >
            <div className="locality-card__info">
              <strong>{locality.projects}</strong>
              <span>Projects</span>
              <p>{locality.name}</p>
            </div>
            <span className="locality-card__pin">
              <MapPin size={14} />
            </span>
            <LocalityCardArt seed={activeRegion + locality.name} />
          </article>
        ))}
      </div>
    </section>
  )
}

export default TrendingLocalities
