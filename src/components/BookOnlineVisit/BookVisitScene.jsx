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

      <g transform="translate(80,128)">
        <ellipse cx="150" cy="118" rx="150" ry="8" fill="#16213e" opacity="0.12" />

        <path
          d="M8,100 C8,88 16,80 28,79 L45,77 C58,50 82,28 112,20 C130,10 158,4 188,4 C222,4 254,10 276,24 C292,34 302,48 306,64 L312,78 C322,80 328,88 328,100 L328,108 L8,108 Z"
          fill="#f7c331"
        />
        <path
          d="M8,100 C8,88 16,80 28,79 L45,77 C58,50 82,28 112,20 C130,10 158,4 188,4 C222,4 254,10 276,24 C292,34 302,48 306,64 L312,78 C322,80 328,88 328,100"
          fill="none"
          stroke="#c9931a"
          strokeWidth="2"
        />

        <path
          d="M62,73 C74,50 94,32 118,26 C130,19 150,15 172,15 C198,15 222,20 240,30 C252,37 260,47 264,58 L264,73 Z"
          fill="#22384f"
        />
        <path d="M120,25 L124,73" stroke="#f7c331" strokeWidth="3" />
        <path d="M196,17 L200,73" stroke="#f7c331" strokeWidth="3" />
        <path
          d="M62,73 C74,50 94,32 118,26 C130,19 150,15 172,15 C198,15 222,20 240,30 C252,37 260,47 264,58 L264,73"
          fill="none"
          stroke="#c9931a"
          strokeWidth="2"
        />

        <rect x="20" y="82" width="298" height="10" fill="#20293a" />
        <g fill="#20293a">
          <rect x="140" y="60" width="24" height="20" />
          <rect x="164" y="60" width="24" height="20" fill="#fff" />
          <rect x="188" y="60" width="24" height="20" />
          <rect x="212" y="60" width="24" height="20" fill="#fff" />
        </g>

        <rect x="146" y="66" width="14" height="4" rx="1.5" fill="#4a4a4a" />
        <path d="M112,28 C104,26 98,29 96,36 C102,34 108,33 114,34 Z" fill="#f7c331" stroke="#c9931a" strokeWidth="1.5" />

        <ellipse cx="14" cy="88" rx="8" ry="5" fill="#fdf4d8" />
        <ellipse cx="322" cy="90" rx="6" ry="4" fill="#d13c3c" />

        <g transform="translate(66,108)">
          <circle r="26" fill="#1c1c1c" />
          <circle r="12" fill="#d6d6d6" />
          <circle r="4" fill="#8b8b8b" />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <line
              key={deg}
              x1="0"
              y1="0"
              x2={12 * Math.cos((deg * Math.PI) / 180)}
              y2={12 * Math.sin((deg * Math.PI) / 180)}
              stroke="#8b8b8b"
              strokeWidth="2.5"
            />
          ))}
        </g>
        <g transform="translate(262,108)">
          <circle r="26" fill="#1c1c1c" />
          <circle r="12" fill="#d6d6d6" />
          <circle r="4" fill="#8b8b8b" />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <line
              key={deg}
              x1="0"
              y1="0"
              x2={12 * Math.cos((deg * Math.PI) / 180)}
              y2={12 * Math.sin((deg * Math.PI) / 180)}
              stroke="#8b8b8b"
              strokeWidth="2.5"
            />
          ))}
        </g>
      </g>
    </svg>
  )
}

export default BookVisitScene
