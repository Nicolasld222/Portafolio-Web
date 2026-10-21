"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  duration?: number;
};

/**
 * Infinite horizontal track. The content is duplicated so the loop is seamless.
 */
export default function Marquee({ children, className, reverse = false, duration = 42 }: MarqueeProps) {
  const reduce = useReducedMotion();

  return (
    <div className={`group relative flex overflow-hidden ${className ?? ""}`}>
      <div
        className="flex w-max shrink-0 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={reduce ? undefined : { animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
