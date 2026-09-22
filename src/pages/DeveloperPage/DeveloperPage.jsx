import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Building2,
  CalendarDays,
  ChevronDown,
  Heart,
  Laptop,
  MapPin,
  MapPinned,
  MessageCircle,
  PlayCircle,
  RotateCcw,
  Ruler,
  SlidersHorizontal,
} from 'lucide-react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BookingWidget from '../../components/BookingWidget/BookingWidget'
import MapModal from '../../components/MapModal/MapModal'
import { useWishlist } from '../../context/WishlistContext'
import { PROPERTIES, COMPANY_STATS } from '../../data/properties'
import { DEVELOPERS } from '../../data/developers'
import './DeveloperPage.css'

const FILTERS = ['BHK', 'Budget', 'Down Payment', 'Possession']
const TOGGLES = ['Top Developers', 'Litigation Free Projects', 'Hide Sold Out']

function DeveloperPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { isWishlisted, toggleWishlist } = useWishlist()
  const [mapOpen, setMapOpen] = useState(false)
  const [activeToggles, setActiveToggles] = useState([])

  const developer = DEVELOPERS.find((d) => d.slug === slug)

  if (!developer) {
    return (
      <>
        <Navbar />
        <div className="developer-page__not-found">
          <p>This developer doesn't exist.</p>
          <button onClick={() => navigate('/')}>Go back home</button>
        </div>
        <Footer />
      </>
    )
  }

  const projects = PROPERTIES.filter((p) => p.developer === developer.name)

  function toggleSwitch(name) {
    setActiveToggles((prev) =>
      prev.includes(name) ? prev.filter((t) => t !== name) : [...prev, name]
    )
  }

  return (
    <>
      <Navbar />

      <div className="developer-page">
        <p className="developer-page__breadcrumb">
          Home &gt; {developer.name} Developers
        </p>

        <div className="developer-page__header">
          <div>
            <div className="developer-page__title-row">
              <h1>Top Projects By {developer.name}</h1>
              <div className="developer-page__header-actions">
                <button className="developer-page__map-btn" onClick={() => setMapOpen(true)}>
                  <MapPinned size={16} />
                  Map View
                </button>
                <button
                  className="developer-page__reels-btn"
                  onClick={() => navigate('/#reels')}
                >
                  <PlayCircle size={16} />
                  Reels
                </button>
              </div>
            </div>
            <p className="developer-page__description">{developer.description}</p>
          </div>
        </div>

        <div className="developer-page__filters">
          {FILTERS.map((f) => (
            <button key={f} className="developer-page__filter">
              {f}
              <ChevronDown size={14} />
            </button>
          ))}
          <button className="developer-page__reset">
            <RotateCcw size={14} />
            Reset
          </button>
        </div>

        <div className="developer-page__toolbar">
          <button className="developer-page__sort">
            <SlidersHorizontal size={14} />
            Sort
          </button>

          <div className="developer-page__toggles">
            {TOGGLES.map((t) => (
              <label key={t} className="developer-page__toggle">
                <input
                  type="checkbox"
                  checked={activeToggles.includes(t)}
                  onChange={() => toggleSwitch(t)}
                />
                <span className="developer-page__toggle-track" />
                {t}
              </label>
            ))}
          </div>
        </div>

        <div className="developer-page__layout">
          <aside className="developer-page__sidebar-left">
            <div className="developer-page__banner">
              <p>
                Buy Homes Directly
                <br />
                With Builders
              </p>
              <span>No Brokerage</span>
              <span>Bottom Rate Guarantee</span>
            </div>
            <div className="developer-page__stats">
              {COMPANY_STATS.map((s) => (
                <div key={s.label} className="developer-page__stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </aside>

          <main className="developer-page__main">
            <p className="developer-page__count">Showing {projects.length} of {projects.length} Projects</p>

            {projects.length === 0 && (
              <p className="developer-page__empty">No projects listed yet for this developer.</p>
            )}

            {projects.map((property) => (
              <article className="developer-project-card" key={property.id}>
                <div
                  className="developer-project-card__image"
                  onClick={() => navigate(`/project/${property.id}`)}
                >
                  <Building2 size={36} />
                  <button
                    className={`developer-project-card__wishlist ${isWishlisted(property.id) ? 'is-active' : ''}`}
                    aria-label="Save"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleWishlist(property.id)
                    }}
                  >
                    <Heart size={16} fill={isWishlisted(property.id) ? 'currentColor' : 'none'} />
                  </button>
                  <span className="developer-project-card__play">
                    <PlayCircle size={22} />
                  </span>
                </div>

                <div className="developer-project-card__body">
                  <div className="developer-project-card__top-row">
                    <h3
                      className="developer-project-card__name"
                      onClick={() => navigate(`/project/${property.id}`)}
                    >
                      {property.name}
                    </h3>
                    <span className="developer-project-card__price">{property.priceRange}</span>
                  </div>

                  <div className="developer-project-card__meta-row">
                    <span className="developer-project-card__meta">
                      <MapPin size={14} />
                      {property.locality}
                    </span>
                    <span className="developer-project-card__meta">
                      <Ruler size={14} />
                      {property.areaRange}
                    </span>
                    <span className="developer-project-card__possession">
                      <CalendarDays size={13} />
                      {property.possession}
                    </span>
                  </div>

                  <div className="developer-project-card__units">
                    {property.units.map((u) => (
                      <div className="developer-project-card__unit-row" key={u.bhk + u.sqft}>
                        <span>{u.bhk}</span>
                        <span>{u.sqft} sqft</span>
                        <span>{u.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="developer-project-card__actions">
                    <button
                      className="developer-project-card__tour"
                      onClick={() => navigate(`/project/${property.id}`)}
                    >
                      <Laptop size={16} />
                      Tour
                    </button>
                    <button className="developer-project-card__chat">
                      <MessageCircle size={16} />
                      Live Chat
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </main>

          <aside className="developer-page__sidebar-right">
            <BookingWidget projectName={developer.name} />
          </aside>
        </div>
      </div>

      <Footer />

      {mapOpen && (
        <MapModal query={projects[0]?.locality ?? 'Pune'} onClose={() => setMapOpen(false)} />
      )}
    </>
  )
}

export default DeveloperPage
