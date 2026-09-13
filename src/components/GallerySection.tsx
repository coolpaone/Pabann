import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/telecomData';
import { GalleryItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface GallerySectionProps {
  onSelectPhoto: (photo: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectPhoto }) => {
  const { t } = useLanguage();
  const [mobileIndex, setMobileIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const totalPhotos = GALLERY_ITEMS.length;
  const currentMobilePhoto = GALLERY_ITEMS[mobileIndex];

  const handleNext = () => {
    setSlideDirection(1);
    setMobileIndex((prev) => (prev + 1) % totalPhotos);
  };

  const handlePrev = () => {
    setSlideDirection(-1);
    setMobileIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchStartX.current - touchEndX;
    const deltaY = touchStartY.current - touchEndY;

    // Trigger horizontal swipe if horizontal motion exceeds 35px and is greater than vertical motion
    if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        // Swiped LEFT -> Go to next photo
        handleNext();
      } else {
        // Swiped RIGHT -> Go to previous photo
        handlePrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section id="gallery" className="w-full bg-[#060d24] py-14 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 w-full">
        {/* Clean Minimal Header */}
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

        {/* 1. MOBILE VERTICAL SWIPE GALLERY (sm:hidden) */}
        <div className="block sm:hidden w-full">
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative w-full h-[460px] rounded-2xl overflow-hidden bg-[#050917] border border-[#1e2d4e] shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col select-none touch-pan-x"
          >
            {/* Top Overlay: Counter Pill "COLUMNS 1 / 8" & Fullscreen Action */}
            <div className="absolute top-3 inset-x-3 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 bg-[#0c142c]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#1e2d4e] shadow-md pointer-events-auto">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_#4cd7f6]" />
                <span className="font-mono text-xs font-semibold text-white tracking-widest">
                  COLUMNS {mobileIndex + 1} / {totalPhotos}
                </span>
              </div>

              <button
                type="button"
                onClick={() => onSelectPhoto(currentMobilePhoto)}
                className="p-2 bg-[#0c142c]/90 backdrop-blur-md rounded-full border border-[#1e2d4e] text-white hover:text-secondary pointer-events-auto shadow-md transition-colors"
                aria-label="Open fullscreen photo"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Horizontal Animated Image Viewport */}
            <div
              className="relative w-full h-full flex items-center justify-center cursor-pointer overflow-hidden"
              onClick={() => onSelectPhoto(currentMobilePhoto)}
            >
              <AnimatePresence initial={false} custom={slideDirection}>
                <motion.div
                  key={currentMobilePhoto.id}
                  custom={slideDirection}
                  initial={{
                    x: slideDirection > 0 ? 100 : -100,
                    opacity: 0,
                    scale: 0.96,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
                  }}
                  exit={{
                    x: slideDirection > 0 ? -100 : 100,
                    opacity: 0,
                    scale: 0.96,
                    transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={currentMobilePhoto.url}
                    alt={currentMobilePhoto.alt}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050917]/90 via-transparent to-[#050917]/40 pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Left/Right Horizontal Navigation Arrows */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#0c142c]/85 backdrop-blur-md border border-[#1e2d4e] text-white hover:text-secondary active:scale-95 flex items-center justify-center shadow-lg transition-all"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#0c142c]/85 backdrop-blur-md border border-[#1e2d4e] text-white hover:text-secondary active:scale-95 flex items-center justify-center shadow-lg transition-all"
              aria-label="Next photo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Bottom Caption Bar and Horizontal Dots */}
            <div className="absolute bottom-0 inset-x-0 z-20 p-4 bg-gradient-to-t from-[#050917] via-[#050917]/85 to-transparent flex flex-col gap-2 pointer-events-none">
              <div className="flex items-center justify-between">
                <span className="font-body-sm text-xs text-white/90 line-clamp-1 font-medium">
                  {currentMobilePhoto.alt}
                </span>
                <span className="font-mono text-[10px] text-secondary tracking-wider uppercase shrink-0 pl-2">
                  ⇄ SWIPE
                </span>
              </div>

              {/* 8-Node Horizontal Indicator Dots */}
              <div className="flex items-center justify-center gap-1.5 pt-1 pointer-events-auto">
                {GALLERY_ITEMS.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSlideDirection(idx > mobileIndex ? 1 : -1);
                      setMobileIndex(idx);
                    }}
                    className={`transition-all rounded-full ${
                      idx === mobileIndex
                        ? 'w-4 h-1.5 bg-secondary shadow-[0_0_6px_#4cd7f6]'
                        : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Go to photo ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. PC & DESKTOP / TABLET VIEWS (hidden sm:grid) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {GALLERY_ITEMS.map((item, index) => {
            const isCyanHover = index % 2 === 1;

            return (
              <div
                key={item.id}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
