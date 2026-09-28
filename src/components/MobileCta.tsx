"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

export default function MobileCta() {
  const pathname = usePathname();
  if (pathname === "/site-plan") return null;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-ivory/95 backdrop-blur border-t border-forest/10 px-4 py-3 flex gap-2.5">
      <a
        href="https://wa.me/6285117803838?text=Halo%2C%20saya%20tertarik%20dengan%20Puri%20Safana%20Cikeas."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 rounded-full border border-forest/25 text-forest text-[13px] font-medium py-2.5"
      >
        <Icon n="users" s={14} /> WhatsApp
      </a>
      <Link
        href="/kontak"
        className="flex-1 flex items-center justify-center rounded-full bg-forest text-ivory text-[13px] font-medium py-2.5"
      >
        Jadwalkan Kunjungan
      </Link>
    </div>
  );
}
