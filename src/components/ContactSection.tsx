import React, { useState } from 'react';
import { Mail, Globe, MapPin, Home, Send, CheckCircle2, Satellite } from 'lucide-react';
import { TELECOM_IMAGES } from '../data/telecomData';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        // keep submitted visible for a bit
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="w-full bg-[#0b1229] py-16 px-5 md:px-10 lg:px-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-tech-badge text-xs text-secondary tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4cd7f6]"></span>
            {t.contact.badge}
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface font-semibold">
            {t.contact.title}
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Direct Telecom Contact Card (Matching reference design) */}
          <div className="lg:col-span-5 flex flex-col gap-4 bg-[#0c142c] p-6 sm:p-7 rounded-[28px] border border-[#1e2d4e] shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
            {/* Profile Header */}
            <div className="flex items-center gap-4 pb-4 border-b border-[#1c2848]">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-[#050917] shrink-0 border border-[#2a3c68] shadow-md">
                <img
                  alt="Paban Nepali Profile"
                  className="w-full h-full object-cover"
                  src={TELECOM_IMAGES.contactAvatar}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-lg sm:text-xl text-white font-semibold">
                  {t.contact.profileName}
                </span>
                <span className="font-body-sm text-xs sm:text-sm text-[#4361ee] font-medium">
                  {t.contact.profileCompany}
                </span>
                <span className="font-mono text-xs sm:text-sm text-secondary font-medium">
                  {t.contact.profileRole}
                </span>
              </div>
            </div>

            {/* 4 Stacked Full-Width Information Cards */}
            <div className="flex flex-col gap-3.5">
              {/* 1. Official Email */}
              <a
                className="p-4 bg-[#050917] rounded-xl flex items-center gap-4 hover:bg-[#081028] transition-colors group border border-[#1c2848]"
                href="mailto:paban.nepali@ntc.net.np"
              >
                <div className="w-12 h-12 rounded-xl bg-[#141d38] flex items-center justify-center text-[#7ea1dd] group-hover:text-secondary transition-colors shrink-0 border border-[#1e2d4e]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#7a8ba8] tracking-[0.14em] uppercase font-semibold">
                    {t.contact.officialEmail}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-white group-hover:text-secondary transition-colors truncate">
                    paban.nepali@ntc.net.np
                  </span>
                </div>
              </a>

              {/* 2. Personal Portal */}
              <a
                className="p-4 bg-[#050917] rounded-xl flex items-center gap-4 hover:bg-[#081028] transition-colors group border border-[#1c2848]"
                href="https://www.pabannepali.com.np"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="w-12 h-12 rounded-xl bg-[#141d38] flex items-center justify-center text-[#7ea1dd] group-hover:text-secondary transition-colors shrink-0 border border-[#1e2d4e]">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#7a8ba8] tracking-[0.14em] uppercase font-semibold">
                    {t.contact.personalPortal}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-white group-hover:text-secondary transition-colors truncate">
                    www.pabannepali.com.np
                  </span>
                </div>
              </a>

              {/* 3. Home */}
              <div className="p-4 bg-[#050917] rounded-xl flex items-center gap-4 border border-[#1c2848]">
                <div className="w-12 h-12 rounded-xl bg-[#141d38] flex items-center justify-center text-secondary shrink-0 border border-[#1e2d4e]">
                  <Home className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#7a8ba8] tracking-[0.14em] uppercase font-semibold">
                    {t.contact.homeLabel || 'HOME'}
                  </span>
                  <span className="font-body-md text-xs sm:text-sm text-white font-medium truncate">
                    Gorkha, Nepal
                  </span>
                </div>
              </div>

              {/* 4. Work / Location */}
              <div className="p-4 bg-[#050917] rounded-xl flex items-center gap-4 border border-[#1c2848]">
                <div className="w-12 h-12 rounded-xl bg-[#141d38] flex items-center justify-center text-[#7ea1dd] shrink-0 border border-[#1e2d4e]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[10px] sm:text-[11px] text-[#7a8ba8] tracking-[0.14em] uppercase font-semibold">
                    {t.contact.workLabel || 'WORK / LOCATION'}
                  </span>
                  <span className="font-body-md text-xs sm:text-sm text-white font-medium truncate">
                    Palpa, Nepal
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Dispatch Transmission Console (Exact styling from user image) */}
          <div className="lg:col-span-7 bg-[#0c142c] p-6 sm:p-10 rounded-[28px] border border-[#1e2d4e] shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Row 1: Full Name & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label
                    className="font-mono text-[11px] sm:text-xs font-semibold text-[#8e9fc7] tracking-[0.16em] uppercase mb-2.5 block"
                    htmlFor="nameInput"
                  >
                    {t.contact.inputName}
                  </label>
                  <input
                    className="w-full px-4 sm:px-5 py-3.5 bg-[#050917] text-[#e8ecf8] placeholder:text-[#4f6186] font-body-sm text-sm sm:text-base rounded-xl border border-[#1c2848] focus:border-[#4361ee] focus:ring-1 focus:ring-[#4361ee] outline-none transition-all"
                    id="nameInput"
                    placeholder="Name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    className="font-mono text-[11px] sm:text-xs font-semibold text-[#8e9fc7] tracking-[0.16em] uppercase mb-2.5 block"
                    htmlFor="emailInput"
                  >
                    {t.contact.inputEmail}
                  </label>
                  <input
                    className="w-full px-4 sm:px-5 py-3.5 bg-[#050917] text-[#e8ecf8] placeholder:text-[#4f6186] font-body-sm text-sm sm:text-base rounded-xl border border-[#1c2848] focus:border-[#4361ee] focus:ring-1 focus:ring-[#4361ee] outline-none transition-all"
                    id="emailInput"
                    placeholder="name@ntc.net.np"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Row 2: Inquiry / Operational Dispatch Subject */}
              <div className="flex flex-col">
                <label
                  className="font-mono text-[11px] sm:text-xs font-semibold text-[#8e9fc7] tracking-[0.16em] uppercase mb-2.5 block"
                  htmlFor="subjectInput"
                >
                  {t.contact.inputSubject}
                </label>
                <input
                  className="w-full px-4 sm:px-5 py-3.5 bg-[#050917] text-[#e8ecf8] placeholder:text-[#4f6186] font-body-sm text-sm sm:text-base rounded-xl border border-[#1c2848] focus:border-[#4361ee] focus:ring-1 focus:ring-[#4361ee] outline-none transition-all"
                  id="subjectInput"
                  placeholder="Subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              {/* Row 3: Operational Brief or Technical Message */}
              <div className="flex flex-col">
                <label
                  className="font-mono text-[11px] sm:text-xs font-semibold text-[#8e9fc7] tracking-[0.16em] uppercase mb-2.5 block"
                  htmlFor="messageInput"
                >
                  {t.contact.inputMessage}
                </label>
                <textarea
                  className="w-full px-4 sm:px-5 py-3.5 bg-[#050917] text-[#e8ecf8] placeholder:text-[#4f6186] font-body-sm text-sm sm:text-base rounded-xl border border-[#1c2848] focus:border-[#4361ee] focus:ring-1 focus:ring-[#4361ee] outline-none transition-all min-h-[140px] resize-none"
                  id="messageInput"
                  placeholder="Message...."
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* Row 4: Transmit Message Button & Feedback */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="px-7 sm:px-8 py-3.5 bg-gradient-to-r from-[#415ef4] to-[#4e6bf8] hover:from-[#3753e8] hover:to-[#435fea] text-white font-body-md text-sm sm:text-base font-semibold rounded-xl sm:rounded-2xl shadow-[0_4px_24px_rgba(65,94,244,0.45)] hover:shadow-[0_6px_32px_rgba(65,94,244,0.65)] transition-all flex items-center gap-2.5 cursor-pointer disabled:opacity-50"
                >
                  <Satellite className={`w-4 h-4 sm:w-5 sm:h-5 text-white ${isSending ? 'animate-spin' : ''}`} />
                  {isSending ? t.contact.submitting : t.contact.submitButton}
                </button>

                {submitted && (
                  <div className="font-mono text-xs text-secondary flex items-center gap-2 bg-[#050917] px-4 py-2.5 rounded-xl border border-secondary/30 animate-pulse">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>{t.contact.successMessage}</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
