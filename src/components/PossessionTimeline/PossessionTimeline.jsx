import { useRef } from 'react'
import { Building2, ChevronLeft, ChevronRight } from 'lucide-react'
import './PossessionTimeline.css'

const STAGES = [
  { id: 'early', badge: 'Early Stage', count: '227+', caption: 'Properties | 2-3 yrs' },
  { id: 'mid', badge: 'Mid Stage', count: '211+', caption: 'Properties | 1-2 yrs' },
  { id: 'advance', badge: 'Advance Stage', count: '214+', caption: 'Properties | <1 yrs' },
  { id: 'ready', badge: 'Ready To Move', count: '421+', caption: 'Properties | Ready' },
]

function PossessionTimeline() {
  const trackRef = useRef(null)

  function scroll(direction) {
    trackRef.current?.scrollBy({ left: direction * 320, behavior: 'smooth' })
  }

  return (
    <section className="possession">
      <div className="possession__header">
        <div>
          <div className="possession__eyebrow">
            <Building2 size={16} />
            POSSESSION
          </div>
          <h2>Move in, Whenever You're Ready!</h2>
          <p>Discover the key advantages of investing with us</p>
        </div>

        <div className="possession__controls">
          <button className="possession__arrow" aria-label="Previous" onClick={() => scroll(-1)}>
            <ChevronLeft size={18} />
          </button>
          <button className="possession__arrow" aria-label="Next" onClick={() => scroll(1)}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="possession__track" ref={trackRef}>
        {STAGES.map((stage) => (
          <article className={`possession-card possession-card--${stage.id}`} key={stage.id}>
            <Building2 className="possession-card__watermark" size={80} />
            <span className="possession-card__badge">{stage.badge}</span>
            <div className="possession-card__info">
              <strong>{stage.count}</strong>
              <span>{stage.caption}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PossessionTimeline
