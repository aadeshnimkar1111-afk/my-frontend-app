import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Download,
  Eye,
  Heart,
  ListFilter,
  MapPinned,
  MessageCircle,
  Share2,
  SlidersHorizontal,
  Volume2,
  VolumeX,
} from 'lucide-react'
import { REELS } from '../../data/reels'
import './ReelsPage.css'

function ReelsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [muted, setMuted] = useState(true)
  const [liked, setLiked] = useState(false)

  const index = REELS.findIndex((r) => String(r.id) === id)
  const reel = REELS[index]

  if (!reel) {
    return (
      <div className="reels-page reels-page--empty">
        <p>This reel doesn't exist.</p>
        <button onClick={() => navigate('/')}>Go back home</button>
      </div>
    )
  }

  const likeCount = reel.likes + (liked ? 1 : 0)
  const hasPrev = index > 0
  const hasNext = index < REELS.length - 1

  function goTo(nextIndex) {
    setLiked(false)
    navigate(`/reels/${REELS[nextIndex].id}`)
  }

  return (
    <div className="reels-page">
      <div className="reels-page__stage">
        <div className="reels-page__topbar">
          <button className="reels-page__icon-btn" aria-label="Back" onClick={() => navigate('/')}>
            <ArrowLeft size={20} />
          </button>

          <div className="reels-page__topbar-right">
            <button
              className="reels-page__icon-btn"
              aria-label={muted ? 'Unmute' : 'Mute'}
              onClick={() => setMuted((m) => !m)}
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <button className="reels-page__icon-btn" aria-label="Filter">
              <SlidersHorizontal size={18} />
            </button>
            <button className="reels-page__icon-btn" aria-label="List view" onClick={() => navigate('/')}>
              <ListFilter size={18} />
            </button>
            <button className="reels-page__icon-btn" aria-label="Map view">
              <MapPinned size={18} />
            </button>
          </div>
        </div>

        <div className="reels-page__video">
          <span className="reels-page__brand">MDN</span>
          <p className="reels-page__video-caption">{reel.locality}</p>
        </div>

        <div className="reels-page__info">
          <div className="reels-page__developer-badge">{reel.project.developer[0]}</div>
          <div>
            <h3>{reel.project.name}</h3>
            <p className="reels-page__location">
              {reel.project.location} · <span>{reel.project.developer}</span>
            </p>
          </div>
        </div>

        <div className="reels-page__units">
          {reel.project.units.map((unit) => (
            <div className="reels-page__unit" key={unit.bhk}>
              <span className="reels-page__unit-bhk">{unit.bhk}</span>
              <span className={`reels-page__unit-price ${unit.sold ? 'is-sold' : ''}`}>
                {unit.sold ? 'Sold' : unit.price}
              </span>
            </div>
          ))}
        </div>

        <div className="reels-page__actions">
          <button className="reels-page__view-detail">View Detail</button>
          <button className="reels-page__tour">Tour</button>
        </div>
      </div>

      <div className="reels-page__side">
        <button
          className={`reels-page__side-btn ${liked ? 'is-active' : ''}`}
          onClick={() => setLiked((l) => !l)}
        >
          <Heart size={22} fill={liked ? 'currentColor' : 'none'} />
          <span>{likeCount}</span>
        </button>

        <button className="reels-page__side-btn">
          <MessageCircle size={22} />
          <span>{reel.comments}</span>
        </button>

        <button className="reels-page__side-btn">
          <Eye size={22} />
          <span>{reel.views}</span>
        </button>

        <button className="reels-page__side-btn">
          <Share2 size={22} />
          <span>Share</span>
        </button>

        <button className="reels-page__side-btn">
          <Download size={22} />
          <span>Brochure</span>
        </button>
      </div>

      <div className="reels-page__nav">
        <button
          className="reels-page__nav-btn"
          aria-label="Previous reel"
          disabled={!hasPrev}
          onClick={() => hasPrev && goTo(index - 1)}
        >
          <ChevronUp size={20} />
        </button>
        <button
          className="reels-page__nav-btn"
          aria-label="Next reel"
          disabled={!hasNext}
          onClick={() => hasNext && goTo(index + 1)}
        >
          <ChevronDown size={20} />
        </button>
      </div>
    </div>
  )
}

export default ReelsPage
