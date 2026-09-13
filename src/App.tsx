/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTopMobile } from './components/BackToTopMobile';
import { GalleryLightboxModal } from './components/GalleryLightboxModal';
import { ProfileResumeModal } from './components/ProfileResumeModal';
import { GalleryItem } from './types';
import { LanguageProvider } from './context/LanguageContext';
import { ScrollPhysicsProvider } from './components/motion/ScrollPhysicsContext';
import { HeroSectionPrototype } from './components/motion/HeroSectionPrototype';
import { ExperienceSectionPrototype } from './components/motion/ExperienceSectionPrototype';
import { GallerySectionPrototype } from './components/motion/GallerySectionPrototype';
import { ExpertiseSectionPrototype } from './components/motion/ExpertiseSectionPrototype';
import { ContactSectionPrototype } from './components/motion/ContactSectionPrototype';

function PortfolioContent() {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll listener to update active navigation item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'gallery', 'experience', 'expertise', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1229] text-[#dce1ff] font-body-md flex flex-col selection:bg-primary-container selection:text-white">
      {/* Top Fixed Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 bg-[#0b1229] flex-1">
        <div className="flex flex-col w-full">
          {/* Hero Section / Summary Profile with Fiber Optics Transport Banner */}
          <HeroSectionPrototype
            onContactClick={() => handleNavigate('contact')}
            onOpenResume={() => setResumeModalOpen(true)}
          />

          {/* Field & Professional Photo Gallery */}
          <GallerySectionPrototype onSelectPhoto={(photo) => setSelectedPhoto(photo)} />

          {/* Career Experience & Deployment Milestones */}
          <ExperienceSectionPrototype />

          {/* Technical Skills & Core Competencies */}
          <ExpertiseSectionPrototype />

          {/* Contact & Direct Carrier Communication */}
          <ContactSectionPrototype />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile-Only Go to Top Floating Button */}
      <BackToTopMobile />

      {/* Photo Lightbox Modal */}
      <GalleryLightboxModal
        selectedPhoto={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
      />

      {/* Printable / Downloadable Carrier Dossier Modal */}
      <ProfileResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ScrollPhysicsProvider>
        <PortfolioContent />
      </ScrollPhysicsProvider>
    </LanguageProvider>
  );
}
