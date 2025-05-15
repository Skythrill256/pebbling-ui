"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export function IntegrationsGrid() {
  // References and view states
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const integrations = [
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

  // Function to get connection line style based on position
  const getLineStyle = (position: string) => {
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

  // Animation for particle dots
  const Particles = ({ position }: { position: string }) => {
    const particles = Array.from({ length: 5 });
    const isLeft = position.includes("left");

    return (
      <div className={`absolute ${getLineStyle(position)} pointer-events-none`}>
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-purple-500"
            initial={{ 
              x: isLeft ? "0%" : "100%", 
              y: position.includes("top") ? "0%" : "100%",
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              x: isLeft ? "100%" : "0%", 
              y: position.includes("top") ? "100%" : "0%",
              opacity: [0, 1, 0],
              scale: [Math.random() * 0.5 + 0.5, Math.random() * 0.8 + 0.8, Math.random() * 0.5 + 0.5]
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

  return (
    <section 
      ref={sectionRef}
      className="py-20 w-full bg-primary overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header section with scroll animations */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.1,
            type: "spring",
            stiffness: 50
          }}
        >
          <motion.h2 
            className="text-4xl font-medium tracking-tight text-purple-900 sm:text-5xl md:text-6xl mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { 
              opacity: 1, 
              scale: 1,
              transition: {
                duration: 0.5,
                delay: 0.2
              }
            } : { opacity: 0, scale: 0.9 }}
             style={{
        fontFamily: 'BogueItalic, sans-serif',
        fontStyle: 'italic',
        
      }}
          >
            Seamless Integrations
          </motion.h2>
          
          <motion.p 
            className="text-lg text-purple-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { 
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.4
              }
            } : { opacity: 0 }}
          >
            Connect with your favorite tools to streamline workflows
          </motion.p>
        </motion.div>

        {/* Integration cards grid with central hub */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto">
         

          {/* Integration Cards */}
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              className="relative bg-white p-6 rounded-lg shadow-sm border border-purple-100 flex flex-col items-center text-center"
              initial={{ 
                opacity: 0, 
                y: 50, 
                scale: 0.9,
                x: integration.position.includes("left") ? -30 : 30
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                x: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.2 * index,
                  type: "spring",
                  stiffness: 50,
                  damping: 12
                }
              } : { 
                opacity: 0, 
                y: 50, 
                scale: 0.9,
                x: integration.position.includes("left") ? -30 : 30
              }}
              whileHover={{ 
                y: -5, 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.2), 0 8px 10px -6px rgba(124, 58, 237, 0.2)",
                transition: {
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300
                }
              }}
            >
             

              <motion.div 
                className="mb-4 text-[#7c3aed]"
                whileHover={{ 
                  rotate: [0, -10, 10, -5, 5, 0], 
                  transition: { duration: 0.6 } 
                }}
              >
                {integration.icon}
              </motion.div>
              
              <h3 className="text-lg font-semibold mb-2 text-[#7c3aed]">
                {integration.name}
              </h3>
              
              <p className="text-sm text-purple-600">
                {integration.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
