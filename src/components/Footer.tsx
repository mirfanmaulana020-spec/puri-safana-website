"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/site-plan") return null;

  return (
    <footer className="bg-[#1c2317] text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-white font-semibold text-lg mb-2">
            Puri Safana <span className="text-[#a3d139]">Cikeas</span>
          </div>
          <p className="text-sm">Lebih Dekat, Lebih Murah, Lebih Luas.</p>
          <p className="text-sm mt-2">Cikeas, Gunung Putri, Bogor</p>
        </div>

        <div>
          <div className="text-white font-medium mb-2">Kontak</div>
          <ul className="text-sm space-y-1">
            <li>info@purisafana.com</li>
            <li>0851-1780-3838</li>
            <li>@purisafanacikeas</li>
          </ul>
        </div>

        <div>
          <div className="text-white font-medium mb-2">Tautan</div>
          <ul className="text-sm space-y-1">
            <li><Link href="/site-plan" className="hover:text-[#a3d139]">Site Plan Interaktif</Link></li>
            <li><Link href="/tipe-rumah" className="hover:text-[#a3d139]">Tipe Rumah</Link></li>
            <li><Link href="/kpr" className="hover:text-[#a3d139]">Simulasi KPR</Link></li>
            <li><Link href="/developer" className="hover:text-[#a3d139]">Tentang Developer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} Puri Safana Cikeas. Dikembangkan oleh Bumantara.
      </div>
    </footer>
  );
}
