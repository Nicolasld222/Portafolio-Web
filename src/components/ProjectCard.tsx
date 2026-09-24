"use client";

import type { Project } from "@/data/projects";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ project }: { project: Project }) {
  if (project.title === "UBIK") {
    return <VerticalProjectCard project={project} />;
  }

  return (
    <article className="grid items-center gap-10 border-t border-slate-200 py-12 first:border-t-0 first:pt-0 dark:border-white/10 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16 lg:py-16">
      <ProjectVisual title={project.title} />

      <div>
        <p className="section-label">{project.eyebrow}</p>
        <h3 className="mt-4 text-[38px] font-semibold tracking-[-0.055em] text-slate-950 dark:text-white sm:text-[54px]">
          {project.title}
        </h3>
        <p className="mt-4 max-w-[48ch] text-[16px] leading-relaxed text-slate-600 dark:text-slate-300">
          {project.summary}
        </p>

        <ul className="mt-7 space-y-3.5">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">
              <span
                className="mt-[0.45rem] grid h-4 w-4 flex-none place-items-center rounded-full bg-accent/10 text-[10px] text-accent dark:bg-accent-dark/15 dark:text-accent-dark"
                aria-hidden
              >
                ✓
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2 border-t border-slate-200 pt-6 dark:border-white/10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-500 dark:border-white/10 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function VerticalProjectCard({ project }: { project: Project }) {
  return (
    <section className="relative border-t border-white/10 first:border-t-0">
      <div className="relative bg-gradient-to-br from-red-950/20 via-transparent to-black/20 px-5 py-12 sm:px-8 sm:py-16">
          <div className="relative mx-auto grid max-w-content items-center gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(248,113,113,.09),transparent_28rem)]"
            />

            <ProjectVisual title={project.title} />

            <div>
              <p className="section-label">{project.eyebrow}</p>
              <h3 className="mt-4 text-[38px] font-semibold tracking-[-0.055em] text-white sm:text-[54px]">
                {project.title}
              </h3>
              <p className="mt-4 max-w-[48ch] text-[16px] leading-relaxed text-slate-300">
                {project.summary}
              </p>
            </div>
          </div>
      </div>

      <div className="relative bg-black/10 px-5 py-12 sm:px-8 sm:py-16">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_82%_50%,rgba(248,113,113,.12),transparent_31rem)]"
            />

            <div className="relative mx-auto grid max-w-content items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-7">
                <p className="section-label">UBIK / Arquitectura</p>
                <h3 className="mt-4 max-w-[10ch] text-[38px] font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-[54px]">
                  Un sistema pensado para crecer.
                </h3>
              </div>

              <div>
                <ul className="space-y-4">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-[15px] leading-relaxed text-slate-300">
                      <span
                        className="mt-[0.45rem] grid h-4 w-4 flex-none place-items-center rounded-full bg-red-400/10 text-[10px] text-red-300"
                        aria-hidden
                      >
                        ✓
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
      </div>
    </section>
  );
}