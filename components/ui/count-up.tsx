"use client"

import { useEffect, useState } from "react"

interface CountUpProps {
  end: number
  duration?: number
  decimals?: number
  suffix?: string
  prefix?: string
}

export function CountUp({ end, duration = 2000, decimals = 0, suffix = "", prefix = "" }: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    window.requestAnimationFrame(step)

    return () => {
      startTimestamp = null
    }
  }, [end, duration])

  const formattedCount = count.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span className="tabular-nums">
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  )
}
