import Link from "next/link";
import Image from "next/image";
import { houseTypes } from "@/lib/data";

export const metadata = { title: "Tipe Rumah | Puri Safana Cikeas" };

export default function TipeRumahPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <p className="text-[#557a1f] text-sm uppercase tracking-wide mb-2">Tipe Hunian</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Pilihan Tipe Rumah</h1>
      <p className="text-black/60 mb-8 max-w-2xl">
        Empat tipe rumah dirancang untuk berbagai kebutuhan keluarga, dari hunian kompak
        hingga premium.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {houseTypes.map((t) => (
          <Link
            key={t.slug}
            href={`/tipe-rumah/${t.slug}`}
            className="group rounded-2xl border border-black/10 bg-white overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#eef1e6]">
              <Image src={t.image} alt={t.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6">
            <div className="text-xs uppercase tracking-wide text-[#557a1f] font-medium">
              {t.totalUnits} unit tersedia di kawasan
            </div>
            <div className="text-xl font-semibold mt-1 group-hover:text-[#557a1f]">{t.name}</div>
            <p className="text-sm text-black/60 mt-1">{t.tagline}</p>
            <div className="mt-4 flex gap-4 text-sm text-black/70">
              <span>LT {t.landAreaMin}m²</span>
              <span>LB {t.buildingArea}m²</span>
              <span>{t.bedrooms} KT / {t.bathrooms} KM</span>
            </div>
            <div className="mt-4 text-lg font-bold">
              Rp {(t.priceFrom / 1_000_000).toLocaleString("id-ID")} Jt
            </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
