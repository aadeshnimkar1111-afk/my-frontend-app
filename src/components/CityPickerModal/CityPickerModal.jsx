import { Building2, Check, X } from 'lucide-react'
import './CityPickerModal.css'

const CITIES = ['Pune', 'Mumbai', 'Bangalore', 'Ahmedabad', 'Hyderabad', 'Gurugram', 'Chennai']

function CityPickerModal({ selectedCity, onSelect, onClose }) {
  return (
    <div className="city-modal-overlay" onClick={onClose}>
      <div className="city-modal" onClick={(e) => e.stopPropagation()}>
        <div className="city-modal__header">
          <h3>Cities</h3>
          <button className="city-modal__close" aria-label="Close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="city-modal__grid">
          {CITIES.map((city) => (
            <button
              key={city}
              className={`city-card ${city === selectedCity ? 'is-selected' : ''}`}
              onClick={() => onSelect(city)}
            >
              {city === selectedCity && (
                <span className="city-card__check">
                  <Check size={12} />
                </span>
              )}
              <Building2 size={32} />
              <span>{city}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CityPickerModal
