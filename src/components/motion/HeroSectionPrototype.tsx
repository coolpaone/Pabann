import React from 'react';
import { Send, Radio, Sparkles } from 'lucide-react';
import { TELECOM_IMAGES } from '../../data/telecomData';
import { useLanguage } from '../../context/LanguageContext';
import {
  ScrollHeading,
  ScrollParagraph,
  ScrollImage,
  ScrollCard,
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
    <section id="about" className="relative w-full px-5 md:px-10 lg:px-20 pt-8 pb-16 overflow-hidden">
      {/* Ambient photonic atmospheric glows with subtle parallax drift */}
      <ScrollParallax speed={-25} className="absolute top-10 left-1/4 w-96 h-96 pointer-events-none -z-10">
        <div className="w-full h-full bg-primary-container/20 rounded-full blur-3xl"></div>
      </ScrollParallax>
      <ScrollParallax speed={35} className="absolute bottom-10 right-1/4 w-[500px] h-[500px] pointer-events-none -z-10">
        <div className="w-full h-full bg-secondary/10 rounded-full blur-3xl"></div>
      </ScrollParallax>

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Text & Actions */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Main Headline: Slides upward */}
            <ScrollHeading delay={0}>
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
            </ScrollHeading>

            {/* Summary Paragraph: Slides upward with +100ms stagger */}
            <ScrollParagraph delay={0.1}>
              <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
                {t.hero.summary}
              </p>
            </ScrollParagraph>

            {/* Hero CTAs: Slides upward with +180ms delay */}
            <ScrollParagraph delay={0.18}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onContactClick}
                  className="px-6 py-3 bg-gradient-to-r from-primary-container to-blue-600 hover:to-secondary text-white font-body-md text-sm sm:text-base font-semibold rounded-xl shadow-[0_0_24px_rgba(37,99,235,0.45)] hover:shadow-[0_0_32px_rgba(76,215,246,0.6)] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  {t.hero.ctaContact}
                </button>
              </div>
            </ScrollParagraph>
          </div>

          {/* Right Column: Hero Feature Spotlight Image (Slides in from the right with +200ms delay) */}
          <div className="lg:col-span-5 relative">
            <ScrollImage direction="right" delay={0.2}>
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
            </ScrollImage>
          </div>
        </div>

        {/* Panoramic Wide Telecom Banner: Scroll-connected Parallax Depth */}
        <ScrollParallax speed={20} className="w-full rounded-2xl">
          <div className="w-full relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-surface-container-low border border-primary/15 group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#060d24]/90 via-transparent to-[#060d24]/90 z-10 pointer-events-none"></div>
            <img
              alt="Paban Nepali Wide Telecom Panoramic Display"
              className="w-full h-48 md:h-64 lg:h-80 object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              src={TELECOM_IMAGES.panoramicBanner}
            />
          </div>
        </ScrollParallax>

        {/* Fiber Optics & Photonic Transport Card: Pushes upward and scales 0.94 → 1.0 */}
        <ScrollCard index={0} delay={0.28}>
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
        </ScrollCard>
      </div>
    </section>
  );
};
