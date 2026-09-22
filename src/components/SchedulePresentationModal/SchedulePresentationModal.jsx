import { useState } from 'react'
import { Calendar, Search, Video, X } from 'lucide-react'
import { PROPERTIES } from '../../data/properties'
import mdnLogo from '../../assets/mdn-logo.png'
import './SchedulePresentationModal.css'

const PLATFORMS = [
  { id: 'google-meet', label: 'Google Meet' },
  { id: 'ms-teams', label: 'Microsoft Teams' },
  { id: 'zoom', label: 'Zoom' },
]

function defaultDateTime() {
  const d = new Date(Date.now() + 60 * 60 * 1000)
  d.setMinutes(0, 0, 0)
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}

function minDateTime() {
  const d = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}

function SchedulePresentationModal({ initialQuery = '', onClose }) {
  const [query, setQuery] = useState(initialQuery)
  const [dateTime, setDateTime] = useState(defaultDateTime())
  const [platform, setPlatform] = useState('google-meet')
  const [booked, setBooked] = useState(null)

  function handleContinue() {
    const typed = query.trim().toLowerCase()
    const match =
      PROPERTIES.find((p) => p.name.toLowerCase() === typed) ||
      PROPERTIES.find((p) => p.name.toLowerCase().includes(typed)) ||
      null

    setBooked({
      project: match ? match.name : query.trim() || 'All Projects',
      dateTime,
      platform: PLATFORMS.find((p) => p.id === platform).label,
    })
  }

  return (
    <div className="presentation-modal-overlay" onClick={onClose}>
      <div className="presentation-modal" onClick={(e) => e.stopPropagation()}>
        <button className="presentation-modal__close" aria-label="Close" onClick={onClose}>
          <X size={20} />
        </button>

        {!booked ? (
          <>
            <div className="presentation-modal__header">
              <img src={mdnLogo} alt="MDN Salesforce" />
              <h3>Online Presentation</h3>
            </div>

            <div className="presentation-modal__body">
              <div className="presentation-modal__search">
                <input
                  type="text"
                  list="presentation-projects"
                  placeholder="Search projects"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <Search size={18} />
              </div>
              <datalist id="presentation-projects">
                {PROPERTIES.map((p) => (
                  <option key={p.id} value={p.name} />
                ))}
              </datalist>

              <div className="presentation-modal__datetime">
                <Calendar size={18} />
                <input
                  type="datetime-local"
                  value={dateTime}
                  min={minDateTime()}
                  onChange={(e) => setDateTime(e.target.value)}
                />
              </div>

              <div className="presentation-modal__platforms">
                {PLATFORMS.map((p) => (
                  <label key={p.id} className="presentation-modal__platform">
                    <input
                      type="radio"
                      name="platform"
                      checked={platform === p.id}
                      onChange={() => setPlatform(p.id)}
                    />
                    <Video size={18} />
                    <span>{p.label}</span>
                  </label>
                ))}
              </div>

              <ul className="presentation-modal__perks">
                <li>Directly from Builder Salesperson</li>
                <li>Latest Offer & Payment Schemes</li>
                <li>Live Sample Flat Tour</li>
              </ul>

              <button className="presentation-modal__continue" onClick={handleContinue}>
                Continue Booking
              </button>

              <p className="presentation-modal__terms">
                By continuing, you agree to our <a href="/">Terms & Conditions</a>
              </p>
            </div>
          </>
        ) : (
          <div className="presentation-modal__confirm">
            <h3>Presentation Request Sent</h3>
            <p className="presentation-modal__confirm-desc">
              We've noted your slot for <strong>{booked.project}</strong> on{' '}
              <strong>{new Date(booked.dateTime).toLocaleString()}</strong> over{' '}
              <strong>{booked.platform}</strong>. Our executive will call you shortly to confirm
              and share the join link.
            </p>
            <button className="presentation-modal__continue" onClick={onClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SchedulePresentationModal
