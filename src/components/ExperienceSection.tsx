import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { NepalTelecomLogo, ClassicTechLogo } from './CompanyLogos';
import { useLanguage } from '../context/LanguageContext';

export const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      id: 'ntc-technician',
      role: t.experience.ntcRole,
      company: t.experience.ntcCompany,
      period: `2024 - ${t.experience.present}`,
      roleType: t.experience.fullTimeRole,
      location: 'Palpa, Nepal',
      companyUrl: 'https://ntc.net.np',
      summary: t.experience.ntcSummary,
      highlights: t.experience.ntcHighlights,
    },
    {
      id: 'classic-tech',
      role: t.experience.classicRole,
      company: t.experience.classicCompany,
      period: '2023 - 2024',
      roleType: t.experience.broadbandRole,
      location: 'Kathmandu, Nepal',
      highlights: t.experience.classicHighlights,
    },
    {
      id: 'ntc-intern',
      role: t.experience.assistantRole,
      company: t.experience.assistantCompany,
      period: '2020 - 2023',
      roleType: t.experience.fieldOpsRole,
      location: 'Kathmandu, Nepal',
      highlights: t.experience.assistantHighlights,
    },
  ];

  return (
    <section id="experience" className="w-full bg-[#060d24] py-16 px-5 md:px-10 lg:px-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-tech-badge text-xs text-secondary tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4cd7f6]"></span>
            {t.experience.badge}
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface font-semibold">
            {t.experience.title}
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
            {t.experience.subtitle}
          </p>
        </div>

        {/* High-tech Connected Timeline */}
        <div className="relative flex flex-col gap-8 pl-6 sm:pl-10 before:absolute before:left-3 sm:before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-secondary before:via-primary before:to-[#323851]">
          {experiences.map((exp, index) => {
            const isFirst = index === 0;
            const isSecond = index === 1;

            return (
              <div
                key={exp.id}
                className="relative flex flex-col gap-3.5 bg-surface-container-low/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-primary/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-secondary/30 transition-all group"
              >
                {/* Node Marker on vertical line */}
                <div className="absolute -left-9 sm:-left-12 top-7 w-7 h-7 rounded-full bg-[#060d24] flex items-center justify-center border border-primary/20">
                  <span
                    className={`w-3.5 h-3.5 rounded-full ${
                      isFirst
                        ? 'bg-secondary shadow-[0_0_12px_#4cd7f6] animate-pulse'
                        : isSecond
                        ? 'bg-primary shadow-[0_0_8px_#2563eb]'
                        : 'bg-outline-variant'
                    }`}
                  ></span>
                </div>

                {/* Top Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-3 py-1 font-tech-badge text-xs rounded-md ${
                        isFirst
                          ? 'bg-secondary/10 text-secondary border border-secondary/20'
                          : 'bg-surface-bright text-on-surface'
                      }`}
                    >
                      {exp.period}
                    </span>
                    <span
                      className={`px-3 py-1 font-tech-badge text-xs rounded-md ${
                        isFirst
                          ? 'bg-primary-container/20 text-primary border border-primary/20'
                          : 'bg-surface-container text-on-surface-variant'
                      }`}
                    >
                      {exp.roleType}
                    </span>
                  </div>

                  {exp.companyUrl ? (
                    <a
                      className="font-tech-badge text-xs text-secondary hover:underline flex items-center gap-1.5 transition-colors"
                      href={exp.companyUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>{exp.companyUrl.replace('https://', '')}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="font-tech-badge text-xs text-secondary/90 bg-secondary/10 px-2.5 py-1 rounded-md border border-secondary/20">
                      {exp.location}
                    </span>
                  )}
                </div>

                {/* Role and Company with Official Carrier Logos */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <h3 className="font-headline-md text-xl sm:text-2xl text-on-surface font-semibold group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <span className="font-body-md text-sm sm:text-base text-primary font-medium">
                      {exp.company}
                    </span>
                  </div>
                  <div className="shrink-0 self-start sm:self-center">
                    {(exp.id === 'ntc-technician' || exp.id === 'ntc-assistant' || exp.id === 'ntc-intern') && <NepalTelecomLogo size="md" />}
                    {exp.id === 'classic-tech' && <ClassicTechLogo size="md" />}
                  </div>
                </div>

                {exp.summary && (
                  <p className="font-body-md text-sm text-on-surface-variant">
                    {exp.summary}
                  </p>
                )}

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 font-body-sm text-xs sm:text-sm text-on-surface-variant">
                  {exp.highlights.map((highlight, hIdx) => {
                    const isSpanning = isFirst && hIdx === exp.highlights.length - 1;
                    return (
                      <div
                        key={hIdx}
                        className={`flex items-start gap-2.5 ${isSpanning ? 'md:col-span-2' : ''}`}
                      >
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isFirst
                              ? 'text-secondary'
                              : isSecond
                              ? 'text-primary'
                              : 'text-outline'
                          }`}
                        />
                        <span className="leading-relaxed">{highlight}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
