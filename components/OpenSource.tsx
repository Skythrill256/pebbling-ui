"use client";
import React from "react";
import { motion } from "framer-motion";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/buttonone";

export const OpenSourceSection = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-primary">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="text-4xl font-medium tracking-tight text-purple-900 sm:text-5xl md:text-6xl" style={{
        fontFamily: 'BogueItalic, sans-serif',
        fontStyle: 'italic',
        
      }} >Proudly opensource</span>
          </h2>
          <p className="max-w-[600px] text-[#7c3aed] md:text-xl">
            Our source code is available on GitHub - feel free to read,
            review, or contribute to it however you want!
          </p>
          
          <Button 
            onClick={() => window.open("https://github.com/Pebbling-ai/pebble", "_blank")}
            className="mt-4 bg-gradient-to-r from-fuchsia-700 to-purple-700 text-white  px-6 py-3 rounded-lg font-semibold"
          >
            <span className="flex items-center">
              <GitHubLogoIcon className="mr-2 h-5 w-5" />
              Star on GitHub
            </span>
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full">
            <motion.div 
              className="flex flex-col items-center space-y-4 p-6 bg-white text-[#7c3aed] rounded-lg shadow-sm border border-purple-100"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-center space-x-2">
                {[1, 2, 3].map((_, i) => (
                  <svg 
                    key={i}
                    xmlns="http://www.w3.org/2000/svg" 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-yellow-400"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <h3 className="text-2xl font-bold">6 Stars</h3>
              <p className="text-purple-600">
                And growing every day
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center space-y-4 p-6 bg-white text-[#7c3aed] rounded-lg shadow-sm border border-purple-100"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-purple-100 overflow-hidden flex items-center justify-center"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-purple-500"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                ))}
              </div>
              <h3 className="text-2xl font-bold">5+ Contributors</h3>
              <p className="text-purple-600">
                Join our growing community
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
