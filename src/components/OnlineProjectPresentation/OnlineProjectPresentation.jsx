import { useState } from 'react'
import { Laptop, ScreenShare } from 'lucide-react'
import SchedulePresentationModal from '../SchedulePresentationModal/SchedulePresentationModal'
import './OnlineProjectPresentation.css'

function OnlineProjectPresentation() {
  const [modalOpen, setModalOpen] = useState(false)
  const [query, setQuery] = useState('')

  return (
    <section className="project-presentation">
      <div className="project-presentation__overlay" />
      <ScreenShare className="project-presentation__watermark" size={220} />

      <div className="project-presentation__content">
        <h2 className="project-presentation__title">Online Project Presentation</h2>
        <p className="project-presentation__subtitle">
          Directly by Builder | Latest Offers | Live Project Tour
        </p>

        <div className="project-presentation__search-bar">
          <input
            type="text"
            placeholder="Search multiple projects for Online Presentation"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="project-presentation__schedule-btn" onClick={() => setModalOpen(true)}>
            Schedule Now
            <Laptop size={18} />
          </button>
        </div>
      </div>

      {modalOpen && (
        <SchedulePresentationModal initialQuery={query} onClose={() => setModalOpen(false)} />
      )}
    </section>
  )
}

export default OnlineProjectPresentation
