import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

  const handleNext = () => {
    const nextIdx = (mobileIndex + 1) % totalPhotos;
    scrollToPhoto(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (mobileIndex - 1 + totalPhotos) % totalPhotos;
    scrollToPhoto(prevIdx);
  };

  // Keep track of scroll position on touch swipe
  const handleScroll = () => {
    if (isProgrammaticScroll.current || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth * 0.76;
    if (cardWidth > 0) {
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex >= 0 && newIndex < totalPhotos && newIndex !== mobileIndex) {
        setMobileIndex(newIndex);
      }
    }
  };

  return (
    <section id="gallery" className="w-full bg-[#060d24] py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 w-full">
        {/* 1. MOBILE HEADER & PEAKING CAROUSEL (sm:hidden) - Exactly as in user image */}
        <div className="block sm:hidden w-full">
          {/* Top Bar: "Gallery" Title on Left, "<" and "Next >" Buttons on Right */}
          <div className="flex items-center justify-between pb-5 px-1">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Gallery
            </h2>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 rounded-xl bg-[#0c142c] border border-[#1e2d4e] flex items-center justify-center text-white/70 hover:text-white active:scale-95 transition-all cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="px-4 h-10 rounded-xl bg-[#0088ff] hover:bg-[#0077ee] active:scale-95 text-white font-semibold text-sm flex items-center gap-1.5 shadow-[0_4px_16px_rgba(0,136,255,0.4)] transition-all cursor-pointer"
                aria-label="Next photo"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
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
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 2. PC & DESKTOP / TABLET VIEWS (hidden sm:block) */}
        {/* Preserved completely unchanged with header, animations, and 4-column grid */}
        <div className="hidden sm:flex sm:flex-col sm:gap-8 w-full">
          {/* Desktop Minimal Header */}
          <ScrollHeading delay={0}>
            <div className="flex items-center justify-between pb-2 border-b border-primary/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_10px_#4cd7f6]"></span>
                <span className="font-label-caps text-xs text-on-surface uppercase tracking-widest font-semibold">
                  {t.gallery.title}
                </span>
              </div>
              <span className="font-tech-badge text-xs text-outline font-medium">
                08 ARCHIVE NODES
              </span>
            </div>
          </ScrollHeading>

          {/* Desktop 4-column grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
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
                      src={item.url}
                      loading="lazy"
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
