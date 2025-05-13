"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Users, 
  PieChart, 
  ArrowRight, 
  AreaChart, 
  CircleDot, 
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FeatureProps {
  title: string;
  description: string;
  imageSrc: React.ReactNode;
  points: string[];
  isReversed?: boolean;
  accentColor: string;
  index: number;
}

const FeatureHighlight = ({ 
  title, 
  description, 
  imageSrc, 
  points, 
  isReversed,
  accentColor,
  index
}: FeatureProps) => {
  return (
    <div className={cn(
      "flex flex-col gap-8 py-16 items-center",
      "lg:flex-row lg:gap-16",
      isReversed && "lg:flex-row-reverse"
    )}>
      {/* Content */}
      <motion.div 
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8, 
          delay: 0.2,
          type: "spring",
          stiffness: 50,
          damping: 15
        }}
      >
        <Badge
          className={cn(
            "px-4 py-1 border-0 text-white", 
            accentColor.replace('text-', 'bg-')
          )}
        >
          Feature {index + 1}
        </Badge>
        
        <h3 className="text-3xl font-bold tracking-tight text-gray-900">
          {title}
        </h3>
        
        <p className="text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-3 pt-3">
          {points.map((point, i) => (
            <motion.div 
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4 + (i * 0.1),
                type: "spring"
              }}
            >
              <CheckCircle2 className={cn("h-5 w-5 mt-0.5", accentColor)} />
              <span className="text-gray-700">{point}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="pt-4"
        >
          <Button variant="ghost" className={cn("group px-0 text-sm hover:bg-transparent", accentColor)}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Image/Screenshot */}
      <motion.div 
        className="relative flex-1 min-h-[400px] md:min-h-[500px]"
        initial={{ opacity: 0, scale: 0.8, x: isReversed ? -50 : 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8, 
          delay: 0.3,
          type: "spring",
          stiffness: 50,
          damping: 15
        }}
      >
        <div className="relative bg-white rounded-xl p-6 shadow-xl border border-gray-100 w-full h-full overflow-hidden">
          {/* Light mode dashboard screenshot UI */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white z-0"></div>
          
          <div className="relative z-10 h-full">
            {imageSrc}
          </div>
          
          {/* Decorative elements */}
          <motion.div 
            className={cn(
              "absolute h-40 w-40 rounded-full -bottom-10 -right-10 opacity-10", 
              accentColor.replace('text-', 'bg-')
            )}
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

// Dashboard UI components
const DashboardAnalytics = () => (
  <div className="h-full flex flex-col">
    {/* Dashboard Header */}
    <div className="flex justify-between items-center mb-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Business Analytics</h3>
        <p className="text-sm text-gray-500">Performance Overview</p>
      </div>
      <div className="flex gap-2">
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-100">Daily</Badge>
        <Badge variant="outline" className="bg-gray-50 text-gray-500 border-gray-100">Weekly</Badge>
        <Badge variant="outline" className="bg-gray-50 text-gray-500 border-gray-100">Monthly</Badge>
      </div>
    </div>
    
    {/* KPI Stats */}
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-blue-50 rounded-lg p-4">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Revenue</span>
          <AreaChart className="h-4 w-4 text-blue-600" />
        </div>
        <div className="mt-2">
          <span className="text-2xl font-bold text-gray-900">$47,512</span>
          <div className="flex items-center mt-1">
            <Badge className="bg-green-100 text-green-700 text-xs">+12.5%</Badge>
          </div>
        </div>
      </div>
      
      <div className="bg-purple-50 rounded-lg p-4">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Users</span>
          <Users className="h-4 w-4 text-purple-600" />
        </div>
        <div className="mt-2">
          <span className="text-2xl font-bold text-gray-900">2,845</span>
          <div className="flex items-center mt-1">
            <Badge className="bg-green-100 text-green-700 text-xs">+8.3%</Badge>
          </div>
        </div>
      </div>
      
      <div className="bg-emerald-50 rounded-lg p-4">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Conversion</span>
          <PieChart className="h-4 w-4 text-emerald-600" />
        </div>
        <div className="mt-2">
          <span className="text-2xl font-bold text-gray-900">24.8%</span>
          <div className="flex items-center mt-1">
            <Badge className="bg-green-100 text-green-700 text-xs">+3.2%</Badge>
          </div>
        </div>
      </div>
    </div>
    
    {/* Chart */}
    <div className="flex-1 bg-white rounded-lg border border-gray-100 p-4 relative overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-medium text-gray-700">Monthly Performance</h4>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="flex items-center">
            <div className="h-2 w-2 bg-blue-500 rounded-full mr-1"></div>
            Revenue
          </div>
          <div className="flex items-center">
            <div className="h-2 w-2 bg-emerald-500 rounded-full mr-1"></div>
            Growth
          </div>
        </div>
      </div>
      
      {/* Animated chart bars */}
      <div className="flex items-end justify-between h-32 mt-4">
        {[35, 58, 43, 70, 64, 48, 53, 45, 60, 75, 62].map((height, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <motion.div 
              className="w-6 bg-blue-500 rounded-t-sm opacity-80"
              initial={{ height: 0 }}
              whileInView={{ height: `${height * 0.4}%` }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.1 * i,
                type: "spring",
                stiffness: 50,
                damping: 15
              }}
            ></motion.div>
            <span className="text-xs text-gray-500">{i+1}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TaskManagement = () => (
  <div className="h-full flex flex-col">
    {/* Header */}
    <div className="flex justify-between items-center mb-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Task Management</h3>
        <p className="text-sm text-gray-500">July 8, 2025</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
          <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs">JC</div>
          <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs">TK</div>
          <div className="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">AL</div>
        </div>
        <Badge className="bg-indigo-100 text-indigo-700">+2</Badge>
      </div>
    </div>
    
    {/* Task Progress */}
    <div className="space-y-6 mb-8">
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium text-gray-700">Marketing Data Analysis</span>
          <span className="text-green-600">Approved</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-yellow-400" 
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          ></motion.div>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium text-gray-700">Review and Reporting</span>
          <span className="text-purple-600">In Progress</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-purple-400" 
            initial={{ width: "0%" }}
            whileInView={{ width: "60%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          ></motion.div>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium text-gray-700">Data Overview</span>
          <span className="text-blue-600">In Progress</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-400" 
            initial={{ width: "0%" }}
            whileInView={{ width: "45%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
          ></motion.div>
        </div>
      </div>
    </div>
    
    {/* Status Chart */}
    <div className="flex-1 bg-white rounded-lg border border-gray-100 p-4">
      <h4 className="text-sm font-medium text-gray-700 mb-4">Overall Progress</h4>
      <div className="flex">
        <div className="flex-1">
          <div className="space-y-2">
            {["Business Analytics", "Project Management", "User Engagement", "Client Management"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CircleDot className={`h-3 w-3 ${i === 0 ? 'text-yellow-500' : i === 1 ? 'text-purple-500' : i === 2 ? 'text-blue-500' : 'text-green-500'}`} />
                <span className="text-xs text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="h-32 grid grid-cols-4 items-end gap-2">
            {[65, 40, 55, 35].map((height, i) => (
              <motion.div 
                key={i} 
                className={`w-full rounded-t-sm ${i === 0 ? 'bg-yellow-400' : i === 1 ? 'bg-purple-400' : i === 2 ? 'bg-blue-400' : 'bg-green-400'}`}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2 * i,
                  type: "spring",
                  stiffness: 50,
                  damping: 15
                }}
              ></motion.div>
            ))}
          </div>
          <div className="grid grid-cols-4 mt-2">
            {["Q1", "Q2", "Q3", "Q4"].map((q, i) => (
              <div key={i} className="flex justify-center">
                <span className="text-xs text-gray-500">{q}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CollaborationBoard = () => (
  <div className="h-full flex flex-col">
    {/* Header */}
    <div className="flex justify-between items-center mb-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Team Collaboration</h3>
        <p className="text-sm text-gray-500">Real-time updates</p>
      </div>
      <Badge className="bg-green-100 text-green-700">5 online</Badge>
    </div>
    
    {/* Collaboration area */}
    <div className="mb-4 flex gap-2">
      <div className="flex -space-x-2 mr-2">
        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs border-2 border-white">SM</div>
        <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs border-2 border-white">RK</div>
        <div className="h-8 w-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs border-2 border-white">AL</div>
        <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs border-2 border-white">JD</div>
      </div>
      <Badge className="bg-indigo-100 text-indigo-700 flex items-center">
        <span className="text-xs">Started Chat</span>
      </Badge>
    </div>
    
    {/* Notes section */}
    <div className="flex-1 rounded-xl border border-gray-200 p-4 bg-white overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-medium text-gray-700">Add a Note</h4>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-gray-500 mb-1">Type your note here...</p>
          <div className="h-20 border border-dashed border-gray-300 rounded-md bg-white flex items-center justify-center">
            <span className="text-sm text-gray-400">Click to add content</span>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex gap-2">
              <Badge variant="outline" className="bg-white border-gray-200 text-gray-500 text-xs">Bold</Badge>
              <Badge variant="outline" className="bg-white border-gray-200 text-gray-500 text-xs">Italic</Badge>
              <Badge variant="outline" className="bg-white border-gray-200 text-gray-500 text-xs">Underline</Badge>
            </div>
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs">Assign</Button>
          </div>
        </motion.div>
      </div>
      
      {/* Previous notes */}
      <div className="space-y-4">
        {[1, 2, 3, 4].map((_, i) => (
          <motion.div 
            key={i}
            className="flex gap-3 items-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0.1 * i,
              type: "spring",
              stiffness: 50,
              damping: 15
            }}
          >
            <div className={`h-6 w-6 rounded-full flex items-center justify-center text-white text-xs ${i % 3 === 0 ? 'bg-indigo-500' : i % 3 === 1 ? 'bg-pink-500' : 'bg-amber-500'}`}>
              {i % 3 === 0 ? 'SM' : i % 3 === 1 ? 'AL' : 'RK'}
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500">Type your note...</p>
              <div className="flex justify-between items-center">
                <div className="h-1 w-full max-w-[140px] bg-gray-100 rounded-full">
                  <div className={`h-full rounded-full ${i % 3 === 0 ? 'bg-indigo-400' : i % 3 === 1 ? 'bg-pink-400' : 'bg-amber-400'}`} style={{ width: `${100 - (i * 20)}%` }}></div>
                </div>
                <div className="flex gap-1">
                  <div className="h-2 w-2 bg-yellow-400 rounded-full"></div>
                  <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export function FeaturesSection() {
  const features = [
    {
      title: "See Your Business Pulse At Once",
      description: "Our intuitive dashboard unifies key metrics in one place, enabling quick, informed decisions for your business's daily operations.",
      imageSrc: <DashboardAnalytics />,
      points: [
        "Real-time performance analytics",
        "Interactive data visualization",
        "Customizable KPI tracking",
        "Trend analysis and forecasting"
      ],
      accentColor: "text-blue-600",
      isReversed: false
    },
    {
      title: "Manage Tasks Smartly, Get Things Done",
      description: "Prioritize tasks, delegate effectively, and track progress with ease. Our smart system helps you accomplish more each day.",
      imageSrc: <TaskManagement />,
      points: [
        "Intuitive task prioritization",
        "Progress tracking visualizations",
        "Team performance analytics",
        "Deadline management system"
      ],
      accentColor: "text-purple-600",
      isReversed: true
    },
    {
      title: "Work Together Anywhere With Your Team",
      description: "Collaborate in real-time, no matter where you are. Share ideas, documents, and progress effortlessly with teammates.",
      imageSrc: <CollaborationBoard />,
      points: [
        "Real-time collaborative workspaces",
        "Document sharing and version control",
        "Team communication channels",
        "Cross-platform synchronization"
      ],
      accentColor: "text-indigo-600",
      isReversed: false
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge
            className="px-4 py-1 border-0 bg-indigo-100 text-indigo-800 mb-4"
          >
            Powerful Features
          </Badge>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            Empower Your Workflow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our powerful tools can transform your daily operations
            and help your business reach new heights.
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <FeatureHighlight
              key={index}
              {...feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
