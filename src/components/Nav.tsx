"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#070b16]/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" className={`flex items-center gap-2 text-[13px] font-semibold tracking-tight ${scrolled ? "text-slate-900 dark:text-white" : "text-white"}`}>
          <span className="grid h-7 w-7 place-items-center rounded-md border border-current/25 font-mono text-[10px] tracking-[-0.08em]">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>
        <nav aria-label="Navegación principal">
          <ul className="flex items-center gap-4 sm:gap-7">
            <li>
              <a href="#proyectos" className={navLinkClasses(scrolled)}>
                Proyectos
              </a>
            </li>
            <li>
              <a href="#sobre-mi" className={navLinkClasses(scrolled)}>
                Perfil
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="rounded-full bg-accent px-3.5 py-2 text-[12px] font-semibold text-white transition hover:-translate-y-px hover:opacity-90 dark:bg-accent-dark sm:px-4 sm:text-[13px]"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function navLinkClasses(scrolled: boolean) {
  return `text-[12px] font-medium transition-colors sm:text-[13px] ${
    scrolled
      ? "text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
      : "text-white/65 hover:text-white"
  }`;
}
