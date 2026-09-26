/** Warna legenda bersama (site plan, grafik, tag) — sesuai revisi PDF. */
export const WARNA = {
  hijauTua: '#1F5A3A', hijau: '#2F7A4D', kuning: '#D9A43C', oranye: '#E07B2F', merah: '#C8553D', abu: '#D8D6CC',
};
export const STATUS_WARNA: Record<string, string> = {
  Terjual: WARNA.hijau, 'Booking/Proses': WARNA.kuning, Tersedia: WARNA.merah,
};
export const progresWarna = (p: number | null | undefined) =>
  p == null || p <= 0 ? WARNA.merah : p >= 100 ? WARNA.hijauTua : p >= 50 ? WARNA.kuning : WARNA.oranye;
export const PROGRES_LEGENDA: [string, string][] = [
  ['100%', WARNA.hijauTua], ['50–99%', WARNA.kuning], ['1–49%', WARNA.oranye], ['0% / belum ada data', WARNA.merah],
];
export const adminWarna = (terpenuhi: number | null) =>
  !terpenuhi ? WARNA.merah : terpenuhi >= 4 ? WARNA.hijauTua : terpenuhi >= 2 ? WARNA.kuning : WARNA.oranye;
export const ADMIN_LEGENDA: [string, string][] = [
  ['Lengkap', WARNA.hijauTua], ['Sebagian', WARNA.kuning], ['Baru mulai', WARNA.oranye], ['Belum ada data', WARNA.merah],
];
