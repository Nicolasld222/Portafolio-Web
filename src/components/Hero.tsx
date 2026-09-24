"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/data/profile";

const stack = ["Laravel", "Spring Boot", "React", "Docker"];

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 110]);
  const panelY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -36]);
  const rise = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-transparent px-5 pb-16 pt-28 text-white sm:px-8 sm:pt-24"
    >
      <motion.div aria-hidden style={{ y: backgroundY }} className="hero-grid pointer-events-none absolute -inset-y-24 inset-x-0 opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[18%] top-[-18%] h-[680px] w-[680px] rounded-full bg-red-600/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 left-[15%] h-[430px] w-[430px] rounded-full bg-red-400/10 blur-[110px]"
      />

      <div className="relative mx-auto grid w-full max-w-content items-center gap-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
        <div>
          <motion.p
            initial="hidden"
            animate="show"
            variants={rise}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-200/80"
          >
            <span className="h-2 w-2 rounded-full bg-red-300 shadow-[0_0_16px_#f87171]" />
            {profile.role}
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={rise}
            transition={{ duration: 0.82, delay: 0.14, ease: [0.2, 0.8, 0.2, 1] }}
            className="max-w-[10ch] text-[46px] font-semibold leading-[0.98] tracking-[-0.06em] sm:text-[68px] lg:text-[82px]"
          >
            Sistemas sólidos. Productos que escalan.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={rise}
            transition={{ duration: 0.75, delay: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-7 max-w-[50ch] text-[17px] leading-relaxed text-slate-300 sm:text-[19px]"
          >
            Soy {profile.name}. Construyo aplicaciones backend y full stack con una base técnica clara: datos confiables, APIs robustas e infraestructura lista para crecer.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={rise}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <a
              href="#proyectos"
              className="rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#0b1020] transition hover:-translate-y-0.5 hover:bg-red-100 focus-visible:outline-white"
            >
              Explorar proyectos <span aria-hidden>↗</span>
            </a>
            <a
              href="#contacto"
              className="group text-[14px] font-medium text-white/80 transition hover:text-white"
            >
              Hablemos <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span>
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={rise}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-14 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-5 text-[12px] text-slate-400"
          >
            <span>{profile.location}</span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span>{profile.availability}</span>
          </motion.div>
        </div>

        <motion.div
          style={{ y: panelY }}
          initial={{ opacity: 0, scale: reduce ? 1 : 0.96, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[490px] lg:justify-self-end"
        >
          <div className="absolute -inset-8 rounded-full bg-accent/15 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.055] p-4 shadow-[0_25px_100px_rgba(0,0,0,0.36)] backdrop-blur-xl sm:p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-1.5" aria-hidden>
                <span className="h-2 w-2 rounded-full bg-rose-300/70" />
                <span className="h-2 w-2 rounded-full bg-amber-200/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-300/70" />
              </div>
              <span className="font-mono text-[10px] tracking-[0.14em] text-slate-400">SYSTEM / OVERVIEW</span>
            </div>

            <div className="grid gap-4 py-5 sm:grid-cols-[1.25fr_0.75fr]">
              <div className="rounded-2xl border border-white/10 bg-[#080d1c]/70 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-red-200/75">Core stack</p>
                <div className="mt-5 space-y-3">
                  {stack.map((technology, index) => (
                    <div key={technology} className="flex items-center gap-3">
                      <span className="grid h-6 w-6 place-items-center rounded-md bg-white/[0.08] font-mono text-[10px] text-red-200">0{index + 1}</span>
                      <span className="text-[13px] text-slate-200">{technology}</span>
                      <span className="ml-auto h-1.5 w-10 rounded-full bg-white/[0.08]">
                        <span className="block h-full rounded-full bg-red-300" style={{ width: `${82 - index * 8}%` }} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-red-500/25 to-[#0c1224]/70 p-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-300">Now learning</p>
                  <p className="mt-3 text-[17px] font-medium leading-tight text-white">Secure by design.</p>
                </div>
                <div className="mt-10 space-y-2">
                  {profile.currentlyLearning.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[10px] text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3">
              <span className="font-mono text-[10px] text-slate-400">BUILDING WITH INTENTION</span>
              <span className="text-[11px] font-medium text-red-200">Backend-first</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
