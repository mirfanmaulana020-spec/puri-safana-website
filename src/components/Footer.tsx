"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/site-plan") return null;

  return (
    <footer className="bg-ivory text-charcoal/70 border-t border-forest/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2.5 mb-3">
            <Image src="/logo.png" alt="Puri Safana Cikeas" width={28} height={20} className="h-6 w-auto" />
            <span className="font-serif text-forest text-lg">Puri Safana</span>
          </Link>
          <p className="text-sm leading-relaxed">Lebih Dekat, Lebih Murah, Lebih Luas.</p>
          <p className="text-sm mt-1">Cikeas, Gunung Putri, Bogor</p>
        </div>

        <div>
          <div className="text-charcoal font-medium mb-3 text-sm tracking-wide">Navigasi</div>
          <ul className="text-sm space-y-2">
            <li><Link href="/" className="hover:text-forest">Home</Link></li>
            <li><Link href="/tipe-rumah" className="hover:text-forest">Rumah</Link></li>
            <li><Link href="/site-plan" className="hover:text-forest">Masterplan</Link></li>
            <li><Link href="/#fasilitas" className="hover:text-forest">Fasilitas</Link></li>
            <li><Link href="/#lokasi" className="hover:text-forest">Lokasi</Link></li>
            <li><Link href="/developer" className="hover:text-forest">Tentang</Link></li>
            <li><Link href="/kontak" className="hover:text-forest">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-charcoal font-medium mb-3 text-sm tracking-wide">Kontak</div>
          <ul className="text-sm space-y-2">
            <li><a href="https://wa.me/6285117803838" className="hover:text-forest">0851-1780-3838</a></li>
            <li><a href="mailto:info@purisafana.com" className="hover:text-forest">info@purisafana.com</a></li>
            <li><a href="https://instagram.com/purisafanacikeas" className="hover:text-forest">@purisafanacikeas</a></li>
          </ul>
        </div>

        <div>
          <div className="text-charcoal font-medium mb-3 text-sm tracking-wide">Dikembangkan oleh</div>
          <p className="text-sm leading-relaxed">
            <Link href="/developer" className="hover:text-forest font-medium text-charcoal">Bumantara</Link>
            <br />
            One Vision. Sustainable Growth.
          </p>
        </div>
      </div>
      <div className="border-t border-forest/10 py-5 text-center text-xs text-charcoal/50">
        © {new Date().getFullYear()} Puri Safana Cikeas. Dikembangkan oleh Bumantara.
      </div>
    </footer>
  );
}
