import React from 'react'

function l() {
  return (
    <div>
      <svg width="200" height="400" viewBox="0 0 200 400">
  <defs>
    <filter id="laserGlow" filterUnits="userSpaceOnUse">
      <feGaussianBlur stdDeviation="6" />
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <linearGradient
      id="laserGradient"
      gradientUnits="userSpaceOnUse"
      x1="100" y1="0"
      x2="100" y2="40"
    >
      <stop offset="0%" stop-color="transparent" />
      <stop offset="50%" stop-color="#00ffff" />
      <stop offset="100%" stop-color="transparent" />
    </linearGradient>
  </defs>

  <line
    x1="100"
    y1="20"
    x2="100"
    y2="380"
    stroke="#0b1a1f"
    stroke-width="10"
    stroke-linecap="round"
  />
  
  <line
    x1="100"
    y1="-40"
    x2="100"
    y2="0"
    stroke="url(#laserGradient)"
    stroke-width="3"
    filter="url(#laserGlow)"
  >
    <animate
      attributeName="y1"
      from="-40"
      to="400"
      dur="2s"
      repeatCount="indefinite"
    />
    <animate
      attributeName="y2"
      from="0"
      to="440"
      dur="2s"
      repeatCount="indefinite"
    />
  </line>

  <!-- LASER 2 -->
  <line
    x1="100"
    y1="-80"
    x2="100"
    y2="-40"
    stroke="url(#laserGradient)"
    stroke-width="2"
    filter="url(#laserGlow)"
    opacity="0.7"
  >
    <animate
      attributeName="y1"
      from="-80"
      to="400"
      dur="3s"
      repeatCount="indefinite"
    />
    <animate
      attributeName="y2"
      from="-40"
      to="440"
      dur="3s"
      repeatCount="indefinite"
    />
  </line>

  <!-- LASER 3 -->
  <line
    x1="100"
    y1="-120"
    x2="100"
    y2="-80"
    stroke="url(#laserGradient)"
    stroke-width="2"
    filter="url(#laserGlow)"
    opacity="0.5"
  >
    <animate
      attributeName="y1"
      from="-120"
      to="400"
      dur="4s"
      repeatCount="indefinite"
    />
    <animate
      attributeName="y2"
      from="-80"
      to="440"
      dur="4s"
      repeatCount="indefinite"
    />
  </line>
</svg>

    </div>
  )
}

export default l
<svg width="200" height="400" viewBox="0 0 200 400">
  <defs>
    <!-- Glow filter -->
    <filter id="laserGlow" filterUnits="userSpaceOnUse">
      <feGaussianBlur stdDeviation="6" />
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <!-- Laser gradient -->
    <linearGradient
      id="laserGradient"
      gradientUnits="userSpaceOnUse"
      x1="100" y1="0"
      x2="100" y2="40"
    >
      <stop offset="0%" stop-color="transparent" />
      <stop offset="50%" stop-color="#00ffff" />
      <stop offset="100%" stop-color="transparent" />
    </linearGradient>
  </defs>

  <!-- Ống nghiệm (nền tối) -->
  <line
    x1="100"
    y1="20"
    x2="100"
    y2="380"
    stroke="#0b1a1f"
    stroke-width="10"
    stroke-linecap="round"
  />

  <!-- LASER 1 -->
  <line
    x1="100"
    y1="-40"
    x2="100"
    y2="0"
    stroke="url(#laserGradient)"
    stroke-width="3"
    filter="url(#laserGlow)"
  >
    <animate
      attributeName="y1"
      from="-40"
      to="400"
      dur="2s"
      repeatCount="indefinite"
    />
    <animate
      attributeName="y2"
      from="0"
      to="440"
      dur="2s"
      repeatCount="indefinite"
    />
  </line>

  <!-- LASER 2 -->
  <line
    x1="100"
    y1="-80"
    x2="100"
    y2="-40"
    stroke="url(#laserGradient)"
    stroke-width="2"
    filter="url(#laserGlow)"
    opacity="0.7"
  >
    <animate
      attributeName="y1"
      from="-80"
      to="400"
      dur="3s"
      repeatCount="indefinite"
    />
    <animate
      attributeName="y2"
      from="-40"
      to="440"
      dur="3s"
      repeatCount="indefinite"
    />
  </line>

  <!-- LASER 3 -->
  <line
    x1="100"
    y1="-120"
    x2="100"
    y2="-80"
    stroke="url(#laserGradient)"
    stroke-width="2"
    filter="url(#laserGlow)"
    opacity="0.5"
  >
    <animate
      attributeName="y1"
      from="-120"
      to="400"
      dur="4s"
      repeatCount="indefinite"
    />
    <animate
      attributeName="y2"
      from="-80"
      to="440"
      dur="4s"
      repeatCount="indefinite"
    />
  </line>
</svg>
