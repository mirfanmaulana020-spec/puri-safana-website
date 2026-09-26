"use client";

import { useMemo, useState } from "react";
import { houseTypes } from "@/lib/data";

function formatRupiah(n: number) {
  return "Rp " + Math.round(n).toLocaleString("id-ID");
}

export default function KprPage() {
  const [typeSlug, setTypeSlug] = useState(houseTypes[3].slug); // default Aruna
  const type = houseTypes.find((t) => t.slug === typeSlug)!;

  const [price, setPrice] = useState(type.priceFrom);
  const [dpPercent, setDpPercent] = useState(20);
  const [tenor, setTenor] = useState(15); // years
  const [rate, setRate] = useState(6.5); // % per year, fixed simple estimate

  function handleTypeChange(slug: string) {
    const t = houseTypes.find((x) => x.slug === slug)!;
    setTypeSlug(slug);
    setPrice(t.priceFrom);
  }

  const { dpAmount, loanAmount, monthlyInstallment } = useMemo(() => {
    const dp = (price * dpPercent) / 100;
    const loan = price - dp;
    const monthlyRate = rate / 100 / 12;
    const n = tenor * 12;
    const installment =
      monthlyRate === 0
        ? loan / n
        : (loan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
    return { dpAmount: dp, loanAmount: loan, monthlyInstallment: installment };
  }, [price, dpPercent, tenor, rate]);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <p className="text-[#557a1f] text-sm uppercase tracking-wide mb-2">Simulasi</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Simulasi KPR</h1>
      <p className="text-black/60 mb-8 max-w-2xl">
        Perkirakan cicilan bulanan rumah impian Anda di Puri Safana Cikeas. Hasil
        simulasi bersifat estimasi dan dapat berbeda dengan penawaran bank.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium block mb-2">Tipe Rumah</label>
            <select
              className="w-full rounded-lg border border-black/15 px-3 py-2.5"
              value={typeSlug}
              onChange={(e) => handleTypeChange(e.target.value)}
            >
              {houseTypes.map((t) => (
                <option key={t.slug} value={t.slug}>
                  {t.name} — Rp {(t.priceFrom / 1_000_000).toLocaleString("id-ID")} Jt
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium block mb-2">
              Harga Rumah ({formatRupiah(price)})
            </label>
            <input
              type="range"
              min={type.priceFrom * 0.9}
              max={type.priceFrom * 1.1}
              step={5_000_000}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-2">
              Uang Muka / DP ({dpPercent}% — {formatRupiah(dpAmount)})
            </label>
            <input
              type="range"
              min={10}
              max={50}
              step={5}
              value={dpPercent}
              onChange={(e) => setDpPercent(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-2">Tenor ({tenor} Tahun)</label>
            <input
              type="range"
              min={5}
              max={20}
              step={1}
              value={tenor}
              onChange={(e) => setTenor(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium block mb-2">Estimasi Suku Bunga ({rate}% /tahun)</label>
            <input
              type="range"
              min={3}
              max={12}
              step={0.25}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        <div className="rounded-2xl bg-[#1c2317] text-white p-8 h-fit">
          <div className="text-white/60 text-sm">Estimasi Cicilan Bulanan</div>
          <div className="text-4xl font-bold text-[#a3d139] mt-2 mb-6">
            {formatRupiah(monthlyInstallment)}
            <span className="text-base text-white/50 font-normal"> /bulan</span>
          </div>
          <div className="space-y-3 text-sm border-t border-white/10 pt-6">
            <Row label="Harga Rumah" value={formatRupiah(price)} />
            <Row label="Uang Muka" value={formatRupiah(dpAmount)} />
            <Row label="Pokok Pinjaman" value={formatRupiah(loanAmount)} />
            <Row label="Tenor" value={`${tenor} Tahun`} />
          </div>
          <a
            href={`https://wa.me/6285117803838?text=${encodeURIComponent(
              `Halo, saya ingin konsultasi KPR untuk tipe ${type.name} di Puri Safana Cikeas.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block text-center rounded-full bg-[#a3d139] text-[#1c2317] font-semibold py-3 hover:bg-[#b6e34f]"
          >
            Konsultasi dengan Sales
          </a>
          <p className="text-xs text-white/40 mt-4">
            *Simulasi ini adalah estimasi kasar, bukan penawaran resmi dari bank. Suku
            bunga aktual mengikuti kebijakan bank penyedia KPR.
          </p>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-white/60">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
