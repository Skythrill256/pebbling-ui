import React from "react";

import { cn } from "@/lib/utils";
interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function RainbowButton({
  children,
  className,
  ...props
}: RainbowButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        "bg-purple-600 hover:bg-purple-700", 
        className
      )}
    >
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-6 py-2 text-sm font-medium text-white",
          "bg-purple-600 hover:bg-purple-700" 
        )}
      >
        pip install pebbling
      </span>
    </button>
  );
}
