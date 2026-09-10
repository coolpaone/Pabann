import React from 'react';
import { GALLERY_ITEMS } from '../data/telecomData';
import { GalleryItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface GallerySectionProps {
  onSelectPhoto: (photo: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectPhoto }) => {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="w-full bg-[#060d24] py-14 sm:py-16 px-0 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 w-full">
        {/* Clean Minimal Header */}
        <div className="px-4 sm:px-0 flex items-center justify-between pb-2 border-b border-primary/10">
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

        {/* RESPONSIVE GALLERY: 4/2-column grid on desktop/tablet, full-width single-column vertical stack on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
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
                className={`relative group w-full aspect-[4/3] sm:aspect-[3/4] rounded-none sm:rounded-2xl overflow-hidden bg-surface-container shadow-md transition-all duration-500 cursor-pointer border-y sm:border border-primary/10 ${
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
