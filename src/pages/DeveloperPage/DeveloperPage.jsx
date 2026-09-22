import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Building2,
  CalendarDays,
  Heart,
  Laptop,
  MapPin,
  MapPinned,
  MessageCircle,
  PlayCircle,
  RotateCcw,
  Ruler,
  Search,
  SlidersHorizontal,
} from 'lucide-react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import BookingWidget from '../../components/BookingWidget/BookingWidget'
import MapModal from '../../components/MapModal/MapModal'
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown'
import { useWishlist } from '../../context/WishlistContext'
import { PROPERTIES, COMPANY_STATS } from '../../data/properties'
import { DEVELOPERS } from '../../data/developers'
import './DeveloperPage.css'

const TOGGLES = ['Top Developers', 'Litigation Free Projects', 'Hide Sold Out']

const BUDGET_BUCKETS = [
  { id: 'under-50l', label: 'Under ₹50 Lacs', min: 0, max: 50 },
  { id: '50l-1cr', label: '₹50 Lacs - ₹1 Cr', min: 50, max: 100 },
  { id: '1cr-2cr', label: '₹1 Cr - ₹2 Cr', min: 100, max: 200 },
  { id: 'above-2cr', label: 'Above ₹2 Cr', min: 200, max: Infinity },
]

const DOWN_PAYMENT_BUCKETS = [
  { id: 'under-10l', label: 'Under ₹10 Lacs', min: 0, max: 10 },
  { id: '10-20l', label: '₹10 - ₹20 Lacs', min: 10, max: 20 },
  { id: '20-40l', label: '₹20 - ₹40 Lacs', min: 20, max: 40 },
  { id: 'above-40l', label: 'Above ₹40 Lacs', min: 40, max: Infinity },
]

function rangesOverlap(minA, maxA, minB, maxB) {
  return minA <= maxB && maxA >= minB
}

function DeveloperPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { isWishlisted, toggleWishlist } = useWishlist()
  const [mapOpen, setMapOpen] = useState(false)
  const [activeToggles, setActiveToggles] = useState([])
  const [openFilter, setOpenFilter] = useState(null)
  const [bhkFilter, setBhkFilter] = useState([])
  const [budgetFilter, setBudgetFilter] = useState([])
  const [downPaymentFilter, setDownPaymentFilter] = useState([])
  const [possessionFilter, setPossessionFilter] = useState([])
  const [appliedFilters, setAppliedFilters] = useState({
    bhk: [],
    budget: [],
    downPayment: [],
    possession: [],
  })
  const filtersRef = useRef(null)

  const developer = DEVELOPERS.find((d) => d.slug === slug)
  const developerProjects = useMemo(
    () => PROPERTIES.filter((p) => p.developer === developer?.name),
    [developer]
  )

  const bhkOptions = useMemo(() => {
    const set = new Set()
    developerProjects.forEach((p) => p.units.forEach((u) => set.add(u.bhk)))
    return [...set].sort().map((bhk) => ({ id: bhk, label: bhk }))
  }, [developerProjects])

  const possessionOptions = useMemo(() => {
    const set = new Set()
    developerProjects.forEach((p) => {
      const match = p.possession.match(/\d{4}/)
      if (match) set.add(match[0])
    })
    return [...set].sort().map((year) => ({ id: year, label: year }))
  }, [developerProjects])

  useEffect(() => {
    function handleClickOutside(e) {
      if (filtersRef.current && !filtersRef.current.contains(e.target)) {
        setOpenFilter(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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

  const projects = developerProjects.filter((property) => {
    if (
      appliedFilters.bhk.length > 0 &&
      !property.units.some((u) => appliedFilters.bhk.includes(u.bhk))
    ) {
      return false
    }

    if (
      appliedFilters.budget.length > 0 &&
      !appliedFilters.budget.some((id) => {
        const bucket = BUDGET_BUCKETS.find((b) => b.id === id)
        return rangesOverlap(property.minPriceLacs, property.maxPriceLacs, bucket.min, bucket.max)
      })
    ) {
      return false
    }

    if (
      appliedFilters.downPayment.length > 0 &&
      !appliedFilters.downPayment.some((id) => {
        const bucket = DOWN_PAYMENT_BUCKETS.find((b) => b.id === id)
        const downPayment = Math.round(property.minPriceLacs * 0.2)
        return downPayment >= bucket.min && downPayment < bucket.max
      })
    ) {
      return false
    }

    if (appliedFilters.possession.length > 0) {
      const match = property.possession.match(/\d{4}/)
      if (!match || !appliedFilters.possession.includes(match[0])) return false
    }

    return true
  })

  function toggleSwitch(name) {
    setActiveToggles((prev) =>
      prev.includes(name) ? prev.filter((t) => t !== name) : [...prev, name]
    )
  }

  function runSearch() {
    setAppliedFilters({
      bhk: bhkFilter,
      budget: budgetFilter,
      downPayment: downPaymentFilter,
      possession: possessionFilter,
    })
    setOpenFilter(null)
  }

  function resetFilters() {
    setBhkFilter([])
    setBudgetFilter([])
    setDownPaymentFilter([])
    setPossessionFilter([])
    setAppliedFilters({ bhk: [], budget: [], downPayment: [], possession: [] })
    setActiveToggles([])
    setOpenFilter(null)
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

        <div className="developer-page__filters" ref={filtersRef}>
          <FilterDropdown
            label="BHK"
            options={bhkOptions}
            selected={bhkFilter}
            onChange={setBhkFilter}
            isOpen={openFilter === 'bhk'}
            onToggle={() => setOpenFilter(openFilter === 'bhk' ? null : 'bhk')}
          />
          <FilterDropdown
            label="Budget"
            options={BUDGET_BUCKETS}
            selected={budgetFilter}
            onChange={setBudgetFilter}
            isOpen={openFilter === 'budget'}
            onToggle={() => setOpenFilter(openFilter === 'budget' ? null : 'budget')}
          />
          <FilterDropdown
            label="Down Payment"
            options={DOWN_PAYMENT_BUCKETS}
            selected={downPaymentFilter}
            onChange={setDownPaymentFilter}
            isOpen={openFilter === 'downpayment'}
            onToggle={() => setOpenFilter(openFilter === 'downpayment' ? null : 'downpayment')}
          />
          <FilterDropdown
            label="Possession"
            options={possessionOptions}
            selected={possessionFilter}
            onChange={setPossessionFilter}
            isOpen={openFilter === 'possession'}
            onToggle={() => setOpenFilter(openFilter === 'possession' ? null : 'possession')}
          />
          <button className="developer-page__search" onClick={runSearch}>
            <Search size={14} />
            Search
          </button>
          <button className="developer-page__reset" onClick={resetFilters}>
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
            <p className="developer-page__count">
              Showing {projects.length} of {developerProjects.length} Projects
            </p>

            {projects.length === 0 && (
              <p className="developer-page__empty">No projects match these filters.</p>
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
