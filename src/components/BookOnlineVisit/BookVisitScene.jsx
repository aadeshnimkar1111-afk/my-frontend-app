import carImg from '../../assets/book-visit-car.png'

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

const CAR_X = 60
const CAR_Y = 172
const CAR_WIDTH = 340
const CAR_HEIGHT = (CAR_WIDTH * 191) / 514

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

      <ellipse
        cx={CAR_X + CAR_WIDTH / 2}
        cy={CAR_Y + CAR_HEIGHT + 4}
        rx={CAR_WIDTH / 2.1}
        ry="8"
        fill="#16213e"
        opacity="0.12"
      />

      <g transform={`translate(${CAR_X * 2 + CAR_WIDTH},0) scale(-1,1)`}>
        <image href={carImg} x={CAR_X} y={CAR_Y} width={CAR_WIDTH} height={CAR_HEIGHT} />
      </g>
    </svg>
  )
}

export default BookVisitScene
