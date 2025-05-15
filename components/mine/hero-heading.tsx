"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface HeroHeadingProps {
  children: React.ReactNode
  className?: string
}

export function HeroHeading({ children, className }: HeroHeadingProps) {
  return (
    <h1 className={cn("text-4xl font-medium tracking-tight text-purple-900 sm:text-5xl md:text-6xl", className)}style={{
        fontFamily: 'BogueItalic, sans-serif',
        fontStyle: 'italic',
        
      }} >
      {children}
    </h1>
  )
}
