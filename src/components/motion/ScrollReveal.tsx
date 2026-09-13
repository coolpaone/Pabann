import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useScrollPhysics } from './ScrollPhysicsContext';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

/**
 * Headings: slide upward into position with smooth spring physics
 * Initial: translateY(40px) [mobile: 22px]
 * Reverses on upward scroll
 */
export const ScrollHeading: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
  id,
}) => {
  const { isMotionEnabled, prefersReduced, isMobile, springConfig } = useScrollPhysics();

  if (!isMotionEnabled || prefersReduced) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  const initialY = isMobile ? 22 : 42;

  return (
    <motion.div
      id={id}
      className={`${className} will-change-transform`}
      initial={{ y: initialY, opacity: 0.15 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.15, margin: '0px 0px -20px 0px' }}
      transition={{
        type: 'spring',
        damping: springConfig.damping,
        stiffness: springConfig.stiffness,
        mass: springConfig.mass,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Paragraphs / Subtitles: slide upward with a staggered +100ms delay
 * Initial: translateY(30px) [mobile: 16px]
 * Reverses on upward scroll
 */
export const ScrollParagraph: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0.1,
  id,
}) => {
  const { isMotionEnabled, prefersReduced, isMobile, springConfig } = useScrollPhysics();

  if (!isMotionEnabled || prefersReduced) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  const initialY = isMobile ? 12 : 24;

  return (
    <motion.div
      id={id}
      className={`${className} will-change-transform`}
      initial={{ y: initialY, opacity: 0.2 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.15, margin: '0px 0px -20px 0px' }}
      transition={{
        type: 'spring',
        damping: springConfig.damping,
        stiffness: springConfig.stiffness,
        mass: springConfig.mass,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

interface ImageRevealProps extends RevealProps {
  direction?: 'left' | 'right' | 'up';
}

/**
 * Images / Visual Spotlights: slide in from the left or right with subtle scale
 * Initial: translateX(±60px) [mobile: ±25px], scale(0.95)
 * Reverses on upward scroll
 */
export const ScrollImage: React.FC<ImageRevealProps> = ({
  children,
  className = '',
  direction = 'right',
  delay = 0.2,
  id,
}) => {
  const { isMotionEnabled, prefersReduced, isMobile, springConfig } = useScrollPhysics();

  if (!isMotionEnabled || prefersReduced) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  const distance = isMobile ? 18 : 45;
  let initialX = 0;
  let initialY = 0;

  if (direction === 'left') {
    initialX = -distance;
  } else if (direction === 'right') {
    initialX = distance;
  } else {
    initialY = distance;
  }

  return (
    <motion.div
      id={id}
      className={`${className} will-change-transform`}
      initial={{ x: initialX, y: initialY, scale: 0.96, opacity: 0.2 }}
      whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.15, margin: '0px 0px -25px 0px' }}
      transition={{
        type: 'spring',
        damping: springConfig.damping + 2,
        stiffness: springConfig.stiffness,
        mass: springConfig.mass * 1.05,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

interface CardRevealProps extends RevealProps {
  index?: number;
}

/**
 * Cards: Push upward and slightly scale from 0.94 → 1
 * Initial: translateY(50px) [mobile: 26px], scale(0.94) [mobile: 0.97]
 * Stagger: 0.25s + index * 0.12s
 * Reverses on upward scroll
 */
export const ScrollCard: React.FC<CardRevealProps> = ({
  children,
  className = '',
  index = 0,
  delay,
  id,
}) => {
  const { isMotionEnabled, prefersReduced, isMobile, springConfig } = useScrollPhysics();

  if (!isMotionEnabled || prefersReduced) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  const initialY = isMobile ? 18 : 36;
  const initialScale = isMobile ? 0.98 : 0.96;
  const computedDelay = delay !== undefined ? delay : 0.15 + (index % 4) * 0.08;

  return (
    <motion.div
      id={id}
      className={`${className} will-change-transform`}
      initial={{ y: initialY, scale: initialScale, opacity: 0.2 }}
      whileInView={{ y: 0, scale: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.1, margin: '0px 0px -20px 0px' }}
      transition={{
        type: 'spring',
        damping: springConfig.damping + 2,
        stiffness: springConfig.stiffness,
        mass: springConfig.mass,
        delay: computedDelay,
      }}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // e.g. -40 to 40
  direction?: 'vertical' | 'horizontal';
  id?: string;
}

/**
 * Large visual elements & banners: Scroll-connected Parallax
 * Directly tracks continuous scroll position, pauses when scroll stops,
 * and reverses cleanly when user scrolls back upward.
 */
export const ScrollParallax: React.FC<ParallaxProps> = ({
  children,
  className = '',
  speed = 30,
  direction = 'vertical',
  id,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isMotionEnabled, prefersReduced, isMobile } = useScrollPhysics();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const effectiveSpeed = isMobile ? speed * 0.4 : speed;
  const rawOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [-effectiveSpeed, effectiveSpeed]
  );
  const smoothOffset = useSpring(rawOffset, { damping: 25, stiffness: 120 });

  if (!isMotionEnabled || prefersReduced) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} id={id} className={`overflow-hidden ${className}`}>
      <motion.div
        style={direction === 'vertical' ? { y: smoothOffset } : { x: smoothOffset }}
        className="w-full h-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};
