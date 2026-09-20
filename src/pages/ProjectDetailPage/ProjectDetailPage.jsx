import { useParams, useNavigate } from 'react-router-dom'
import {
  Building2,
  CheckCircle2,
  Dumbbell,
  Download,
  Heart,
  Laptop,
  MessageCircle,
  PlayCircle,
  Share2,
  Sparkles,
  Trees,
  Users,
  Waves,
  XCircle,
} from 'lucide-react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import LocationMap from '../../components/LocationMap/LocationMap'
import BookingWidget from '../../components/BookingWidget/BookingWidget'
import { useWishlist } from '../../context/WishlistContext'
import { PROPERTIES, COMPANY_STATS } from '../../data/properties'
import './ProjectDetailPage.css'

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'location', label: 'Location' },
  { id: 'video', label: 'Video' },
  { id: 'pros-cons', label: 'Pros & Cons' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'plans', label: 'Master & Floor Plans' },
  { id: 'pricing', label: 'Pricing & Unit Plans' },
  { id: 'payment', label: 'Payment Scheme' },
  { id: 'litigation', label: 'Litigation' },
]

const AMENITY_ICONS = {
  'Swimming Pool': Waves,
  'Club House': Users,
  'Kids Play Area': Sparkles,
  Garden: Trees,
  Gym: Dumbbell,
  'Open Gym': Dumbbell,
  'Yoga Zone': Sparkles,
  'Multi Purpose Court': Dumbbell,
  'Indoor Games': Sparkles,
  'Kids Pool': Waves,
  'Badminton Court': Dumbbell,
}

function ProjectDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isWishlisted, toggleWishlist } = useWishlist()
  const property = PROPERTIES.find((p) => String(p.id) === id)

  if (!property) {
    return (
      <div className="project-detail__not-found">
        <p>This project doesn't exist.</p>
        <button onClick={() => navigate('/')}>Go back home</button>
      </div>
    )
  }

  const { details } = property

  function scrollToSection(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Navbar />

      <div className="project-detail">
        <p className="project-detail__breadcrumb">Home &gt; Pune &gt; {property.locality}</p>

        <div className="project-detail__header">
          <div>
            <h1>
              {property.name} {property.locality}
            </h1>
            <p className="project-detail__meta">
              By <strong>{property.developer}</strong> · {property.locality}, Pune
            </p>
          </div>

          <div className="project-detail__header-right">
            <button className="project-detail__share" aria-label="Share">
              <Share2 size={18} />
            </button>
            <span className="project-detail__price">
              {property.priceRange} <small>All inc.</small>
            </span>
            <div className="project-detail__header-actions">
              <button className="project-detail__tour">
                <Laptop size={16} />
                Tour
              </button>
              <button className="project-detail__chat">
                <MessageCircle size={16} />
                Live Chat
              </button>
            </div>
          </div>
        </div>

        <div className="project-detail__gallery">
          <div className="project-detail__gallery-main">
            <Building2 size={48} />
            <button
              className={`project-detail__wishlist ${isWishlisted(property.id) ? 'is-active' : ''}`}
              aria-label="Save"
              onClick={() => toggleWishlist(property.id)}
            >
              <Heart size={18} fill={isWishlisted(property.id) ? 'currentColor' : 'none'} />
            </button>
          </div>
          <div className="project-detail__gallery-grid">
            {[1, 2, 3, 4].map((n) => (
              <div className="project-detail__gallery-thumb" key={n}>
                <Building2 size={22} />
                {n === 4 && <span className="project-detail__gallery-more">+4 more</span>}
              </div>
            ))}
          </div>
        </div>

        <nav className="project-detail__tabs">
          {TABS.map((tab) => (
            <button key={tab.id} onClick={() => scrollToSection(tab.id)}>
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="project-detail__layout">
          <aside className="project-detail__sidebar-left">
            <div className="project-detail__stats">
              {COMPANY_STATS.map((s) => (
                <div key={s.label} className="project-detail__stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <div className="project-detail__banner">
              <p>
                Buy Homes Directly
                <br />
                With Builders
              </p>
              <span>No Brokerage</span>
              <span>Bottom Rate Guarantee</span>
            </div>
          </aside>

          <main className="project-detail__main">
            <section id="overview" className="project-detail__section">
              <div className="project-detail__section-head">
                <h2>{property.name} Overview</h2>
                <button className="project-detail__brochure">
                  <Download size={14} />
                  Brochure
                </button>
              </div>
              <div className="project-detail__facts">
                {details.facts.map((f) => (
                  <div key={f.label} className="project-detail__fact">
                    <span className="project-detail__fact-value">{f.value}</span>
                    <span className="project-detail__fact-label">{f.label}</span>
                  </div>
                ))}
              </div>
              <p className="project-detail__about">{details.about}</p>
            </section>

            <section id="location" className="project-detail__section">
              <h2>{property.name} Location</h2>
              <ul className="project-detail__nearby">
                {details.nearby.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
              <LocationMap lat={details.lat} lon={details.lon} label={property.name} />
            </section>

            <section id="video" className="project-detail__section">
              <h2>{property.name} Video</h2>
              <div className="project-detail__video-placeholder">
                <PlayCircle size={40} />
                <span>Video coming soon</span>
              </div>
            </section>

            <section id="pros-cons" className="project-detail__section">
              <h2>Pros & Cons</h2>
              <div className="project-detail__pros-cons">
                <div className="project-detail__pros">
                  <h4>
                    <CheckCircle2 size={16} /> Pros
                  </h4>
                  <ul>
                    <li>Close to major IT hubs</li>
                    <li>RERA registered project</li>
                    <li>Reputed developer track record</li>
                  </ul>
                </div>
                <div className="project-detail__cons">
                  <h4>
                    <XCircle size={16} /> Cons
                  </h4>
                  <ul>
                    <li>Under construction - possession takes time</li>
                    <li>Traffic during peak hours nearby</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="amenities" className="project-detail__section">
              <h2>Amenities</h2>
              <div className="project-detail__amenities">
                {details.amenities.map((a) => {
                  const Icon = AMENITY_ICONS[a] ?? Sparkles
                  return (
                    <div key={a} className="project-detail__amenity">
                      <Icon size={22} />
                      <span>{a}</span>
                    </div>
                  )
                })}
              </div>
            </section>

            <section id="plans" className="project-detail__section">
              <h2>Master & Floor Plan</h2>
              <div className="project-detail__plans">
                <div className="project-detail__plan-block">
                  <Building2 size={32} />
                  <span>Master Plan coming soon</span>
                </div>
                <div className="project-detail__plan-block">
                  <Building2 size={32} />
                  <span>Floor Plan coming soon</span>
                </div>
              </div>
            </section>

            <section id="pricing" className="project-detail__section">
              <h2>Pricing & Unit Plans</h2>
              <table className="project-detail__pricing-table">
                <thead>
                  <tr>
                    <th>Config</th>
                    <th>Carpet Area</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {property.units.map((u) => (
                    <tr key={u.bhk + u.sqft}>
                      <td>{u.bhk}</td>
                      <td>{u.sqft} sqft</td>
                      <td>{u.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section id="payment" className="project-detail__section">
              <h2>Payment Scheme</h2>
              <p className="project-detail__about">{details.paymentScheme}</p>
            </section>

            <section id="litigation" className="project-detail__section">
              <h2>Litigation</h2>
              <p className="project-detail__litigation">
                Is there any litigation against this project:
                <span className="project-detail__badge">No</span>
              </p>
            </section>
          </main>

          <aside className="project-detail__sidebar-right">
            <BookingWidget projectName={property.name} />
          </aside>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ProjectDetailPage
