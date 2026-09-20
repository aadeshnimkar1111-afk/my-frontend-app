import { useState } from 'react'
import {
  BookCheck,
  Compass,
  Image as ImageIcon,
  LayoutTemplate,
  Scale,
  Video,
  Wallet,
} from 'lucide-react'
import SiteVisitModal from '../SiteVisitModal/SiteVisitModal'
import './OnlineSiteVisit.css'

const STEPS = [
  {
    icon: Compass,
    title: '360° Location Tour',
    description: "Explore the project's actual surroundings.",
  },
  {
    icon: Video,
    title: 'Sample Flat Video',
    description: 'Experience your future home virtually.',
  },
  {
    icon: LayoutTemplate,
    title: 'Plans & Amenities',
    description: 'Check Floor/Unit Plans, Brochure & Amenities.',
  },
  {
    icon: Wallet,
    title: 'Pricing & Payments',
    description: 'View all-inclusive pricing, down payment & EMI details.',
  },
  {
    icon: Scale,
    title: 'Pros & Cons Analysis',
    description: 'Evaluate & make an informed decision with Pros & Cons.',
  },
  {
    icon: BookCheck,
    title: 'Now Book Providing No.',
    description: 'Our executive will contact you for further information.',
  },
]

// One smooth C-curve (single cubic bezier) that bulges right in the middle,
// in a 0-100 viewBox. Node positions are sampled along the same curve so
// they sit exactly on it.
const CURVE_PATH = 'M25,8.33 C95,30 95,70 25,91.67'
const NODES = [
  { x: 25, y: 8.33 },
  { x: 58.6, y: 23.24 },
  { x: 75.4, y: 40.79 },
  { x: 75.4, y: 59.21 },
  { x: 58.6, y: 76.76 },
  { x: 25, y: 91.67 },
]

function OnlineSiteVisit() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="site-visit">
      <h2 className="site-visit__title">Online Site Visit - 6 Simple Steps</h2>

      <div className="site-visit__layout">
        <button className="site-visit__badge" onClick={() => setModalOpen(true)}>
          Online Site Visit
        </button>

        <div className="site-visit__image-placeholder">
          <ImageIcon size={32} />
          <span>Image coming soon</span>
        </div>

        <div className="curve-timeline">
          <div className="curve-timeline__line">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d={CURVE_PATH} fill="none" stroke="#5b7290" strokeWidth="7" strokeLinecap="round" />
              {NODES.map(({ x, y }) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r="7" fill="#fff" stroke="#5b7290" strokeWidth="4" />
              ))}
            </svg>
          </div>

          <div className="curve-timeline__cards">
            {STEPS.map(({ icon: Icon, title, description }) => (
              <div className="curve-card-row" key={title}>
                <span className="curve-card-row__dash" />
                <span className="curve-card-row__icon">
                  <Icon size={20} />
                </span>
                <div className="curve-card-row__card">
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalOpen && <SiteVisitModal onClose={() => setModalOpen(false)} />}
    </section>
  )
}

export default OnlineSiteVisit
