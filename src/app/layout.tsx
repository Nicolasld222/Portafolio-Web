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
    <html lang="es" className={inter.variable}>
      <body className="bg-white font-sans text-slate-950 antialiased dark:bg-[#070b16] dark:text-slate-50">
        {children}
      </body>
    </html>
  );
}
