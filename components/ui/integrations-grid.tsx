"use client";

import React, { JSX } from "react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Integration {
  name: string;
  description: string;
  icon: JSX.Element;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export function IntegrationsGrid() {
  const [mounted, setMounted] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const integrations: Integration[] = [
    {
      name: "MCP",
      description: "Connect with MCP for instant microservice workflows",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12"
        >
          <path d="M12 22v-5" />
          <path d="M9 7V2" />
          <path d="M15 7V2" />
          <path d="M6 13V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Z" />
          <path d="M9 17v5" />
          <path d="M15 17v5" />
        </svg>
      ),
      position: "top-left",
    },
    {
      name: "Agno",
      description: "Integrate with Agno to streamline governance logic",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m4.9 4.9 14.2 14.2" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      position: "top-right",
    },
    {
      name: "JavaScript",
      description: "Use JavaScript to build reactive experiences",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12"
        >
          <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
          <path d="M8 16h.01" />
          <path d="M8 20h.01" />
          <path d="M12 18h.01" />
          <path d="M12 22h.01" />
          <path d="M16 16h.01" />
          <path d="M16 20h.01" />
        </svg>
      ),
      position: "bottom-left",
    },
    {
      name: "Python",
      description: "Run analytics and automation with Python",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12"
        >
          <path d="M2 7v11" />
          <path d="M8 7H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h3" />
          <path d="M22 17v-1c0-1.1-.9-2-2-2h-6" />
          <path d="M18 9V7c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-2" />
          <path d="M22 13v-2c0-1.1-.9-2-2-2h-3" />
        </svg>
      ),
      position: "bottom-right",
    },
  ];

  const getLineStyle = (position: Integration["position"]) => {
    switch (position) {
      case "top-left":
        return "top-[85%] left-[85%] w-[20%] h-[20%] rotate-45";
      case "top-right":
        return "top-[85%] right-[85%] w-[20%] h-[20%] -rotate-45";
      case "bottom-left":
        return "bottom-[85%] left-[85%] w-[20%] h-[20%] -rotate-45";
      case "bottom-right":
        return "bottom-[85%] right-[85%] w-[20%] h-[20%] rotate-45";
      default:
        return "";
    }
  };

  const Particles = ({ position }: { position: Integration["position"] }) => {
    const particles = Array.from({ length: 5 });
    const isLeft = position.includes("left");
    const isTop = position.includes("top");

    return (
      <div className={`absolute ${getLineStyle(position)} pointer-events-none`}>
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-purple-500"
            initial={{
              x: isLeft ? "0%" : "100%",
              y: isTop ? "0%" : "100%",
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: isLeft ? "100%" : "0%",
              y: isTop ? "100%" : "0%",
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random(),
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  const pulseAnimation = {
    initial: { scale: 1, opacity: 0.8, rotate: 0 },
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      rotate: 360,
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear",
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 40, scale: 0.9 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.2 * index,
        duration: 0.6,
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    }),
    hover: {
      y: -5,
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.2), 0 8px 10px -6px rgba(124, 58, 237, 0.2)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <motion.div
      className="py-20 w-full bg-gradient-to-b from-white to-purple-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onViewportEnter={() => setIsInView(true)}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#7c3aed] md:text-4xl lg:text-5xl mb-4">
            Seamless Integrations
          </h2>
          <p className="text-lg text-purple-600 max-w-2xl mx-auto">
            Connect with your favorite tools to streamline workflows
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto">
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 50,
              damping: 10,
            }}
          >
            <motion.div
              className="relative flex items-center justify-center"
              variants={pulseAnimation}
              initial="initial"
              animate="animate"
            >
              <motion.div className="absolute w-20 h-20 rounded-full bg-purple-200 blur-xl opacity-70" />
              <motion.div className="absolute w-32 h-32 rounded-full bg-purple-100 blur-3xl opacity-50" />
              <motion.div className="absolute w-40 h-40 rounded-full border-2 border-purple-200 opacity-40" />

              <div className="relative z-10 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg border border-purple-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-[#7c3aed]"
                >
                  <path d="M12 2H2v10h10V2z" />
                  <path d="M12 12H2v10h10V12z" />
                  <path d="M22 2h-10v10h10V2z" />
                  <path d="M22 12h-10v10h10V12z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>

          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              className="relative bg-white p-6 rounded-lg shadow-sm border border-purple-100 flex flex-col items-center text-center"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              custom={index}
              whileHover="hover"
              viewport={{ once: true }}
            >
              {mounted && (
                <>
                  <div
                    className={cn(
                      "absolute bg-gradient-to-r from-purple-200 to-purple-300 opacity-50",
                      getLineStyle(integration.position)
                    )}
                  />
                  <Particles position={integration.position} />
                </>
              )}

              <div className="mb-4 text-[#7c3aed]">{integration.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-[#7c3aed]">{integration.name}</h3>
              <p className="text-sm text-purple-600">{integration.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
