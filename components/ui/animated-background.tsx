"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  className?: string;
}

// Fixed positions to avoid hydration mismatch
const particlePositions = [
  { left: '20%', top: '30%' },
  { left: '65%', top: '15%' },
  { left: '80%', top: '60%' },
  { left: '35%', top: '75%' },
  { left: '50%', top: '40%' },
];

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className = '' }) => {
  // State to control rendering to fix hydration issues
  const [isMounted, setIsMounted] = useState(false);

  // Only render on client to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything during SSR
  if (!isMounted) {
    return null;
  }

  // Only render animated background on larger screens for better mobile performance
  return (
    <div className={`absolute inset-0 overflow-hidden -z-10 hidden md:block ${className}`}>
      {/* Large gradient blobs that slowly move - reduced size and complexity */}
      <motion.div
        className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-purple-300/10 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-purple-400/10 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      />
      
      {/* Reduced number of floating particles with fixed positions */}
      {particlePositions.map((position, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-purple-300"
          style={position}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + (i * 0.5), // Predictable variation instead of random
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.4, // Predictable delay instead of random
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
