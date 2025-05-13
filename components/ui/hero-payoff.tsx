"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function HeroPayoff() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    },
    hover: {
      y: -4,
      boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Decorative elements for the animated bg
  const decorativeElement = (index: number) => {
    const positions = [
      "top-10 left-10",
      "bottom-20 right-10",
      "top-1/4 right-1/4",
      "bottom-1/3 left-1/5",
      "top-1/2 right-1/6",
    ];

    const sizes = ["w-16 h-16", "w-24 h-24", "w-20 h-20", "w-12 h-12", "w-32 h-32"];
    const delays = [0, 0.2, 0.5, 0.3, 0.7];
    const durations = [15, 20, 25, 18, 22];
    const opacities = [0.03, 0.04, 0.05, 0.03, 0.02];

    return (
      <motion.div
        key={index}
        className={cn(
          "absolute rounded-full bg-gradient-to-r from-purple-300/10 to-purple-600/10 blur-3xl -z-10",
          positions[index % positions.length],
          sizes[index % sizes.length]
        )}
        initial={{ opacity: 0 }}
        animate={{
          opacity: opacities[index % opacities.length],
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: durations[index % durations.length],
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
          opacity: {
            duration: 1,
            delay: delays[index % delays.length],
          },
        }}
      />
    );
  };

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white"
    >
      {/* Decorative floating elements */}
      {[...Array(5)].map((_, i) => decorativeElement(i))}

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text & CTA */}
          <div className="lg:pr-8">
            <motion.h1
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#000080] mb-8 font-serif"
              variants={textVariants}
            >
              <span className="block">The internet of</span>
              <span className="block">agents has arrived.</span>
              <span className="block">Are you ready to</span>
              <span className="block">join?</span>
            </motion.h1>

            <div className="flex flex-wrap gap-4 mt-8">
              <motion.button
                className="px-6 py-2 rounded-full bg-[#7c3aed] text-white text-sm font-medium shadow-sm hover:shadow-md transition-all"
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
              >
                Let&apos;s Pebble
              </motion.button>

              <motion.button
                className="px-6 py-2 rounded-full bg-white text-[#000080] text-sm font-medium border border-gray-200 hover:border-gray-300 transition-all"
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
              >
                Docs
              </motion.button>
            </div>
          </div>

          {/* Right Column - Product Mockup */}
          <motion.div
            className="relative h-[400px] md:h-[450px] w-full"
            variants={imageVariants}
          >
            <div className="absolute inset-0 rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden">
              {/* Mockup Header - Color Dots */}
              <div className="h-8 w-full bg-white border-b border-gray-100 flex items-center px-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="w-1/3 h-4 mx-auto rounded-full bg-gray-100"></div>
                <div className="flex-grow"></div>
              </div>

              {/* Animated Dashboard Content */}
              <div className="p-6 h-full">
                {/* Animated Graph - Purple Wave */}
                <motion.div 
                  className="w-full h-32 mt-2 mb-6 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <svg width="100%" height="100%" viewBox="0 0 400 100">
                    {/* Smoother wave graph */}
                    <motion.path
                      d="M0,70 C50,30 100,80 150,50 C200,20 250,60 300,40 C350,20 400,50 450,30"
                      fill="none"
                      stroke="#7c3aed"
                      strokeWidth="3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                    />
                    {/* Gradient fill area */}
                    <motion.path
                      d="M0,70 C50,30 100,80 150,50 C200,20 250,60 300,40 C350,20 400,50 450,30 L450,100 L0,100 Z"
                      fill="url(#purpleGradient)"
                      opacity="0.2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.2 }}
                      transition={{ duration: 1, delay: 1.2 }}
                    />
                    <defs>
                      <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                {/* List Items with Purple Bullet Points */}
                <div className="mt-6 space-y-6">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1 + i * 0.2, duration: 0.5 }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-[#7c3aed] mr-4"></div>
                      <div className="flex-grow">
                        <div className="h-3 w-full bg-gray-200 rounded-full"></div>
                        <div className="h-2 w-4/5 bg-gray-200 rounded-full mt-2"></div>
                      </div>
                      <div className="h-6 w-12 ml-4 bg-purple-100 rounded-full"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Floating Plus Button in Bottom Right */}
              <motion.div
                className="absolute right-6 bottom-6 w-8 h-8 rounded-full bg-[#7c3aed] flex items-center justify-center shadow-md"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
              </motion.div>
              
              {/* Floating User Icon in Bottom Left */}
              <motion.div
                className="absolute left-6 bottom-6 w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7c3aed"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
