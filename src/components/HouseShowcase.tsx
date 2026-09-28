"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Icon from "./Icon";
import { houseTypes } from "@/lib/data";

export default function HouseShowcase() {
  const [i, setI] = useState(0);
  const t = houseTypes[i];
  const n = houseTypes.length;

  const go = (dir: number) => setI((v) => (v + dir + n) % n);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {houseTypes.map((h, idx) => (
          <button
            key={h.slug}
            onClick={() => setI(idx)}
            className={`rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-colors ${
              idx === i ? "bg-forest text-ivory" : "bg-beige/70 text-charcoal/70 hover:bg-beige"
            }`}
          >
            {h.name}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[65%_35%] gap-0 rounded-[10px] overflow-hidden border border-forest/10 bg-white-nat">
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <Image
            key={t.slug}
            src={t.image}
            alt={t.name}
            fill
            className="object-cover fade-up"
            priority={i === 0}
          />
          <button
            onClick={() => go(-1)}
            aria-label="Tipe sebelumnya"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ivory/85 backdrop-blur flex items-center justify-center hover:bg-ivory transition"
          >
            <span className="inline-block rotate-180"><Icon n="arrow" s={16} w={1.8} /></span>
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Tipe berikutnya"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ivory/85 backdrop-blur flex items-center justify-center hover:bg-ivory transition"
          >
            <Icon n="arrow" s={16} w={1.8} />
          </button>
          <div className="absolute bottom-4 right-4 rounded-full bg-charcoal/70 text-ivory text-xs px-3 py-1 tracking-wide backdrop-blur">
            {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </div>
        </div>

        <div className="p-8 md:p-10 flex flex-col justify-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-sage font-medium mb-2">Tipe</p>
          <h3 className="font-serif text-4xl text-forest mb-3">{t.name}</h3>
          <p className="text-charcoal/65 text-[15px] leading-relaxed mb-6">{t.description}</p>

          <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-7 text-sm">
            <Spec icon="grid" label={`LT ${t.landAreaMin} m²`} />
            <Spec icon="doc" label={`LB ${t.buildingArea} m²`} />
            <Spec icon="home" label={`${t.bedrooms} Kamar Tidur`} />
            <Spec icon="check" label={`${t.bathrooms} Kamar Mandi`} />
          </div>

          <p className="text-[11px] uppercase tracking-[0.15em] text-charcoal/45 mb-1">Mulai dari</p>
          <p className="font-serif text-3xl text-forest mb-7">
            Rp {(t.priceFrom / 1_000_000).toLocaleString("id-ID")} Juta
          </p>

          <Link
            href={`/tipe-rumah/${t.slug}`}
            className="inline-flex items-center gap-2 text-forest font-medium text-[15px] hover:gap-3 transition-all w-fit"
          >
            Lihat Detail Rumah <Icon n="arrow" s={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function Spec({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-charcoal/70">
      <span className="text-sage"><Icon n={icon} s={16} /></span>
      {label}
    </div>
  );
}
