import React, { useState } from 'react';
import { Mail, Globe, MapPin, Home, Send, CheckCircle2, Satellite, AlertCircle } from 'lucide-react';
import { TELECOM_IMAGES } from '../../data/telecomData';
import { useLanguage } from '../../context/LanguageContext';
import { ScrollHeading, ScrollParagraph, ScrollImage, ScrollCard } from './ScrollReveal';

export const ContactSectionPrototype: React.FC = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim() || isSending) {
      return;
    }

    setIsSending(true);
    setErrorMessage(null);
    setSubmitted(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.error || t.contact.errorMessage);
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '', hp: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 7000);
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setErrorMessage(err.message || t.contact.errorMessage);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-[#0b1229] py-16 px-5 md:px-10 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <ScrollHeading delay={0}>
            <span className="font-tech-badge text-xs text-secondary tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4cd7f6]"></span>
              {t.contact.badge}
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface font-semibold pt-1">
              {t.contact.title}
            </h2>
          </ScrollHeading>
          <ScrollParagraph delay={0.1}>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
              {t.contact.subtitle}
            </p>
          </ScrollParagraph>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Direct Telecom Contact Card (Matching reference design) */}
          <div className="lg:col-span-5">
            <ScrollImage direction="left" delay={0.2}>
              <div className="flex flex-col gap-4 bg-[#0c142c] p-6 sm:p-7 rounded-[28px] border border-[#1e2d4e] shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
                {/* Profile Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-[#1c2848]">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-[#050917] shrink-0 border border-[#2a3c68] shadow-md">
                    <img
                      alt="Paban Nepali Profile"
                      className="w-full h-full object-cover"
                      src={TELECOM_IMAGES.contactAvatar}
                    />
                  </div>
                  <div className="flex flex-col gap-1 justify-center">
                    <span className="font-headline-sm text-xl sm:text-2xl text-white font-bold tracking-tight leading-none">
                      {t.contact.profileName}
                    </span>
                    <div className="flex items-center gap-2 pt-0.5">
                      <span className="font-body-md text-sm sm:text-base text-[#60a5fa] font-semibold tracking-wide">
                        {t.contact.profileCompany}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#475569]"></span>
                      <span className="font-tech-badge text-[11px] sm:text-xs text-[#38bdf8] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#0369a1]/20 border border-[#0284c7]/30">
                        {t.contact.profileRole}
                      </span>
                    </div>
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
            </ScrollImage>
          </div>

          {/* Right: Carrier Dispatch / Contact Form (Pushes upward and scales 0.94 → 1.0 with 250ms delay) */}
          <div className="lg:col-span-7">
            <ScrollCard index={0} delay={0.25}>
              <div className="p-6 sm:p-10 bg-[#0c142c] rounded-[28px] border border-[#1e2d4e] shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <button
                      disabled={isSending}
                      type="submit"
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

                    {errorMessage && (
                      <div className="font-mono text-xs text-[#ff6b6b] flex items-center gap-2 bg-[#190a14] px-4 py-2.5 rounded-xl border border-[#ff6b6b]/40">
                        <AlertCircle className="w-4 h-4 text-[#ff6b6b] shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </ScrollCard>
          </div>
        </div>
      </div>
    </section>
  );
};
