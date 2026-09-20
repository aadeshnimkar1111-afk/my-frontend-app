import { Search, X } from 'lucide-react'
import './SiteVisitModal.css'

function SiteVisitModal({ onClose }) {
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
            <input type="text" placeholder="Search project" />
            <Search size={18} />
          </div>

          <button className="site-visit-modal__start">Start Visit</button>
        </div>
      </div>
    </div>
  )
}

export default SiteVisitModal
