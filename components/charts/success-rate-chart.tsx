"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

const weeklyData = [
  { name: "Week 1", chatbot: 92, assistant: 88, researcher: 95 },
  { name: "Week 2", chatbot: 93, assistant: 89, researcher: 94 },
  { name: "Week 3", chatbot: 94, assistant: 91, researcher: 96 },
  { name: "Week 4", chatbot: 95, assistant: 92, researcher: 97 },
  { name: "Week 5", chatbot: 94, assistant: 93, researcher: 96 },
  { name: "Week 6", chatbot: 96, assistant: 94, researcher: 98 },
]

const monthlyData = [
  { name: "Jan", chatbot: 90, assistant: 85, researcher: 93 },
  { name: "Feb", chatbot: 91, assistant: 86, researcher: 94 },
  { name: "Mar", chatbot: 93, assistant: 88, researcher: 95 },
  { name: "Apr", chatbot: 94, assistant: 90, researcher: 96 },
  { name: "May", chatbot: 95, assistant: 92, researcher: 97 },
  { name: "Jun", chatbot: 96, assistant: 94, researcher: 98 },
]

const chartConfig = {
  chatbot: {
    label: "Chatbot Agents",
    color: "hsl(var(--chart-1))",
  },
  assistant: {
    label: "Assistant Agents",
    color: "hsl(var(--chart-2))",
  },
  researcher: {
    label: "Researcher Agents",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function SuccessRateChart({ timeframe }: { timeframe: string }) {
  const data = timeframe === "weekly" ? weeklyData : monthlyData

  return (
    <ChartContainer config={chartConfig} className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis domain={[80, 100]} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line type="monotone" dataKey="chatbot" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="assistant" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="researcher" stroke="hsl(var(--chart-3))" strokeWidth={2} dot={{ r: 4 }} />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
