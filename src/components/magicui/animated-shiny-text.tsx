"use client";

import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export function AnimatedShinyText({
  children,
  className,
  shimmerWidth = 100,
}: AnimatedShinyTextProps) {
  return (
    <span className={cn("relative inline-flex overflow-hidden", className)}>
      {children}

      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-shimmer"
        style={
          {
            "--shimmer-width": `${shimmerWidth}px`,
            backgroundImage:
              "linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.35) 50%, transparent 80%)",
            backgroundSize: "200% 100%",
          } as CSSProperties
        }
      />
    </span>
  );
}