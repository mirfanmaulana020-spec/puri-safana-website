import type { DataPeta, LabelBlok, Mode, UnitPeta } from "@/lib/scene3d";
import {
  blocks,
  facilities,
  houseTypes,
  rukoList,
  statusLabel,
  units,
  type Unit,
  type UnitStatus,
} from "@/lib/data";

/** Info publik untuk satu unit — sengaja TIDAK menyertakan data internal
 *  (nama pemilik, cara bayar, sisa tagihan, mandor, SPK) karena ini halaman
 *  publik, bukan dashboard internal. */
export type PublicUnitInfo = {
  kode: string;
  blok: string;
  tipeSlug: string;
  tipeNama: string;
  jenis: "Rumah" | "Ruko";
  landArea: number;
  buildingArea: number;
  bedrooms: number | null;
  bathrooms: number | null;
  status: UnitStatus;
  statusLabel: string;
  price: number;
  progress: number;
  foto: string;
};

const STATUS_TO_ID: Record<UnitStatus, string> = {
  tersedia: "Tersedia",
  booking: "Booking/Proses",
  terjual: "Terjual",
};

function houseTypeBySlug(slug: string) {
  return houseTypes.find((t) => t.slug === slug);
}

/** `data.ts`'s x/z were tuned for the old React-Three-Fiber viewer, where
 *  house footprints were small (~1.28 units). The real `scene3d.ts` engine
 *  places houses using fixed metric sizes (lot ~10.2 x 12.4, house body
 *  ~6.5 wide after scaling), so raw coordinates land almost on top of each
 *  other — that's the "rumah nyatu jadi satu gumpalan" you're seeing.
 *  Scaling every position up by this factor spreads the same layout out to
 *  match the engine's real-world proportions. */
const COORD_SCALE = 15;

const sx = (x: number) => x * COORD_SCALE;
const sz = (z: number) => z * COORD_SCALE;

/** Membangun data untuk mesin scene3d.ts (rumah + ruko digabung, karena
 *  engine membedakan lewat field `jenis`). */
export function buildDataPeta(): DataPeta {
  const unitPeta: UnitPeta[] = [];

  for (const u of units) {
    unitPeta.push({
      kode: u.code,
      blok: u.block,
      x: sx(u.x),
      z: sz(u.z),
      status: STATUS_TO_ID[u.status],
      progress: u.progress,
      tipe: u.typeSlug,
      jenis: "Rumah",
      rot: u.rot,
    });
  }
  for (const r of rukoList) {
    unitPeta.push({
      kode: r.code,
      blok: r.block,
      x: sx(r.x),
      z: sz(r.z),
      status: STATUS_TO_ID[r.status],
      progress: r.status === "terjual" ? 100 : 0,
      tipe: "ruko",
      jenis: "Ruko",
      rot: r.rot,
    });
  }

  const blok: LabelBlok[] = blocks.map((b) => ({ name: b.code, x: sx(b.x), z: sz(b.z) }));
  // Fasilitas (Club House, Mushola) ditandai sebagai blok agar tetap muncul labelnya.
  for (const f of facilities) blok.push({ name: f.name, x: sx(f.x), z: sz(f.z) });

  return { units: unitPeta, kosong: [], blok };
}

/** Peta kode unit -> info publik yang aman ditampilkan ke calon pembeli. */
export function buildPublicInfo(): Record<string, PublicUnitInfo> {
  const info: Record<string, PublicUnitInfo> = {};

  const fillFromUnit = (u: Unit) => {
    const t = houseTypeBySlug(u.typeSlug);
    info[u.code] = {
      kode: u.code,
      blok: u.block,
      tipeSlug: u.typeSlug,
      tipeNama: t?.name ?? u.typeSlug,
      jenis: "Rumah",
      landArea: u.landArea,
      buildingArea: u.buildingArea,
      bedrooms: t?.bedrooms ?? null,
      bathrooms: t?.bathrooms ?? null,
      status: u.status,
      statusLabel: statusLabel[u.status],
      price: u.price,
      progress: u.progress,
      foto: t?.image ?? "/tipe/aruna.jpg",
    };
  };
  units.forEach(fillFromUnit);

  for (const r of rukoList) {
    info[r.code] = {
      kode: r.code,
      blok: r.block,
      tipeSlug: "ruko",
      tipeNama: `Ruko ${r.floors} Lantai`,
      jenis: "Ruko",
      landArea: r.landArea,
      buildingArea: r.buildingArea,
      bedrooms: null,
      bathrooms: null,
      status: r.status,
      statusLabel: statusLabel[r.status],
      price: r.price,
      progress: r.status === "terjual" ? 100 : 0,
      foto: "/tipe/ruko.jpg",
    };
  }

  return info;
}

export type PublicTipe = { nama: string; foto: string; jml: number; slug: string };

export function buildTipeList(): PublicTipe[] {
  return houseTypes.map((t) => ({ nama: t.name, foto: t.image, jml: t.totalUnits, slug: t.slug }));
}

export const DEFAULT_MODE: Mode = "status";
