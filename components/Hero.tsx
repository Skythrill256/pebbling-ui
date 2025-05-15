"use client";

import { motion } from "framer-motion";
import { CodeBlock } from "@/components/mine/code-block";
import HeroVideo from "@/components/mine/hero-videotwo";
import { HeroHeading } from "@/components/mine/hero-heading";
import { HeroText } from "@/components/mine/hero-text";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <section className="relative w-full flex justify-center overflow-hidden bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="container flex mx-auto px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left side content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.2 }}
              className="space-y-8 mt-28 pl-5"
            >
              <HeroHeading >Simplify your development workflow</HeroHeading>

              <HeroText className="font-montserrat">
                Pebbling helps you build, deploy, and scale your applications with ease. Get started in minutes and
                focus on what matters most - your code.
              </HeroText>

              <div className="space-y-6">
                <CodeBlock code="pip install pebbling"  />

                <Button
  className="bg-gradient-to-r from-fuchsia-700 to-purple-700 group relative w-fit rounded-full border border-white/30  px-5 py-5 font-semibold text-white backdrop-blur-md transition duration-300 "
>
  Deploy now
  <ArrowRight
    className="ml-2 inline-block transition-transform group-hover:translate-x-1"
    size={16}
    strokeWidth={2}
    aria-hidden="true"
  />
</Button>

              </div>
            </motion.div>

            {/* Right side video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.4 }}
              className="relative h-[350px] md:h-[500px] w-full"
            >
              <HeroVideo />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
