"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundScene() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [viewportWidth, setViewportWidth] = useState(0);
  const isMobile = viewportWidth < 640;
  const pointerSourceX = useMotionValue(50);
  const pointerSourceY = useMotionValue(42);
  const pointerX = useSpring(pointerSourceX, { stiffness: 90, damping: 24 });
  const pointerY = useSpring(pointerSourceY, { stiffness: 90, damping: 24 });
  const accentOrbMaxX = Math.max(0, viewportWidth - 256);
  const accentOrbY = useTransform(scrollYProgress, [0, 0.55, 1], [0, reduce ? 0 : 210, reduce ? 0 : 420]);
  const accentOrbX = useTransform(scrollYProgress, [0, 0.55, 1], [0, reduce ? 0 : accentOrbMaxX, reduce ? 0 : accentOrbMaxX]);
  const secondaryOrbY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -420]);
  const gridGlowMask = useMotionTemplate`radial-gradient(15rem circle at ${pointerX}% ${pointerY}%, black 0%, rgba(0, 0, 0, 0.78) 35%, transparent 72%)`;
  const sheenMask = useMotionTemplate`radial-gradient(22rem circle at ${pointerX}% ${pointerY}%, black 0%, transparent 68%)`;

  useEffect(() => {
    if (reduce || isMobile) return;

    const handlePointerMove = (event: PointerEvent) => {
      pointerSourceX.set((event.clientX / window.innerWidth) * 100);
      pointerSourceY.set((event.clientY / window.innerHeight) * 100);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerSourceX, pointerSourceY, reduce, isMobile]);

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);

    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, reduce ? 1 : 1.2, 0.9]);

  return (
    <div className="site-background pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className={`absolute -left-40 top-[8%] h-[34rem] w-[34rem] animate-aurora-a motion-reduce:animate-none ${isMobile ? "blur-[60px]" : "blur-[120px]"}`}>
        <motion.div
          className="h-full w-full rounded-full bg-cyan-500/20"
          style={{ x: accentOrbX, y: accentOrbY, scale: glowScale }}
        />
      </div>
      <div className={`absolute -right-48 top-[42%] h-[30rem] w-[30rem] animate-aurora-b motion-reduce:animate-none ${isMobile ? "blur-[55px]" : "blur-[110px]"}`}>
        <motion.div className="h-full w-full rounded-full bg-violet-600/25" style={{ y: secondaryOrbY }} />
      </div>
      <div className="absolute left-[45%] top-[70%] h-[26rem] w-[26rem] animate-aurora-a motion-reduce:animate-none [animation-delay:-12s]">
        <div className="h-full w-full rounded-full bg-fuchsia-600/[0.14]" />
      </div>

      <div className="site-background-grid absolute -inset-10 opacity-55" />
      <motion.div
        className={`site-background-grid site-background-grid--active absolute -inset-10 ${isMobile ? "opacity-20" : ""}`}
        style={{
          maskImage: gridGlowMask,
          WebkitMaskImage: gridGlowMask,
        }}
      />
      <motion.div
        className={`site-background-grid site-background-grid--active absolute -inset-10 opacity-40 ${isMobile ? "opacity-10" : ""}`}
        style={{
          maskImage: sheenMask,
          WebkitMaskImage: sheenMask,
        }}
      />
      {!isMobile && (
        <motion.div
          className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-400/10 blur-3xl"
          style={{ left: `${pointerX}%`, top: `${pointerY}%` }}
        />
      )}
      <div className="site-background-noise absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/35 to-transparent" />
    </div>
  );
}
