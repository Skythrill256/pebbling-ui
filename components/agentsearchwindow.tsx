'use client'

import { useState } from 'react'
import { Search, Bot, X, Minus, Maximize2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'

interface Agent {
  id: string
  name: string
  description: string
  category: string
}

const agents: Agent[] = [
  {
    id: '1',
    name: 'Hibiscus',
    description: 'Creative writing and storytelling assistant',
    category: 'Creative'
  },
  {
    id: '2',
    name: 'Orchid',
    description: 'Data analysis and visualization expert',
    category: 'Analytics'
  },
  {
    id: '3',
    name: 'Lavender',
    description: 'Meditation and wellness guide',
    category: 'Wellness'
  },
  {
    id: '4',
    name: 'Jasmine',
    description: 'Language translation and learning assistant',
    category: 'Education'
  },
  {
    id: '5',
    name: 'Rose',
    description: 'Relationship and communication advisor',
    category: 'Personal'
  },
  {
    id: '6',
    name: 'Lily',
    description: 'Financial planning and investment assistant',
    category: 'Finance'
  },
  {
    id: '7',
    name: 'Daisy',
    description: 'Task management and productivity coach',
    category: 'Productivity'
  }
]

export default function AgentSearchWindow() {
  const [searchQuery, setSearchQuery] = useState('')
  
  
  const filteredAgents = agents.filter(agent => 
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.description.toLowerCase().includes(searchQuery.toLowerCase())
  )
  
//   const handleAgentClick = (agent: Agent) => {
//     toast({
//       title: `Agent Selected: ${agent.name}`,
//       description: "Let's explore hibiscus to use this feature",
//       duration: 3000,
//     })
//   }
  
  return (
    <div className="flex justify-center items-center p-8 w-full">
      <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-xl border border-purple-100 h-[600px]">
        {/* MacBook window header */}
        <div className="bg-gray-100 px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="mx-auto text-sm text-gray-500">
            AI Agent Explorer
          </div>
        </div>
        
        {/* Search area */}
        <div className="bg-white p-6">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:none" size={18} />
            <Input
              type="text"
              placeholder="Search AI agents..."
              className="pl-10 focus:border-0 "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Agents list */}
          <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 purple-scrollbar">
            {filteredAgents.length > 0 ? (
              filteredAgents.map((agent) => (
                <div
                  key={agent.id}
                //   onClick={() => handleAgentClick(agent)}
                  className="p-4 rounded-md border border-gray-100 hover:border-purple-300 hover:bg-purple-50 cursor-pointer transition-all"
                >
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <Bot className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-purple-900">{agent.name}</h3>
                      <p className="text-sm text-gray-500">{agent.description}</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700">
                      {agent.category}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No agents found matching your search.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}