import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, Users, CheckCircle, AlertTriangle, Clock } from "lucide-react"
import { CountUp } from "@/components/ui/count-up"

export function AgentMetricsOverview() {
  return (
    <>
      <Card className="border-l-4 border-l-purple-500 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <CardHeader className="pb-2">
          <CardDescription>Total Agents</CardDescription>
          <CardTitle className="text-2xl">
            <CountUp end={2853} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center text-green-600 font-medium">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              12% from last month
            </span>
            <Users className="h-4 w-4 text-purple-500" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-green-500 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <CardHeader className="pb-2">
          <CardDescription>Active Agents</CardDescription>
          <CardTitle className="text-2xl">
            <CountUp end={2142} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center text-green-600 font-medium">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              8% from last month
            </span>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-amber-500 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <CardHeader className="pb-2">
          <CardDescription>Success Rate</CardDescription>
          <CardTitle className="text-2xl">
            <CountUp end={94.7} decimals={1} suffix="%" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center text-green-600 font-medium">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              2.3% from last month
            </span>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-blue-500 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <CardHeader className="pb-2">
          <CardDescription>Avg. Response Time</CardDescription>
          <CardTitle className="text-2xl">
            <CountUp end={1.2} decimals={1} suffix="s" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center text-green-600 font-medium">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              18% improvement
            </span>
            <Clock className="h-4 w-4 text-blue-500" />
          </div>
        </CardContent>
      </Card>
    </>
  )
}
