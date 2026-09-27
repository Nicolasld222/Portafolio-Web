"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1" aria-hidden="true">
      <div className="absolute inset-0 bg-white/[0.06]" />
      <motion.div
        className="absolute inset-y-0 left-0 origin-left bg-gradient-to-r from-red-700 via-red-400 to-orange-200 shadow-[0_0_14px_rgba(248,113,113,0.9)]"
        style={{ scaleX }}
      />
      <div className="absolute right-3 top-2 hidden h-1 w-1 rounded-full bg-red-300 shadow-[0_0_10px_3px_rgba(248,113,113,0.45)] sm:block" />
    </div>
  );
}