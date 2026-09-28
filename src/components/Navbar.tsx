"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/tipe-rumah", label: "Rumah" },
  { href: "/site-plan", label: "Masterplan" },
  { href: "/#fasilitas", label: "Fasilitas" },
  { href: "/#lokasi", label: "Lokasi" },
  { href: "/developer", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Halaman site plan tampil full-screen dengan nav sendiri (mp-nav),
  // jadi navbar utama situs disembunyikan di sini agar tidak menutupinya.
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  if (pathname === "/site-plan") return null;

  // Di beranda: transparan di atas hero, lalu berubah jadi ivory solid saat discroll.
  // Di halaman lain (tanpa hero gelap penuh layar): selalu solid ivory.
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        transparent
          ? "bg-transparent border-b border-transparent"
          : "bg-ivory/95 backdrop-blur border-b border-forest/10"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <Image
            src="/logo.png"
            alt="Puri Safana Cikeas"
            width={32}
            height={22}
            className={`h-7 w-auto transition ${transparent ? "brightness-0 invert" : ""}`}
            priority
          />
          <span className={transparent ? "text-white" : "text-forest"}>
            <span className="block font-serif text-[15px] leading-none tracking-wide">Puri Safana</span>
            <span className={`block text-[10px] tracking-[0.25em] mt-0.5 ${transparent ? "text-white/70" : "text-charcoal/50"}`}>
              CIKEAS
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[13.5px] tracking-wide">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors ${
                transparent ? "text-white/85 hover:text-white" : "text-charcoal/70 hover:text-forest"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/kontak"
            className="rounded-full bg-forest text-ivory px-5 py-2.5 text-[13px] font-medium tracking-wide hover:bg-forest-dark transition-colors"
          >
            Jadwalkan Kunjungan
          </Link>
        </div>

        <button
          className={transparent ? "lg:hidden text-white" : "lg:hidden text-forest"}
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-ivory border-t border-forest/10 px-4 py-4 flex flex-col gap-3.5 text-charcoal/80">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-forest py-0.5" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link
            href="/kontak"
            className="mt-1 text-center rounded-full bg-forest text-ivory px-5 py-2.5 text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Jadwalkan Kunjungan
          </Link>
        </nav>
      )}
    </header>
  );
}
