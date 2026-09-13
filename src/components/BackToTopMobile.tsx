import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTopMobile: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user has scrolled down past 260px
      if (window.scrollY > 260) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Mobile version only: md:hidden ensures it strictly renders on mobile screens
  return (
    <div
      className={`fixed bottom-6 right-5 z-40 md:hidden transition-all duration-300 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        id="mobile-back-to-top-btn"
        onClick={scrollToTop}
        type="button"
        aria-label="Go to top of page"
        title="Go to top"
        className="w-12 h-12 rounded-full bg-[#07112d]/90 backdrop-blur-md border border-cyan-400/60 text-cyan-200 shadow-[0_0_24px_rgba(76,215,246,0.45)] hover:shadow-[0_0_32px_rgba(76,215,246,0.7)] active:scale-90 transition-all flex items-center justify-center cursor-pointer group"
      >
        <ArrowUp className="w-5 h-5 text-cyan-300 group-hover:-translate-y-0.5 group-active:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
};
