import { useRef } from 'react'
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
import './PropertiesCarousel.css'

// Placeholder data - admin will add/edit real projects here (or from a CMS later).
// `image` is left blank on purpose; a project photo can be dropped in per entry.
const PROPERTIES = [
  {
    id: 1,
    name: 'Godrej Ivara',
    developer: 'Godrej Properties',
    priceRange: '₹1.29 Cr - 3.19 Cr',
    areaRange: '729 - 1580 sqft',
    locality: 'Kharadi',
    possession: 'Aug 2032',
    image: null,
    units: [
      { bhk: '2BHK', sqft: 729, price: '₹1.29 Cr' },
      { bhk: '3BHK', sqft: 889, price: '₹1.63 Cr' },
    ],
  },
  {
    id: 2,
    name: 'Lodha Sylvan',
    developer: 'Lodha Group',
    priceRange: '₹1.15 Cr - 2.21 Cr',
    areaRange: '836 - 1428 sqft',
    locality: 'Hinjewadi',
    possession: 'Dec 2030',
    image: null,
    units: [
      { bhk: '2BHK', sqft: 836, price: '₹1.15 Cr' },
      { bhk: '2.5BHK', sqft: 955, price: '₹1.45 Cr' },
    ],
  },
  {
    id: 3,
    name: 'Kolte Patil Echoes',
    developer: 'Kolte Patil Developers',
    priceRange: '₹85.00 Lacs - 1.06 Cr',
    areaRange: '838 - 1086 sqft',
    locality: 'Punawale',
    possession: 'Dec 2029',
    image: null,
    units: [
      { bhk: '2BHK', sqft: 838, price: '₹85.00 Lac' },
      { bhk: '2BHK', sqft: 840, price: '₹85.00 Lac' },
    ],
  },
  {
    id: 4,
    name: 'Shapoorji Parkwest',
    developer: 'Shapoorji Pallonji',
    priceRange: '₹91.00 Lacs - 1.8 Cr',
    areaRange: '650 - 1250 sqft',
    locality: 'Hinjewadi',
    possession: 'Mar 2031',
    image: null,
    units: [
      { bhk: '1BHK', sqft: 650, price: '₹91.00 Lac' },
      { bhk: '2BHK', sqft: 920, price: '₹1.25 Cr' },
    ],
  },
]

function PropertiesCarousel() {
  const trackRef = useRef(null)

  function scroll(direction) {
    trackRef.current?.scrollBy({ left: direction * 340, behavior: 'smooth' })
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
            <div className="property-card__image">
              <Building2 size={40} />
              <button className="property-card__wishlist" aria-label="Save">
                <Heart size={16} />
              </button>
              <button className="property-card__play" aria-label="Play tour">
                <PlayCircle size={22} />
              </button>
            </div>

            <div className="property-card__body">
              <div className="property-card__top-row">
                <h3>{property.name}</h3>
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
                <button className="property-card__tour">
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
