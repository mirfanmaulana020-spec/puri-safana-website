"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import type { DataPeta, Masterplan, Mode } from "@/lib/scene3d";
import { pilihMutu } from "@/lib/scene3d";
import {
  buildDataPeta,
  buildPublicInfo,
  buildTipeList,
  type PublicUnitInfo,
} from "@/lib/masterplanAdapter";

const WA_NUMBER = "6285117803838";

function formatRupiah(n: number) {
  if (!n) return "Hubungi kami";
  return "Rp " + n.toLocaleString("id-ID");
}

function gambarMinimap(mp: Masterplan, mini: HTMLCanvasElement) {
  const ctx = mini.getContext("2d");
  if (!ctx) return;
  const { SEG, gx0, gz0, GW, GH } = mp.batas;
  const w = mini.width, h = mini.height;
  const pad = 6;
  const scale = Math.min((w - pad * 2) / GW, (h - pad * 2) / GH);
  const X = (x: number) => pad + (x - gx0) * scale;
  const Z = (z: number) => pad + (z - gz0) * scale;
  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = "rgba(201,226,101,.85)";
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  for (const [a, b] of SEG) {
    ctx.moveTo(X(a[0]), Z(a[1]));
    ctx.lineTo(X(b[0]), Z(b[1]));
  }
  ctx.stroke();
}

export default function Masterplan3D() {
  const wadah = useRef<HTMLDivElement>(null);
  const peta = useRef<Masterplan | null>(null);
  const mini = useRef<HTMLCanvasElement>(null);
  const kartu = useRef<HTMLDivElement>(null);

  const dataRef = useRef<DataPeta | null>(null);
  const [infoMap] = useState<Record<string, PublicUnitInfo>>(() => buildPublicInfo());
  const [tipeList] = useState(() => buildTipeList());

  const [siap, setSiap] = useState(false);
  const [gagal, setGagal] = useState<string | null>(null);
  const [mode, setMode] = useState<Mode>("status");
  const [kode, setKode] = useState<string | null>(null);
  const [pin, setPin] = useState<{ blok: [string, number, number][]; unit: [number, number] | null }>({
    blok: [],
    unit: null,
  });
  const [hover, setHover] = useState<{ kode: string; x: number; y: number } | null>(null);
  const [galeri, setGaleri] = useState(false);

  useEffect(() => {
    let hidup = true;
    (async () => {
      try {
        const [THREE, { buatMasterplan }] = await Promise.all([
          import("three"),
          import("@/lib/scene3d"),
        ]);
        if (!hidup || !wadah.current) return;
        const data = buildDataPeta();
        dataRef.current = data;
        const mutu = pilihMutu(wadah.current.clientWidth);
        const mp = buatMasterplan(THREE, wadah.current, data, {
          mode,
          mutu,
          pilih: null,
          onPilih: (k) => setKode(k),
          onHover: (k, x, y) => setHover(k ? { kode: k, x, y } : null),
          onGagal: (pesan) => setGagal(pesan),
        });
        peta.current = mp;
        mp.saatGambar(() => {
          if (!wadah.current) return;
          const blokLabels = data.blok.map((b): [string, number, number] => {
            const [x, z] = mp.posisiBlok(b);
            const [sx, sy] = mp.keLayar(x, z);
            return [b.name, sx, sy];
          });
          setPin((prev) => ({ blok: blokLabels, unit: prev.unit }));
        });
        mp.gambar();
        if (mini.current) gambarMinimap(mp, mini.current);
        setSiap(true);
      } catch {
        if (hidup) setGagal("Gagal memuat peta 3D. Muat ulang halaman untuk mencoba lagi.");
      }
    })();
    return () => {
      hidup = false;
      peta.current?.dispose();
      peta.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ganti mode status/progres -> mesin perlu dibangun ulang (warna sumbernya beda)
  useEffect(() => {
    if (!siap || !wadah.current || !dataRef.current) return;
    let hidup = true;
    (async () => {
      const [THREE, { buatMasterplan }] = await Promise.all([
        import("three"),
        import("@/lib/scene3d"),
      ]);
      if (!hidup || !wadah.current || !dataRef.current) return;
      peta.current?.dispose();
      const mutu = pilihMutu(wadah.current.clientWidth);
      const mp = buatMasterplan(THREE, wadah.current, dataRef.current, {
        mode,
        mutu,
        pilih: kode,
        onPilih: (k) => setKode(k),
        onHover: (k, x, y) => setHover(k ? { kode: k, x, y } : null),
        onGagal: (pesan) => setGagal(pesan),
      });
      peta.current = mp;
      mp.saatGambar(() => {
        if (!wadah.current) return;
        const blokLabels = dataRef.current!.blok.map((b): [string, number, number] => {
          const [x, z] = mp.posisiBlok(b);
          const [sx, sy] = mp.keLayar(x, z);
          return [b.name, sx, sy];
        });
        setPin({ blok: blokLabels, unit: null });
      });
      mp.gambar();
      if (mini.current) gambarMinimap(mp, mini.current);
    })();
    return () => {
      hidup = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const pilihUnit = useCallback((k: string | null) => {
    setKode(k);
    peta.current?.pilih(k);
  }, []);

  const info = kode ? infoMap[kode] : null;

  return (
    <div className="mp">
      <div className="mp-scene" ref={wadah} />

      {!siap && !gagal && (
        <div className="mp-muat">
          <div className="mini">Memuat peta 3D…</div>
        </div>
      )}
      {gagal && (
        <div className="mp-muat">
          <div>{gagal}</div>
          <a href="/site-plan">Muat ulang</a>
        </div>
      )}

      <header className="mp-brand">
        <img src="/logo.png" alt="Puri Safana Cikeas" />
        <div>
          <b>PURI SAFANA</b>
          <i>C I K E A S</i>
          <span>Lebih Dekat, Lebih Murah, Lebih Luas</span>
        </div>
      </header>

      <nav className="mp-nav">
        <button
          className={`mp-pil${mode === "status" ? " on" : ""}`}
          onClick={() => setMode("status")}
        >
          <Icon n="grid" s={15} /> <span>Status Penjualan</span>
        </button>
        <button
          className={`mp-pil${mode === "progres" ? " on" : ""}`}
          onClick={() => setMode("progres")}
        >
          <Icon n="chart" s={15} /> <span>Progres Konstruksi</span>
        </button>
        <Link className="mp-pil" href="/">
          <Icon n="home" s={15} /> <span>Beranda</span>
        </Link>
      </nav>

      {info && (
        <aside className="mp-unit mp-kaca" ref={kartu}>
          <button className="mp-tutup" onClick={() => pilihUnit(null)} aria-label="Tutup">
            ×
          </button>
          <img className="mp-foto" src={info.foto} alt={info.tipeNama} />
          <div className="mp-kode">
            <b>{info.kode}</b>
            <span
              className={`mp-st ${
                info.status === "tersedia" ? "st-ada" : info.status === "booking" ? "st-book" : "st-jual"
              }`}
            >
              {info.statusLabel}
            </span>
          </div>
          <div className="mp-tipe">
            {info.tipeNama} · Blok {info.blok}
          </div>
          <div className="mp-g2">
            <div>
              <span>Luas Tanah</span>
              <b>{info.landArea} m²</b>
            </div>
            <div>
              <span>Luas Bangunan</span>
              <b>{info.buildingArea} m²</b>
            </div>
            {info.bedrooms != null && (
              <div>
                <span>Kamar Tidur</span>
                <b>{info.bedrooms}</b>
              </div>
            )}
            {info.bathrooms != null && (
              <div>
                <span>Kamar Mandi</span>
                <b>{info.bathrooms}</b>
              </div>
            )}
          </div>
          <div className="mp-garis" />
          <div className="mp-harga">
            <span>Harga mulai dari</span>
            {formatRupiah(info.price)}
          </div>
          {mode === "progres" && (
            <>
              <div className="mp-bar-label">
                <span>Progres konstruksi</span>
                <span>{Math.round(info.progress)}%</span>
              </div>
              <div className="mp-bar">
                <i style={{ width: `${Math.min(100, Math.max(0, info.progress))}%`, background: "#37A05C" }} />
              </div>
            </>
          )}
          <div className="mp-aksi">
            <Link className="mp-btn pri" href={`/tipe-rumah/${info.tipeSlug}`}>
              Lihat Tipe
            </Link>
            <a
              className="mp-btn"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                `Halo, saya tertarik dengan unit ${info.kode} (${info.tipeNama}) di Puri Safana Cikeas.`
              )}`}
            >
              Tanya via WA
            </a>
          </div>
        </aside>
      )}

      <div className="mp-labels">
        {pin.blok.map(([name, x, y]) => (
          <div key={name} className="mp-pin" style={{ left: x, top: y }}>
            <div className="mp-lbl">{name}</div>
            <i />
            <u />
          </div>
        ))}
      </div>

      {hover && hover.kode !== kode && (
        <div className="mp-tip" style={{ left: hover.x, top: hover.y - 14 }}>
          <b>{hover.kode}</b>
          {infoMap[hover.kode] && (
            <span>
              {infoMap[hover.kode].tipeNama} · {infoMap[hover.kode].statusLabel}
            </span>
          )}
        </div>
      )}

      <div className="mp-lokasi mp-kaca">
        <canvas ref={mini} width={196} height={104} />
        <div className="mp-cap">
          <Icon n="map" s={13} /> Denah kawasan
        </div>
      </div>

      <div className="mp-kontrol mp-kaca">
        <button onClick={() => peta.current?.zoom(0.85)} aria-label="Perbesar">
          <Icon n="plus" s={15} />
        </button>
        <button onClick={() => peta.current?.zoom(1.18)} aria-label="Perkecil">
          <Icon n="down" s={15} />
        </button>
        <button onClick={() => peta.current?.putar(-20)} aria-label="Putar kiri">
          <Icon n="refresh" s={15} />
        </button>
        <button onClick={() => peta.current?.reset()}>
          <Icon n="filter" s={15} /> <span>Reset</span>
        </button>
      </div>

      {galeri && (
        <div className="mp-tipe-bar mp-kaca">
          {tipeList.map((t) => (
            <Link key={t.slug} href={`/tipe-rumah/${t.slug}`}>
              <figure>
                <img src={t.foto} alt={t.nama} />
                <figcaption>
                  {t.nama}
                  <br />
                  {t.jml} unit
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      )}
      <button className="mp-galeri-buka" onClick={() => setGaleri((g) => !g)}>
        <Icon n="grid" s={14} /> Tipe rumah
      </button>
    </div>
  );
}
