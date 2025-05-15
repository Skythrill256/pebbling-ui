"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FounderInfo {
  name: string;
  role: string;
  quote: string;
  imageSrc: string;
}

const founders: FounderInfo[] = [
  {
    name: "Claude Daha",
    role: "Co-Founder & CEO",
    quote: "We built this platform with a vision to transform how developers create and collaborate. Our journey began with a simple idea, but has grown into something much more powerful through the support of our amazing community.",
    imageSrc: "/placeholder-founder1.jpg", // Replace with actual founder image
  },
  {
    name: "Raahul Dutta",
    role: "Co-Founder & CTO",
    quote: "Our goal has always been to make development more accessible, efficient, and enjoyable. We're excited to see what you'll build and how you'll use these tools to create something extraordinary.",
    imageSrc: "/placeholder-founder2.jpg", // Replace with actual founder image
  },
];

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const FoundersNote = () => {
  return (
    <section className="bg-primary py-20 overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-12 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-medium tracking-tight text-purple-900 sm:text-5xl md:text-6xl" style={{
        fontFamily: 'BogueItalic, sans-serif',
        fontStyle: 'italic',
        
      }}>
            Note from the Founders
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 max-w-2xl mx-auto">
            We're passionate about building tools that empower developers to create amazing experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left column - Founder profiles */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-12"
          >
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <div className="relative flex-shrink-0">
                  {/* Placeholder image with purple border */}
                  <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                    {/* Replace with actual founder image when available */}
                    <span className="text-4xl text-[#7c3aed]">{founder.name.charAt(0)}</span>
                  </div>
                  
                  {/* Decorative dot pattern */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + (index * 0.2) }}
                    viewport={{ once: true }}
                    className="absolute -z-10 -right-4 -bottom-4 w-20 h-20 rounded-full opacity-30"
                    style={{
                      background: `radial-gradient(circle, rgba(124, 58, 237, 0.2) 20%, transparent 20%, transparent 40%, rgba(124, 58, 237, 0.1) 40%, rgba(124, 58, 237, 0.1) 60%, transparent 60%, transparent 80%, rgba(124, 58, 237, 0.05) 80%)`
                    }}
                  />
                </div>
                
                <div className="max-w-sm">
                  <h3 className="text-lg font-semibold text-gray-900">{founder.name}</h3>
                  <p className="text-sm text-[#7c3aed] mb-2">{founder.role}</p>
                  <p className="text-gray-700 leading-relaxed">"{founder.quote}"</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right column - Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl shadow-lg p-6 h-[350px] md:h-[420px] overflow-hidden"
          >
            {/* Animation title */}
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-purple-100 text-[#7c3aed] text-sm font-medium px-3 py-1 rounded-full">
                Our Values
              </div>
            </div>
            
            {/* Animation content */}
            <div className="w-full h-full flex items-center justify-center relative">
              {/* Abstract background elements */}
              <motion.div
                className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-purple-100 blur-3xl opacity-50 -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, -20, 0],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <motion.div
                className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full bg-purple-200 blur-2xl opacity-40 -z-10"
                animate={{
                  scale: [1, 1.3, 1],
                  y: [0, -15, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 6,
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* Core values animation */}
              <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Central pulsing hub */}
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(124, 58, 237, 0.2)",
                      "0 0 0 12px rgba(124, 58, 237, 0)",
                      "0 0 0 0 rgba(124, 58, 237, 0)"
                    ],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="w-16 h-16 rounded-full bg-[#7c3aed] flex items-center justify-center z-10 shadow-lg relative"
                >
                  <span className="text-white font-semibold text-xs">CORE</span>
                </motion.div>
                
                {/* Orbiting values */}
                {[
                  { name: "Trust", color: "bg-purple-50", textColor: "text-purple-700" },
                  { name: "Innovation", color: "bg-purple-50", textColor: "text-purple-700" },
                  { name: "Quality", color: "bg-purple-50", textColor: "text-purple-700" },
                  { name: "Community", color: "bg-purple-50", textColor: "text-purple-700" }
                ].map((value, i) => (
                  <motion.div
                    key={value.name}
                    className={`absolute w-12 h-12 rounded-full ${value.color} shadow-md flex items-center justify-center border border-purple-100`}
                    style={{ originX: '50%', originY: '50%' }}
                    animate={{
                      rotate: 360,
                      pathOffset: i * 0.25
                    }}
                    custom={i}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <motion.div
                      className="w-full h-full flex items-center justify-center"
                      animate={{ rotate: -360 }} // Counter-rotate to keep text upright
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <span className={`${value.textColor} text-[10px] font-medium text-center`}>
                        {value.name}
                      </span>
                    </motion.div>
                  </motion.div>
                ))}
                
                {/* Motion path for orbiting elements */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-purple-100 border-dashed opacity-30"
                  style={{ borderRadius: '50%' }}
                />
                
                {/* Connecting lines that follow the orbiting elements */}
                <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                  {[
                    { name: "Trust", delay: 0 },
                    { name: "Innovation", delay: 0.25 },
                    { name: "Quality", delay: 0.5 },
                    { name: "Community", delay: 0.75 }
                  ].map((item, i) => {
                    const radius = 100;
                    
                    return (
                      <motion.line
                        key={`line-${i}`}
                        x1="50%"
                        y1="50%"
                        x2="50%"
                        y2={`calc(50% - ${radius}px)`}
                        stroke="#7c3aed"
                        strokeWidth="1"
                        strokeDasharray="3,3"
                        strokeOpacity="0.4"
                        style={{ originX: '50%', originY: '50%' }}
                        animate={{
                          rotate: 360
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                          delay: item.delay * 20
                        }}
                      />
                    );
                  })}
                </svg>
                
                {/* Light beams from center */}
                <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                  {[0, 1, 2, 3].map((i) => {
                    const rotation = i * 90;
                    return (
                      <motion.path
                        key={`beam-${i}`}
                        d="M0,0 L100,0"
                        stroke="url(#purpleGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        style={{ 
                          translateX: '50%', 
                          translateY: '50%',
                          rotate: rotation,
                        }}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ 
                          pathLength: [0, 0.5, 0],
                          opacity: [0, 0.3, 0]
                        }}
                        transition={{
                          duration: 3,
                          delay: i * 0.75,
                          repeat: Infinity,
                          repeatDelay: 2
                        }}
                      />
                    );
                  })}
                  <defs>
                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoundersNote;
