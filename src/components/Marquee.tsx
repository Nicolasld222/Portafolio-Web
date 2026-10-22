"use client";

import { useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
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
  const [viewportWidth, setViewportWidth] = useState(0);
  const isMobile = viewportWidth < 640;

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);

    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  return (
    <div className={`group relative flex overflow-hidden ${className ?? ""}`}>
      <div
        className="flex w-max shrink-0 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{
          animationDuration: `${isMobile ? 90 : duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
          ...(isMobile ? { animationPlayState: "paused" } : {}),
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
