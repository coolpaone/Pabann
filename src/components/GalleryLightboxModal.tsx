import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/telecomData';

interface GalleryLightboxModalProps {
  selectedPhoto: GalleryItem | null;
  onClose: () => void;
  onSelectPhoto: (photo: GalleryItem) => void;
}

export const GalleryLightboxModal: React.FC<GalleryLightboxModalProps> = ({
  selectedPhoto,
  onClose,
  onSelectPhoto,
}) => {
  useEffect(() => {
    if (!selectedPhoto) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  if (!selectedPhoto) return null;

  const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedPhoto.id);

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    onSelectPhoto(GALLERY_ITEMS[prevIdx]);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % GALLERY_ITEMS.length;
    onSelectPhoto(GALLERY_ITEMS[nextIdx]);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="w-full flex items-center justify-between pb-3 text-white font-tech-badge text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
            <span className="text-secondary tracking-widest font-semibold">
              FIELD ARCHIVE NODE {String(selectedPhoto.id).padStart(2, '0')} / 08
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={selectedPhoto.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-lg text-on-surface-variant hover:text-white transition-colors"
              title="Open full-resolution image"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg text-on-surface-variant hover:text-white transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Image Frame */}
        <div className="relative w-full max-h-[80vh] flex items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-surface-container-lowest shadow-2xl">
          <img
            src={selectedPhoto.url}
            alt={selectedPhoto.alt}
            className="max-h-[78vh] w-auto object-contain rounded-xl select-none"
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#060d24]/80 text-white hover:bg-secondary hover:text-black transition-all border border-outline/20 cursor-pointer shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#060d24]/80 text-white hover:bg-secondary hover:text-black transition-all border border-outline/20 cursor-pointer shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div className="w-full flex items-center justify-center gap-2 pt-4 overflow-x-auto">
          {GALLERY_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectPhoto(item)}
              className={`w-12 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                item.id === selectedPhoto.id
                  ? 'border-secondary scale-110 shadow-[0_0_10px_#4cd7f6]'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={item.url} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
