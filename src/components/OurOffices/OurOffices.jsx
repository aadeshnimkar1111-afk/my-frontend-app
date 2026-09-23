import { useState } from 'react'
import { Minus, MapPin, Plus } from 'lucide-react'
import { OFFICES } from '../../data/offices'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from './SocialIcons'
import './OurOffices.css'

const SOCIAL_LINKS = {
  facebook:
    'https://www.facebook.com/people/Mdn-Sales-Force/pfbid0241p5VcCLfkotFBiUtnQzQ4cT5bBwiWGgWLQiF4u3UY57TBUnrrpdVWPho2rz3zgSl/',
  instagram: 'https://www.instagram.com/mdn_salesforce_/',
  linkedin: 'https://www.linkedin.com/company/mdn-salesforce/',
}

function OurOffices() {
  const [expanded, setExpanded] = useState(true)

  return (
    <section className="our-offices">
      <div className="our-offices__registered">
        <h3>Registered &amp; Corporate Office</h3>
        <div className="our-offices__registered-placeholder">Address coming soon</div>

        <div className="our-offices__social">
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
        </div>
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
