import React from 'react';
import { NepalFlag } from './NepalFlag';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#060d24] border-t border-primary/10">
      <div className="w-full px-5 md:px-10 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-outline/15 items-start">
          {/* Brand & Bio */}
          <div className="md:col-span-7 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <NepalFlag size="sm" />
              <span className="font-headline-sm text-xl text-on-surface font-bold tracking-tight">
                PABAN NEPALI
              </span>
            </div>
            <p className="font-body-sm text-xs text-on-surface-variant max-w-xl leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="font-tech-badge text-[11px] text-primary bg-surface-container px-2.5 py-1 rounded border border-primary/20">
                FIBER OPTIC SPECIALIST
              </span>
              <span className="font-tech-badge text-[11px] text-[#4cd7f6] bg-surface-container px-2.5 py-1 rounded border border-[#4cd7f6]/20">
                Professional Telecom Technician
              </span>
            </div>
          </div>

          {/* Telemetry & Specs */}
          <div className="md:col-span-5 flex flex-col gap-2 md:items-end">
            <span className="font-label-caps text-xs text-on-surface uppercase font-semibold">
              {t.footer.telemetryTitle}
            </span>
            <div className="flex flex-col gap-1 font-code-snippet text-xs text-on-surface-variant md:text-right">
              <span>Stack: DWDM / GPON / OTDR</span>
              <span>Protocol: BGP / MPLS / OSPF</span>
              <span>Optical Precision: &lt;0.02dB Core Splice</span>
              <span>Zone: Nepal Telecom Carrier Grid</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright line with centered Made with 🩵 By Paban Nepali */}
        <div className="pt-14 sm:pt-20 mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-tech-badge text-xs text-outline order-2 md:order-1">
            {t.footer.allRightsReserved}
          </p>

          <p className="font-body-sm text-xs text-on-surface font-medium flex items-center justify-center gap-1.5 order-1 md:order-2">
            Made with 🩵 By Paban Nepali
          </p>

          <div className="flex items-center justify-center md:justify-end gap-3 order-3">
            <span className="font-tech-badge text-xs text-secondary flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
              {t.footer.nodeActive}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
