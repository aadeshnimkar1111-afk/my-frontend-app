import { useState } from 'react'
import { Newspaper, PlayCircle } from 'lucide-react'
import VideoModal from '../VideoModal/VideoModal'
import './MediaCoverage.css'

// Placeholder press mentions - swap in real logos/names once available.
const PRESS = ['Business Daily', 'Finance Weekly', 'City Times', 'Realty Now', 'The Property Post']

// videoUrl stays null until a real MDN Salesforce overview video is ready.
const OVERVIEW_VIDEO = {
  title: 'MDN Salesforce Overview',
  videoUrl: null,
}

function MediaCoverage() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section className="media-coverage">
      <button className="media-coverage__video-card" onClick={() => setVideoOpen(true)}>
        <div className="media-coverage__banner">
          <span>NO HASSLE! NO BROKERAGE!</span>
          <small>JUST HOMES AT THE BEST PRICE</small>
        </div>

        <div className="media-coverage__caption">
          <p className="media-coverage__caption-title">MDN Salesforce Speaks: Our Journey</p>
          <p className="media-coverage__caption-sub">Building Trust, Simplifying Home Buying</p>
        </div>

        <span className="media-coverage__play">
          <PlayCircle size={26} />
        </span>
      </button>

      <div className="media-coverage__info">
        <div className="media-coverage__eyebrow">
          <Newspaper size={16} />
          MEDIA COVERAGE
        </div>
        <h2>MDN Salesforce in the Spotlight</h2>
        <p>Latest News & Media Coverage</p>

        <div className="media-coverage__logos">
          {PRESS.map((name) => (
            <div key={name} className="media-coverage__logo">
              {name}
            </div>
          ))}
        </div>
      </div>

      {videoOpen && (
        <VideoModal
          title={OVERVIEW_VIDEO.title}
          videoUrl={OVERVIEW_VIDEO.videoUrl}
          onClose={() => setVideoOpen(false)}
        />
      )}
    </section>
  )
}

export default MediaCoverage
