import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre-mi" className="relative overflow-hidden bg-transparent px-5 py-24 sm:px-6 sm:py-32">
      <div aria-hidden className="absolute right-[-12rem] top-20 h-80 w-80 rounded-full bg-accent/[0.07] blur-3xl" />
      <div className="relative mx-auto max-w-content">
        <Reveal className="grid items-start gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <p className="section-label">Perfil / 01</p>
            {/* <div className="mt-6 flex h-36 w-full max-w-[260px] items-end justify-between rounded-[24px] border border-dashed border-slate-300 bg-[#0b1020] p-4 font-mono text-[32px] font-medium tracking-[-0.12em] text-white shadow-xl shadow-slate-900/10 sm:h-44 sm:text-[42px]" aria-label="Espacio reservado para fotografía de perfil">
              <span>{profile.initials}</span>
              <span className="text-[9px] font-normal tracking-[0.16em] text-red-200/70">PHOTO / 01</span>
            </div> */}
            <p className="mt-7 max-w-[30ch] text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
              Desarrollo con criterio de producto y una obsesión sana por los fundamentos técnicos.
            </p>
            <div className="mt-8 space-y-3 border-t border-slate-200 pt-5 dark:border-white/10">
              {profile.principles.map((principle, index) => (
                <p key={principle} className="flex items-center gap-3 text-[12px] font-medium text-slate-600 dark:text-slate-300">
                  <span className="font-mono text-[10px] text-accent dark:text-accent-dark">0{index + 1}</span>
                  {principle}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="max-w-[15ch] text-[30px] font-semibold leading-[1.04] tracking-[-0.055em] text-slate-950 dark:text-white sm:text-[56px]">
              Del modelo de datos a una experiencia completa.
            </h2>

            <div className="mt-8 max-w-[62ch] space-y-5 text-[17px] leading-relaxed text-slate-600 dark:text-slate-300">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 grid gap-4">
              {profile.skillGroups.map((group, index) => (
                <article
                  key={group.label}
                  className="group rounded-[22px] border border-slate-200/90 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-slate-900/[0.05] dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-accent-dark/40"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-[37ch]">
                      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-accent dark:text-accent-dark">0{index + 1} / Especialidad</p>
                      <h3 className="mt-2 text-[18px] font-semibold tracking-tight text-slate-950 dark:text-white">{group.label}</h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-slate-500 dark:text-slate-400">{group.description}</p>
                    </div>
                    <span className="text-[18px] text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent dark:text-slate-600" aria-hidden>↗</span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-white/[0.08] dark:text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
