import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="proyectos" className="relative overflow-hidden bg-transparent px-5 py-24 sm:px-8 sm:py-32">
      <div aria-hidden className="absolute left-0 top-40 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/10" />
      <div className="relative mx-auto max-w-content">
        <Reveal className="mb-14 grid max-w-[920px] gap-6 sm:mb-20 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
          <p className="section-label pt-2">Trabajo seleccionado / 02</p>
          <div>
            <h2 className="text-[38px] font-semibold leading-[1.02] tracking-[-0.055em] text-slate-950 dark:text-white sm:text-[56px]">
              Arquitectura que se puede explicar.
            </h2>
            <p className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-slate-500 dark:text-slate-400 sm:text-[17px]">
              No solo interfaces. Aquí está el razonamiento técnico detrás de un producto construido para operar y evolucionar.
            </p>
          </div>
        </Reveal>

        {projects.map((project) =>
          project.title === "UBIK" ? (
            <ProjectCard key={project.title} project={project} />
          ) : (
            <Reveal key={project.title}>
              <ProjectCard project={project} />
            </Reveal>
          ),
        )}
      </div>
    </section>
  );
}
