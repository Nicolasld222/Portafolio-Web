"use client";

import { profile } from "@/data/profile";
import Marquee from "./Marquee";

export default function TechMarquee() {
  const technologies = profile.skillGroups.flatMap((group) => group.items);

  return (
    <section aria-label="Stack tecnológico" className="relative border-y border-white/10 bg-white/[0.015] py-5">
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#07050a] to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#07050a] to-transparent" />

      <Marquee duration={46}>
        {technologies.map((technology) => (
          <span key={technology} className="flex items-center">
            <span className="whitespace-nowrap text-[13px] font-medium tracking-tight text-slate-400 transition-colors duration-300 hover:text-white">
              {technology}
            </span>
            <span aria-hidden className="mx-8 h-1 w-1 rounded-full bg-red-400/70" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
