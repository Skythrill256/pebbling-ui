"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Brain, CircuitBoard, Sparkles, Terminal, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  gradient: string;
  accentColor: string;
  delay: number;
}

const FeaturesAccent = ({ children, color }: { children: React.ReactNode; color: string }) => (
  <span className={cn("text-sm inline-block px-2 py-0.5 rounded-full bg-background/40 border border-background/10", color)}>
    {children}
  </span>
);

const ProductCard = ({ 
  title, 
  description, 
  features, 
  icon, 
  gradient, 
  accentColor,
  delay 
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay
      }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className={cn(
        "h-full overflow-hidden border-background/10 relative z-20", 
        "transition-all duration-300 hover:border-background/30",
        "hover:shadow-lg bg-background/10 backdrop-blur-sm mt-8"
      )}>
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <div className={cn(
            "absolute inset-0 opacity-80", 
            gradient
          )}></div>
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-dark/10"></div>
        </div>

        <CardHeader className="relative z-10">
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: delay + 0.1
            }}
            viewport={{ once: true }}
          >
            <motion.div 
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full",
                "bg-background border border-background/20 text-foreground"
              )}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 0 20px rgba(0,0,0,0.1)" 
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {icon}
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: 15 }}>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: delay + 0.25
            }}
            viewport={{ once: true }}
          >
            <CardTitle className="text-xl mt-4 flex items-center gap-2">
              {title}
              <motion.div 
                className={cn("h-1.5 w-1.5 rounded-full", accentColor)}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              ></motion.div>
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {description}
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="relative z-10">
          <div className="space-y-3">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: delay + 0.3 + (index * 0.15),
                  filter: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
                whileHover={{ x: 3 }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ 
                    duration: 3, 
                    ease: "easeInOut", 
                    times: [0, 0.2, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 2 + index * 0.5
                  }}
                >
                  <Sparkles className={cn("w-3.5 h-3.5", accentColor)} />
                </motion.div>
                <span className="text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="relative z-10">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button className="w-full justify-between group relative overflow-hidden bg-background/20 hover:bg-background/40 backdrop-blur-sm border-background/10">
              <span className="text-zinc-900">Explore {title}</span>
              <motion.div
                animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeInOut", 
                  repeat: Infinity,
                  repeatDelay: 4
                }}
              >
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.div>
              <motion.div 
                className={cn("absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full", accentColor.replace('text-', 'bg-'))} 
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export function ProductShowcase() {
  const products = [
    {
      title: "Pebbling",
      description: "Quantum-inspired intelligence that adapts to your workflow. Pebbling transcends traditional AI boundaries with fluid learning.",
      features: [
        "Autonomous reasoning with zero-shot adaptation",
        "Multi-modal context integration engine",
        "Predictive workflow optimization",
        "Enterprise-grade security and permissions"
      ],
      icon: <Brain className="w-5 h-5" />,
      gradient: "bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20",
      accentColor: "text-cyan-500",

      delay: 0.2
    },
    {
      title: "Hibiscus",
      description: "Evolutionary neural networks that bloom with every interaction. Hibiscus crafts bespoke cognitive solutions for enterprises.",
      features: [
        "Self-evolving neural architecture",
        "Ambient intelligence integration",
        "Cross-domain knowledge synthesis",
        "Adaptive memory crystallization"
      ],
      icon: <CircuitBoard className="w-5 h-5" />,
      gradient: "bg-gradient-to-br from-rose-500/20 via-pink-500/20 to-orange-500/20",
      accentColor: "text-rose-500",

      delay: 0.4
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" 
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 2, 0],
            x: [0, -10, 0],
            y: [0, 10, 0]
          }}
          transition={{ 
            duration: 20, 
            ease: "easeInOut", 
            repeat: Infinity
          }}
        />
        <motion.div 
          className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-br from-rose-500/5 to-orange-500/5 rounded-full blur-3xl" 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -3, 0],
            x: [0, 20, 0],
            y: [0, -15, 0]
          }}
          transition={{ 
            duration: 25, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-[10%] left-[80%] w-[40rem] h-[40rem] bg-gradient-to-br from-green-500/5 to-cyan-500/5 rounded-full blur-3xl" 
          animate={{ 
            scale: [1, 0.95, 1],
            rotate: [0, 5, 0],
            x: [0, 15, 0],
            y: [0, 20, 0]
          }}
          transition={{ 
            duration: 30, 
            ease: "easeInOut", 
            repeat: Infinity,
            delay: 2
          }}
        />
        <div className="absolute -z-10 inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] dark:bg-grid-dark/[0.05]"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto max-w-6xl relative z-10"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-3"
          >
            <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
              NEXT-GEN AI SOLUTIONS
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70"
          >
            Intelligent Solutions for the Future
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Discover our cutting-edge AI platforms designed to transform how you interact with technology
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
