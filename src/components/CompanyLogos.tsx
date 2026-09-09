import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Official Nepal Telecom Logo
 * Blue shield background with golden sacred Shankha (conch), telecom tower mast, and clean white branding.
 */
export const NepalTelecomLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const dimensions = {
    sm: { width: 36, height: 42 },
    md: { width: 48, height: 56 },
    lg: { width: 64, height: 75 },
  }[size];

  return (
    <div
      className={`inline-flex items-center justify-center rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(0,56,141,0.5)] border border-blue-400/30 ${className}`}
      title="Nepal Telecom (नेपाल टेलिकम)"
      aria-label="Nepal Telecom Logo"
    >
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 160 185"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Royal Blue Background */}
        <rect width="160" height="185" rx="14" fill="#004394" />

        {/* Top Sacred Stupa Finial & Spire */}
        <circle cx="80" cy="22" r="5" fill="#f4be38" />
        <path
          d="M 68 34 C 72 27, 88 27, 92 34 C 88 38, 72 38, 68 34 Z"
          fill="#f4be38"
        />
        <path
          d="M 60 44 C 66 36, 94 36, 100 44 C 94 48, 66 48, 60 44 Z"
          fill="#f4be38"
        />

        {/* Golden Conch (Shankha) Swirl Frame */}
        <path
          d="M 79 50 
             C 98 48, 116 57, 116 78 
             C 116 99, 94 116, 73 147 
             C 74 126, 98 107, 98 84 
             C 98 67, 85 58, 72 58 
             C 55 58, 44 72, 44 87 
             C 44 98, 50 108, 64 113 
             C 53 112, 38 102, 38 85 
             C 38 64, 56 50, 79 50 Z"
          fill="#f4be38"
        />

        {/* Golden Tower Spire & Namaste Silhouette inside Conch */}
        {/* Mast Apex */}
        <line x1="80" y1="56" x2="80" y2="70" stroke="#f4be38" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Lattice BTS Telecom Tower */}
        <path
          d="M 79 70 L 73 105 L 87 105 Z"
          fill="none"
          stroke="#f4be38"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <line x1="75" y1="80" x2="85" y2="80" stroke="#f4be38" strokeWidth="2" />
        <line x1="74" y1="92" x2="86" y2="92" stroke="#f4be38" strokeWidth="2" />
        <line x1="76" y1="74" x2="84" y2="92" stroke="#f4be38" strokeWidth="1.5" />
        <line x1="84" y1="74" x2="76" y2="92" stroke="#f4be38" strokeWidth="1.5" />
        <line x1="74" y1="92" x2="86" y2="105" stroke="#f4be38" strokeWidth="1.5" />
        <line x1="86" y1="92" x2="74" y2="105" stroke="#f4be38" strokeWidth="1.5" />

        {/* Namaste Hands / Base Pedestal */}
        <path
          d="M 72 105 C 72 118, 66 128, 66 128 L 76 125 L 79 105 Z"
          fill="#f4be38"
        />
        <path
          d="M 88 105 C 88 118, 94 128, 94 128 L 84 125 L 81 105 Z"
          fill="#f4be38"
        />

        {/* White Text: "Nepal Telecom" */}
        <text
          x="80"
          y="166"
          fill="#ffffff"
          fontSize="18"
          fontWeight="bold"
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          letterSpacing="-0.2"
        >
          Nepal Telecom
        </text>
      </svg>
    </div>
  );
};

/**
 * Official Classic Tech Logo
 * Clean high-visibility badge with yellow-to-lime gradient typography and central microwave radar 'T' icon.
 */
export const ClassicTechLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const dimensions = {
    sm: { height: 26 },
    md: { height: 34 },
    lg: { height: 44 },
  }[size];

  return (
    <div
      className={`inline-flex items-center justify-center bg-white/95 px-3 py-1 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.4)] border border-emerald-400/25 ${className}`}
      title="Classic Tech Pvt. Ltd."
      aria-label="Classic Tech Logo"
    >
      <svg
        height={dimensions.height}
        viewBox="0 0 240 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="classicGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#84cc16" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>

        {/* CLASSIC Wordmark */}
        <text
          x="4"
          y="46"
          fill="url(#classicGradient)"
          fontSize="27"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, 'Space Grotesk', sans-serif"
          letterSpacing="0.5"
        >
          CLASSIC
        </text>

        {/* Central Wireless Radar Waves & 'T' Emblem */}
        <g transform="translate(142, 35)">
          {/* Top radar waves */}
          <path
            d="M -15 -19 A 18 18 0 0 1 15 -19"
            stroke="#16a34a"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M -9 -13 A 11 11 0 0 1 9 -13"
            stroke="#16a34a"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Central Green Circle */}
          <circle cx="0" cy="0" r="14" fill="#16a34a" />

          {/* White 'T' */}
          <path
            d="M -7 -6 L 7 -6 L 7 -2 L 2.5 -2 L 2.5 7 L -2.5 7 L -2.5 -2 L -7 -2 Z"
            fill="#ffffff"
          />

          {/* Bottom radar waves */}
          <path
            d="M -9 13 A 11 11 0 0 0 9 13"
            stroke="#16a34a"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M -15 19 A 18 18 0 0 0 15 19"
            stroke="#16a34a"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* ECH Wordmark */}
        <text
          x="166"
          y="46"
          fill="#15803d"
          fontSize="27"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, 'Space Grotesk', sans-serif"
          letterSpacing="0.5"
        >
          ECH
        </text>
      </svg>
    </div>
  );
};
