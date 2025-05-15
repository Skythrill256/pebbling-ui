
import { AIActivityChart } from "@/components/ai-activity-chart"
import { ArrowUpIcon, ArrowDownIcon, ActivityIcon } from "lucide-react"

export default function Matrices() {
  return (
    <div className="w-full flex flex-col items-center mt-20 h-fit bg-primary p-4">
         <h1 className="text-4xl font-medium tracking-tight text-purple-900 sm:text-5xl md:text-6xl"style={{
                fontFamily: 'BogueItalic, sans-serif',
                fontStyle: 'italic',
                
              }} >
              Our AI agents in the last 
            </h1>
            <span className="text-4xl font-medium tracking-tight text-purple-900 sm:text-5xl md:text-6xl">24 hours </span> 
      <div className="w-full flex flex-col px-10 md:px-20 ">
        <h1 className="pb-2">
          <span className="text-sm font-medium text-purple-800">AI Agent Activity (24h)</span>
        </h1>
        <div>
          <div className="flex flex-col gap-4">
            {/* Chart section */}
            <div className="w-full ">
              <AIActivityChart />
            </div>

            {/* Text section */}
            <div className="w-full  flex flex-col justify-center space-y-3 text-sm">
              <div className="flex items-center">
                <ActivityIcon className="h-4 w-4 text-purple-700 mr-2" />
                <span className="font-medium text-purple-900">Current Status</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Agents:</span>
                  <div className="flex items-center">
                    <span className="font-semibold text-purple-800">38</span>
                    <ArrowUpIcon className="h-3 w-3 text-green-500 ml-1" />
                    <span className="text-xs text-green-500 ml-0.5">12%</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Working Agents:</span>
                  <div className="flex items-center">
                    <span className="font-semibold text-purple-800">24</span>
                    <ArrowDownIcon className="h-3 w-3 text-red-500 ml-1" />
                    <span className="text-xs text-red-500 ml-0.5">5%</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Efficiency Rate:</span>
                  <span className="font-semibold text-purple-800">63%</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-gray-500">
                <p>Peak activity observed at 14:00 with 42 active agents.</p>
                <p className="mt-1">System performance remains optimal with no reported issues in the last 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
