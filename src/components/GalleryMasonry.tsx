"use client";

import Image from "next/image";
import { useState } from "react";
import { houseTypes } from "@/lib/data";
import ImagePlaceholder from "./ImagePlaceholder";

type Cat = "Semua" | "Exterior" | "Interior" | "Fasilitas" | "Lingkungan";
const CATS: Cat[] = ["Semua", "Exterior", "Interior", "Fasilitas", "Lingkungan"];

type Item =
  | { kind: "img"; src: string; alt: string; cat: Cat; span?: string }
  | { kind: "ph"; label: string; icon: string; cat: Cat; span?: string };

const items: Item[] = [
  { kind: "img", src: houseTypes[0].image, alt: "Fasad Aruna", cat: "Exterior", span: "sm:col-span-2 sm:row-span-2" },
  { kind: "img", src: houseTypes[0].interiorImages[0], alt: "Interior Aruna", cat: "Interior" },
  { kind: "ph", label: "Suasana Jalan Lingkungan", icon: "map", cat: "Lingkungan" },
  { kind: "img", src: houseTypes[1].image, alt: "Fasad Asvara", cat: "Exterior" },
  { kind: "ph", label: "Club House", icon: "users", cat: "Fasilitas", span: "sm:col-span-2" },
  { kind: "img", src: houseTypes[2].interiorImages[0], alt: "Interior Adara", cat: "Interior" },
  { kind: "img", src: houseTypes[2].image, alt: "Fasad Adara", cat: "Exterior" },
  { kind: "ph", label: "Golden Hour Kawasan", icon: "cam", cat: "Lingkungan", span: "sm:col-span-2" },
  { kind: "img", src: houseTypes[3].image, alt: "Fasad Ansara", cat: "Exterior" },
  { kind: "ph", label: "Mushola", icon: "home", cat: "Fasilitas" },
  { kind: "img", src: houseTypes[1].interiorImages[1] ?? houseTypes[1].interiorImages[0], alt: "Interior Asvara", cat: "Interior" },
  { kind: "ph", label: "Ruang Terbuka Hijau", icon: "grid", cat: "Lingkungan" },
];

export default function GalleryMasonry() {
  const [cat, setCat] = useState<Cat>("Semua");
  const shown = cat === "Semua" ? items : items.filter((it) => it.cat === cat);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-1.5 text-[13px] font-medium tracking-wide transition-colors ${
              c === cat ? "bg-forest text-ivory" : "bg-beige/70 text-charcoal/70 hover:bg-beige"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[150px] sm:auto-rows-[160px] gap-3">
        {shown.map((it, idx) => (
          <div
            key={idx}
            className={`relative rounded-[8px] overflow-hidden group ${it.span ?? ""}`}
          >
            {it.kind === "img" ? (
              <a href={it.src} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </a>
            ) : (
              <ImagePlaceholder label={it.label} icon={it.icon} className="w-full h-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
