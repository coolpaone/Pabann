import React from 'react';
import { Send, Radio } from 'lucide-react';
import { TELECOM_IMAGES } from '../data/telecomData';

interface HeroSectionProps {
  onContactClick: () => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onContactClick,
  onOpenResume,
}) => {
  return (
    <section id="about" className="relative w-full px-5 md:px-10 lg:px-20 pt-8 pb-16 overflow-hidden">
      {/* Ambient photonic atmospheric glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Text & Actions */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Main Headline */}
            <div className="flex flex-col gap-1.5">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-on-surface tracking-tight font-bold">
                Paban{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b4c5ff] via-[#4cd7f6] to-[#b4c5ff]">
                  Nepali
                </span>
              </h1>
              <p className="font-headline-sm text-lg sm:text-xl text-[#b4c5ff] font-medium leading-snug">
                Professional Telecommunications Technician
              </p>
            </div>

            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
              I’m a technology and telecom enthusiast passionate about connecting people, communities, and ideas through technology—contributing to Nepal’s digital growth while creating meaningful connections with the world. I specialize in architecting and deploying robust fiber-optic transport networks, high-reliability copper infrastructure, and carrier-grade BTS/OLT transmission systems across Nepal Telecom’s core urban zones and challenging mountainous terrains. My work sits at the intersection of resilient network engineering, connectivity, and innovation, with a focus on building reliable telecommunications infrastructure that enables communities, businesses, and the nation to stay connected.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onContactClick}
                className="px-6 py-3 bg-gradient-to-r from-primary-container to-blue-600 hover:to-secondary text-white font-body-md text-sm sm:text-base font-semibold rounded-xl shadow-[0_0_24px_rgba(37,99,235,0.45)] hover:shadow-[0_0_32px_rgba(76,215,246,0.6)] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Send className="w-4 h-4" />
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Column: Hero Feature Spotlight Image (IMAGE_7) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-surface-container border border-primary/20 shadow-[0_16px_40px_rgba(6,13,36,0.85)] group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1229] via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
              <img
                alt="Paban Nepali Field Telecom Station"
                className="w-full h-80 lg:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                src={TELECOM_IMAGES.heroSpotlight}
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3.5 bg-[#060d24]/85 backdrop-blur-md rounded-xl border border-secondary/20 shadow-lg">
                <div className="flex flex-col">
                  <span className="font-tech-badge text-[11px] text-secondary tracking-wider font-semibold">
                    TELECOM TRANSMISSION NODE
                  </span>
                  <span className="font-headline-sm text-base text-on-surface font-semibold">
                    Nepal Telecom Core
                  </span>
                </div>
                <Radio className="w-6 h-6 text-secondary animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Panoramic Wide Telecom Banner (IMAGE_8) */}
        <div className="w-full relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-surface-container-low border border-primary/15 group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#060d24]/90 via-transparent to-[#060d24]/90 z-10 pointer-events-none"></div>
          <img
            alt="Paban Nepali Wide Telecom Panoramic Display"
            className="w-full h-48 md:h-64 lg:h-80 object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
            src={TELECOM_IMAGES.panoramicBanner}
          />
        </div>
      </div>
    </section>
  );
};
