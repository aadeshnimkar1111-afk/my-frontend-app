import { useState } from 'react'
import { Minus, MapPin, Plus } from 'lucide-react'
import { OFFICES } from '../../data/offices'
import './OurOffices.css'

function OurOffices() {
  const [expanded, setExpanded] = useState(true)

  return (
    <section className="our-offices">
      <div className="our-offices__registered">
        <h3>Registered &amp; Corporate Office</h3>
        <div className="our-offices__registered-placeholder">Address coming soon</div>
      </div>

      <div className="our-offices__list">
        <div className="our-offices__header">
          <h2>Our Offices</h2>
          <button
            className="our-offices__toggle"
            aria-label={expanded ? 'Collapse' : 'Expand'}
            onClick={() => setExpanded((e) => !e)}
          >
            {expanded ? <Minus size={18} /> : <Plus size={18} />}
          </button>
        </div>

        {expanded && (
          <div className="our-offices__grid">
            {OFFICES.map((office) => (
              <div className="office-card" key={office.id}>
                <span className="office-card__pin">
                  <MapPin size={18} />
                </span>
                <h4>{office.title}</h4>
                <p>{office.address || 'Address coming soon'}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default OurOffices
