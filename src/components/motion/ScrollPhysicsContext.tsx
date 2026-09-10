import React, { createContext, useContext, useState, useEffect } from 'react';
import { useReducedMotion } from 'motion/react';

export type MotionPreset = 'cinematic' | 'snappy' | 'subtle';

interface ScrollPhysicsContextType {
  isMotionEnabled: boolean;
  setIsMotionEnabled: (val: boolean) => void;
  preset: MotionPreset;
  setPreset: (val: MotionPreset) => void;
  isMobile: boolean;
  prefersReduced: boolean;
  scrollVelocity: number;
  scrollDirection: 'up' | 'down' | 'idle';
  scrollProgress: number;
  springConfig: {
    damping: number;
    stiffness: number;
    mass: number;
  };
}

const ScrollPhysicsContext = createContext<ScrollPhysicsContextType | undefined>(undefined);

export const ScrollPhysicsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMotionEnabled, setIsMotionEnabled] = useState(true);
  const [preset, setPreset] = useState<MotionPreset>('cinematic');
  const [isMobile, setIsMobile] = useState(false);
  const systemReduced = useReducedMotion();
  const prefersReduced = Boolean(systemReduced);

  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | 'idle'>('idle');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Monitor real-time scroll physics (velocity, direction, overall progress)
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();
    let timeoutId: number;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = performance.now();
      const deltaY = currentScrollY - lastScrollY;
      const deltaTime = currentTime - lastTime;

      if (deltaTime > 0) {
        // Pixels per second
        const velocity = Math.round((Math.abs(deltaY) / deltaTime) * 1000);
        setScrollVelocity(velocity);
        setScrollDirection(deltaY > 0 ? 'down' : deltaY < 0 ? 'up' : 'idle');
      }

      // Progress calculation
      const totalDocHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalDocHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, Math.round((currentScrollY / totalDocHeight) * 100))));
      }

      lastScrollY = currentScrollY;
      lastTime = currentTime;

      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setScrollVelocity(0);
        setScrollDirection('idle');
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Preset physics tuning
  const springConfig = {
    cinematic: { damping: 24, stiffness: 140, mass: 0.9 }, // Smooth, weighted, continuous
    snappy: { damping: 28, stiffness: 220, mass: 0.6 },    // Fast developer portfolio style
    subtle: { damping: 30, stiffness: 110, mass: 1.0 },    // Gentle, quiet motion
  }[preset];

  return (
    <ScrollPhysicsContext.Provider
      value={{
        isMotionEnabled,
        setIsMotionEnabled,
        preset,
        setPreset,
        isMobile,
        prefersReduced,
        scrollVelocity,
        scrollDirection,
        scrollProgress,
        springConfig,
      }}
    >
      {children}
    </ScrollPhysicsContext.Provider>
  );
};

export const useScrollPhysics = () => {
  const context = useContext(ScrollPhysicsContext);
  if (!context) {
    throw new Error('useScrollPhysics must be used within a ScrollPhysicsProvider');
  }
  return context;
};
