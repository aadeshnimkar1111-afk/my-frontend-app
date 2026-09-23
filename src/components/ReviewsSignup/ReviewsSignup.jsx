import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, FileText, Star } from 'lucide-react'
import { REVIEWS } from '../../data/reviews'
import SignUpModal from './SignUpModal'
import FamilyArt from './FamilyArt'
import './ReviewsSignup.css'

const AVATAR_COLORS = ['#0f9d58', '#16213e', '#c9931a', '#2b6cb0', '#a1417a', '#0e7c66']

function avatarColor(name) {
  let hash = 0
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) % AVATAR_COLORS.length
  return AVATAR_COLORS[hash]
}

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = review.text.length > 120
  const shown = expanded || !isLong ? review.text : `${review.text.slice(0, 120)}...`

  return (
    <div className="review-card">
      <div className="review-card__head">
        <span className="review-card__avatar" style={{ background: avatarColor(review.name) }}>
          {review.name[0]}
        </span>
        <div>
          <p className="review-card__name">{review.name}</p>
          <span className="review-card__meta">Google &middot; {review.timeAgo}</span>
        </div>
      </div>

      <div className="review-card__stars">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={15} fill={i < review.rating ? '#f4b400' : 'none'} stroke="#f4b400" />
        ))}
      </div>

      <p className="review-card__text">
        {shown}
        {isLong && (
          <button className="review-card__more" onClick={() => setExpanded((e) => !e)}>
            {expanded ? ' Show less' : ' Read more'}
          </button>
        )}
      </p>
    </div>
  )
}

function ReviewsSignup() {
  const [page, setPage] = useState(0)
  const [phone, setPhone] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const pageCount = Math.ceil(REVIEWS.length / 2)
  const timerRef = useRef(null)

  function goTo(next) {
    setPage(((next % pageCount) + pageCount) % pageCount)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setPage((p) => (p + 1) % pageCount)
    }, 5000)
    return () => clearInterval(timerRef.current)
  }, [pageCount])

  function handleManualNav(direction) {
    clearInterval(timerRef.current)
    goTo(page + direction)
    timerRef.current = setInterval(() => {
      setPage((p) => (p + 1) % pageCount)
    }, 5000)
  }

  const visible = REVIEWS.slice(page * 2, page * 2 + 2)

  return (
    <section className="reviews-signup">
      <div className="reviews-signup__left">
        <div className="reviews-signup__eyebrow">
          <FileText size={16} />
          REVIEWS
        </div>
        <h2>Hear from Our Happy Home Buyers</h2>
        <p className="reviews-signup__subtitle">Real Reviews, Real Experiences, Real Trust</p>

        <div className="reviews-signup__panel">
          <div className="reviews-signup__summary">
            <div className="reviews-signup__score">
              <strong>4.8</strong>
              <div className="reviews-signup__score-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#f4b400" stroke="#f4b400" />
                ))}
              </div>
              <span>2,579 reviews on Google</span>
            </div>
            <a
              className="reviews-signup__google-btn"
              href="https://www.google.com/search?q=MDN+Salesforce+reviews"
              target="_blank"
              rel="noreferrer"
            >
              Review us on Google
            </a>
          </div>

          <div className="reviews-signup__track">
            <button
              className="reviews-signup__arrow"
              aria-label="Previous reviews"
              onClick={() => handleManualNav(-1)}
            >
              <ChevronLeft size={18} />
            </button>

            {visible.map((review) => (
              <ReviewCard review={review} key={review.name} />
            ))}

            <button
              className="reviews-signup__arrow"
              aria-label="Next reviews"
              onClick={() => handleManualNav(1)}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="reviews-signup__dots">
            {[...Array(pageCount)].map((_, i) => (
              <button
                key={i}
                className={`reviews-signup__dot ${i === page ? 'is-active' : ''}`}
                aria-label={`Show reviews page ${i + 1}`}
                onClick={() => handleManualNav(i - page)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="reviews-signup__right">
        <h3>Sign Up For Free</h3>
        <input
          type="tel"
          placeholder="Enter your mobile number"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
        />
        <button className="reviews-signup__signup-btn" onClick={() => setModalOpen(true)}>
          Sign Up
        </button>

        <FamilyArt />
      </div>

      {modalOpen && <SignUpModal initialPhone={phone} onClose={() => setModalOpen(false)} />}
    </section>
  )
}

export default ReviewsSignup
