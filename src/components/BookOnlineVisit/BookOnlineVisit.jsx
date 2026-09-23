import { useState } from 'react'
import { Car } from 'lucide-react'
import SchedulePresentationModal from '../SchedulePresentationModal/SchedulePresentationModal'
import BookVisitScene from './BookVisitScene'
import './BookOnlineVisit.css'

function BookOnlineVisit() {
  const [modalOpen, setModalOpen] = useState(false)
  const [query, setQuery] = useState('')

  return (
    <section className="book-visit">
      <BookVisitScene />

      <div className="book-visit__card">
        <div className="book-visit__card-top">
          <h3>Book Free Online Visit</h3>
          <span className="book-visit__badge">100% FREE</span>
        </div>

        <div className="book-visit__search-bar">
          <input
            type="text"
            placeholder="Search multiple projects for Site Visit"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="book-visit__book-btn" onClick={() => setModalOpen(true)}>
            Book Now
            <Car size={18} />
          </button>
        </div>
      </div>

      {modalOpen && (
        <SchedulePresentationModal
          initialQuery={query}
          title="Book Free Online Visit"
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  )
}

export default BookOnlineVisit
