"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RegionalDistributionChart } from "@/components/charts/regional-distribution-chart"
import { AgentStatusChart } from "@/components/charts/agent-status-chart"
import { SuccessRateChart } from "@/components/charts/success-rate-chart"
import { AgentPerformanceChart } from "@/components/charts/agent-performance-chart"
import { AgentMetricsOverview } from "@/components/agent-metrics-overview"
import { Badge } from "@/components/ui/badge"

export function AIAgentDashboard() {
  const [timeframe, setTimeframe] = useState("weekly")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true)
  }, [])

  return (
    <div className="w-full py-10 px-4">
      <div className="mb-8 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-medium tracking-tight text-purple-900 sm:text-5xl md:text-6xl" style={{
        fontFamily: 'BogueItalic, sans-serif',
        fontStyle: 'italic',
        
      }}>Built to scale</h1>
            <p className="text-muted-foreground">Monitor your AI agent performance and distribution across regions</p>
          </div>
          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Live Data</Badge>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-purple-50">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="regional">Regional</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <div
          className={`grid gap-4 md:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ${
            isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
          }`}
        >
          <AgentMetricsOverview />
        </div>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Regional Distribution</CardTitle>
                <CardDescription>AI agent distribution across global regions</CardDescription>
              </CardHeader>
              <CardContent>
                <RegionalDistributionChart />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Agent Status</CardTitle>
                <CardDescription>Active vs. inactive agents</CardDescription>
              </CardHeader>
              <CardContent>
                <AgentStatusChart />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Success Rate Trends</CardTitle>
                  <CardDescription>Agent success rate over time</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <TabsList className="bg-purple-50">
                    <TabsTrigger
                      value="weekly"
                      onClick={() => setTimeframe("weekly")}
                      className={timeframe === "weekly" ? "bg-purple-200 text-purple-900" : ""}
                    >
                      Weekly
                    </TabsTrigger>
                    <TabsTrigger
                      value="monthly"
                      onClick={() => setTimeframe("monthly")}
                      className={timeframe === "monthly" ? "bg-purple-200 text-purple-900" : ""}
                    >
                      Monthly
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <SuccessRateChart timeframe={timeframe} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="regional" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Regional Distribution Details</CardTitle>
              <CardDescription>Detailed breakdown of agent distribution and performance by region</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <RegionalDistributionChart detailed={true} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Agent Performance Metrics</CardTitle>
              <CardDescription>Detailed performance metrics for all agent types</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <AgentPerformanceChart />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
