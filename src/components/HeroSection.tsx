import React from 'react';
import { Sparkles, Activity } from 'lucide-react';
import { TELECOM_IMAGES } from '../data/telecomData';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onContactClick: () => void;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onContactClick,
  onOpenResume,
}) => {
  const { t } = useLanguage();

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
                {t.hero.name.split(' ')[0]}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b4c5ff] via-[#4cd7f6] to-[#b4c5ff]">
                  {t.hero.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <p className="font-headline-sm text-lg sm:text-xl text-[#b4c5ff] font-medium leading-snug">
                {t.hero.role}
              </p>
            </div>

            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
              {t.hero.summary}
            </p>
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

        {/* Fiber Optics & Photonic Transport Showcase Card */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-secondary/30 bg-[#060d24] shadow-[0_12px_36px_rgba(76,215,246,0.15)] group">
          {/* Fiber Optics Background Image with Optical Light Glow */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/fiber_optics_network.jpg"
              alt="High-Density Fiber Optics Network"
              className="w-full h-full object-cover object-center opacity-40 group-hover:opacity-50 transition-opacity duration-700 scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060d24] via-[#060d24]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#060d24] via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 p-6 md:p-10 flex flex-col gap-6 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-secondary/15 border border-secondary/40 rounded-full font-tech-badge text-xs text-secondary flex items-center gap-1.5 shadow-[0_0_12px_rgba(76,215,246,0.3)]">
                <Sparkles className="w-3.5 h-3.5" />
                {t.fiberSpotlight.badge}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-headline-sm text-2xl md:text-3xl text-white font-bold tracking-tight">
                {t.fiberSpotlight.title}
              </h3>
              <p className="font-body-sm text-sm md:text-base text-on-surface-variant leading-relaxed">
                {t.fiberSpotlight.description}
              </p>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 pt-2 border-t border-primary/20">
              <div className="flex flex-col">
                <span className="font-tech-badge text-[10px] md:text-xs text-outline uppercase">
                  {t.fiberSpotlight.metric1Label}
                </span>
                <span className="font-tech-badge text-base md:text-xl text-secondary font-bold">
                  {t.fiberSpotlight.metric1Val}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-tech-badge text-[10px] md:text-xs text-outline uppercase">
                  {t.fiberSpotlight.metric2Label}
                </span>
                <span className="font-tech-badge text-base md:text-xl text-[#f5ba31] font-bold">
                  {t.fiberSpotlight.metric2Val}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-tech-badge text-[10px] md:text-xs text-outline uppercase">
                  {t.fiberSpotlight.metric3Label}
                </span>
                <span className="font-tech-badge text-base md:text-xl text-primary font-bold">
                  {t.fiberSpotlight.metric3Val}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
