import { PlayCircle, X } from 'lucide-react'
import './VideoModal.css'

function VideoModal({ title, videoUrl, onClose }) {
  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal__close" aria-label="Close" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="video-modal__player">
          {videoUrl ? (
            <iframe
              src={videoUrl}
              title={title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="video-modal__placeholder">
              <PlayCircle size={40} />
              <span>Video coming soon</span>
            </div>
          )}
        </div>

        <p className="video-modal__title">{title}</p>
      </div>
    </div>
  )
}

export default VideoModal
