import { useEffect, useRef, useState } from 'react'
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  FileText,
  HeartHandshake,
  Landmark,
  MapPin,
  Play,
  User,
  UserPlus,
  Users,
} from 'lucide-react'
import { TRACK_RECORD_STATS } from '../../data/trackRecord'
import { TESTIMONIAL_VIDEOS } from '../../data/testimonialVideos'
import './TrackRecordTestimonials.css'

const ICONS = { UserPlus, MapPin, Building2, HeartHandshake, Users, Landmark }
const VISIBLE_COUNT = 4
const MAX_INDEX = TESTIMONIAL_VIDEOS.length - VISIBLE_COUNT

function TrackRecordTestimonials() {
  const [selectedStats, setSelectedStats] = useState([])
  const [videoIndex, setVideoIndex] = useState(0)
  const timerRef = useRef(null)

  function toggleStat(id) {
    setSelectedStats((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  function goToVideo(index) {
    setVideoIndex(((index % (MAX_INDEX + 1)) + (MAX_INDEX + 1)) % (MAX_INDEX + 1))
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setVideoIndex((i) => (i + 1) % (MAX_INDEX + 1))
    }, 4000)
    return () => clearInterval(timerRef.current)
  }, [])

  function handleManualVideoNav(index) {
    clearInterval(timerRef.current)
    goToVideo(index)
    timerRef.current = setInterval(() => {
      setVideoIndex((i) => (i + 1) % (MAX_INDEX + 1))
    }, 4000)
  }

  const visibleVideos = TESTIMONIAL_VIDEOS.slice(videoIndex, videoIndex + VISIBLE_COUNT)

  return (
    <section className="track-record">
      <div className="track-record__left">
        <div className="track-record__eyebrow">
          <FileText size={16} />
          EXPERIENCE
        </div>
        <h2>Proven Track Record</h2>

        <div className="track-record__grid">
          {TRACK_RECORD_STATS.map((stat) => {
            const Icon = ICONS[stat.icon]
            const isActive = selectedStats.includes(stat.id)
            return (
              <button
                key={stat.id}
                className={`track-record__stat ${isActive ? 'is-active' : ''}`}
                onClick={() => toggleStat(stat.id)}
              >
                <Icon size={20} />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="track-record__right">
        <div className="track-record__eyebrow">
          <FileText size={16} />
          TESTIMONIALS
        </div>
        <h2>Hear from Our Buyers</h2>
        <p className="track-record__subtitle">Real stories from happy homeowners</p>

        <div className="track-record__video-row">
          <button
            className="track-record__arrow"
            aria-label="Previous testimonials"
            onClick={() => handleManualVideoNav(videoIndex - 1)}
          >
            <ChevronLeft size={18} />
          </button>

          <div className="track-record__video-grid">
            {visibleVideos.map((video) => (
              <div className="testimonial-card" key={video.id}>
                <span className="testimonial-card__brand">MDN</span>
                <span className="testimonial-card__play">
                  <Play size={20} fill="currentColor" />
                </span>
                <span className="testimonial-card__avatar">
                  <User size={16} />
                </span>
                {!video.videoId && (
                  <span className="testimonial-card__caption">Video coming soon</span>
                )}
              </div>
            ))}
          </div>

          <button
            className="track-record__arrow"
            aria-label="Next testimonials"
            onClick={() => handleManualVideoNav(videoIndex + 1)}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="track-record__dots">
          {TESTIMONIAL_VIDEOS.map((video, i) => (
            <button
              key={video.id}
              className={`track-record__dot ${i >= videoIndex && i < videoIndex + VISIBLE_COUNT ? 'is-active' : ''}`}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => handleManualVideoNav(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrackRecordTestimonials
