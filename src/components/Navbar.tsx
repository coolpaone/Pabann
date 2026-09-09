import React, { useState } from 'react';
import { Menu, X, Radio, ArrowRight } from 'lucide-react';
import { TELECOM_IMAGES } from '../data/telecomData';
import { NepalFlag } from './NepalFlag';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#060d24]/90 backdrop-blur-xl border-b border-primary/10 shadow-[0_1px_12px_rgba(0,0,0,0.5)]">
      <div className="h-20 w-full px-5 md:px-10 lg:px-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => handleNavClick('about')}
            className="group flex flex-col justify-center text-left focus:outline-none cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <NepalFlag size="sm" />
              <span className="font-headline-sm text-lg md:text-xl font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors">
                PABAN NEPALI
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-body-sm text-sm tracking-wide transition-all cursor-pointer relative py-1 ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full shadow-[0_0_8px_#4cd7f6]"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          <div
            className="flex items-center pl-1 group"
            title="Paban Nepali - Telecom Profile"
          >
            <img
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-primary-container/60 group-hover:ring-secondary transition-all"
              src={TELECOM_IMAGES.headerAvatar}
            />
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-on-surface-variant hover:text-white rounded-lg hover:bg-surface-container"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#060d24]/98 border-b border-primary/20 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-left py-2 px-3 rounded-lg font-body-sm text-sm transition-colors flex items-center justify-between ${
                activeSection === link.id
                  ? 'bg-primary-container/20 text-secondary font-semibold'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-white'
              }`}
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 opacity-60" />
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
