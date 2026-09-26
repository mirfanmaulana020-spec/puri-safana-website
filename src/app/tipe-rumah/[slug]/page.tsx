import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { houseTypes, units } from "@/lib/data";

export function generateStaticParams() {
  return houseTypes.map((t) => ({ slug: t.slug }));
}

export default async function TipeRumahDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const type = houseTypes.find((t) => t.slug === slug);
  if (!type) notFound();

  const typeUnits = units.filter((u) => u.typeSlug === slug);
  const available = typeUnits.filter((u) => u.status === "tersedia");

  return (
    <div>
      <section className="bg-[#1c2317] text-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link href="/tipe-rumah" className="text-white/60 text-sm hover:text-[#a3d139]">
            ← Semua Tipe Rumah
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mt-3">{type.name}</h1>
          <p className="text-white/70 mt-2 max-w-xl">{type.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-10 bg-[#eef1e6]">
          <Image src={type.image} alt={type.name} fill className="object-cover" priority />
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Spec label="Luas Tanah" value={`${type.landAreaMin} m²`} />
          <Spec label="Luas Bangunan" value={`${type.buildingArea} m²`} />
          <Spec label="Harga Mulai" value={`Rp ${(type.priceFrom / 1_000_000).toLocaleString("id-ID")} Jt`} />
          <Spec label="Kamar Tidur" value={`${type.bedrooms}`} />
          <Spec label="Kamar Mandi" value={`${type.bathrooms}`} />
          <Spec label="Unit Tersedia" value={`${available.length} dari ${type.totalUnits}`} />
        </div>

        <p className="text-black/70 leading-relaxed max-w-3xl mb-10">{type.description}</p>

        <h2 className="text-xl font-semibold mb-4">Fasilitas</h2>
        <ul className="grid sm:grid-cols-2 gap-3 mb-10">
          {type.facilities.map((f) => (
            <li key={f} className="rounded-lg border border-black/10 px-4 py-3 text-sm bg-white">
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4">
          <Link
            href={`/site-plan`}
            className="rounded-full bg-[#1c2317] text-white font-semibold px-6 py-3 hover:bg-[#2a3423]"
          >
            Lihat di Site Plan
          </Link>
          <a
            href={`https://wa.me/6285117803838?text=${encodeURIComponent(
              `Halo, saya tertarik dengan tipe rumah ${type.name} di Puri Safana Cikeas.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#a3d139] text-[#1c2317] font-semibold px-6 py-3 hover:bg-[#b6e34f]"
          >
            Tanya Tipe Ini
          </a>
        </div>
      </section>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-black/10 p-5 bg-white">
      <div className="text-xs uppercase tracking-wide text-black/50">{label}</div>
      <div className="text-lg font-semibold mt-1">{value}</div>
    </div>
  );
}
