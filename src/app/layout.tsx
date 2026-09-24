import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `${profile.name} — Software Developer`,
  description: "Portafolio de Nicolás Londoño, Software Developer especializado en backend y productos full stack.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`dark ${inter.variable}`}>
      <body className="bg-[#050304] font-sans text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
