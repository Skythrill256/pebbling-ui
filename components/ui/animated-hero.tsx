"use client"
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/buttonone";
import { MacTerminal } from "@/components/ui/mac-terminal";
import { cn } from "@/lib/utils";

// Mac terminal component with pip install command
const InstallCommand = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.2 }}
      className="w-full max-w-2xl mx-auto"
    >
      <MacTerminal 
        command="pip install pebbling" 
        description="Install with pip"
      />
    </motion.div>
  );
};

export function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const titles = useMemo(
    () => ["amazing", "new", "wonderful", "beautiful", "smart"],
    []
  );
  
  // Fix hydration mismatch by only rendering client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full relative isolate overflow-hidden bg-gradient-to-b from-purple-50 via-purple-100/30 to-white">
      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.1),transparent_70%)] -z-10" />
      <div className="container mx-auto">
        {/* Light purple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-white/5 to-purple-100/30 -z-10" />
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Read our launch article <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-[#7c3aed]">This is something</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {isMounted && titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-[#7c3aed]"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
                {!isMounted && (
                  <span className="font-semibold text-[#7c3aed]">{titles[0]}</span>
                )}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-[#7c3aed] max-w-2xl text-center">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
          <div className="flex justify-center w-full max-w-xl mx-auto mt-4">
            <InstallCommand />
          </div>
          <div className="mt-6">
            <Button 
              size="sm" 
              className="bg-[#7c3aed] text-white hover:bg-[#7c3aed]/90 rounded-full gap-2 shadow-md shadow-[#7c3aed]/20 border-none transition-all hover:scale-105"
            >
              Get Started <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
