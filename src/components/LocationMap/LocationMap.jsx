import './LocationMap.css'

export const CITY_COORDS = {
  Pune: { lat: 18.5204, lon: 73.8567 },
  Mumbai: { lat: 19.076, lon: 72.8777 },
  Bangalore: { lat: 12.9716, lon: 77.5946 },
  'Delhi NCR': { lat: 28.7041, lon: 77.1025 },
  Hyderabad: { lat: 17.385, lon: 78.4867 },
}

function LocationMap({ lat, lon, label }) {
  const delta = 0.06
  const bbox = `${lon - delta},${lat - delta},${lon + delta},${lat + delta}`
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`

  return (
    <div className="location-map">
      <iframe key={`${lat},${lon}`} title={`Map of ${label}`} src={src} loading="lazy" />
    </div>
  )
}

export default LocationMap
