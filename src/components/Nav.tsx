"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBriefcase,
  faClockRotateLeft,
  faEnvelope,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { profile } from "@/data/profile";

const navItems = [
  { href: "#proyectos", label: "Proyectos", icon: faBriefcase },
  { href: "#trayectoria", label: "Trayectoria", icon: faClockRotateLeft },
  { href: "#sobre-mi", label: "Perfil", icon: faUser },
];
const sectionIds = ["inicio", "proyectos", "trayectoria", "sobre-mi", "contacto"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("proyectos");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      let currentSection = "inicio";
      sectionIds.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 180) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed left-0 right-0 top-0 z-50 hidden transition-[background-color,border-color,box-shadow] duration-500 md:block ${
        scrolled
          ? "border-b border-white/10 bg-[#120709]/75 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      }`}>
        <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
          <a href="#inicio" className="group flex items-center gap-3 text-[20px] font-semibold tracking-tight text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-red-300/25 bg-red-500/10 text-xs text-red-300 shadow-[0_0_20px_rgba(239,68,68,0.18)] transition-transform group-hover:rotate-6">
              N
            </span>
            <span>{profile.name}</span>
          </a>
          <nav aria-label="Navegación principal">
            <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 shadow-inner shadow-white/5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={navLinkClasses(activeSection === item.href.slice(1))}>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contacto" className={`group ml-1 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-px ${
                  activeSection === "contacto"
                    ? "border-red-300/50 bg-red-500 text-white shadow-[0_0_22px_rgba(239,68,68,0.35)]"
                    : "border-red-300/20 bg-red-500/15 text-red-100 hover:border-red-300/50 hover:bg-red-500/30"
                }`}>
                  Contacto
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <nav aria-label="Navegación móvil" className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 md:hidden">
        <div className={`flex items-center gap-1 rounded-[1.75rem] border px-2 py-2 backdrop-blur-2xl transition-[background-color,border-color,box-shadow] duration-500 ${
          scrolled
            ? "border-white/10 bg-[#120709]/75 shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
            : "border-transparent bg-transparent shadow-none"
        }`}>
          {[
            { href: "#inicio", label: "Inicio", icon: faHouse },
            ...navItems,
            { href: "#contacto", label: "Contacto", icon: faEnvelope },
          ].map((item) => {
            const active = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.label}
                aria-current={active ? "location" : undefined}
                className={`flex h-12 min-w-0 flex-1 items-center justify-center rounded-2xl transition-all ${
                  active
                    ? "bg-red-500/15 text-red-200 shadow-sm"
                    : "text-white/55 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                <FontAwesomeIcon icon={item.icon} className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}

function navLinkClasses(active: boolean) {
  return `relative inline-flex items-center rounded-full px-4 py-2 text-[12px] font-medium transition-all duration-300 ${
    active
      ? "bg-white/10 text-white shadow-sm"
      : "text-white/55 hover:bg-white/[0.06] hover:text-white"
  }`;
}
