import React, { useState } from 'react';
import { Mail, Globe, MapPin, Home, Send, CheckCircle2, Satellite } from 'lucide-react';
import { TELECOM_IMAGES } from '../data/telecomData';

export const ContactSection: React.FC = () => {
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
            DIRECT CARRIER COMMUNICATION
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface font-semibold">
            Initiate Contact &amp; Inquiry
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
            Available for telecommunication consulting, regional optical network deployments, BTS
            site supervision, and critical transmission support across Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Direct Telecom Contact Card */}
          <div className="lg:col-span-5 flex flex-col gap-5 bg-surface-container-low p-6 sm:p-8 rounded-2xl border border-primary/20 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-4 pb-3 border-b border-outline/15">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-surface-container shrink-0 border border-primary/30 shadow-md">
                <img
                  alt="Paban Nepali Profile"
                  className="w-full h-full object-cover"
                  src={TELECOM_IMAGES.contactAvatar}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-lg text-on-surface font-semibold">
                  Paban Nepali
                </span>
                <span className="font-body-sm text-xs text-primary font-medium">
                  Nepal Telecom
                </span>
                <span className="font-tech-badge text-xs text-secondary font-medium">
                  Telecom Technician
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {/* Email */}
              <a
                className="p-4 bg-surface-container rounded-xl flex items-center gap-4 hover:bg-surface-bright transition-colors group border border-outline/10"
                href="mailto:paban.nepali@ntc.net.np"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary group-hover:text-secondary transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-caps text-[10px] text-outline uppercase font-semibold">
                    Official Email
                  </span>
                  <span className="font-tech-badge text-xs text-on-surface group-hover:text-secondary transition-colors truncate">
                    paban.nepali@ntc.net.np
                  </span>
                </div>
              </a>

              {/* Website */}
              <a
                className="p-4 bg-surface-container rounded-xl flex items-center gap-4 hover:bg-surface-bright transition-colors group border border-outline/10"
                href="https://www.pabannepali.com.np"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary group-hover:text-secondary transition-colors shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-caps text-[10px] text-outline uppercase font-semibold">
                    Personal Portal
                  </span>
                  <span className="font-tech-badge text-xs text-on-surface group-hover:text-secondary transition-colors truncate">
                    www.pabannepali.com.np
                  </span>
                </div>
              </a>

              {/* Home */}
              <div className="p-4 bg-surface-container rounded-xl flex items-center gap-4 border border-outline/10">
                <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-secondary shrink-0">
                  <Home className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-caps text-[10px] text-outline uppercase font-semibold">
                    Home
                  </span>
                  <span className="font-body-md text-sm text-on-surface truncate">
                    Gorkha, Nepal
                  </span>
                </div>
              </div>

              {/* Current Address */}
              <div className="p-4 bg-surface-container rounded-xl flex items-center gap-4 border border-outline/10">
                <div className="w-10 h-10 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-caps text-[10px] text-outline uppercase font-semibold">
                    Current Address
                  </span>
                  <span className="font-body-md text-sm text-on-surface truncate">
                    Palpa, Nepal
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Fast Transmission Inquiry Form */}
          <div className="lg:col-span-7 bg-surface-container-low p-6 sm:p-8 rounded-2xl border border-primary/20 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-caps text-xs text-on-surface-variant uppercase font-semibold"
                    htmlFor="nameInput"
                  >
                    Full Name / Organization
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-[#060d24] text-on-surface placeholder:text-outline font-body-sm text-sm rounded-xl border border-outline/25 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    id="nameInput"
                    placeholder="e.g. NTC Engineering Dept."
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-caps text-xs text-on-surface-variant uppercase font-semibold"
                    htmlFor="emailInput"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full px-4 py-3 bg-[#060d24] text-on-surface placeholder:text-outline font-body-sm text-sm rounded-xl border border-outline/25 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    id="emailInput"
                    placeholder="name@telecom.np"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-caps text-xs text-on-surface-variant uppercase font-semibold"
                  htmlFor="subjectInput"
                >
                  Subject / Project Category
                </label>
                <input
                  className="w-full px-4 py-3 bg-[#060d24] text-on-surface placeholder:text-outline font-body-sm text-sm rounded-xl border border-outline/25 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  id="subjectInput"
                  placeholder="Fiber Backbone Maintenance / BTS Site Supervision"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-caps text-xs text-on-surface-variant uppercase font-semibold"
                  htmlFor="messageInput"
                >
                  Transmission Message
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-[#060d24] text-on-surface placeholder:text-outline font-body-sm text-sm rounded-xl border border-outline/25 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none"
                  id="messageInput"
                  placeholder="Provide project telemetry, scope of optical maintenance, location details..."
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="px-6 py-3 bg-primary-container hover:bg-secondary text-white font-body-md text-sm sm:text-base font-semibold rounded-xl shadow-[0_0_24px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(76,215,246,0.6)] transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Satellite className={`w-4 h-4 ${isSending ? 'animate-spin' : ''}`} />
                  {isSending ? 'Transmitting...' : 'Transmit Message'}
                </button>

                {submitted && (
                  <div className="font-tech-badge text-xs text-secondary flex items-center gap-2 bg-secondary/10 px-3 py-1.5 rounded-lg border border-secondary/30">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    TELEMETRY SENT SUCCESSFULLY
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
