export default function ProjectVisual({ title }: { title: string }) {
  const services = ["Users", "Stays", "Payments", "Notify"];

  return (
    <div className="relative aspect-[1.08/1] overflow-hidden rounded-[28px] border border-[#293655] bg-[#091022] p-5 shadow-2xl shadow-slate-950/20 sm:p-7">
      <div aria-hidden className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(132,157,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(132,157,255,.16)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div aria-hidden className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200/70">Architecture map</p>
            <p className="mt-1 text-[17px] font-semibold tracking-tight text-white">{title} / Services</p>
          </div>
          <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-2.5 py-1 font-mono text-[9px] font-medium text-cyan-100">LIVE SYSTEM</span>
        </div>

        <div className="relative my-auto pt-10">
          <div className="absolute left-[50%] top-[6.4rem] h-[44%] w-px bg-gradient-to-b from-cyan-300/70 via-indigo-300/40 to-transparent" aria-hidden />
          <div className="relative mx-auto grid w-fit place-items-center rounded-xl border border-cyan-200/30 bg-cyan-300/[0.12] px-4 py-3 text-center shadow-[0_0_35px_rgba(103,232,249,.12)]">
            <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-cyan-100">API Gateway</span>
            <span className="mt-1 text-[11px] font-medium text-white">JWT authentication</span>
          </div>

          <div className="relative mt-10 grid grid-cols-2 gap-3 sm:gap-4">
            {services.map((service, index) => (
              <div key={service} className="relative rounded-xl border border-white/10 bg-white/[0.055] p-3 backdrop-blur-sm">
                <span className="font-mono text-[9px] text-indigo-200/75">0{index + 1}</span>
                <p className="mt-2 text-[12px] font-medium text-white">{service}</p>
                <p className="mt-0.5 text-[9px] text-slate-400">Independent service</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center font-mono text-[9px] uppercase tracking-[0.08em] text-slate-400">
          <span>Spring Boot</span>
          <span>PostgreSQL</span>
          <span>Docker + Azure</span>
        </div>
      </div>
    </div>
  );
}
