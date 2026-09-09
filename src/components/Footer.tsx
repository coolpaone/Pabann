import React from 'react';
import { NepalFlag } from './NepalFlag';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#060d24] border-t border-primary/10">
      <div className="w-full px-5 md:px-10 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-outline/15">
          {/* Brand & Bio */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <NepalFlag size="sm" />
              <span className="font-headline-sm text-xl text-on-surface font-bold tracking-tight">
                PABAN NEPALI
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="font-tech-badge text-[11px] text-secondary bg-surface-container px-2.5 py-1 rounded border border-secondary/20">
                NTC CERTIFIED
              </span>
              <span className="font-tech-badge text-[11px] text-primary bg-surface-container px-2.5 py-1 rounded border border-primary/20">
                FIBER OPTIC SPECIALIST
              </span>
              <span className="font-tech-badge text-[11px] text-[#4cd7f6] bg-surface-container px-2.5 py-1 rounded border border-[#4cd7f6]/20">
                Professional Telecom Technician
              </span>
            </div>
          </div>

          {/* Telemetry & Specs */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="font-label-caps text-xs text-on-surface uppercase font-semibold">
              Telemetry &amp; Specs
            </span>
            <div className="flex flex-col gap-1 font-code-snippet text-xs text-on-surface-variant">
              <span>Stack: DWDM / GPON / OTDR</span>
              <span>Protocol: BGP / MPLS / OSPF</span>
              <span>Optical Precision: &lt;0.05dB Splice</span>
              <span>Zone: Nepal Telecom Region</span>
            </div>
          </div>

          {/* Direct Communications */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <span className="font-label-caps text-xs text-on-surface uppercase font-semibold">
              Direct Communications
            </span>
            <div className="flex flex-col gap-1.5 font-body-sm text-sm text-on-surface-variant">
              <a
                className="hover:text-primary transition-colors flex items-center gap-2"
                href="mailto:paban.nepali@ntc.net.np"
              >
                <span className="font-tech-badge text-secondary font-semibold">&gt;</span>
                paban.nepali@ntc.net.np
              </a>
              <span className="flex items-center gap-2">
                <span className="font-tech-badge text-secondary font-semibold">&gt;</span>
                Gorkha &amp; Palpa, Nepal
              </span>
              <span className="flex items-center gap-2">
                <span className="font-tech-badge text-secondary font-semibold">&gt;</span>
                Active Carrier Operations
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-tech-badge text-xs text-outline">
            © 2026 Paban Nepali. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="font-tech-badge text-xs text-secondary flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
              CARRIER NODE ACTIVE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
