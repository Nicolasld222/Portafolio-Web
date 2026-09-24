"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundScene() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const pointerX = useSpring(useMotionValue(50), { stiffness: 90, damping: 24 });
  const pointerY = useSpring(useMotionValue(42), { stiffness: 90, damping: 24 });
  const [viewportWidth, setViewportWidth] = useState(0);
  // El orbe termina ligeramente fuera del borde para que el foco visual quede más a la derecha.
  const redOrbMaxX = Math.max(0, viewportWidth - 256);
  // Primero se desplaza en línea recta hacia la derecha; solo después empieza a bajar.
  const redOrbY = useTransform(scrollYProgress, [0, 0.55, 1], [0, 0, reduce ? 0 : 420]);
  const redOrbX = useTransform(scrollYProgress, [0, 0.55, 1], [0, reduce ? 0 : redOrbMaxX, reduce ? 0 : redOrbMaxX]);
  const secondaryOrbY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -420]);
  const gridGlowMask = useMotionTemplate`radial-gradient(15rem circle at ${pointerX}% ${pointerY}%, black 0%, rgba(0, 0, 0, 0.78) 35%, transparent 72%)`;

  useEffect(() => {
    if (reduce) return;

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set((event.clientX / window.innerWidth) * 100);
      pointerY.set((event.clientY / window.innerHeight) * 100);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerX, pointerY, reduce]);

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);

    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, reduce ? 1 : 1.2, 0.9]);

  return (
    <div className="site-background pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-40 top-[8%] h-[34rem] w-[34rem] rounded-full bg-red-700/25 blur-[120px]"
        style={{ x: redOrbX, y: redOrbY, scale: glowScale }}
      />
      <motion.div
        className="absolute -right-48 top-[42%] h-[30rem] w-[30rem] rounded-full bg-rose-950/70 blur-[110px]"
        style={{ y: secondaryOrbY }}
      />
      <div className="site-background-grid absolute -inset-10 opacity-55" />
      <motion.div
        className="site-background-grid site-background-grid--active absolute -inset-10"
        style={{
          maskImage: gridGlowMask,
          WebkitMaskImage: gridGlowMask,
        }}
      />
      <motion.div
        className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-3xl"
        style={{ left: `${pointerX}%`, top: `${pointerY}%` }}
      />
      <div className="site-background-noise absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/35 to-transparent" />
    </div>
  );
}
