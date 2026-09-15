import React from 'react';
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
    <section
      id="about"
      className="relative w-full px-5 md:px-10 lg:px-20 min-h-[580px] md:min-h-[660px] lg:min-h-[720px] flex flex-col justify-end pt-28 md:pt-40 lg:pt-48 pb-14 md:pb-20 overflow-hidden isolate"
    >
      {/* Immersive Thematic Background Image - Preserved exact aspect and scaling */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        <img
          src={TELECOM_IMAGES.aboutBackground}
          alt="Nepal Telecom Transmission & Himalayan Landscape Background"
          className="w-full h-full object-cover object-center lg:object-top opacity-55 md:opacity-65 scale-[1.02] filter saturate-[1.1]"
        />
        {/* Top edge gradient to blend seamlessly with header / top dark container */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0b1229] to-transparent pointer-events-none" />
        {/* Bottom edge gradient to blend smoothly into the following gallery section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b1229] via-[#0b1229]/85 to-transparent pointer-events-none" />
        {/* Atmospheric carrier blue overlay & subtle vignette for contrast */}
        <div className="absolute inset-0 bg-[#060e26]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,transparent_20%,#0b1229_95%)] opacity-70 pointer-events-none" />
      </div>

      {/* Ambient photonic atmospheric glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Title Grid positioned lower in the section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column Text seamlessly blended into the background without outer border */}
          <div className="lg:col-span-7 flex flex-col gap-5 py-2">
            {/* Main Headline */}
            <div className="flex flex-col gap-2">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight font-bold drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                {t.hero.name.split(' ')[0]}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0dcff] via-[#63e1ff] to-[#b4c5ff]">
                  {t.hero.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <p className="font-headline-sm text-lg sm:text-xl text-[#b4c5ff] font-medium leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                {t.hero.role}
              </p>
            </div>

            <p className="font-body-lg text-base sm:text-lg text-[#dce1ff]/90 max-w-3xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              {t.hero.summary}
            </p>
          </div>

          {/* Right Column: Kept as an open layout gap to feature the background globe theme */}
          <div className="hidden lg:block lg:col-span-5 min-h-[220px] pointer-events-none" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
