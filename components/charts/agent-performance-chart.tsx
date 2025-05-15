"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

const data = [
  {
    name: "Chatbot",
    successRate: 95,
    responseTime: 0.8,
    userSatisfaction: 92,
  },
  {
    name: "Assistant",
    successRate: 93,
    responseTime: 1.2,
    userSatisfaction: 90,
  },
  {
    name: "Researcher",
    successRate: 97,
    responseTime: 2.1,
    userSatisfaction: 94,
  },
  {
    name: "Customer Support",
    successRate: 91,
    responseTime: 0.9,
    userSatisfaction: 88,
  },
  {
    name: "Data Analyst",
    successRate: 96,
    responseTime: 3.2,
    userSatisfaction: 91,
  },
]

const chartConfig = {
  successRate: {
    label: "Success Rate (%)",
    color: "hsl(var(--chart-1))",
  },
  responseTime: {
    label: "Response Time (s)",
    color: "hsl(var(--chart-2))",
  },
  userSatisfaction: {
    label: "User Satisfaction (%)",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function AgentPerformanceChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" domain={[0, 5]} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar yAxisId="left" dataKey="successRate" fill="hsl(var(--chart-1))" name="Success Rate (%)" />
          <Bar yAxisId="right" dataKey="responseTime" fill="hsl(var(--chart-2))" name="Response Time (s)" />
          <Bar yAxisId="left" dataKey="userSatisfaction" fill="hsl(var(--chart-3))" name="User Satisfaction (%)" />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
