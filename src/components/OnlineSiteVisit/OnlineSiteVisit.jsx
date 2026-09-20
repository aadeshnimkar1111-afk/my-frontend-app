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

function OnlineSiteVisit() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="site-visit">
      <h2 className="site-visit__title">Online Site Visit - 6 Simple Steps</h2>

      <div className="site-visit__layout">
        <div className="site-visit__left">
          <button className="site-visit__badge" onClick={() => setModalOpen(true)}>
            Online Site Visit
          </button>

          <div className="site-visit__image-placeholder">
            <ImageIcon size={32} />
            <span>Image coming soon</span>
          </div>
        </div>

        <div className="site-visit__timeline">
          {STEPS.map(({ icon: Icon, title, description }, index) => (
            <div className="timeline-step" key={title}>
              <span className="timeline-step__node">
                <Icon size={20} />
              </span>
              {index < STEPS.length - 1 && <span className="timeline-step__line" />}
              <div className="timeline-step__card">
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && <SiteVisitModal onClose={() => setModalOpen(false)} />}
    </section>
  )
}

export default OnlineSiteVisit
