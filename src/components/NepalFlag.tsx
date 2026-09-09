import React from 'react';

interface NepalFlagProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const NepalFlag: React.FC<NepalFlagProps> = ({ className = '', size = 'md' }) => {
  const dimensions = {
    sm: { width: 14, height: 18 },
    md: { width: 20, height: 25 },
    lg: { width: 28, height: 35 },
  }[size];

  return (
    <span
      className={`inline-flex items-center justify-center filter drop-shadow-[0_0_8px_rgba(220,38,38,0.4)] ${className}`}
      title="Flag of Nepal"
      aria-label="Nepal Flag"
    >
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 60 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Outer Deep Carrier Navy-Blue Border (blends with theme #003893 / #2563eb) */}
        <path
          d="M6 5 L52 35 L26 35 L52 68 L6 68 Z"
          fill="#1e3a8a"
          stroke="#3b82f6"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Inner Crimson Red Pennants (#dc2626 / #b91c1c with subtle glow) */}
        <path
          d="M9 10 L44 32 L22 32 L44 64 L9 64 Z"
          fill="#dc2626"
          className="transition-colors"
        />

        {/* Top Pennant: Moon & Rays (Celestial White / Optical Cyan Tint) */}
        <g transform="translate(18, 23)">
          {/* Moon crescent */}
          <circle cx="0" cy="0" r="5" fill="#f8fafc" />
          <circle cx="0" cy="-2" r="4.2" fill="#dc2626" />
          {/* Moon rays */}
          <path
            d="M -3 1 L -5 3 L -2 3 L -3 5 L 0 3.5 L 3 5 L 2 3 L 5 3 L 3 1 Z"
            fill="#f8fafc"
          />
        </g>

        {/* Bottom Pennant: 12-Ray Sun Symbol */}
        <g transform="translate(19, 49)">
          <circle cx="0" cy="0" r="4.5" fill="#f8fafc" />
          {/* Sun Rays */}
          <path
            d="
              M 0 -8 L 1.5 -5 L 5 -7 L 3.5 -3.5 L 7 -5 L 5 -1.5 L 8 0 L 5 1.5 L 7 5 L 3.5 3.5 L 5 7 L 1.5 5 L 0 8 L -1.5 5 L -5 7 L -3.5 3.5 L -7 5 L -5 1.5 L -8 0 L -5 -1.5 L -7 -5 L -3.5 -3.5 L -5 -7 L -1.5 -5 Z
            "
            fill="#f8fafc"
          />
        </g>
      </svg>
    </span>
  );
};
