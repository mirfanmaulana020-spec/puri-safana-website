"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/overview", label: "Overview Perumahan" },
  { href: "/developer", label: "Developer" },
  { href: "/site-plan", label: "Site Plan" },
  { href: "/tipe-rumah", label: "Tipe Rumah" },
  { href: "/ruko", label: "Ruko" },
  { href: "/kpr", label: "Simulasi KPR" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1c2317]/95 backdrop-blur text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Image src="/logo.png" alt="Puri Safana Cikeas" width={32} height={22} className="h-6 w-auto" priority />
          <span className="text-[#a3d139]">Puri Safana</span>
          <span className="text-white/60 text-sm">Cikeas</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-white/80 hover:text-[#a3d139] transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/kontak"
            className="rounded-full bg-[#a3d139] text-[#1c2317] px-4 py-2 text-sm font-semibold hover:bg-[#b6e34f] transition-colors"
          >
            Hubungi Sales
          </Link>
        </div>

        <button className="lg:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Buka menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-white/10 px-4 py-3 flex flex-col gap-3">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-white/80 hover:text-[#a3d139] py-1" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
