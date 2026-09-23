const BUILDINGS = [
  { x: 520, w: 60, h: 90 },
  { x: 590, w: 44, h: 130 },
  { x: 645, w: 70, h: 70 },
  { x: 725, w: 50, h: 150 },
  { x: 785, w: 60, h: 100 },
  { x: 855, w: 46, h: 170 },
  { x: 910, w: 66, h: 120 },
  { x: 985, w: 50, h: 160 },
  { x: 1045, w: 70, h: 90 },
  { x: 1125, w: 55, h: 140 },
]

function BookVisitScene() {
  return (
    <svg viewBox="0 0 1200 300" className="book-visit-scene" preserveAspectRatio="xMidYMax slice">
      {BUILDINGS.map((b, i) => (
        <rect key={i} x={b.x} y={250 - b.h} width={b.w} height={b.h} fill="#c7d2de" />
      ))}

      <path
        d="M100,192 Q210,102 320,142"
        fill="none"
        stroke="#5b7290"
        strokeWidth="2.5"
        strokeDasharray="5 6"
      />
      <path
        d="M320,142 Q440,50 560,92"
        fill="none"
        stroke="#5b7290"
        strokeWidth="2.5"
        strokeDasharray="5 6"
      />

      <g>
        <circle cx="100" cy="192" r="8" fill="#0f9d58" />
        <text x="118" y="197" fontSize="20" fontWeight="700" fill="#3a4a5c">
          Project A
        </text>
      </g>
      <g>
        <circle cx="320" cy="142" r="8" fill="#0f9d58" />
        <text x="338" y="147" fontSize="20" fontWeight="700" fill="#3a4a5c">
          Project B
        </text>
      </g>
      <g>
        <circle cx="560" cy="92" r="8" fill="#0f9d58" />
        <text x="578" y="97" fontSize="20" fontWeight="700" fill="#3a4a5c">
          Project C
        </text>
      </g>

      <rect x="0" y="250" width="1200" height="50" fill="#16213e" />
      {[...Array(14)].map((_, i) => (
        <rect key={i} x={i * 90 + 10} y="273" width="40" height="5" fill="#ffffff" opacity="0.5" />
      ))}

      <g transform="translate(60,150)">
        <rect x="10" y="55" width="260" height="45" rx="10" fill="#f4c430" />
        <path d="M40,55 L70,10 L200,10 L235,55 Z" fill="#f4c430" />
        <path d="M75,50 L100,18 L195,18 L215,50 Z" fill="#bfe3ef" />
        <rect x="10" y="75" width="260" height="14" fill="#1c1c1c" />
        <rect x="10" y="75" width="30" height="14" fill="#1c1c1c" />
        <rect x="45" y="75" width="30" height="14" fill="#fff" />
        <rect x="80" y="75" width="30" height="14" fill="#1c1c1c" />
        <rect x="115" y="75" width="30" height="14" fill="#fff" />
        <rect x="150" y="75" width="30" height="14" fill="#1c1c1c" />
        <rect x="185" y="75" width="30" height="14" fill="#fff" />
        <rect x="220" y="75" width="30" height="14" fill="#1c1c1c" />
        <rect x="0" y="52" width="8" height="20" rx="3" fill="#d13c3c" />
        <circle cx="60" cy="100" r="20" fill="#232323" />
        <circle cx="60" cy="100" r="8" fill="#c9c9c9" />
        <circle cx="220" cy="100" r="20" fill="#232323" />
        <circle cx="220" cy="100" r="8" fill="#c9c9c9" />
      </g>
    </svg>
  )
}

export default BookVisitScene
