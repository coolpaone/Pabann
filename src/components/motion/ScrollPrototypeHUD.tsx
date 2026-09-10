import React, { useState } from 'react';
import {
  Activity,
  Sliders,
  Maximize2,
  Minimize2,
  ArrowUp,
  ArrowDown,
  RotateCcw,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp,
  Check,
} from 'lucide-react';
import { useScrollPhysics, MotionPreset } from './ScrollPhysicsContext';

export const ScrollPrototypeHUD: React.FC = () => {
  const {
    isMotionEnabled,
    setIsMotionEnabled,
    preset,
    setPreset,
    scrollVelocity,
    scrollDirection,
    scrollProgress,
    isMobile,
    prefersReduced,
  } = useScrollPhysics();

  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'controls' | 'specs'>('controls');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const presets: { id: MotionPreset; name: string; desc: string }[] = [
    {
      id: 'cinematic',
      name: 'Cinematic (Default)',
      desc: 'Balanced physical inertia & natural damping',
    },
    {
      id: 'snappy',
      name: 'Snappy Developer',
      desc: 'High stiffness, rapid entrance & quick settle',
    },
    {
      id: 'subtle',
      name: 'Subtle Flow',
      desc: 'Gentle displacement for minimal movement',
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 font-body-sm select-none">
      {/* Expanded Control Console */}
      {isExpanded && (
        <div className="w-[330px] sm:w-[380px] bg-[#060d24]/95 backdrop-blur-xl border border-secondary/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden text-[#dce1ff] transition-all animate-in fade-in slide-in-from-bottom-3 duration-300">
          {/* Header */}
          <div className="p-3.5 bg-surface-container-high/60 border-b border-outline/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isMotionEnabled ? 'bg-secondary' : 'bg-outline'
                  }`}
                ></span>
                <span
                  className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                    isMotionEnabled ? 'bg-secondary shadow-[0_0_8px_#4cd7f6]' : 'bg-outline'
                  }`}
                ></span>
              </span>
              <span className="font-tech-badge text-xs font-semibold tracking-wider text-white">
                SCROLL ANIMATION PROTOTYPE
              </span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 rounded-lg hover:bg-surface-bright text-outline hover:text-white transition-colors cursor-pointer"
              title="Minimize HUD"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Tab Switcher */}
          <div className="grid grid-cols-2 p-1 bg-[#0b1229] border-b border-outline/15 text-xs font-medium">
            <button
              onClick={() => setActiveTab('controls')}
              className={`py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'controls'
                  ? 'bg-primary-container text-white shadow-sm'
                  : 'text-outline hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              Live Physics & Controls
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'specs'
                  ? 'bg-primary-container text-white shadow-sm'
                  : 'text-outline hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Motion Specs
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-4 max-h-[380px] overflow-y-auto space-y-4 text-xs">
            {activeTab === 'controls' ? (
              <>
                {/* On / Off Toggle (Compare with baseline) */}
                <div className="flex items-center justify-between p-2.5 bg-surface-container/60 rounded-xl border border-outline/20">
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-xs font-semibold text-white">
                      Motion State
                    </span>
                    <span className="text-[11px] text-outline">
                      {isMotionEnabled ? 'Push / Slide / Scale Active' : 'Static Baseline Mode'}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMotionEnabled(!isMotionEnabled)}
                    className={`px-3 py-1.5 rounded-lg font-tech-badge text-[11px] font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isMotionEnabled
                        ? 'bg-secondary text-[#060d24] shadow-[0_0_12px_rgba(76,215,246,0.4)]'
                        : 'bg-surface-bright text-outline border border-outline/30'
                    }`}
                  >
                    {isMotionEnabled ? 'PROTOTYPE ON' : 'BASELINE (OFF)'}
                  </button>
                </div>

                {/* Real-time Telemetry */}
                <div className="grid grid-cols-3 gap-2 p-2.5 bg-[#0b1229] rounded-xl border border-outline/15 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-outline uppercase font-semibold">Velocity</span>
                    <span className="font-tech-badge text-xs font-bold text-secondary">
                      {scrollVelocity} px/s
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-outline uppercase font-semibold">Direction</span>
                    <span className="font-tech-badge text-xs font-bold text-white flex items-center gap-0.5">
                      {scrollDirection === 'down' && <ArrowDown className="w-3 h-3 text-secondary" />}
                      {scrollDirection === 'up' && <ArrowUp className="w-3 h-3 text-primary" />}
                      {scrollDirection === 'idle' && <span className="text-outline">IDLE</span>}
                      {scrollDirection.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-outline uppercase font-semibold">Scroll %</span>
                    <span className="font-tech-badge text-xs font-bold text-[#b4c5ff]">
                      {scrollProgress}%
                    </span>
                  </div>
                </div>

                {/* Motion Physics Presets */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-semibold uppercase text-outline tracking-wider">
                    Spring Inertia Preset
                  </span>
                  <div className="space-y-1.5">
                    {presets.map((p) => {
                      const isActive = preset === p.id;
                      return (
                        <button
                          key={p.id}
                          onClick={() => setPreset(p.id)}
                          className={`w-full p-2 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                            isActive
                              ? 'bg-secondary/15 border-secondary/60 text-white'
                              : 'bg-surface-container/40 border-outline/15 text-on-surface-variant hover:bg-surface-container'
                          }`}
                        >
                          <div className="flex flex-col">
                            <span className="font-medium text-xs text-white">{p.name}</span>
                            <span className="text-[10px] text-outline">{p.desc}</span>
                          </div>
                          {isActive && <Check className="w-4 h-4 text-secondary" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Section Test Jump Buttons */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <span className="text-[11px] font-semibold uppercase text-outline tracking-wider">
                    Test Trigger Section Entrances
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { label: 'Hero Section', id: 'about' },
                      { label: 'Experience Timeline', id: 'experience' },
                      { label: 'Gallery', id: 'gallery' },
                      { label: 'Competencies Grid', id: 'expertise' },
                      { label: 'Contact Terminal', id: 'contact' },
                    ].map((sec) => (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className="p-1.5 bg-surface-container/50 hover:bg-primary-container hover:text-white rounded-lg border border-outline/15 text-[11px] text-left transition-colors cursor-pointer"
                      >
                        → {sec.label}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              /* Specs Tab */
              <div className="space-y-3">
                <div className="p-2.5 bg-[#0b1229] rounded-xl border border-outline/15 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-secondary font-bold">⬆️</span>
                    <div>
                      <span className="font-semibold text-white">Headings: Upward Push</span>
                      <p className="text-[11px] text-outline">
                        Starts at translateY(42px) [mobile 22px], translates to 0 with spring physics and subtle opacity change (0.15 → 1.0).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary font-bold">⏱️</span>
                    <div>
                      <span className="font-semibold text-white">Paragraphs: Delayed Slide</span>
                      <p className="text-[11px] text-outline">
                        Translates upward with a +100ms offset delay after headings for sequential natural rhythm.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary font-bold">⬅️➡️</span>
                    <div>
                      <span className="font-semibold text-white">Images: Directional Slide</span>
                      <p className="text-[11px] text-outline">
                        Slides in from left or right (±60px), scales 0.95 → 1, delayed by 200ms.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary font-bold">📦</span>
                    <div>
                      <span className="font-semibold text-white">Cards: Push & Scale (0.94 → 1)</span>
                      <p className="text-[11px] text-outline">
                        Pushes upward translateY(52px) and expands from scale 0.94 to 1 with sequential 120ms card staggering.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-secondary font-bold">🔄</span>
                    <div>
                      <span className="font-semibold text-white">Reverse Physics & Stop</span>
                      <p className="text-[11px] text-outline">
                        When scrolling slowly, elements move continuously. When stopped, motion settles. Upward scroll reverses smoothly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-2 bg-secondary/10 border border-secondary/30 rounded-xl text-[11px] text-[#b4c5ff]">
                  <strong>Accessibility:</strong> Automatically adapts to prefers-reduced-motion. Movement distances scaled down by ~50% on mobile viewports.
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Minimized Status Pill / Toggle Button */}
      <div className="flex items-center gap-2 bg-[#060d24]/90 backdrop-blur-md p-1.5 pr-3 rounded-full border border-secondary/40 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-primary-container to-blue-600 hover:to-secondary text-white font-tech-badge text-xs font-semibold rounded-full shadow-[0_0_16px_rgba(76,215,246,0.3)] transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
          <span>SCROLL MOTION PROTOTYPE</span>
          {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>

        {/* Rapid Compare Button */}
        <button
          onClick={() => setIsMotionEnabled(!isMotionEnabled)}
          className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors cursor-pointer ${
            isMotionEnabled
              ? 'bg-secondary/20 text-secondary border border-secondary/40'
              : 'bg-surface-bright text-outline hover:text-white'
          }`}
          title="Toggle between scroll animations and static baseline"
        >
          {isMotionEnabled ? 'Motion: ON' : 'Motion: OFF'}
        </button>
      </div>
    </div>
  );
};
