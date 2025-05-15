"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface HeroTextProps {
  children: React.ReactNode
  className?: string
}

export function HeroText({ children, className }: HeroTextProps) {
  return <p className={cn("text-lg text-gray-600 sm:text-xl", className)}>{children}</p>
}
