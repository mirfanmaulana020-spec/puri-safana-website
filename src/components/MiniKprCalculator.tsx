"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { houseTypes } from "@/lib/data";

function formatRupiah(n: number) {
  return "Rp " + Math.round(n).toLocaleString("id-ID");
}

export default function MiniKprCalculator() {
  const base = houseTypes[0]; // Aruna
  const [price] = useState(base.priceFrom);
  const [dpPercent, setDpPercent] = useState(20);
  const [tenor, setTenor] = useState(15);
  const rate = 6.5;

  const { dpAmount, monthlyInstallment } = useMemo(() => {
    const dp = (price * dpPercent) / 100;
    const loan = price - dp;
    const monthlyRate = rate / 100 / 12;
    const nMonths = tenor * 12;
    const installment =
      monthlyRate === 0
        ? loan / nMonths
        : (loan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -nMonths));
    return { dpAmount: dp, monthlyInstallment: installment };
  }, [price, dpPercent, tenor]);

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center rounded-[10px] border border-forest/10 bg-white-nat p-8 md:p-12">
      <div className="space-y-7">
        <div>
          <label className="text-sm font-medium block mb-3 text-charcoal/80">
            Harga Rumah <span className="text-charcoal/45">({formatRupiah(price)}, tipe {base.name})</span>
          </label>
        </div>
        <div>
          <label className="text-sm font-medium block mb-3 text-charcoal/80">
            Uang Muka (DP) — {dpPercent}% · {formatRupiah(dpAmount)}
          </label>
          <input
            type="range"
            min={10}
            max={50}
            step={5}
            value={dpPercent}
            onChange={(e) => setDpPercent(Number(e.target.value))}
            className="w-full accent-forest"
          />
        </div>
        <div>
          <label className="text-sm font-medium block mb-3 text-charcoal/80">Tenor — {tenor} Tahun</label>
          <input
            type="range"
            min={5}
            max={20}
            step={1}
            value={tenor}
            onChange={(e) => setTenor(Number(e.target.value))}
            className="w-full accent-forest"
          />
        </div>
      </div>

      <div className="rounded-[10px] bg-forest text-ivory p-8">
        <div className="text-ivory/60 text-[11px] uppercase tracking-[0.15em]">Estimasi Cicilan per Bulan</div>
        <div className="font-serif text-4xl mt-3 mb-1">{formatRupiah(monthlyInstallment)}</div>
        <p className="text-ivory/40 text-xs mb-7">*Estimasi dapat berbeda sesuai kebijakan bank.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`https://wa.me/6285117803838?text=${encodeURIComponent(
              `Halo, saya ingin konsultasi KPR untuk tipe ${base.name} di Puri Safana Cikeas.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center rounded-full bg-ivory text-forest font-medium py-2.5 text-sm hover:bg-white-nat transition-colors"
          >
            Konsultasi KPR
          </a>
          <Link
            href="/kpr"
            className="flex-1 text-center rounded-full border border-ivory/30 py-2.5 text-sm hover:bg-ivory/10 transition-colors"
          >
            Simulasi Lengkap
          </Link>
        </div>
      </div>
    </div>
  );
}
