"use client"

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

const data = [
  { name: "North America", value: 1245, fill: "hsl(var(--chart-1))" },
  { name: "Europe", value: 864, fill: "hsl(var(--chart-2))" },
  { name: "Asia Pacific", value: 543, fill: "hsl(var(--chart-3))" },
  { name: "Latin America", value: 321, fill: "hsl(var(--chart-4))" },
  { name: "Africa", value: 156, fill: "hsl(var(--chart-5))" },
]

const detailedData = [
  { region: "North America", agents: 1245, active: 1050, success: 96 },
  { region: "Europe", agents: 864, active: 720, success: 94 },
  { region: "Asia Pacific", agents: 543, active: 480, success: 92 },
  { region: "Latin America", agents: 321, active: 250, success: 91 },
  { region: "Africa", agents: 156, active: 120, success: 89 },
]

const chartConfig = {
  agents: {
    label: "Total Agents",
    color: "hsl(var(--chart-1))",
  },
  active: {
    label: "Active Agents",
    color: "hsl(var(--chart-2))",
  },
  success: {
    label: "Success Rate (%)",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
]

export function RegionalDistributionChart({ detailed = false }: { detailed?: boolean }) {
  if (detailed) {
    return (
      <ChartContainer config={chartConfig} className="h-[350px]">
        <BarChart data={detailedData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="region" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" domain={[80, 100]} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar yAxisId="left" dataKey="agents" fill="hsl(var(--chart-1))" name="Total Agents" />
          <Bar yAxisId="left" dataKey="active" fill="hsl(var(--chart-2))" name="Active Agents" />
          <Bar yAxisId="right" dataKey="success" fill="hsl(var(--chart-3))" name="Success Rate (%)" />
          <Legend />
        </BarChart>
      </ChartContainer>
    )
  }

  return (
    <ChartContainer
      config={{
        value: {
          label: "Agents",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value} agents`, "Count"]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
