"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 46, reduce ? 0 : -46]);

  const pointerX = useMotionValue(-999);
  const pointerY = useMotionValue(-999);
  const tiltSourceX = useMotionValue(0);
  const tiltSourceY = useMotionValue(0);
  const tiltX = useSpring(tiltSourceX, { stiffness: 170, damping: 20, mass: 0.5 });
  const tiltY = useSpring(tiltSourceY, { stiffness: 170, damping: 20, mass: 0.5 });
  const spotlight = useMotionTemplate`radial-gradient(26rem circle at ${pointerX}px ${pointerY}px, rgba(244, 114, 182, 0.16), transparent 70%)`;

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reduce) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    pointerX.set(x);
    pointerY.set(y);
    tiltSourceY.set(((x / rect.width) - 0.5) * 5);
    tiltSourceX.set(((y / rect.height) - 0.5) * -5);
  };

  const handlePointerLeave = () => {
    pointerX.set(-999);
    pointerY.set(-999);
    tiltSourceX.set(0);
    tiltSourceY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={reduce ? undefined : { rotateX: tiltX, rotateY: tiltY, transformPerspective: 1200 }}
      id={project.visual === "booking" ? "ubik-arquitectura" : undefined}
      className="project-card group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#10101a]/75 p-4 shadow-[0_28px_100px_rgba(0,0,0,.28)] backdrop-blur-xl sm:rounded-[34px] sm:p-7 lg:p-8"
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-40 h-80 w-80 rounded-full blur-[100px] transition-opacity duration-500 ${
          project.visual === "booking" ? "-left-32 bg-cyan-400/10" : "-right-28 bg-violet-400/15"
        }`}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.06] font-mono text-[11px] text-white/70">
              {project.visual === "booking" ? "01" : "02"}
            </span>
            <p className="section-label">{project.eyebrow}</p>
          </div>
          <h3 className="mt-5 text-[38px] font-semibold leading-[1] tracking-[-0.06em] text-white sm:text-[50px]">
            {project.title}
          </h3>
          <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-slate-300 sm:text-[16px]">
            {project.summary}
          </p>

          <ul className="mt-6 space-y-3">
            {project.highlights.map((highlight, index) => (
              <motion.li
                key={highlight}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-3 text-[13px] leading-relaxed text-slate-300 sm:text-[14px]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-rose-300 shadow-[0_0_12px_rgba(251,113,133,.8)]" aria-hidden />
                <span>{highlight}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[10px] font-medium text-slate-300 transition-colors duration-300 hover:border-rose-300/40 hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-6">
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-[13px] font-semibold text-[#11101a] transition hover:-translate-y-0.5 hover:bg-rose-100 focus-visible:outline-white"
            >
              Ver repositorio <span aria-hidden>↗</span>
            </a>
            <Link
              href={project.secondaryAction.href}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 text-[13px] font-medium text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08]"
            >
              {project.secondaryAction.label} <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <motion.div style={{ y: visualY }} className="order-1 min-w-0 lg:order-2">
          <ProjectVisual title={project.title} variant={project.visual} />
        </motion.div>
      </div>
    </motion.article>
  );
}
