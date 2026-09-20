import React from 'react';
import { TELECOM_IMAGES } from '../../data/telecomData';
import { useLanguage } from '../../context/LanguageContext';
import {
  ScrollHeading,
  ScrollParagraph,
  ScrollParallax,
} from './ScrollReveal';

interface HeroSectionProps {
  onContactClick: () => void;
  onOpenResume: () => void;
}

export const HeroSectionPrototype: React.FC<HeroSectionProps> = ({
  onContactClick,
}) => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative w-full px-5 md:px-10 lg:px-20 min-h-[580px] md:min-h-[660px] lg:min-h-[720px] flex flex-col justify-end pt-28 md:pt-40 lg:pt-48 pb-14 md:pb-20 overflow-hidden isolate"
    >
      {/* Immersive Thematic Background Image - Preserved exact aspect and scaling with optimized tablet framing */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        <img
          src={TELECOM_IMAGES.aboutBackground}
          alt="Nepal Telecom Transmission & Himalayan Landscape Background"
          className="w-full h-full object-cover object-[68%_18%] md:object-[69%_15%] lg:object-top opacity-95 md:opacity-100 scale-[1.01] filter contrast-[1.04] saturate-[1.05]"
        />
        {/* Top edge gradient to blend seamlessly with header / top dark container */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0b1229] to-transparent pointer-events-none" />
        {/* Bottom edge gradient to blend smoothly into the following gallery section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0b1229] via-[#0b1229]/80 to-transparent pointer-events-none" />
        {/* Directional contrast scrim: deep read-contrast behind the left-side text, leaving the person visible in the background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060e26]/85 via-[#060e26]/60 via-50% md:from-[#060e26]/95 md:via-[#060e26]/70 md:via-55% lg:via-[#060e26]/55 lg:via-50% to-transparent pointer-events-none" />
        {/* Mobile vertical scrim to maintain text readability when stacked */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#060e26]/85 via-[#060e26]/35 to-transparent pointer-events-none" />
      </div>

      {/* Ambient photonic atmospheric glows with subtle parallax drift */}
      <ScrollParallax speed={-25} className="absolute top-10 left-1/4 w-96 h-96 pointer-events-none -z-10">
        <div className="w-full h-full bg-primary-container/20 rounded-full blur-3xl"></div>
      </ScrollParallax>
      <ScrollParallax speed={35} className="absolute bottom-10 right-1/4 w-[500px] h-[500px] pointer-events-none -z-10">
        <div className="w-full h-full bg-secondary/10 rounded-full blur-3xl"></div>
      </ScrollParallax>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Title Grid positioned lower in the section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column Text seamlessly blended into the background */}
          <div className="lg:col-span-7 flex flex-col gap-5 py-2">
            {/* Main Headline: Slides upward */}
            <ScrollHeading delay={0}>
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
            </ScrollHeading>

            {/* Summary Paragraph: Slides upward with +100ms stagger */}
            <ScrollParagraph delay={0.1}>
              <p className="font-body-lg text-base sm:text-lg text-[#f0f4ff] font-normal max-w-3xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                {t.hero.summary}
              </p>
            </ScrollParagraph>
          </div>

          {/* Right Column: Open layout gap showcasing the background holographic globe */}
          <div className="hidden lg:block lg:col-span-5 min-h-[220px] pointer-events-none" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
