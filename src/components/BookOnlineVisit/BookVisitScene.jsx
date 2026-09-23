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

function Wheel({ cx, cy }) {
  return (
    <g transform={`translate(${cx},${cy})`}>
      <circle r="25" fill="#1c1c1c" />
      <circle r="13" fill="#d6d6d6" />
      <circle r="4.5" fill="#8b8b8b" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line
          key={deg}
          x1="0"
          y1="0"
          x2={13 * Math.cos((deg * Math.PI) / 180)}
          y2={13 * Math.sin((deg * Math.PI) / 180)}
          stroke="#8b8b8b"
          strokeWidth="2.5"
        />
      ))}
    </g>
  )
}

function WheelArch({ cx }) {
  return (
    <path
      d={`M${cx - 34},104 A34,34 0 0,1 ${cx + 34},104 L${cx + 34},76 L${cx - 34},76 Z`}
      fill="#f7c331"
    />
  )
}

function BookVisitScene() {
  return (
    <svg viewBox="0 0 1200 350" className="book-visit-scene" preserveAspectRatio="xMidYMax slice">
      {BUILDINGS.map((b, i) => (
        <rect key={i} x={b.x} y={300 - b.h} width={b.w} height={b.h} fill="#c7d2de" />
      ))}

      <path
        d="M100,242 Q210,152 320,192"
        fill="none"
        stroke="#5b7290"
        strokeWidth="2.5"
        strokeDasharray="5 6"
      />
      <path
        d="M320,192 Q440,100 560,142"
        fill="none"
        stroke="#5b7290"
        strokeWidth="2.5"
        strokeDasharray="5 6"
      />

      <g>
        <circle cx="100" cy="242" r="8" fill="#0f9d58" />
        <text x="118" y="247" fontSize="20" fontWeight="700" fill="#3a4a5c">
          Project A
        </text>
      </g>
      <g>
        <circle cx="320" cy="192" r="8" fill="#0f9d58" />
        <text x="338" y="197" fontSize="20" fontWeight="700" fill="#3a4a5c">
          Project B
        </text>
      </g>
      <g>
        <circle cx="560" cy="142" r="8" fill="#0f9d58" />
        <text x="578" y="147" fontSize="20" fontWeight="700" fill="#3a4a5c">
          Project C
        </text>
      </g>

      <rect x="0" y="300" width="1200" height="50" fill="#16213e" />
      {[...Array(14)].map((_, i) => (
        <rect key={i} x={i * 90 + 10} y="323" width="40" height="5" fill="#ffffff" opacity="0.5" />
      ))}

      <g transform="translate(90,180)">
        <ellipse cx="160" cy="122" rx="165" ry="8" fill="#16213e" opacity="0.12" />

        <path
          d="M12,98 C12,89 18,83 27,82 L44,80 C52,59 64,42 82,31 C100,20 124,13 152,12 C184,11 216,14 240,22 C258,28 270,38 276,52 C282,64 284,76 284,86 L298,88 C306,90 310,96 310,102 L310,106 L12,106 Z"
          fill="#f7c331"
        />
        <path
          d="M12,98 C12,89 18,83 27,82 L44,80 C52,59 64,42 82,31 C100,20 124,13 152,12 C184,11 216,14 240,22 C258,28 270,38 276,52 C282,64 284,76 284,86 L298,88 C306,90 310,96 310,102"
          fill="none"
          stroke="#c9931a"
          strokeWidth="2"
        />

        <rect x="20" y="90" width="278" height="10" fill="#20293a" />

        <path
          d="M66,76 C74,56 85,41 100,32 C115,23 134,17 154,16 C178,15 202,18 220,25 C232,30 240,38 244,48 L244,76 Z"
          fill="#20293a"
        />
        <path d="M118,22 L122,76" stroke="#f7c331" strokeWidth="3" />
        <path d="M186,17 L190,76" stroke="#f7c331" strokeWidth="3" />
        <path
          d="M78,52 C86,42 96,34 108,28"
          fill="none"
          stroke="#8fa8c2"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M66,76 C74,56 85,41 100,32 C115,23 134,17 154,16 C178,15 202,18 220,25 C232,30 240,38 244,48 L244,76"
          fill="none"
          stroke="#c9931a"
          strokeWidth="2"
        />

        <g fill="#20293a">
          <rect x="150" y="58" width="22" height="18" />
          <rect x="172" y="58" width="22" height="18" fill="#fff" />
          <rect x="194" y="58" width="22" height="18" />
          <rect x="216" y="58" width="22" height="18" fill="#fff" />
        </g>

        <rect x="150" y="64" width="14" height="4" rx="1.5" fill="#4a4a4a" />
        <path
          d="M99,29 C91,27 85,30 83,37 C89,35 95,34 101,35 Z"
          fill="#f7c331"
          stroke="#c9931a"
          strokeWidth="1.5"
        />

        <ellipse cx="18" cy="90" rx="8" ry="5" fill="#fdf4d8" />
        <ellipse cx="304" cy="92" rx="6" ry="4" fill="#d13c3c" />

        <Wheel cx={72} cy={100} />
        <Wheel cx={252} cy={100} />
        <WheelArch cx={72} />
        <WheelArch cx={252} />
      </g>
    </svg>
  )
}

export default BookVisitScene
