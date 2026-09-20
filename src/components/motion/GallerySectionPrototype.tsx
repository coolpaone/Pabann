import React, { useState, useRef } from 'react';
import { GALLERY_ITEMS } from '../../data/telecomData';
import { GalleryItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { ScrollHeading, ScrollCard } from './ScrollReveal';

interface GallerySectionProps {
  onSelectPhoto: (photo: GalleryItem) => void;
}

export const GallerySectionPrototype: React.FC<GallerySectionProps> = ({ onSelectPhoto }) => {
  const { t } = useLanguage();
  const [mobileIndex, setMobileIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);

  const totalPhotos = GALLERY_ITEMS.length;

  const scrollToPhoto = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.querySelectorAll<HTMLElement>('[data-gallery-card]');
    if (cards[index]) {
      isProgrammaticScroll.current = true;
      setMobileIndex(index);
      cards[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
      });
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 400);
    }
  };

  // Keep track of scroll position on touch swipe
  const handleScroll = () => {
    if (isProgrammaticScroll.current || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cards = container.querySelectorAll<HTMLElement>('[data-gallery-card]');
    if (cards.length > 0) {
      const cardWidth = cards[0].offsetWidth + 12; // card width + gap-3
      if (cardWidth > 0) {
        const newIndex = Math.min(Math.max(Math.round(scrollLeft / cardWidth), 0), totalPhotos - 1);
        if (newIndex !== mobileIndex) {
          setMobileIndex(newIndex);
        }
      }
    }
  };

  return (
    <section id="gallery" className="w-full bg-[#060d24] py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 w-full">
        {/* 1. MOBILE HEADER & PEAKING CAROUSEL (sm:hidden) */}
        <div className="block sm:hidden w-full">
          {/* Mobile Header matching PC version */}
          <div className="flex flex-col gap-2 pb-5 px-1">
            <ScrollHeading delay={0}>
              <span className="font-tech-badge text-xs text-secondary tracking-widest flex items-center gap-2 transition-transform duration-200 hover:scale-[1.02] origin-left">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4cd7f6]"></span>
                ARCHIVE NODES
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface font-semibold pt-1">
                {t.gallery.title}
              </h2>
            </ScrollHeading>
          </div>

          {/* Horizontal Swiping Track with Next Photo Peeking (Same like on iPhone) */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 pt-1 px-4 -mx-4 select-none scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                data-gallery-card
                onClick={() => onSelectPhoto(item)}
                className="snap-start shrink-0 w-[78vw] max-w-[340px] aspect-[9/15] rounded-[28px] overflow-hidden bg-[#0c142c] border border-[#1e2d4e]/60 shadow-[0_16px_36px_rgba(0,0,0,0.65)] cursor-pointer active:scale-[0.985] transition-all relative"
              >
                <img
                  src={encodeURI(item.url)}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>

          {/* iPhone-style pagination slide indicator under photos */}
          <div className="flex items-center justify-center gap-2 pt-3 pb-1">
            {GALLERY_ITEMS.map((item, idx) => {
              const isActive = idx === mobileIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToPhoto(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ease-out cursor-pointer ${
                    isActive
                      ? 'w-7 bg-[#00a2ff] shadow-[0_0_10px_rgba(0,162,255,0.6)]'
                      : 'w-2 bg-[#273859] hover:bg-[#394f7d]'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* 2. PC & DESKTOP / TABLET VIEWS (hidden sm:block) */}
        {/* Preserved with header matching section title scale and 4-column grid */}
        <div className="hidden sm:flex sm:flex-col sm:gap-8 w-full">
          {/* Desktop Header matching other section titles */}
          <div className="flex flex-col gap-2 max-w-2xl">
            <ScrollHeading delay={0}>
              <span className="font-tech-badge text-xs text-secondary tracking-widest flex items-center gap-2 transition-transform duration-200 hover:scale-[1.02] origin-left">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4cd7f6]"></span>
                ARCHIVE NODES
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface font-semibold pt-1">
                {t.gallery.title}
              </h2>
            </ScrollHeading>
          </div>

          {/* Desktop 3-column grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
            {GALLERY_ITEMS.map((item, index) => {
              const isCyanHover = index % 2 === 1;

              return (
                <ScrollCard key={item.id} index={index} delay={0.1 + (index % 4) * 0.1}>
                  <div
                    onClick={() => onSelectPhoto(item)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View photo ${item.id}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelectPhoto(item);
                      }
                    }}
                    className={`relative group w-full aspect-[3/4] rounded-2xl overflow-hidden bg-surface-container shadow-md transition-all duration-500 cursor-pointer border border-primary/10 ${
                      isCyanHover
                        ? 'hover:shadow-[0_0_24px_rgba(76,215,246,0.45)] hover:border-secondary/50'
                        : 'hover:shadow-[0_0_24px_rgba(37,99,235,0.45)] hover:border-primary-container/60'
                    }`}
                  >
                    <img
                      alt={item.alt}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                      src={encodeURI(item.url)}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </ScrollCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
