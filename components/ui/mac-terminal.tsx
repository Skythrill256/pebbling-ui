"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';

interface MacTerminalProps {
  command: string;
  description?: string;
}

export const MacTerminal: React.FC<MacTerminalProps> = ({ command, description }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      className="rounded-lg overflow-hidden shadow-lg max-w-lg mx-auto mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* Terminal header with Mac-style dots */}
      <div className="bg-gray-100 px-4 py-2 flex items-center border-b border-gray-200">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        {description && (
          <div className="text-gray-500 text-xs mx-auto font-medium">
            {description}
          </div>
        )}
      </div>
      
      {/* Terminal content */}
      <div className="bg-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-[#7c3aed] mr-2 font-semibold">$</span>
          <code className="text-gray-800  select-all">{command}</code>
        </div>
        
        {/* Copy button */}
        <button 
          onClick={copyToClipboard} 
          className="p-2 rounded hover:bg-gray-100 transition-colors text-gray-500 hover:text-[#7c3aed] focus:outline-none"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              <Check size={16} className="text-[#7c3aed]" />
            </motion.div>
          ) : (
            <Copy size={16} />
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default MacTerminal;
