"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { ReactNode } from "react";

type SpotlightProps = {
  children: ReactNode;
  className?: string;
  glow?: string;
  radius?: string;
  activeClassName?: string;
  overlayClassName?: string;
};

/**
 * Wrapper that lights up the area around the cursor with a soft radial glow.
 */
export default function Spotlight({
  children,
  className,
  glow = "rgba(248, 113, 133, 0.16)",
  radius = "20rem",
  activeClassName = "group-hover:opacity-100",
  overlayClassName = "rounded-[inherit]",
}: SpotlightProps) {
  const reduce = useReducedMotion();
  const pointerX = useMotionValue(-999);
  const pointerY = useMotionValue(-999);
  const x = useSpring(pointerX, { stiffness: 160, damping: 24, mass: 0.5 });
  const y = useSpring(pointerY, { stiffness: 160, damping: 24, mass: 0.5 });
  const background = useMotionTemplate`radial-gradient(${radius} circle at ${x}px ${y}px, ${glow}, transparent 72%)`;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;

    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - rect.left);
    pointerY.set(event.clientY - rect.top);
  };

  const handlePointerLeave = () => {
    pointerX.set(-999);
    pointerY.set(-999);
  };

  return (
    <div
      className={`group relative ${className ?? ""}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
      <motion.div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-no-repeat opacity-0 transition-opacity duration-500 ${activeClassName} ${overlayClassName}`}
        style={{ background }}
      />
    </div>
  );
}
