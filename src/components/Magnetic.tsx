"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { ReactNode } from "react";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  strength?: number;
  ariaLabel?: string;
};

/**
 * Element that leans towards the cursor. Used for the primary calls to action.
 */
export default function Magnetic({
  children,
  className,
  href,
  target,
  rel,
  strength = 0.28,
  ariaLabel,
}: MagneticProps) {
  const reduce = useReducedMotion();
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const x = useSpring(offsetX, { stiffness: 240, damping: 18, mass: 0.4 });
  const y = useSpring(offsetY, { stiffness: 240, damping: 18, mass: 0.4 });

  const handlePointerMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (reduce) return;

    const rect = event.currentTarget.getBoundingClientRect();
    offsetX.set((event.clientX - rect.left - rect.width / 2) * strength);
    offsetY.set((event.clientY - rect.top - rect.height / 2) * strength);
  };

  const reset = () => {
    offsetX.set(0);
    offsetY.set(0);
  };

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={className}
      style={reduce ? undefined : { x, y }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      whileHover={reduce ? undefined : { scale: 1.04 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
}
