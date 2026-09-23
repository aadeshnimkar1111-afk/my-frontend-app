import { useEffect, useRef } from 'react'
import {
  Building,
  Building2,
  ChevronLeft,
  ChevronRight,
  Home,
  Layers,
  LayoutGrid,
  Warehouse,
} from 'lucide-react'
import { PROPERTY_TYPES } from '../../data/propertyTypes'
import './PropertyTypes.css'

const ICONS = { Home, Building2, Building, LayoutGrid, Layers, Warehouse }
const CARD_STEP = 300

function PropertyTypes() {
  const trackRef = useRef(null)
  const timerRef = useRef(null)

  function scroll(direction) {
    trackRef.current?.scrollBy({ left: direction * CARD_STEP, behavior: 'smooth' })
  }

  function advance() {
    const track = trackRef.current
    if (!track) return
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      track.scrollBy({ left: CARD_STEP, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    timerRef.current = setInterval(advance, 2000)
    return () => clearInterval(timerRef.current)
  }, [])

  function handleManualNav(direction) {
    clearInterval(timerRef.current)
    scroll(direction)
    timerRef.current = setInterval(advance, 2000)
  }

  return (
    <section className="property-types">
      <div className="property-types__header">
        <h2>Property Type In Pune</h2>
        <div className="property-types__controls">
          <button
            className="property-types__arrow"
            aria-label="Previous"
            onClick={() => handleManualNav(-1)}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            className="property-types__arrow"
            aria-label="Next"
            onClick={() => handleManualNav(1)}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="property-types__track" ref={trackRef}>
        {PROPERTY_TYPES.map((type) => {
          const Icon = ICONS[type.icon]
          return (
            <article className={`property-type-card property-type-card--${type.id}`} key={type.id}>
              <Icon className="property-type-card__watermark" size={70} />
              <div className="property-type-card__info">
                <h3>{type.name}</h3>
                <span>{type.projects}+ Projects</span>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default PropertyTypes
