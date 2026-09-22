function PresentationVisual() {
  return (
    <svg
      viewBox="0 0 320 520"
      preserveAspectRatio="xMidYMid slice"
      className="presentation-visual__svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pv-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#16213e" />
          <stop offset="1" stopColor="#0f9d58" />
        </linearGradient>
        <linearGradient id="pv-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eef4ff" />
          <stop offset="1" stopColor="#dfe9f7" />
        </linearGradient>
      </defs>

      <rect width="320" height="520" fill="url(#pv-bg)" />

      <circle cx="270" cy="80" r="90" fill="#ffffff" opacity="0.06" />
      <circle cx="30" cy="460" r="70" fill="#ffffff" opacity="0.06" />

      <g transform="translate(35 190)">
        <rect x="0" y="0" width="250" height="164" rx="10" fill="#1c2b4a" />
        <rect x="10" y="10" width="230" height="144" rx="4" fill="url(#pv-screen)" />

        <g stroke="#8ba3c7" strokeWidth="2.5" fill="none">
          <rect x="26" y="26" width="198" height="112" rx="2" />
          <line x1="26" y1="80" x2="120" y2="80" />
          <line x1="120" y1="26" x2="120" y2="138" />
          <line x1="120" y1="105" x2="224" y2="105" />
        </g>
        <rect x="34" y="34" width="78" height="38" fill="#bcd4c4" opacity="0.7" />
        <rect x="128" y="34" width="88" height="63" fill="#cbdcee" opacity="0.7" />
        <rect x="34" y="88" width="78" height="42" fill="#e3ccae" opacity="0.6" />
        <rect x="128" y="113" width="88" height="17" fill="#cbdcee" opacity="0.5" />

        <rect x="-14" y="164" width="278" height="14" rx="6" fill="#0f1c34" />
        <path d="M118 178 L132 178 L128 190 L122 190 Z" fill="#0f1c34" />
      </g>

      <g transform="translate(190 150) rotate(35)">
        <rect x="0" y="0" width="95" height="9" rx="4.5" fill="#f4c96a" />
        <rect x="0" y="0" width="14" height="9" rx="4.5" fill="#e0e0e0" />
        <path d="M95 0 L107 4.5 L95 9 Z" fill="#3d3d3d" />
      </g>

      <g transform="translate(70 60)" opacity="0.9">
        <rect x="0" y="0" width="46" height="34" rx="4" fill="#ffffff" opacity="0.12" />
        <circle cx="23" cy="17" r="7" fill="#ffffff" opacity="0.5" />
      </g>

      <g transform="translate(220 380)" opacity="0.9">
        <rect x="0" y="0" width="58" height="42" rx="6" fill="#ffffff" opacity="0.1" />
        <rect x="10" y="14" width="38" height="6" rx="3" fill="#ffffff" opacity="0.5" />
        <rect x="10" y="24" width="24" height="6" rx="3" fill="#ffffff" opacity="0.35" />
      </g>
    </svg>
  )
}

export default PresentationVisual
