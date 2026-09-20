import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import LocationMap, { CITY_COORDS } from '../LocationMap/LocationMap'
import './MapModal.css'

function MapModal({ query, onClose }) {
  const [coords, setCoords] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const knownCity = CITY_COORDS[query]
    if (knownCity) {
      setCoords(knownCity)
      setStatus('ready')
      return
    }

    setStatus('loading')
    const controller = new AbortController()

    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`,
      { signal: controller.signal }
    )
      .then((res) => res.json())
      .then((results) => {
        if (results.length === 0) {
          setStatus('not-found')
          return
        }
        setCoords({ lat: Number(results[0].lat), lon: Number(results[0].lon) })
        setStatus('ready')
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setStatus('error')
      })

    return () => controller.abort()
  }, [query])

  return (
    <div className="map-modal-overlay" onClick={onClose}>
      <div className="map-modal" onClick={(e) => e.stopPropagation()}>
        <div className="map-modal__header">
          <span>{query}</span>
          <button className="map-modal__close" aria-label="Close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="map-modal__body">
          {status === 'loading' && <p className="map-modal__status">Locating {query}...</p>}
          {status === 'not-found' && <p className="map-modal__status">No results found for "{query}"</p>}
          {status === 'error' && <p className="map-modal__status">Couldn't load the map right now.</p>}
          {status === 'ready' && coords && (
            <LocationMap lat={coords.lat} lon={coords.lon} label={query} />
          )}
        </div>
      </div>
    </div>
  )
}

export default MapModal
