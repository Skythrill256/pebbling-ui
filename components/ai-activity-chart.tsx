"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Generate sample data for the last 24 hours
const generateData = () => {
  const data = []
  const now = new Date()

  for (let i = 23; i >= 0; i--) {
    const time = new Date(now)
    time.setHours(now.getHours() - i)

    // Generate random values between ranges
    const activeAgents = Math.floor(Math.random() * 15) + 25 // 25-40 range
    const workingAgents = Math.floor(Math.random() * 20) + 10 // 10-30 range

    data.push({
      time: time.toLocaleTimeString([], { hour: "2-digit", hour12: false }),
      active: activeAgents,
      working: workingAgents,
    })
  }

  return data
}

export function AIActivityChart() {
  const [data, setData] = useState<
    Array<{
      time: string
      active: number
      working: number
    }>
  >([])

  useEffect(() => {
    setData(generateData())
  }, [])

  return (
    <div className="h-32 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="activeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9333ea" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#9333ea" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="workingGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#c084fc" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#c084fc" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="time"
            tick={{ fontSize: 8 }}
            tickLine={false}
            axisLine={false}
            interval="preserveStartEnd"
            tickFormatter={(value) => value.split(":")[0]}
          />
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="active"
            stroke="#9333ea"
            strokeWidth={1.5}
            fillOpacity={1}
            fill="url(#activeGradient)"
          />
          <Area
            type="monotone"
            dataKey="working"
            stroke="#c084fc"
            strokeWidth={1.5}
            fillOpacity={1}
            fill="url(#workingGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex justify-center mt-1 space-x-4 text-xs">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-700 mr-1"></div>
          <span className="text-purple-800">Active</span>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-400 mr-1"></div>
          <span className="text-purple-800">Working</span>
        </div>
      </div>
    </div>
  )
}

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-purple-100 shadow-sm px-3 py-2 rounded-md">
        <div className="text-xs font-medium text-purple-900">{label}</div>
        <div className="text-xs text-purple-800">
          Active: <span className="font-medium">{payload[0].value}</span>
        </div>
        <div className="text-xs text-purple-800">
          Working: <span className="font-medium">{payload[1].value}</span>
        </div>
      </div>
    )
  }

  return null
}
