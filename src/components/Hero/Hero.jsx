import { useState } from 'react'
import { ChevronDown, HandCoins, MapPin, Search, Tag } from 'lucide-react'
import CityPickerModal from '../CityPickerModal/CityPickerModal'
import './Hero.css'

const LOCALITIES = ['Hinjewadi', 'Wakad', 'Punawale']

function Hero() {
  const [city, setCity] = useState('Pune')
  const [cityModalOpen, setCityModalOpen] = useState(false)
  const [propertyType, setPropertyType] = useState('apartment')

  return (
    <section id="home" className="hero">
      <div className="hero__backdrop" />

      <div className="hero__text">
        <h1 className="hero__title">
          Buy Homes Directly
          <br />
          With Builders
        </h1>

        <div className="hero__badges">
          <span className="hero__badge">
            <HandCoins size={16} />
            No Brokerage
          </span>
          <span className="hero__badge-divider" />
          <span className="hero__badge">
            <Tag size={16} />
            Bottom Rate Policy
          </span>
        </div>
      </div>

      <div className="hero__panels">
        <div className="hero__panel-left">
          <div className="hero__tabs">
            <button
              className={`hero__tab ${propertyType === 'apartment' ? 'is-active' : ''}`}
              onClick={() => setPropertyType('apartment')}
            >
              Apartment
            </button>
            <button className="hero__tab" disabled>
              Plots
              <span className="hero__coming-soon">Coming Soon</span>
            </button>
          </div>

          <button className="hero__city" onClick={() => setCityModalOpen(true)}>
            <MapPin size={16} />
            {city}
            <ChevronDown size={16} />
          </button>
        </div>

        <div className="hero__panel-right">
          <div className="hero__search-input">
            <input type="text" placeholder="Search for Project, locality or builder" />
            <button aria-label="Search">
              <Search size={20} />
            </button>
          </div>

          <div className="hero__localities">
            <span>Popular Localities</span>
            {LOCALITIES.map((loc, i) => (
              <button key={loc} className={`hero__locality-chip ${i === 0 ? 'is-active' : ''}`}>
                {loc}
              </button>
            ))}
          </div>
        </div>
      </div>

      {cityModalOpen && (
        <CityPickerModal
          selectedCity={city}
          onSelect={(c) => {
            setCity(c)
            setCityModalOpen(false)
          }}
          onClose={() => setCityModalOpen(false)}
        />
      )}
    </section>
  )
}

export default Hero
