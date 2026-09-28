import Image from "next/image";
import Link from "next/link";
import { developer, nearbyPlaces, projectSummary, units } from "@/lib/data";
import Icon from "@/components/Icon";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import HouseShowcase from "@/components/HouseShowcase";
import GalleryMasonry from "@/components/GalleryMasonry";
import MiniKprCalculator from "@/components/MiniKprCalculator";

export default function Home() {
  const available = units.filter((u) => u.status === "tersedia").length;

  const highlight = [
    { label: "Akses Tol", value: nearbyPlaces.find((p) => p.category === "Transportasi")?.distance ?? "±10 menit", icon: "arrow" },
    { label: "Sekolah", value: nearbyPlaces.find((p) => p.category === "Pendidikan")?.distance ?? "±5 menit", icon: "doc" },
    { label: "Rumah Sakit", value: nearbyPlaces.find((p) => p.category === "Kesehatan")?.distance ?? "±12 menit", icon: "shield" },
    { label: "Pusat Perbelanjaan", value: nearbyPlaces.find((p) => p.category === "Belanja")?.distance ?? "±15 menit", icon: "wallet" },
  ];

  return (
    <div>
      {/* 01 — HERO */}
      <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden bg-forest">
        <ImagePlaceholder
          label="Foto Kawasan Puri Safana — golden hour, keluarga & anak bersepeda"
          icon="cam"
          dark
          className="absolute inset-0 slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/85 via-forest-dark/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />

        <div className="relative z-10 h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <p className="fade-up font-serif text-2xl md:text-3xl tracking-[0.35em] text-ivory/90 mb-1">
            PURI SAFANA
          </p>
          <p className="fade-up text-ivory/60 text-sm tracking-[0.5em] mb-8">C I K E A S</p>
          <h1 className="fade-up font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] max-w-xl mb-5">
            Lebih Dekat. Lebih Luas. Lebih Nyaman.
          </h1>
          <p className="fade-up text-white/75 max-w-md mb-9 text-[15px] leading-relaxed">
            Hunian modern tropis yang dirancang untuk kehidupan keluarga.
          </p>
          <div className="fade-up flex flex-wrap gap-4">
            <Link
              href="/site-plan"
              className="rounded-full bg-forest text-ivory font-medium px-7 py-3.5 text-sm tracking-wide hover:bg-forest-dark transition-colors"
            >
              Jelajahi Puri Safana
            </Link>
            <Link
              href="/tipe-rumah"
              className="rounded-full border border-white/40 text-white px-7 py-3.5 text-sm tracking-wide hover:bg-white/10 transition-colors"
            >
              Lihat Rumah
            </Link>
          </div>
        </div>
      </section>

      {/* 02 — STATISTICS STRIP */}
      <section className="bg-ivory border-b border-forest/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-forest/10">
          <StatCell value={projectSummary.totalArea} label="Luas Kawasan" />
          <StatCell value={String(projectSummary.totalUnits)} label="Total Kavling" />
          <StatCell value={String(available)} label="Unit Tersedia" />
          <StatCell value={projectSummary.experience.split(" ")[0] + "+"} label="Tahun Pengalaman" />
        </div>
      </section>

      {/* 03 — FAMILY LIFESTYLE INTRO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-sage font-medium mb-4">Kehidupan Keluarga</p>
          <h2 className="font-serif text-4xl md:text-5xl text-forest leading-[1.15] mb-6">
            Rumah untuk
            <br />
            Tumbuh Bersama.
          </h2>
          <p className="text-charcoal/65 max-w-md leading-relaxed mb-8">
            Lingkungan yang aman, nyaman, dan asri untuk setiap momen berharga bersama keluarga.
          </p>
          <a href="#fasilitas" className="inline-flex items-center gap-2 text-forest font-medium hover:gap-3 transition-all">
            Lihat Kehidupan di Puri Safana <Icon n="arrow" s={15} />
          </a>
        </div>
        <ImagePlaceholder
          label="Orang tua menemani anak bersepeda di jalan lingkungan, sore hari"
          icon="users"
          className="aspect-[4/5] rounded-[10px]"
        />
      </section>

      {/* 04 — PILIHAN HUNIAN */}
      <section className="bg-beige/40 py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <p className="text-[11px] uppercase tracking-[0.2em] text-sage font-medium mb-4">Tipe Rumah</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-[1.15] mb-5">
              Pilihan Hunian
              <br />
              untuk Setiap Keluarga.
            </h2>
            <p className="text-charcoal/65 leading-relaxed">
              Desain modern tropis dengan tata ruang yang nyaman dan fungsional.
            </p>
          </div>
          <HouseShowcase />
        </div>
      </section>

      {/* 05 — INTERACTIVE MASTERPLAN */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-10">
            <p className="text-[11px] uppercase tracking-[0.2em] text-sage font-medium mb-4">Masterplan</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-[1.15] mb-5">Temukan Rumah Anda.</h2>
            <p className="text-charcoal/65 leading-relaxed mb-7">
              Jelajahi kawasan dan temukan unit tersedia langsung dari masterplan interaktif kami — zoom,
              geser, dan klik setiap kavling untuk melihat status ketersediaannya secara real-time.
            </p>
            <Link
              href="/site-plan"
              className="inline-flex items-center gap-2 rounded-full bg-forest text-ivory px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-forest-dark transition-colors w-fit"
            >
              Buka Masterplan <Icon n="arrow" s={15} />
            </Link>
          </div>

          <Link href="/site-plan" className="group relative block rounded-[10px] overflow-hidden aspect-[16/8]">
            <ImagePlaceholder
              label="Foto drone aerial kawasan Puri Safana Cikeas"
              icon="map"
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/10 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center px-6">
              <span className="rounded-full bg-white/15 backdrop-blur-sm text-white text-[11px] uppercase tracking-[0.15em] px-4 py-1.5 mb-3">
                Interaktif 3D · Real-time
              </span>
              <span className="text-white font-serif text-2xl">Jelajahi Kawasan dalam 3D</span>
            </div>
          </Link>
        </div>
      </section>

      {/* 06 — FACILITIES */}
      <section id="fasilitas" className="bg-beige/40 py-24 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-[1.15]">
              Lingkungan Lengkap
              <br />
              untuk Kehidupan Lebih Baik.
            </h2>
            <Link href="/overview" className="text-forest text-sm font-medium hover:underline">
              Lihat Semua Fasilitas
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 h-auto sm:h-[560px]">
            <FacilityTile
              label="Ruang Terbuka Hijau"
              desc="Ruang untuk bermain, berjalan, dan menikmati waktu bersama keluarga."
              icon="grid"
              className="sm:row-span-2 aspect-[4/3] sm:aspect-auto"
            />
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
              <FacilityTile label="Club House" desc="Tempat berkumpul dan bersantai bersama keluarga." icon="users" className="aspect-square sm:aspect-auto sm:h-full" small />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:col-span-1">
              <FacilityTile label="Mushola" desc="Nyaman untuk beribadah setiap hari." icon="home" className="aspect-square" small />
              <FacilityTile label="Gedung Serbaguna" desc="Untuk kegiatan warga dan acara komunitas." icon="grid" className="aspect-square" small />
            </div>
          </div>
        </div>
      </section>

      {/* 08 — EMOTIONAL FAMILY SECTION */}
      <section className="relative h-[70vh] min-h-[460px] overflow-hidden">
        <ImagePlaceholder
          label="Foto sunset suasana keluarga di Puri Safana"
          icon="cam"
          dark
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-forest-dark/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-[1.2] mb-5">
            Lebih dari
            <br />
            Sekadar Rumah.
          </h2>
          <p className="text-white/75 max-w-sm text-[15px] leading-relaxed">
            Tempat anak-anak tumbuh. Tempat keluarga berkumpul. Tempat untuk pulang.
          </p>
        </div>
      </section>

      {/* 09 — LOCATION */}
      <section id="lokasi" className="py-24 md:py-28 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-sage font-medium mb-4">Lokasi</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-[1.15] mb-5">
              Dekat dengan
              <br />
              Segala Kebutuhan.
            </h2>
            <p className="text-charcoal/65 leading-relaxed mb-9 max-w-md">
              Akses mudah ke berbagai fasilitas penting di sekitar Puri Safana Cikeas.
            </p>

            <div className="grid grid-cols-2 gap-5 mb-9">
              {highlight.map((h) => (
                <div key={h.label} className="flex items-start gap-3">
                  <span className="mt-0.5 text-sage"><Icon n={h.icon} s={18} /></span>
                  <div>
                    <div className="font-serif text-2xl text-forest leading-none">{h.value}</div>
                    <div className="text-charcoal/60 text-sm mt-1">{h.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=Puri+Safana+Cikeas+Gunung+Putri+Bogor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-forest text-ivory px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-forest-dark transition-colors"
            >
              Lihat Peta Lengkap <Icon n="arrow" s={15} />
            </a>
          </div>

          <div className="rounded-[10px] overflow-hidden border border-forest/10 bg-beige/40 p-6">
            <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden mb-5">
              <ImagePlaceholder label="Peta lokasi kawasan bergaya custom ivory/forest" icon="pin" className="absolute inset-0" />
            </div>
            <div className="space-y-3">
              {nearbyPlaces.map((p) => (
                <div key={p.name} className="flex items-center justify-between text-sm">
                  <span className="text-charcoal/70">{p.name}</span>
                  <span className="text-forest font-medium whitespace-nowrap ml-3">{p.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10 — GALLERY */}
      <section className="bg-beige/40 py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-10">
            <p className="text-[11px] uppercase tracking-[0.2em] text-sage font-medium mb-4">Galeri</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-[1.15]">
              Lihat Lebih Dekat
              <br />
              Puri Safana Cikeas.
            </h2>
          </div>
          <GalleryMasonry />
        </div>
      </section>

      {/* 11 — KPR SIMULATOR */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-10">
            <p className="text-[11px] uppercase tracking-[0.2em] text-sage font-medium mb-4">Simulasi</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-[1.15]">
              Hitung Estimasi
              <br />
              Cicilan Anda.
            </h2>
          </div>
          <MiniKprCalculator />
        </div>
      </section>

      {/* 12 — DEVELOPER */}
      <section className="bg-beige/40 py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <ImagePlaceholder label="Foto proyek / kawasan Bumantara" icon="doc" className="aspect-[4/3] rounded-[10px] order-2 lg:order-1" />
          <div className="order-1 lg:order-2">
            <Image src="/logo.png" alt="Bumantara" width={44} height={30} className="h-9 w-auto mb-6 opacity-80" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-sage font-medium mb-4">Developer</p>
            <h2 className="font-serif text-4xl text-forest leading-[1.15] mb-5">Tentang {developer.name}</h2>
            <p className="text-charcoal/65 leading-relaxed mb-8 max-w-lg">{developer.description}</p>
            <Link
              href="/developer"
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 text-forest px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-forest hover:text-ivory transition-colors"
            >
              Pelajari Lebih Lanjut <Icon n="arrow" s={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 13 — FINAL FAMILY CTA */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <ImagePlaceholder label="Foto golden hour rumah dengan lampu hangat menyala" icon="home" dark className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/30 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-20 text-center px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-[1.2] mb-4">
            Temukan Rumah untuk
            <br />
            Keluarga Anda.
          </h2>
          <p className="text-white/75 max-w-md text-[15px] leading-relaxed mb-8">
            Jadwalkan kunjungan dan rasakan langsung suasana Puri Safana Cikeas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontak"
              className="rounded-full bg-ivory text-forest font-medium px-7 py-3.5 text-sm tracking-wide hover:bg-white-nat transition-colors"
            >
              Jadwalkan Kunjungan
            </Link>
            <a
              href="https://wa.me/6285117803838?text=Halo%2C%20saya%20tertarik%20dengan%20Puri%20Safana%20Cikeas."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/40 text-white px-7 py-3.5 text-sm tracking-wide hover:bg-white/10 transition-colors"
            >
              WhatsApp Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCell({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-4 first:pl-0 text-center md:text-left">
      <div className="font-serif text-3xl md:text-4xl text-forest">{value}</div>
      <div className="text-charcoal/55 text-[13px] mt-1.5 tracking-wide">{label}</div>
    </div>
  );
}

function FacilityTile({
  label,
  desc,
  icon,
  className = "",
  small = false,
}: {
  label: string;
  desc: string;
  icon: string;
  className?: string;
  small?: boolean;
}) {
  return (
    <div className={`relative rounded-[10px] overflow-hidden group ${className}`}>
      <ImagePlaceholder label={label} icon={icon} className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/75 via-forest-dark/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className={`text-white font-serif ${small ? "text-lg" : "text-2xl"} mb-1`}>{label}</div>
        {!small && <p className="text-white/70 text-sm max-w-xs leading-relaxed">{desc}</p>}
      </div>
    </div>
  );
}
