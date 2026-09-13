import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Official Nepal Telecom Original Emblem Logo
 * Stored locally at /assets/nepal_telecom_logo.jpg so that remote removals never affect the site.
 * Includes automatic fallback to high-precision vector SVG emblem.
 */
export const NepalTelecomLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const [imageSrc, setImageSrc] = useState('/assets/nepal_telecom_logo.jpg');
  const [imageError, setImageError] = useState(false);

  const dimensions = {
    sm: { width: 40, height: 46, imgHeight: 'h-10' },
    md: { width: 56, height: 64, imgHeight: 'h-14' },
    lg: { width: 78, height: 90, imgHeight: 'h-20' },
  }[size];

  const handleImageError = () => {
    if (imageSrc === '/assets/nepal_telecom_logo.jpg') {
      setImageSrc('/assets/nepal_telecom_logo.png');
    } else {
      setImageError(true);
    }
  };

  if (!imageError) {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(6,84,156,0.5)] bg-[#06549c] p-1 border border-[#06549c]/40 ${className}`}
        title="Nepal Telecom (नेपाल टेलिकम)"
        aria-label="Nepal Telecom Logo"
      >
        <img
          src={imageSrc}
          alt="Nepal Telecom Logo"
          onError={handleImageError}
          className={`${dimensions.imgHeight} w-auto object-contain rounded-lg`}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center justify-center rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(6,84,156,0.6)] ${className}`}
      title="Nepal Telecom (नेपाल टेलिकम)"
      aria-label="Nepal Telecom Logo"
    >
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 360 410"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Official Nepal Telecom Blue Background */}
        <rect width="360" height="410" rx="16" fill="#06549c" />

        {/* Top Sacred Dot (Bindu) */}
        <circle cx="180" cy="38" r="11" fill="#f4bc32" />

        {/* Upper Crest Swirl */}
        <path
          d="M 152 70 C 158 52, 202 52, 214 70 C 198 78, 168 78, 152 70 Z"
          fill="#f4bc32"
        />

        {/* Second Crest Ripple */}
        <path
          d="M 134 98 C 144 76, 218 76, 230 98 C 210 108, 152 108, 134 98 Z"
          fill="#f4bc32"
        />

        {/* Outer Sacred Shankha (Conch Shell) Body */}
        {/* Left Conch Wing */}
        <path
          d="M 122 118 
             C 100 135, 92 165, 92 205 
             C 92 245, 108 275, 144 290 
             C 112 280, 108 245, 108 205 
             C 108 170, 114 145, 122 118 Z"
          fill="#f4bc32"
        />

        {/* Right Conch Wing & Sweeping Graceful Tail */}
        <path
          d="M 218 116 
             C 246 135, 266 170, 266 215 
             C 266 260, 240 310, 196 355 
             C 180 372, 168 395, 165 400 
             C 168 385, 185 360, 202 335 
             C 234 295, 250 255, 250 215 
             C 250 175, 235 145, 218 116 Z"
          fill="#f4bc32"
        />

        {/* Central Lattice Telecom Tower */}
        {/* Apex Spire / Antenna */}
        <path
          d="M 180 120 L 180 152"
          stroke="#f4bc32"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Tower Apex Needle Cone */}
        <polygon points="180,118 178,138 182,138" fill="#f4bc32" />

        {/* 4-Tier Lattice Tower Truss */}
        <path
          d="M 178 152 L 163 245 L 197 245 L 182 152 Z"
          fill="none"
          stroke="#f4bc32"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Cross Beams & Diagonal Braces */}
        {/* Tier 1 */}
        <line x1="176" y1="172" x2="184" y2="172" stroke="#f4bc32" strokeWidth="2.5" />
        <line x1="178" y1="152" x2="184" y2="172" stroke="#f4bc32" strokeWidth="1.8" />
        <line x1="182" y1="152" x2="176" y2="172" stroke="#f4bc32" strokeWidth="1.8" />

        {/* Tier 2 */}
        <line x1="173" y1="194" x2="187" y2="194" stroke="#f4bc32" strokeWidth="2.5" />
        <line x1="176" y1="172" x2="187" y2="194" stroke="#f4bc32" strokeWidth="1.8" />
        <line x1="184" y1="172" x2="173" y2="194" stroke="#f4bc32" strokeWidth="1.8" />

        {/* Tier 3 */}
        <line x1="168" y1="220" x2="192" y2="220" stroke="#f4bc32" strokeWidth="2.5" />
        <line x1="173" y1="194" x2="192" y2="220" stroke="#f4bc32" strokeWidth="1.8" />
        <line x1="187" y1="194" x2="168" y2="220" stroke="#f4bc32" strokeWidth="1.8" />

        {/* Tier 4 */}
        <line x1="168" y1="220" x2="197" y2="245" stroke="#f4bc32" strokeWidth="1.8" />
        <line x1="192" y1="220" x2="163" y2="245" stroke="#f4bc32" strokeWidth="1.8" />

        {/* Namaste / Pranam Base Foundation Hands */}
        <path
          d="M 163 245 
             C 163 268, 150 286, 150 286 
             C 160 288, 172 278, 175 250 
             L 163 245 Z"
          fill="#f4bc32"
        />
        <path
          d="M 197 245 
             C 197 268, 210 286, 210 286 
             C 200 288, 188 278, 185 250 
             L 197 245 Z"
          fill="#f4bc32"
        />
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
