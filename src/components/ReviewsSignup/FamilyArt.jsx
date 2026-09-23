function Person({ x, headR, bodyH, color }) {
  const bodyW = headR * 2.6
  return (
    <g transform={`translate(${x},0)`}>
      <circle cx="0" cy={-bodyH - headR} r={headR} fill={color} />
      <path
        d={`M${-bodyW / 2},0 C${-bodyW / 2},${-bodyH * 0.8} ${-bodyW / 3},${-bodyH} 0,${-bodyH} C${bodyW / 3},${-bodyH} ${bodyW / 2},${-bodyH * 0.8} ${bodyW / 2},0 Z`}
        fill={color}
      />
    </g>
  )
}

function FamilyArt() {
  return (
    <svg viewBox="0 0 300 170" className="family-art" preserveAspectRatio="xMidYMax meet">
      <g transform="translate(150,170)">
        <Person x={-95} headR={22} bodyH={95} color="rgba(255,255,255,0.92)" />
        <Person x={-35} headR={17} bodyH={65} color="rgba(255,255,255,0.75)" />
        <Person x={20} headR={15} bodyH={55} color="rgba(255,255,255,0.75)" />
        <Person x={85} headR={23} bodyH={100} color="rgba(255,255,255,0.92)" />
      </g>
    </svg>
  )
}

export default FamilyArt
