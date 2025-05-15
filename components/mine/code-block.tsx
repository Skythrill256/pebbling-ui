"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  title?: string
  className?: string
}

export function CodeBlock({ code, title = "Install with pip", className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("w-full max-w-xl rounded-xl bg-white shadow-md ring-1 ring-gray-200", className)}>
      <div className="flex items-center justify-between rounded-t-xl border-b bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600">
        <div className="flex items-center space-x-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-4">{title}</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="text-gray-400 transition hover:text-gray-600"
          aria-label="Copy code"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>

      <pre className="overflow-x-auto px-4 py-4 text-sm">
        <code className=" text-purple-600">$ {code}</code>
      </pre>
    </div>
  )
}
