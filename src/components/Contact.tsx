import { profile } from "@/data/profile";
import Reveal from "./Reveal";
import SplitText from "./SplitText";
import Magnetic from "./Magnetic";
import CopyEmail from "./CopyEmail";

export default function Contact() {
  const linkedIn = profile.links.find((link) => link.label === "LinkedIn");

  return (
    <section id="contacto" className="relative overflow-hidden bg-transparent px-5 py-24 text-center text-white sm:px-8 sm:py-32">
      <div aria-hidden className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-red-600/20 blur-[110px]" />
      <div aria-hidden className="absolute left-1/2 top-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[130px]" />
      <Reveal className="relative mx-auto max-w-[760px]">
        <p className="section-label !text-red-200/75">Contacto / 03</p>
        <h2 className="mx-auto mt-6 max-w-[11ch] text-[42px] font-semibold leading-[1.02] tracking-[-0.06em] sm:text-[64px]">
          <SplitText as="span" text="¿Tienes un reto técnico en mente?" className="block" />
        </h2>
        <p className="mx-auto mt-6 max-w-[49ch] text-[17px] leading-relaxed text-slate-300 sm:text-[19px]">
          Estoy abierto a conversar sobre productos, colaboración y oportunidades donde el software bien construido haga una diferencia.
        </p>

        {linkedIn && (
          <div className="relative mt-12 inline-block">
            <span aria-hidden className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-red-500/25 blur-md" />
            <span aria-hidden className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-red-500/25 blur-md [animation-delay:1.1s]" />
            <Magnetic
              href={linkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              strength={0.35}
              className="group inline-block rounded-full bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0b1020] shadow-[0_18px_50px_rgba(239,68,68,0.28)] focus-visible:outline-white"
            >
              Conectemos en LinkedIn <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </Magnetic>
          </div>
        )}

        <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] text-slate-400">
          <CopyEmail email={profile.email} />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-7 gap-y-3 border-t border-white/10 pt-6">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-[13px] font-medium text-slate-400 transition hover:text-white"
            >
              {link.label}{" "}
              <span className="text-slate-600 transition-transform duration-300 inline-block group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
