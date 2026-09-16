import React, { useState } from 'react';
import { Mail, Globe, MapPin, Home, Send, CheckCircle2, Satellite, AlertCircle, ExternalLink } from 'lucide-react';
import { TELECOM_IMAGES } from '../data/telecomData';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    hp: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [avatarSrc, setAvatarSrc] = useState(TELECOM_IMAGES.contactAvatar);

  const handleAvatarError = () => {
    if (avatarSrc.startsWith('/assets/paban_profile.jpg')) {
      setAvatarSrc('/assets/Paban%20profile.jpg?v=3');
    } else if (avatarSrc.startsWith('/assets/Paban')) {
      setAvatarSrc('/assets/paban_logo.png?v=2');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    const targetEmail = 'paban.nepali@ntc.net.np';
    const emailSubject = formData.subject.trim()
      ? formData.subject.trim()
      : `Message from ${formData.name.trim()}`;

    const emailBody = `Sender Name: ${formData.name.trim()}
Sender Email: ${formData.email.trim()}
Subject: ${formData.subject.trim() || 'Network Communication'}

Message:
${formData.message.trim()}`;

    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Directly dispatch to user email client
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setErrorMessage(null);
    setFormData({ name: '', email: '', subject: '', message: '', hp: '' });
    setTimeout(() => {
      setSubmitted(false);
    }, 7000);
  };

  const handleOpenMailApp = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const targetEmail = 'paban.nepali@ntc.net.np';
    window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent('Technical Inquiry / Network Communication')}`;
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left: Direct Telecom Contact Card (Matching reference design) */}
          <div className="w-full h-full">
            <div className="h-full flex flex-col justify-between bg-[#070e24] p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-[#1b294b] shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
              {/* Profile Header */}
              <div className="flex items-center gap-3.5 sm:gap-4 pb-4 border-b border-[#182647]">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-[#050917] shrink-0 border border-[#23355d] shadow-md">
                  <img
                    alt="Paban Nepali Profile"
                    className="w-full h-full object-cover"
                    src={avatarSrc}
                    onError={handleAvatarError}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col gap-0.5 justify-center min-w-0">
                  <span className="font-headline-sm text-xl sm:text-2xl text-white font-bold tracking-tight leading-tight truncate">
                    {t.contact.profileName}
                  </span>
                  <div className="flex items-center flex-wrap gap-2 pt-0.5">
                    <span className="font-body-md text-sm sm:text-base text-[#60a5fa] font-semibold tracking-wide">
                      {t.contact.profileCompany}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#475569]"></span>
                    <span className="font-tech-badge text-[10px] sm:text-[11px] text-[#38bdf8] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md bg-[#0369a1]/20 border border-[#0284c7]/30">
                      {t.contact.profileRole}
                    </span>
                  </div>
                </div>
              </div>

              {/* 4 Stacked Full-Width Information Cards */}
              <div className="flex flex-col gap-3 sm:gap-3.5 pt-4">
                {/* 1. Official Email - Direct Email card matching reference example */}
                <div
                  id="contact-section-official-email-card"
                  onClick={() => handleOpenMailApp()}
                  className="p-3.5 sm:p-4 bg-[#050c1e] rounded-xl sm:rounded-2xl border border-[#192748] hover:bg-[#08122d] flex items-center justify-between gap-3 sm:gap-4 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0d1836] flex items-center justify-center text-[#8cb4e6] group-hover:text-[#38bdf8] transition-colors shrink-0 border border-[#1d2c4e]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-mono text-[10px] sm:text-[11px] text-[#8cb4e6] tracking-[0.14em] uppercase font-semibold flex items-center gap-1.5">
                        DIRECT EMAIL
                        <ExternalLink className="w-3.5 h-3.5 text-[#8cb4e6]" />
                      </span>
                      <span className="font-mono text-xs sm:text-sm text-white group-hover:text-[#38bdf8] transition-colors truncate">
                        Send Email
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenMailApp();
                    }}
                    className="px-4 sm:px-5 py-2 sm:py-2.5 bg-[#0091ff] hover:bg-[#007fe6] active:scale-95 text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer shrink-0"
                  >
                    <Mail className="w-4 h-4 text-white" />
                    <span>Send</span>
                  </button>
                </div>

                {/* 2. Personal Portal */}
                <a
                  className="p-3.5 sm:p-4 bg-[#050c1e] rounded-xl sm:rounded-2xl flex items-center gap-3.5 sm:gap-4 hover:bg-[#08122d] transition-colors group border border-[#192748]"
                  href="https://www.pabannepali.com.np"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0d1836] flex items-center justify-center text-[#8cb4e6] group-hover:text-[#38bdf8] transition-colors shrink-0 border border-[#1d2c4e]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[10px] sm:text-[11px] text-[#8cb4e6] tracking-[0.14em] uppercase font-semibold">
                      {t.contact.personalPortal}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-white group-hover:text-[#38bdf8] transition-colors truncate">
                      www.pabannepali.com.np
                    </span>
                  </div>
                </a>

                {/* 3. Home */}
                <div className="p-3.5 sm:p-4 bg-[#050c1e] rounded-xl sm:rounded-2xl flex items-center gap-3.5 sm:gap-4 border border-[#192748]">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0d1836] flex items-center justify-center text-[#8cb4e6] shrink-0 border border-[#1d2c4e]">
                    <Home className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[10px] sm:text-[11px] text-[#8cb4e6] tracking-[0.14em] uppercase font-semibold">
                      {t.contact.homeLabel || 'HOME ADDRESS'}
                    </span>
                    <span className="font-body-md text-xs sm:text-sm text-white font-medium truncate">
                      Gorkha, Nepal
                    </span>
                  </div>
                </div>

                {/* 4. Work / Location */}
                <div className="p-3.5 sm:p-4 bg-[#050c1e] rounded-xl sm:rounded-2xl flex items-center gap-3.5 sm:gap-4 border border-[#192748]">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0d1836] flex items-center justify-center text-[#8cb4e6] shrink-0 border border-[#1d2c4e]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[10px] sm:text-[11px] text-[#8cb4e6] tracking-[0.14em] uppercase font-semibold">
                      {t.contact.workLabel || 'CURRENT RESIDENCE'}
                    </span>
                    <span className="font-body-md text-xs sm:text-sm text-white font-medium truncate">
                      Palpa, Nepal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Dispatch Transmission Console (Exact styling from user image) */}
          <div className="w-full h-full">
            <div className="h-full flex flex-col justify-between bg-[#070e24] p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl border border-[#1b294b] shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
              <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between gap-4 sm:gap-5">
                {/* Row 1: Full Name & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col">
                    <label
                      className="font-mono text-[11px] sm:text-xs font-semibold text-[#8cb4e6] tracking-[0.14em] uppercase mb-2 block"
                      htmlFor="nameInput"
                    >
                      {t.contact.inputName}
                    </label>
                    <input
                      className="w-full px-4 py-3 bg-[#040817] text-[#e8ecf8] placeholder:text-[#3e5073] font-body-sm text-sm sm:text-base rounded-xl border border-[#192748] focus:border-[#0091ff] focus:ring-1 focus:ring-[#0091ff] outline-none transition-all"
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
                      className="font-mono text-[11px] sm:text-xs font-semibold text-[#8cb4e6] tracking-[0.14em] uppercase mb-2 block"
                      htmlFor="emailInput"
                    >
                      {t.contact.inputEmail}
                    </label>
                    <input
                      className="w-full px-4 py-3 bg-[#040817] text-[#e8ecf8] placeholder:text-[#3e5073] font-body-sm text-sm sm:text-base rounded-xl border border-[#192748] focus:border-[#0091ff] focus:ring-1 focus:ring-[#0091ff] outline-none transition-all"
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
                    className="font-mono text-[11px] sm:text-xs font-semibold text-[#8cb4e6] tracking-[0.14em] uppercase mb-2 block"
                    htmlFor="subjectInput"
                  >
                    {t.contact.inputSubject}
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-[#040817] text-[#e8ecf8] placeholder:text-[#3e5073] font-body-sm text-sm sm:text-base rounded-xl border border-[#192748] focus:border-[#0091ff] focus:ring-1 focus:ring-[#0091ff] outline-none transition-all"
                    id="subjectInput"
                    placeholder="Subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                {/* Row 3: Operational Brief or Technical Message */}
                <div className="flex flex-col flex-1 min-h-[140px]">
                  <label
                    className="font-mono text-[11px] sm:text-xs font-semibold text-[#8cb4e6] tracking-[0.14em] uppercase mb-2 block"
                    htmlFor="messageInput"
                  >
                    {t.contact.inputMessage}
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-[#040817] text-[#e8ecf8] placeholder:text-[#3e5073] font-body-sm text-sm sm:text-base rounded-xl border border-[#192748] focus:border-[#0091ff] focus:ring-1 focus:ring-[#0091ff] outline-none transition-all resize-none flex-1 min-h-[130px]"
                    id="messageInput"
                    placeholder="Message...."
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Anti-spam honeypot (hidden from human visitors) */}
                <input
                  type="text"
                  name="_trap_field"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.hp}
                  onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Row 4: Transmit Message Button & Feedback */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="px-6 sm:px-7 py-3 bg-[#5468ff] hover:bg-[#4559f5] active:scale-95 text-white font-body-md text-sm sm:text-base font-semibold rounded-xl shadow-[0_4px_24px_rgba(84,104,255,0.4)] hover:shadow-[0_6px_30px_rgba(84,104,255,0.6)] transition-all flex items-center gap-2.5 cursor-pointer disabled:opacity-50"
                  >
                    <Satellite className={`w-4 h-4 sm:w-5 sm:h-5 text-white ${isSending ? 'animate-spin' : ''}`} />
                    {isSending ? t.contact.submitting : t.contact.submitButton}
                  </button>

                  {submitted && (
                    <div className="font-mono text-xs text-secondary flex items-center gap-2 bg-[#050917] px-3.5 py-2 rounded-xl border border-secondary/30 animate-pulse">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>{t.contact.successMessage}</span>
                    </div>
                  )}

                  {errorMessage && (
                    <div className="font-mono text-xs text-[#ff6b6b] flex items-center gap-2 bg-[#190a14] px-3.5 py-2 rounded-xl border border-[#ff6b6b]/40">
                      <AlertCircle className="w-4 h-4 text-[#ff6b6b] shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
