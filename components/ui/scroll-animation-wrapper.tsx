"use client";

import React, { ReactNode } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none' | 'scale' | 'rotate';
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  intensity?: 'light' | 'medium' | 'strong';
  parallax?: boolean;
  parallaxSpeed?: number;
}

export const ScrollAnimationWrapper = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  className = '',
  once = true,
  amount = 0.2,
  intensity = 'medium',
  parallax = false,
  parallaxSpeed = 0.5
}: ScrollAnimationWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  
  // Only use parallax effect on desktop
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shouldUseParallax = parallax && !isMobile;
  
  // For parallax effect - only calculate if needed
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Calculate movement distance based on intensity
  const getIntensityValue = (baseValue: number) => {
    switch (intensity) {
      case 'light': return baseValue * 0.5;
      case 'strong': return baseValue * 1.5;
      default: return baseValue;
    }
  };
  
  // Define animation variants based on direction - with reduced values for mobile
  let initial = {};
  let animate = { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 };
  
  // Use smaller animation values on mobile devices
  const baseValue = isMobile ? 20 : 40;
  
  switch (direction) {
    case 'up':
      initial = { opacity: 0, y: getIntensityValue(baseValue) };
      break;
    case 'down':
      initial = { opacity: 0, y: getIntensityValue(-baseValue) };
      break;
    case 'left':
      initial = { opacity: 0, x: getIntensityValue(baseValue) };
      break;
    case 'right':
      initial = { opacity: 0, x: getIntensityValue(-baseValue) };
      break;
    case 'scale':
      initial = { opacity: 0, scale: isMobile ? 0.9 : 0.8 };
      break;
    case 'rotate':
      initial = { opacity: 0, rotate: getIntensityValue(isMobile ? 5 : 10) };
      break;
    case 'none':
      initial = { opacity: 0 };
      break;
  }

  // Create parallax effect if enabled and not on mobile
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldUseParallax ? [getIntensityValue(50) * parallaxSpeed, getIntensityValue(-50) * parallaxSpeed] : [0, 0]
  );

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      style={shouldUseParallax ? { y: parallaxY } : {}}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
