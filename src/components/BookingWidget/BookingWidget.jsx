import { useState } from 'react'
import { Phone } from 'lucide-react'
import './BookingWidget.css'

const PLATFORMS = ['Google Meet', 'Teams', 'Zoom']

function BookingWidget({ projectName }) {
  const [tab, setTab] = useState('visit')
  const [phone, setPhone] = useState('')
  const [platform, setPlatform] = useState(PLATFORMS[0])

  return (
    <div className="booking-widget">
      <div className="booking-widget__call">
        <h3>Call Me Instantly</h3>
        <p>Hang Tight! Our Executive is calling you right now</p>
        <div className="booking-widget__phone-row">
          <Phone size={16} />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button className="booking-widget__call-btn">Call me now</button>
      </div>

      <div className="booking-widget__card">
        <div className="booking-widget__tabs">
          <button className={tab === 'visit' ? 'is-active' : ''} onClick={() => setTab('visit')}>
            Book Free Site Visit
          </button>
          <button
            className={tab === 'presentation' ? 'is-active' : ''}
            onClick={() => setTab('presentation')}
          >
            Online Presentation
          </button>
        </div>

        <div className="booking-widget__field">
          <span className="booking-widget__field-label">Search projects</span>
          <span className="booking-widget__project-chip">{projectName}</span>
        </div>

        <input type="datetime-local" className="booking-widget__datetime" />

        {tab === 'presentation' && (
          <div className="booking-widget__platforms">
            {PLATFORMS.map((p) => (
              <label key={p} className={platform === p ? 'is-active' : ''}>
                <input
                  type="radio"
                  name="platform"
                  checked={platform === p}
                  onChange={() => setPlatform(p)}
                />
                {p}
              </label>
            ))}
          </div>
        )}

        <ul className="booking-widget__points">
          <li>Directly from Builder Salesperson</li>
          <li>Latest Offer & Payment Schemes</li>
          <li>Live Sample Flat Tour</li>
        </ul>

        <button className="booking-widget__continue">Continue Booking</button>
        <p className="booking-widget__terms">By continuing, you agree to our Terms & Conditions</p>
      </div>
    </div>
  )
}

export default BookingWidget
