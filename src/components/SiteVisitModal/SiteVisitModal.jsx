import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { PROPERTIES } from '../../data/properties'
import './SiteVisitModal.css'

function SiteVisitModal({ onClose }) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  function handleStartVisit() {
    const typed = query.trim().toLowerCase()
    const match =
      PROPERTIES.find((p) => p.name.toLowerCase() === typed) ||
      PROPERTIES.find((p) => p.name.toLowerCase().includes(typed)) ||
      PROPERTIES[0]

    onClose()
    navigate(`/project/${match.id}`)
  }

  return (
    <div className="site-visit-modal-overlay" onClick={onClose}>
      <div className="site-visit-modal" onClick={(e) => e.stopPropagation()}>
        <div className="site-visit-modal__header">
          <h3>Select Project To Begin Online Tour</h3>
          <button className="site-visit-modal__close" aria-label="Close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="site-visit-modal__body">
          <div className="site-visit-modal__search">
            <input
              type="text"
              list="site-visit-projects"
              placeholder="Search project"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Search size={18} />
          </div>
          <datalist id="site-visit-projects">
            {PROPERTIES.map((p) => (
              <option key={p.id} value={p.name} />
            ))}
          </datalist>

          <button className="site-visit-modal__start" onClick={handleStartVisit}>
            Start Visit
          </button>
        </div>
      </div>
    </div>
  )
}

export default SiteVisitModal
