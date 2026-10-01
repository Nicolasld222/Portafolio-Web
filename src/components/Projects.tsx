import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="proyectos" className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-40 h-[34rem] w-[70rem] -translate-x-1/2 rounded-full bg-violet-500/[0.07] blur-[130px]" />
      <div className="relative mx-auto max-w-content">
        <Reveal className="mb-12 grid gap-6 sm:mb-16 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
          <p className="section-label pt-2">Trabajo seleccionado / 02</p>
          <div>
            <h2 className="text-[38px] font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-[56px]">
              Proyectos que merecen ser vistos.
            </h2>
            <p className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-slate-300 sm:text-[17px]">
              De una plataforma de microservicios a este espacio personal construido con React. Diseño, decisiones técnicas y código abierto.
            </p>
          </div>
        </Reveal>

        <div className="space-y-7 sm:space-y-9">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
