function seededBars(seed, count) {
  let hash = 0
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) % 1000
  const bars = []
  for (let i = 0; i < count; i++) {
    hash = (hash * 37 + i * 17) % 1000
    bars.push(18 + (hash % 46))
  }
  return bars
}

function LocalityCardArt({ seed }) {
  const bars = seededBars(seed, 22)
  const barWidth = 220 / bars.length
  const gradientId = `bar-${seed.replace(/[^a-zA-Z0-9]/g, '')}`

  return (
    <svg viewBox="0 0 220 90" className="locality-card__art" preserveAspectRatio="none">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3fb87c" />
          <stop offset="1" stopColor="#cdead9" />
        </linearGradient>
      </defs>
      <path
        d="M0,34 C55,10 110,10 220,34"
        fill="none"
        stroke="#7cc7a0"
        strokeWidth="1.5"
        strokeDasharray="3 4"
      />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * barWidth + 1}
          y={90 - h}
          width={barWidth - 2}
          height={h}
          fill={`url(#${gradientId})`}
        />
      ))}
    </svg>
  )
}

export default LocalityCardArt
