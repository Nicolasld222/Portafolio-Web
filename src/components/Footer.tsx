import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-[#070b16] px-5 pb-8 sm:px-8">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-7">
        <p className="text-[11px] text-slate-500">© {new Date().getFullYear()} {profile.name}</p>
        <a href="#inicio" className="text-[11px] text-slate-500 transition hover:text-white">
          Volver arriba ↑
        </a>
      </div>
    </footer>
  );
}
