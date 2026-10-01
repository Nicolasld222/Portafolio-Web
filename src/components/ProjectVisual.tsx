import Image from "next/image";

type ProjectVisualProps = {
  title: string;
  variant: "booking" | "portfolio";
};

export default function ProjectVisual({ title, variant }: ProjectVisualProps) {
  if (variant === "portfolio") {
    return <PortfolioPreview title={title} />;
  }

  return <BookingPreview />;
}

function BookingPreview() {
  const services = ["Users", "Stays", "Payments", "Notify"];

  return (
    <div
      role="img"
      aria-label="Vista ilustrada de UBIK: panel de reservas y servicios conectados a un API Gateway"
      className="project-preview relative aspect-[1.24/1] overflow-hidden rounded-[24px] border border-white/10 bg-[#100d17] p-4 shadow-2xl shadow-black/20 sm:rounded-[28px] sm:p-6"
    >
      <div aria-hidden className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(216,180,254,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(216,180,254,.1)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div aria-hidden className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-fuchsia-400/10 blur-3xl" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-100/60 sm:text-[10px]">UBIK · STAYS & EXPERIENCES</p>
          </div>
        </div>
        <ProjectImage
          src="https://res.cloudinary.com/dwkq16pdu/image/upload/v1790817560/image_xlhtfk.png"
          alt=""
          tone="cyan"
        />

        <div className="flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[8px] uppercase tracking-[0.08em] text-slate-400 sm:pt-4 sm:text-[9px]">
          <span>Spring Boot</span>
          <span>PostgreSQL</span>
          <span>Docker · Azure</span>
        </div>
      </div>
    </div>
  );
}

function PortfolioPreview({ title }: { title: string }) {
  return (
    <div
      role="img"
      aria-label={`Vista ilustrada del sitio ${title}: portafolio personal de desarrollo`}
      className="project-preview relative aspect-[1.24/1] overflow-hidden rounded-[24px] border border-fuchsia-100/15 bg-[#110d1b] p-4 shadow-2xl shadow-fuchsia-950/25 sm:rounded-[28px] sm:p-6"
    >
      <div aria-hidden className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-orange-400/10 blur-3xl" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#090811]/85 shadow-2xl sm:rounded-2xl">
        <div className="flex h-9 shrink-0 items-center gap-1.5 border-b border-white/10 px-3 sm:h-11 sm:px-4">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-300/80 sm:h-2 sm:w-2" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-200/80 sm:h-2 sm:w-2" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-200/80 sm:h-2 sm:w-2" />
          <span className="ml-auto font-mono text-[7px] text-fuchsia-200/70 sm:text-[8px]">REACT · NEXT.JS</span>
        </div>

        <ProjectImage
          src="https://res.cloudinary.com/dwkq16pdu/image/upload/v1790818809/Captura_de_pantalla_2026-09-30_203906_t4eau0.png"
          alt=""
          tone="fuchsia"
        />

        <div className="flex h-8 shrink-0 items-center justify-between border-t border-white/10 px-3 font-mono text-[7px] text-slate-500 sm:h-9 sm:px-4 sm:text-[8px]">
          <span>PORTAFOLIO PERSONAL</span>
          <span className="text-fuchsia-200/70">DISEÑADO CON INTENCIÓN</span>
        </div>
      </div>
    </div>
  );
}

function ProjectImage({
  src,
  alt,
  tone,
}: {
  src: string;
  alt: string;
  tone: "cyan" | "fuchsia";
}) {
  return (
    <div
      className={`project-image group relative my-4 aspect-[1.6/1] overflow-hidden rounded-2xl border bg-[#0b0911]/80 shadow-lg transition-[border-color,box-shadow] duration-500 sm:my-5 sm:rounded-[20px] motion-reduce:transition-none ${
        tone === "cyan"
          ? "border-cyan-100/15 shadow-cyan-950/20 hover:border-cyan-200/35 hover:shadow-cyan-500/10"
          : "border-fuchsia-100/15 shadow-fuchsia-950/20 hover:border-fuchsia-200/35 hover:shadow-fuchsia-500/10"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 90vw, 44vw"
        className="object-contain transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.06] motion-reduce:transform-none motion-reduce:transition-none"
      />
    </div>
  );
}
