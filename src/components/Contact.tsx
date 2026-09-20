import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function Contact() {
  const linkedIn = profile.links.find((link) => link.label === "LinkedIn");

  return (
    <section id="contacto" className="relative overflow-hidden bg-[#070b16] px-5 py-24 text-center text-white sm:px-8 sm:py-32">
      <div aria-hidden className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[#4058ff]/20 blur-[110px]" />
      <Reveal className="relative mx-auto max-w-[760px]">
        <p className="section-label !text-cyan-200/70">Contacto / 03</p>
        <h2 className="mx-auto mt-6 max-w-[11ch] text-[42px] font-semibold leading-[1.02] tracking-[-0.06em] sm:text-[64px]">
          ¿Tienes un reto técnico en mente?
        </h2>
        <p className="mx-auto mt-6 max-w-[49ch] text-[17px] leading-relaxed text-slate-300 sm:text-[19px]">
          Estoy abierto a conversar sobre productos, colaboración y oportunidades donde el software bien construido haga una diferencia.
        </p>

        {linkedIn && (
          <a
            href={linkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-white px-6 py-3.5 text-[14px] font-semibold text-[#0b1020] transition hover:-translate-y-0.5 hover:bg-cyan-100"
          >
            Conectemos en LinkedIn <span aria-hidden>↗</span>
          </a>
        )}

        <div className="mt-12 flex flex-wrap justify-center gap-x-7 gap-y-3 border-t border-white/10 pt-6">
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium text-slate-400 transition hover:text-white"
            >
              {link.label} <span className="text-slate-600" aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
