function LegalScene() {
  return (
    <svg viewBox="0 0 420 300" className="legal-scene">
      <ellipse cx="230" cy="270" rx="170" ry="18" fill="#0b1830" opacity="0.25" />

      <g transform="translate(30,120)">
        <rect x="0" y="60" width="120" height="150" rx="4" fill="#eef2f6" stroke="#c7cfd8" strokeWidth="2" />
        <rect x="10" y="10" width="100" height="18" rx="4" fill="#f4c95d" />
        <g stroke="#9aa7b3" strokeWidth="3" strokeLinecap="round">
          <line x1="16" y1="90" x2="92" y2="90" />
          <line x1="16" y1="108" x2="104" y2="108" />
          <line x1="16" y1="126" x2="80" y2="126" />
        </g>
        <rect x="16" y="140" width="30" height="24" fill="#bcd4c4" opacity="0.7" />
        <g transform="translate(60,150) rotate(35)">
          <circle r="26" fill="none" stroke="#16213e" strokeWidth="6" />
          <line x1="18" y1="18" x2="42" y2="42" stroke="#16213e" strokeWidth="7" strokeLinecap="round" />
        </g>
      </g>

      <g transform="translate(15,240)">
        <rect x="0" y="10" width="90" height="14" rx="2" fill="#5b8bd6" />
        <rect x="4" y="-6" width="82" height="14" rx="2" fill="#f4c95d" />
        <text x="45" y="4" fontSize="10" fontWeight="700" fill="#16213e" textAnchor="middle">
          LAW
        </text>
        <rect x="8" y="-20" width="74" height="14" rx="2" fill="#eef2f6" stroke="#c7cfd8" />
      </g>

      <g transform="translate(150,60)">
        <path
          d="M40,240 C40,180 50,140 78,140 C95,140 105,160 108,185 L112,240 Z"
          fill="#ffffff"
        />
        <circle cx="86" cy="118" r="26" fill="#4a2f1f" />
        <circle cx="86" cy="124" r="22" fill="#e8b58c" />
        <rect x="70" y="185" width="32" height="16" fill="#e0c68a" />

        <path
          d="M140,240 C140,175 152,132 182,132 C210,132 224,175 224,240 Z"
          fill="#5b9bd5"
        />
        <path d="M175,140 L182,132 L189,140 L182,240 L175,240 Z" fill="#e04d5b" />
        <circle cx="182" cy="106" r="27" fill="#1c1108" />
        <circle cx="182" cy="112" r="23" fill="#c68a5a" />
        <rect x="200" y="205" width="34" height="26" rx="3" fill="#16213e" />
        <text x="217" y="223" fontSize="8" fontWeight="700" fill="#fff" textAnchor="middle">
          MDN
        </text>

        <rect x="118" y="196" width="30" height="10" rx="4" fill="#e8b58c" transform="rotate(-8 133 201)" />
        <rect x="140" y="192" width="30" height="10" rx="4" fill="#c68a5a" transform="rotate(8 155 197)" />
      </g>
    </svg>
  )
}

export default LegalScene
