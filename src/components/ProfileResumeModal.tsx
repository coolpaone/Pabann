import React from 'react';
import { X, Download, Printer, CheckCircle2, Award, Briefcase, Cpu, MapPin, Mail, Phone, Globe } from 'lucide-react';
import { TELECOM_IMAGES, CAREER_EXPERIENCES, SKILL_CATEGORIES } from '../data/telecomData';
import { NepalFlag } from './NepalFlag';

interface ProfileResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileResumeModal: React.FC<ProfileResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text/markdown dossier or trigger print dialog
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#0b1229] border border-primary/25 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#060d24] border-b border-primary/20 shrink-0">
          <div className="flex items-center gap-2 font-tech-badge text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_#4cd7f6]"></span>
            <span className="text-secondary font-semibold tracking-wider">
              CARRIER TECHNICAL DOSSIER // CURRICULUM VITAE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-bright text-xs text-on-surface font-body-sm flex items-center gap-1.5 transition-colors cursor-pointer border border-outline/20"
              title="Print Dossier"
            >
              <Printer className="w-3.5 h-3.5 text-secondary" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-lg bg-primary-container hover:bg-secondary text-white hover:text-black text-xs font-semibold font-body-sm flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-on-surface-variant hover:text-white rounded-lg hover:bg-surface-container transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Dossier Content */}
        <div className="p-6 md:p-10 overflow-y-auto flex flex-col gap-8 text-on-surface">
          {/* Header Block */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-outline/20">
            <div className="flex items-center gap-5">
              <img
                src={TELECOM_IMAGES.headerAvatar}
                alt="Paban Nepali"
                className="w-20 h-20 rounded-2xl object-cover ring-2 ring-secondary/50 shadow-lg shrink-0"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h1 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
                    Paban Nepali
                  </h1>
                  <NepalFlag size="sm" />
                </div>
                <p className="font-body-md text-sm md:text-base text-secondary font-medium">
                  Professional Telecommunications Technician
                </p>
                <span className="font-tech-badge text-xs text-outline pt-0.5">
                  Nepal Telecom Core Infrastructure Division
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-xs font-body-sm text-on-surface-variant md:text-right">
              <div className="flex items-center md:justify-end gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Home: Gorkha, Nepal | Current: Palpa, Nepal</span>
              </div>
              <div className="flex items-center md:justify-end gap-2">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>paban.nepali@ntc.net.np</span>
              </div>
              <div className="flex items-center md:justify-end gap-2">
                <Globe className="w-3.5 h-3.5 text-secondary" />
                <span>www.pabannepali.com.np</span>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="flex flex-col gap-2">
            <h2 className="font-label-caps text-xs text-secondary uppercase font-semibold tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-secondary" />
              Executive Profile &amp; Core Capability
            </h2>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
              Highly disciplined Telecommunications Technician with 5+ years of verified field
              operations excellence across Nepal Telecom and leading ISPs. Expert in carrier-grade
              optical fiber splicing, DWDM/GPON network distribution, OTDR diagnostics, microwave
              transmission backhaul, and high-altitude mountain node installations. Recognized for
              maintaining 99.9% mission-critical SLA uptime in high-stakes environments.
            </p>
          </div>

          {/* Work Experience */}
          <div className="flex flex-col gap-4">
            <h2 className="font-label-caps text-xs text-secondary uppercase font-semibold tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-secondary" />
              Professional Experience
            </h2>
            <div className="flex flex-col gap-5">
              {CAREER_EXPERIENCES.map((exp) => (
                <div key={exp.id} className="flex flex-col gap-2 bg-[#060d24] p-4 rounded-xl border border-primary/10">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="font-headline-sm text-base text-white font-semibold">{exp.role}</h3>
                      <p className="font-body-sm text-xs text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="font-tech-badge text-xs text-secondary bg-surface-container px-2.5 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1 pt-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-on-surface-variant font-body-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Credentials & Hardware Matrix */}
          <div className="flex flex-col gap-4">
            <h2 className="font-label-caps text-xs text-secondary uppercase font-semibold tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-secondary" />
              Optical &amp; Hardware Tool Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="bg-[#060d24] p-4 rounded-xl border border-primary/10 flex flex-col gap-2">
                  <h3 className="font-headline-sm text-sm text-white font-semibold">{cat.title}</h3>
                  <div className="flex flex-col gap-1.5 text-xs">
                    {cat.skills.map((s, idx) => (
                      <div key={idx} className="flex justify-between text-on-surface-variant font-tech-badge">
                        <span>{s.name}</span>
                        <span className="text-secondary font-semibold">{s.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer certification badge */}
          <div className="p-4 bg-surface-container-high rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs font-tech-badge border border-secondary/20">
            <span className="text-secondary">CERTIFIED BY NEPAL TELECOM TRAINING CENTER</span>
            <span className="text-outline">REGISTRATION: NTC-ENG-8492</span>
          </div>
        </div>
      </div>
    </div>
  );
};
