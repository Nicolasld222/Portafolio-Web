"use client";

import { motion } from "framer-motion";
import { profile, type TimelineItem } from "@/data/profile";
import Reveal from "./Reveal";

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative space-y-5 before:absolute before:bottom-6 before:left-[7px] before:top-6 before:w-px before:bg-slate-200 dark:before:bg-white/10">
      {items.map((item, index) => (
        <motion.article
          key={`${item.organization}-${item.title}`}
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.55, delay: index * 0.08 }}
          className="relative pl-8"
        >
          <span className="absolute left-0 top-2.5 h-[15px] w-[15px] rounded-full border-4 border-[#130608] bg-accent shadow-[0_0_0_1px_#dc2626] dark:border-[#130608] dark:bg-accent-dark dark:shadow-[0_0_0_1px_#f87171]" />
          <div className="rounded-[22px] border border-slate-200/90 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/[0.06] dark:border-white/10 dark:bg-white/[0.035]">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent dark:text-accent-dark">{item.period}</p>
                <h3 className="mt-2 text-[19px] font-semibold tracking-tight text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-1 text-[14px] font-medium text-slate-500 dark:text-slate-400">{item.organization}</p>
              </div>
              <span className="hidden font-mono text-[10px] text-slate-300 sm:block dark:text-slate-600">0{index + 1}</span>
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
            {item.details.length > 0 && (
              <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-[13px] leading-relaxed text-slate-500 dark:border-white/10 dark:text-slate-400">
                {item.details.map((detail) => <li key={detail} className="flex gap-2"><span className="text-accent dark:text-accent-dark">+</span>{detail}</li>)}
              </ul>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="trayectoria" className="relative overflow-hidden bg-transparent px-5 py-24 sm:px-8 sm:py-32">
      <div className="relative mx-auto max-w-content">
        <Reveal className="mb-14 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
          <p className="section-label pt-2">Trayectoria / 02</p>
          <div>
            <h2 className="max-w-[12ch] text-[38px] font-semibold leading-[1.02] tracking-[-0.055em] text-slate-950 dark:text-white sm:text-[56px]">Experiencia que sigue creciendo.</h2>
            <p className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-slate-500 dark:text-slate-400">Un recorrido en construcción, con foco en aprender rápido, resolver con criterio y entregar software que sirva de verdad.</p>
          </div>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-6 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-accent dark:text-accent-dark">Experiencia profesional</p>
            <Timeline items={profile.experience} />
          </div>
          <div>
            <p className="mb-6 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-accent dark:text-accent-dark">Formación</p>
            <Timeline items={profile.education} />
            <div className="mt-12 border-t border-slate-200 pt-7 dark:border-white/10">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-accent dark:text-accent-dark">Idiomas</p>
              <div className="mt-5 space-y-4">
                {profile.languages.map((language) => (
                  <div key={language.name}>
                    <div className="flex items-center justify-between text-[13px] font-medium text-slate-600 dark:text-slate-300"><span>{language.name}</span><span className="text-slate-400">{language.level}</span></div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10"><motion.div initial={{ width: 0 }} whileInView={{ width: `${language.value}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full rounded-full bg-accent dark:bg-accent-dark" /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}