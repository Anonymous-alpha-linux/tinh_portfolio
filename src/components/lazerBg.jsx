import React from "react";
import "./lazerBg.scss";

const LASER_COUNT = 18;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function LaserBackground() {
  const lasers = Array.from({ length: LASER_COUNT }).map((_, i) => {
    const x = random(0, 1920);
    const width = random(0.5, 4);
    const opacity = random(0.4, 0.9);
    const duration = random(3, 8);
    const startY = -600;
    const endY = 600;
    return { x, width, opacity, duration, startY, endY };
  });

  return (
    <svg
      className="laser-bg"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="laserGradient" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="transparent" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--color_2)" stopOpacity="1" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </linearGradient>

        <filter id="laserGlow" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="6" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {lasers.map(({ x, width, opacity, duration, startY }, i) => {
        return (
          <React.Fragment key={i}>
            <line
              x1={x}
              y1={-300}
              x2={x}
              y2={1080}
              stroke="var(--background-color_2)"
              strokeWidth={width}
              strokeLinecap="round"
              filter={`url('#laserGlow')`}
            />
            <line
              key={i}
              x1={x}
              y1={-300}
              x2={x}
              y2={1080}
              // stroke="var(--color_2)"
              stroke="url('#laserGradient')"
              strokeWidth={width}
              opacity={opacity}
              filter={`url('#laserGlow')`}
            >
              <animate
                attributeName="y1"
                from={startY}
                to={1200}
                dur={`${duration}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="y2"
                from={startY + 400}
                to={1200 + 400}
                dur={`${duration}s`}
                repeatCount="indefinite"
              />
            </line>
          </React.Fragment>
        );
      })}
    </svg>
  );
}

export default LaserBackground;
