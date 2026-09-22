import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Building2,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Heart,
  Laptop,
  MapPin,
  MessageCircle,
  PlayCircle,
  Ruler,
} from 'lucide-react'
import { useWishlist } from '../../context/WishlistContext'
import { PROPERTIES } from '../../data/properties'
import './PropertiesCarousel.css'

function PropertiesCarousel() {
  const trackRef = useRef(null)
  const { isWishlisted, toggleWishlist } = useWishlist()
  const navigate = useNavigate()

  function scroll(direction) {
    trackRef.current?.scrollBy({ left: direction * 420, behavior: 'smooth' })
  }

  return (
    <section className="properties">
      <div className="properties__header">
        <div>
          <div className="properties__eyebrow">
            <Building2 size={16} />
            PROPERTIES
          </div>
          <h2>Top New Launches In Pune</h2>
          <p>Discover the Latest Real Estate Projects in Pune</p>
        </div>

        <div className="properties__controls">
          <button className="properties__view-more">View More</button>
          <button className="properties__arrow" aria-label="Previous" onClick={() => scroll(-1)}>
            <ChevronLeft size={18} />
          </button>
          <button className="properties__arrow" aria-label="Next" onClick={() => scroll(1)}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="properties__track" ref={trackRef}>
        {PROPERTIES.map((property) => (
          <article className="property-card" key={property.id}>
            <div
              className="property-card__image"
              onClick={() => navigate(`/project/${property.id}`)}
            >
              <Building2 size={40} />
              <button
                className={`property-card__wishlist ${isWishlisted(property.id) ? 'is-active' : ''}`}
                aria-label="Save"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleWishlist(property.id)
                }}
              >
                <Heart size={16} fill={isWishlisted(property.id) ? 'currentColor' : 'none'} />
              </button>
              <button className="property-card__play" aria-label="Play tour">
                <PlayCircle size={22} />
              </button>
            </div>

            <div className="property-card__body">
              <div className="property-card__top-row">
                <h3 className="property-card__name" onClick={() => navigate(`/project/${property.id}`)}>
                  {property.name}
                </h3>
                <span className="property-card__price">{property.priceRange}</span>
              </div>

              <div className="property-card__meta-row">
                <span className="property-card__meta">
                  <Building2 size={14} />
                  {property.developer}
                </span>
                <span className="property-card__meta">
                  <Ruler size={14} />
                  {property.areaRange}
                </span>
              </div>

              <div className="property-card__meta-row">
                <span className="property-card__meta">
                  <MapPin size={14} />
                  {property.locality}
                </span>
                <span className="property-card__possession">
                  <CalendarDays size={13} />
                  {property.possession}
                </span>
              </div>

              <div className="property-card__units">
                {property.units.map((unit) => (
                  <div className="property-card__unit-row" key={unit.bhk + unit.sqft}>
                    <span>{unit.bhk}</span>
                    <span>{unit.sqft} sqft</span>
                    <span>{unit.price}</span>
                  </div>
                ))}
              </div>

              <div className="property-card__actions">
                <button className="property-card__tour" onClick={() => navigate(`/project/${property.id}`)}>
                  <Laptop size={16} />
                  Tour
                </button>
                <button className="property-card__chat">
                  <MessageCircle size={16} />
                  Live Chat
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PropertiesCarousel
