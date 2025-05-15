"use client";

import React, { useState, useRef, useEffect, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { create as createConfetti, CreateTypes } from "canvas-confetti";

interface CopyButtonProps {
  command: string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ command, className }) => {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const confettiRef = useRef<CreateTypes | null>(null);

  // Initialize the confetti instance once the canvas is mounted
  useEffect(() => {
    if (canvasRef.current) {
      confettiRef.current = createConfetti(canvasRef.current, {
        resize: true,
        useWorker: true,
      });
    }
  }, []);

  const handleCopy = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);

      // Fire confetti from the click point
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      confettiRef.current?.({
        particleCount: 30,
        spread: 60,
        origin: { x, y },
      });

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div
      className={cn(
        "relative w-full max-w-xl mx-auto  text-sm rounded-lg overflow-hidden",
        "border border-background/10 backdrop-blur-sm",
        "group transition-all duration-300 hover:border-background/30",
        className
      )}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Hidden full-size canvas for confetti */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 w-full h-full"
      />

      {/* Command display */}
      <div className="flex items-center justify-between bg-gradient-to-r from-background/60 to-background/40 p-4">
        <div className="flex items-center">
          <Terminal className="w-4 h-4 mr-3 text-primary opacity-70" />
          <code className="">{command}</code>
        </div>

        {/* Copy button */}
        <motion.button
          onClick={handleCopy}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "relative ml-2 p-2 rounded-md",
            "bg-background/40 hover:bg-background/60",
            "transition-all duration-300"
          )}
          aria-label="Copy to clipboard"
        >
          {/* Check icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: copied ? 1 : 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Check className="w-4 h-4 text-green-500" />
          </motion.div>

          {/* Copy icon */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: copied ? 0 : 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <Copy className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{
          opacity: showTooltip && !copied ? 1 : 0,
          y: showTooltip && !copied ? 0 : 5,
        }}
        transition={{ duration: 0.2 }}
        className="absolute -top-8 right-0 bg-background/80 backdrop-blur-md px-3 py-1 rounded-md text-xs"
      >
        Copy to clipboard
      </motion.div>

      {/* Success notification */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: copied ? 1 : 0, y: copied ? 0 : 5 }}
        transition={{ duration: 0.2 }}
        className="absolute -top-8 right-0 bg-green-500/20 backdrop-blur-md border border-green-500/30 px-3 py-1 rounded-md text-xs text-green-500"
      >
        Copied!
      </motion.div>

      {/* Bottom highlight animation */}
      <motion.div
        className="h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default CopyButton;
