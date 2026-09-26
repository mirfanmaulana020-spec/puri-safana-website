/**
 * Adegan 3D masterplan (dipakai halaman /masterplan).
 *
 * Dibuat tanpa import three di tingkat modul: pustaka three dikirim sebagai argumen
 * agar halaman lain tidak ikut memuatnya (kode terpisah, halaman lain tetap ringan).
 */
import { progresWarna, STATUS_WARNA } from './warna';

export type UnitPeta = {
  kode: string; blok: string; x: number; z: number;
  status: string; progress: number; tipe: string; jenis: string;
};
export type PetakKosong = { x: number; z: number };
export type LabelBlok = { name: string; x: number; z: number };
export type DataPeta = { units: UnitPeta[]; kosong: PetakKosong[]; blok: LabelBlok[] };
export type Mode = 'status' | 'progres';
export type Mutu = 'tinggi' | 'sedang' | 'ringan';

type THREE = typeof import('three');
type Obj3D = import('three').Object3D;

const MUTU = {
  tinggi: { tex: 3072, shadow: 2048, pohon: 4200, dpr: 1.6, bayangan: true },
  sedang: { tex: 2048, shadow: 1024, pohon: 2400, dpr: 1.4, bayangan: true },
  ringan: { tex: 1280, shadow: 0, pohon: 1200, dpr: 1.2, bayangan: false },
} as const;

export function pilihMutu(lebar: number): Mutu {
  if (typeof navigator !== 'undefined' && (navigator as { deviceMemory?: number }).deviceMemory
      && (navigator as { deviceMemory?: number }).deviceMemory! <= 4) return 'ringan';
  return lebar < 760 ? 'sedang' : 'tinggi';
}

export function buatMasterplan(
  THREE: THREE, wadah: HTMLDivElement, data: DataPeta,
  opsi: { mode: Mode; mutu: Mutu; pilih?: string | null; onPilih?: (kode: string | null) => void;
          onHover?: (kode: string | null, x: number, y: number) => void; onGagal?: (pesan: string) => void },
) {
  const M = MUTU[opsi.mutu];
  let hidup = true;
  const lin = (c: string) => new THREE.Color(c).convertSRGBToLinear();
  const warnaUnit = (u: UnitPeta) =>
    opsi.mode === 'progres' ? progresWarna(u.progress) : (STATUS_WARNA[u.status] ?? '#B9BFAE');

  let W = wadah.clientWidth || 1, H = wadah.clientHeight || 1;
  const renderer = new THREE.WebGLRenderer({ antialias: opsi.mutu !== 'ringan', powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, M.dpr));
  renderer.setSize(W, H);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.06;
  if (M.bayangan) { renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; }
  renderer.domElement.style.display = 'block';
  wadah.appendChild(renderer.domElement);
  // konteks WebGL bisa hilang (tab lama, memori GPU penuh) — beri tahu pemanggil, jangan diam
  renderer.domElement.addEventListener('webglcontextlost', (e) => {
    e.preventDefault(); hidup = false;
    opsi.onGagal?.('Konteks 3D terputus oleh browser. Muat ulang halaman untuk menampilkan peta lagi.');
  });

  const scene = new THREE.Scene();
  const LANGIT = new THREE.Color('#c2cdbf');
  scene.background = LANGIT;
  const kabut = new THREE.Fog(LANGIT, 1400, 3200);
  scene.fog = kabut;

  // ---------- batas & pusat ----------
  const semua = [...data.units, ...data.kosong];
  let minX = 1e9, maxX = -1e9, minZ = 1e9, maxZ = -1e9;
  for (const u of semua) { minX = Math.min(minX, u.x); maxX = Math.max(maxX, u.x); minZ = Math.min(minZ, u.z); maxZ = Math.max(maxZ, u.z); }
  const cx = (minX + maxX) / 2, cz = (minZ + maxZ) / 2;
  const P = (x: number, z: number): [number, number] => [x - cx, z - cz];

  scene.add(new THREE.HemisphereLight(lin('#eef2f6'), lin('#55623f'), 0.8));
  const sun = new THREE.DirectionalLight(lin('#fff1da'), 1.55);
  sun.position.set(-230, 320, 170);
  if (M.bayangan) {
    sun.castShadow = true;
    sun.shadow.mapSize.set(M.shadow, M.shadow);
    const SH = Math.max(maxX - minX, maxZ - minZ) / 2 + 80;
    Object.assign(sun.shadow.camera, { left: -SH, right: SH, top: SH, bottom: -SH, near: 10, far: 1200 });
    sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.02;
  }
  scene.add(sun);

  // ---------- utilitas ----------
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const titik = semua.map((u) => P(u.x, u.z));
  const sel = new Map<string, [number, number][]>();
  const kunci = (x: number, z: number) => `${Math.floor(x / 10)},${Math.floor(z / 10)}`;
  for (const p of titik) { const k = kunci(p[0], p[1]); (sel.get(k) ?? sel.set(k, []).get(k)!).push(p); }
  function terdekat(x: number, z: number, R = 20) {
    let d = 1e9; const gx = Math.floor(x / 10), gz = Math.floor(z / 10), r = Math.ceil(R / 10);
    for (let i = -r; i <= r; i++) for (let j = -r; j <= r; j++)
      for (const p of sel.get(`${gx + i},${gz + j}`) ?? []) d = Math.min(d, Math.hypot(p[0] - x, p[1] - z));
    return d;
  }
  const semuaAsli = semua.map((u) => [u.x, u.z] as [number, number]);
  function arahDeret(x: number, z: number) {                       // arah barisan rumah = ke tetangga terdekat
    let best: [number, number] | null = null, bd = 1e9;
    for (const [a, b] of semuaAsli) { const d = Math.hypot(a - x, b - z); if (d > 0.5 && d < bd) { bd = d; best = [a - x, b - z]; } }
    return best ? -Math.atan2(best[1], best[0]) : 0;
  }

  // ---------- batas kawasan (closing morfologi) ----------
  const MARG = 150, CS = 2;
  const gx0 = minX - cx - MARG, gz0 = minZ - cz - MARG;
  const GW = (maxX - minX) + 2 * MARG, GH = (maxZ - minZ) + 2 * MARG;
  const gw = Math.ceil(GW / CS), gh = Math.ceil(GH / CS);
  const dPlot = new Float32Array(gw * gh);
  for (let y = 0; y < gh; y++) for (let x = 0; x < gw; x++) dPlot[y * gw + x] = terdekat(gx0 + (x + .5) * CS, gz0 + (y + .5) * CS, 34);
  function jarakKeLuar(dalam: (i: number) => boolean) {
    const D = new Float32Array(gw * gh), A = 1, B = Math.SQRT2;
    for (let i = 0; i < D.length; i++) D[i] = dalam(i) ? 1e9 : 0;
    const at = (x: number, y: number) => (x < 0 || y < 0 || x >= gw || y >= gh ? 0 : D[y * gw + x]);
    for (let y = 0; y < gh; y++) for (let x = 0; x < gw; x++) { const i = y * gw + x; if (!D[i]) continue;
      D[i] = Math.min(D[i], at(x - 1, y) + A, at(x, y - 1) + A, at(x - 1, y - 1) + B, at(x + 1, y - 1) + B); }
    for (let y = gh - 1; y >= 0; y--) for (let x = gw - 1; x >= 0; x--) { const i = y * gw + x; if (!D[i]) continue;
      D[i] = Math.min(D[i], at(x + 1, y) + A, at(x, y + 1) + A, at(x + 1, y + 1) + B, at(x - 1, y + 1) + B); }
    return D;
  }
  const dil = jarakKeLuar((i) => dPlot[i] < 32);
  const F = new Float32Array(gw * gh);
  for (let i = 0; i < F.length; i++) F[i] = dil[i] * CS - 17;
  const diDalam = (x: number, z: number) => {
    const gx = Math.floor((x - gx0) / CS), gz = Math.floor((z - gz0) / CS);
    return gx >= 0 && gz >= 0 && gx < gw && gz < gh && F[gz * gw + gx] > 0;
  };
  const SEG: [[number, number], [number, number]][] = [];
  {
    const T: Record<number, [number, number][]> = {1: [[3, 0]], 2: [[0, 1]], 3: [[3, 1]], 4: [[1, 2]], 5: [[3, 0], [1, 2]],
      6: [[0, 2]], 7: [[3, 2]], 8: [[2, 3]], 9: [[0, 2]], 10: [[0, 1], [2, 3]], 11: [[1, 2]], 12: [[1, 3]], 13: [[0, 1]], 14: [[0, 3]]};
    const wx = (x: number) => gx0 + (x + .5) * CS, wz = (y: number) => gz0 + (y + .5) * CS;
    for (let y = 0; y < gh - 1; y++) for (let x = 0; x < gw - 1; x++) {
      const v0 = F[y * gw + x], v1 = F[y * gw + x + 1], v2 = F[(y + 1) * gw + x + 1], v3 = F[(y + 1) * gw + x];
      const c = (+(v0 > 0)) | (+(v1 > 0)) << 1 | (+(v2 > 0)) << 2 | (+(v3 > 0)) << 3;
      if (!T[c]) continue;
      const e = (k: number): [number, number] => k === 0 ? [wx(x + v0 / (v0 - v1)), wz(y)]
        : k === 1 ? [wx(x + 1), wz(y + v1 / (v1 - v2))]
        : k === 2 ? [wx(x + v3 / (v3 - v2)), wz(y + 1)] : [wx(x), wz(y + v0 / (v0 - v3))];
      for (const [a, b] of T[c]) SEG.push([e(a), e(b)]);
    }
  }

  // ---------- tekstur tanah (dilukis sekali) ----------
  const TS = Math.min(M.tex / GW, M.tex / GH);
  const cv = document.createElement('canvas');
  cv.width = Math.round(GW * TS); cv.height = Math.round(GH * TS);
  const g = cv.getContext('2d')!;
  const X = (x: number) => (x - gx0) * TS, Z = (z: number) => (z - gz0) * TS;
  const KANOPI = ['#23361d', '#2b4222', '#314a26', '#3a5429', '#26391f', '#40592c', '#2f4524'];
  function hutan(ctx: CanvasRenderingContext2D, w: number, h: number, n: number, r0: number, r1: number) {
    for (let i = 0; i < n; i++) {
      const x = rnd() * w, y = rnd() * h, r = r0 + rnd() * (r1 - r0);
      ctx.fillStyle = 'rgba(10,18,8,.45)'; ctx.beginPath(); ctx.arc(x + r * .35, y + r * .3, r, 0, 7); ctx.fill();
      ctx.fillStyle = KANOPI[Math.floor(rnd() * KANOPI.length)]; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
      ctx.fillStyle = 'rgba(160,190,110,.16)'; ctx.beginPath(); ctx.arc(x - r * .3, y - r * .3, r * .55, 0, 7); ctx.fill();
    }
  }
  g.fillStyle = '#2c3f23'; g.fillRect(0, 0, cv.width, cv.height);
  hutan(g, cv.width, cv.height, Math.round(cv.width * cv.height / (TS * TS * 7)), 1.6 * TS, 3.4 * TS);
  {
    const lc = document.createElement('canvas'); lc.width = gw; lc.height = gh;
    const lg = lc.getContext('2d')!, img = lg.createImageData(gw, gh);
    const asp = [128, 129, 124], taman = [96, 124, 66];
    for (let i = 0; i < gw * gh; i++) {
      if (F[i] <= 0) continue;
      const c = dPlot[i] > 19 ? taman : asp, j = (rnd() - .5) * 6;
      img.data.set([c[0] + j, c[1] + j, c[2] + j, 255], i * 4);
    }
    lg.putImageData(img, 0, 0);
    g.imageSmoothingEnabled = true; g.drawImage(lc, 0, 0, gw * CS * TS, gh * CS * TS);
  }
  const LOT_W = 10.2, LOT_D = 12.4;
  type Petak = { x: number; z: number; a: number; u: UnitPeta | null };
  const petak: Petak[] = [
    ...data.units.map((u): Petak => { const [x, z] = P(u.x, u.z); return { x, z, a: arahDeret(u.x, u.z), u }; }),
    ...data.kosong.map((e): Petak => { const [x, z] = P(e.x, e.z); return { x, z, a: arahDeret(e.x, e.z), u: null }; }),
  ];
  const kotakLahan = (x: number, z: number, a: number, w: number, d: number, dz: number, isi: string) => {
    g.save(); g.translate(X(x), Z(z)); g.rotate(-a); g.fillStyle = isi;
    g.fillRect((-w / 2) * TS, (-d / 2 + dz) * TS, w * TS, d * TS); g.restore();
  };
  for (const l of petak) kotakLahan(l.x, l.z, l.a, LOT_W + 2.6, LOT_D + 2.6, 0, '#c7c3b8');
  for (const l of petak) kotakLahan(l.x, l.z, l.a, LOT_W + 1.4, LOT_D + 1.4, 0, l.u ? warnaUnit(l.u) : '#e3dfd3');
  for (const l of petak) {
    const tanah = !l.u || (opsi.mode === 'progres' && l.u.progress <= 0);
    const t = (rnd() - .5) * 10;
    kotakLahan(l.x, l.z, l.a, LOT_W, LOT_D, 0,
      tanah ? `rgb(${160 + t},${142 + t},${108 + t})` : `rgb(${98 + t},${128 + t},${70 + t})`);
    if (l.u && !tanah) { g.globalAlpha = .72; kotakLahan(l.x, l.z, l.a, LOT_W, LOT_D, 0, warnaUnit(l.u)); g.globalAlpha = 1; }
    if (!tanah) kotakLahan(l.x, l.z, l.a, 3.4, 3.6, LOT_D / 2 - 1.8, '#cdc8bb');
  }
  g.lineCap = 'round';
  g.strokeStyle = 'rgba(30,38,26,.55)'; g.lineWidth = 3.4 * TS;
  g.beginPath(); for (const [a, b] of SEG) { g.moveTo(X(a[0]), Z(a[1])); g.lineTo(X(b[0]), Z(b[1])); } g.stroke();
  g.strokeStyle = '#f2ecdc'; g.lineWidth = 1.5 * TS; g.stroke();

  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const tanah = new THREE.Mesh(new THREE.PlaneGeometry(GW, GH), new THREE.MeshStandardMaterial({ map: tex, roughness: 1 }));
  tanah.rotation.x = -Math.PI / 2; tanah.position.set(gx0 + GW / 2, 0, gz0 + GH / 2);
  tanah.receiveShadow = M.bayangan; scene.add(tanah);
  {
    const c = document.createElement('canvas'); c.width = c.height = 512;
    const cg = c.getContext('2d')!;
    cg.fillStyle = '#2c3f23'; cg.fillRect(0, 0, 512, 512); hutan(cg, 512, 512, 2600, 6, 13);
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(250, 250); t.colorSpace = THREE.SRGBColorSpace;
    const luar = new THREE.Mesh(new THREE.PlaneGeometry(20000, 20000), new THREE.MeshStandardMaterial({ map: t, roughness: 1 }));
    luar.rotation.x = -Math.PI / 2; luar.position.y = -1.5; scene.add(luar);
  }
  {                                                                // tembok keliling
    const pos: number[] = [], tinggi = 2.4;
    for (const [a, b] of SEG) pos.push(a[0], 0, a[1], b[0], 0, b[1], b[0], tinggi, b[1], a[0], 0, a[1], b[0], tinggi, b[1], a[0], tinggi, a[1]);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.computeVertexNormals();
    const tembok = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: lin('#ece5d3'), roughness: .9, side: THREE.DoubleSide }));
    tembok.castShadow = tembok.receiveShadow = M.bayangan; scene.add(tembok);
  }

  // ---------- rumah ----------
  const mat = (c: string, o: Record<string, unknown> = {}) =>
    new THREE.MeshStandardMaterial(Object.assign({ color: lin(c), roughness: .88, metalness: 0 }, o));
  const genteng = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const t = c.getContext('2d')!;
    t.fillStyle = '#fff'; t.fillRect(0, 0, 128, 128);
    for (let y = 0; y < 128; y += 16) {
      const gr = t.createLinearGradient(0, y, 0, y + 16);
      gr.addColorStop(0, '#ffffff'); gr.addColorStop(.8, '#d9d9d9'); gr.addColorStop(1, '#9a9a9a');
      t.fillStyle = gr; t.fillRect(0, y, 128, 16);
    }
    const tx = new THREE.CanvasTexture(c); tx.wrapS = tx.wrapT = THREE.RepeatWrapping; tx.repeat.set(3, 3); return tx;
  })();
  const cache: Record<string, import('three').MeshStandardMaterial> = {};
  const matAtap = (c: string) => cache[c] || (cache[c] = mat(c, { map: genteng, roughness: .7 }));
  const ATAP = ['#3b3e42', '#44474b', '#4c4640', '#3e4347', '#55504a'];
  const dinding = mat('#eeebe5'), alas = mat('#8f8a80'), kacaM = mat('#55666c', { roughness: .08, metalness: .55 }),
        pintu = mat('#6a4c36'), bingkai = mat('#f7f5f0'), bata = mat('#8b5a43'), abu = mat('#8f918d'),
        beton = mat('#b9b6ad'), daun = mat('#4f7a3a'), lavender = mat('#8c79b8'), patok = mat('#6b5a44'), kasar = mat('#c9bba4'),
        kosongMat = mat('#c9c3b2'), tenda = mat('#3b3f3c');
  const GEO: Record<string, import('three').BufferGeometry> = {};
  const kotak = (w: number, h: number, d: number) => GEO[`${w}|${h}|${d}`] || (GEO[`${w}|${h}|${d}`] = new THREE.BoxGeometry(w, h, d));
  const segitiga = (lebar: number, tinggi: number, puncak: number, tebal: number) => {
    const k = `t|${lebar}|${tinggi}|${puncak}|${tebal}`;
    if (GEO[k]) return GEO[k];
    const sh = new THREE.Shape();
    sh.moveTo(-lebar / 2, 0); sh.lineTo(lebar / 2, 0); sh.lineTo(puncak, tinggi); sh.lineTo(-lebar / 2, 0);
    const geo = new THREE.ExtrudeGeometry(sh, { depth: tebal, bevelEnabled: false });
    geo.translate(0, 0, -tebal / 2); return (GEO[k] = geo);
  };
  const HS = 2.05;
  const rumah: Record<string, Obj3D> = {};
  const dapatDipilih: Obj3D[] = [];

  function hadap(x: number, z: number, phi: number) {              // muka rumah ke sisi yang lebih lapang (jalan)
    const padat = (a: number) => {
      const dx = Math.sin(a), dz = Math.cos(a); let n = 0;
      for (const t of [7, 11, 15]) for (const [px, pz] of titik) if (Math.hypot(px - (x + dx * t), pz - (z + dz * t)) < 5) n++;
      return n;
    };
    return padat(phi) <= padat(phi + Math.PI) ? phi : phi + Math.PI;
  }

  function atapPelana(tambah: Tambah, bahan: import('three').Material, lebar: number, dalam: number, y0: number,
                      tinggi: number, px: number, ov: number, rangka: boolean) {
    for (const [i, arah] of [[0, -1], [1, 1]] as [number, number][]) {
      if (rangka && i === 1) continue;
      const tepi = arah * lebar / 2;
      const kemiringan = tinggi / Math.abs(px - tepi);
      const run = Math.abs(px - tepi) + ov, rise = kemiringan * run;
      tambah(kotak(+Math.hypot(run, rise).toFixed(3), .09, dalam + ov * 2), bahan,
        (px + tepi + arah * ov) / 2, y0 + tinggi - rise / 2 + .03, 0, { rz: -arah * Math.atan(kemiringan) });
    }
    tambah(kotak(.16, .12, dalam + ov * 2), bahan, px, y0 + tinggi + .05, 0);
  }

  type Tambah = (geo: import('three').BufferGeometry, m: import('three').Material, x: number, y: number, z: number,
                 o?: { rz?: number; ry?: number; cast?: boolean }) => import('three').Mesh;

  function tipe36(tambah: Tambah, bahanAtap: import('three').Material, rangka: boolean) {
    const W = 3.2, D = 4.0, Hd = 1.45, y0 = .25, px = -.35, Ht = 1.55, f = D / 2 + .031;
    tambah(kotak(W + .2, .25, D + .2), alas, 0, .12, 0);
    tambah(kotak(W, Hd, D), dinding, 0, y0 + Hd / 2, 0);
    tambah(segitiga(W, Ht - .04, px, D), dinding, 0, y0 + Hd, 0);
    atapPelana(tambah, bahanAtap, W, D, y0 + Hd, Ht, px, .28, rangka);
    tambah(segitiga(1.9, 1.05, px, .05), kacaM, px, y0 + Hd + .12, f, { cast: false });
    tambah(kotak(.95, Hd, .06), bata, -1.1, y0 + Hd / 2, f, { cast: false });
    tambah(kotak(.62, 1.05, .05), pintu, -.2, y0 + .53, f + .01, { cast: false });
    tambah(kotak(.28, 1.05, .05), kacaM, .22, y0 + .53, f + .01, { cast: false });
    tambah(kotak(.42, 1.1, .05), kacaM, 1.05, y0 + .6, f + .01, { cast: false });
    tambah(kotak(W + .25, .1, .75), beton, 0, y0 + Hd - .1, f + .36);
    tambah(kotak(.26, Hd - .1, .26), abu, W / 2 - .15, y0 + (Hd - .1) / 2, f + .6);
    tambah(kotak(1.2, .28, .35), beton, .85, .16, f + 1.15);
    tambah(kotak(1.1, .22, .28), lavender, .85, .38, f + 1.15, { cast: false });
  }

  function tipe60(tambah: Tambah, bahanAtap: import('three').Material, rangka: boolean) {
    const W = 3.2, D = 4.0, H1 = 1.35, H2 = 1.3, y0 = .25, Ht = 1.0, f = D / 2 + .031, D2 = D - .35, f2 = D2 / 2 - .175 + .031;
    tambah(kotak(W + .2, .25, D + .2), alas, 0, .12, 0);
    tambah(kotak(W, H1, D), dinding, 0, y0 + H1 / 2, 0);
    tambah(kotak(W, H2, D2), dinding, 0, y0 + H1 + H2 / 2, -.175);
    tambah(kotak(W + .08, .12, .3), abu, 0, y0 + H1 + .02, f - .1);
    tambah(segitiga(W, Ht - .04, 0, D2), dinding, 0, y0 + H1 + H2, -.175);
    atapPelana(tambah, bahanAtap, W, D2, y0 + H1 + H2, Ht, 0, .22, rangka);
    tambah(kotak(.8, H2, .06), bata, -1.2, y0 + H1 + H2 / 2, f2, { cast: false });
    tambah(kotak(.55, H2 + Ht * .6, .06), abu, 1.33, y0 + H1 + (H2 + Ht * .6) / 2, f2, { cast: false });
    tambah(kotak(1.05, .74, .05), bingkai, -.05, y0 + H1 + .7, f2 + .005, { cast: false });
    tambah(kotak(.95, .66, .05), kacaM, -.05, y0 + H1 + .7, f2 + .012, { cast: false });
    tambah(kotak(1.5, H1 - .15, .06), abu, .55, y0 + (H1 - .15) / 2, f, { cast: false });
    tambah(kotak(.5, 1.05, .05), pintu, .85, y0 + .53, f + .01, { cast: false });
    tambah(kotak(.42, .95, .05), kacaM, .25, y0 + .55, f + .01, { cast: false });
    tambah(kotak(.6, .8, .05), kacaM, -1.0, y0 + .6, f + .01, { cast: false });
    tambah(kotak(1.0, .26, .32), beton, -.95, .15, f + 1.1);
    tambah(kotak(.9, .2, .25), daun, -.95, .36, f + 1.1, { cast: false });
  }

  function ruko(tambah: Tambah, bahanAtap: import('three').Material) {
    tambah(kotak(3.6, 4.0, 4.3), dinding, 0, 2.0, 0);
    tambah(kotak(3.8, .35, 4.5), bahanAtap, 0, 4.17, 0);
    tambah(kotak(3.0, 1.6, .06), kacaM, 0, .95, 2.16, { cast: false });
    tambah(kotak(3.6, .08, .9), tenda, 0, 1.9, 2.55);
    for (const wx of [-.9, .9]) tambah(kotak(.8, .75, .06), kacaM, wx, 3.0, 2.16, { cast: false });
  }

  for (const u of data.units) {
    const grp = new THREE.Group();
    const [x, z] = P(u.x, u.z);
    grp.position.set(x, .02, z);
    grp.rotation.y = hadap(u.x, u.z, arahDeret(u.x, u.z));
    let nn = 1e9;
    for (const [px, pz] of semuaAsli) { const d = Math.hypot(px - u.x, pz - u.z); if (d > .5 && d < nn) nn = d; }
    const lebar = u.jenis === 'Ruko' ? 1 : Math.max(1, Math.min(1.6, (nn * .99) / (3.2 * HS)));
    grp.scale.set(HS * lebar, HS, HS);
    grp.userData.kode = u.kode;

    const tambah: Tambah = (geo, m, px, py, pz, o = {}) => {
      const k = new THREE.Mesh(geo, m);
      k.position.set(px, py, pz);
      if (o.rz) k.rotation.z = o.rz;
      if (o.ry) k.rotation.y = o.ry;
      k.castShadow = M.bayangan && o.cast !== false; k.receiveShadow = M.bayangan;
      grp.add(k); return k;
    };
    const kelas = u.progress >= 100 ? 0 : u.progress >= 50 ? 1 : u.progress > 0 ? 2 : 3;
    const rangka = opsi.mode === 'progres' && kelas === 1 && u.progress < 80;
    const bahanAtap = rangka ? mat('#8a6a4a')
      : matAtap(ATAP[(u.kode.length * 7 + u.kode.charCodeAt(u.kode.length - 1)) % ATAP.length]);
    if (opsi.mode === 'progres' && kelas === 3) {
      for (const [sx, sz] of [[-1.6, -1.9], [1.6, -1.9], [1.6, 1.9], [-1.6, 1.9]]) tambah(kotak(.14, 1.1, .14), patok, sx, .55, sz);
    } else if (opsi.mode === 'progres' && kelas === 2) {
      const k = .2 + u.progress / 49 * .55;
      tambah(kotak(3.4, .25, 4.2), alas, 0, .12, 0);
      const w = tambah(kotak(3.3, 2.0, 4.0), kasar, 0, .25 + 1.0 * k, 0);
      w.scale.set(1, k, 1);
    } else if (u.jenis === 'Ruko') ruko(tambah, bahanAtap);
    else if (u.tipe.toLowerCase().startsWith('ans')) tipe36(tambah, bahanAtap, rangka);
    else tipe60(tambah, bahanAtap, rangka);

    rumah[u.kode] = grp;
    dapatDipilih.push(grp);
    scene.add(grp);
  }
  for (const e of data.kosong) {
    const [x, z] = P(e.x, e.z);
    const m = new THREE.Mesh(kotak(1.3, .1, 6.2), kosongMat);
    m.position.set(x, .36, z); m.rotation.y = arahDeret(e.x, e.z); m.scale.setScalar(HS);
    m.receiveShadow = M.bayangan; scene.add(m);
  }

  // ---------- pepohonan & permukiman sekitar ----------
  const pohon: [number, number, number][] = [];
  for (let i = 0; i < M.pohon * 7 && pohon.length < M.pohon; i++) {
    const x = gx0 - 250 + rnd() * (GW + 500), z = gz0 - 250 + rnd() * (GH + 500);
    const d = terdekat(x, z, 20), dalam = diDalam(x, z);
    if (dalam) { if (d < 17 || rnd() < .45) continue; } else {
      let tepi = false;
      for (const [a, b] of [[4, 0], [-4, 0], [0, 4], [0, -4]]) if (diDalam(x + a, z + b)) tepi = true;
      if (tepi) continue;
      let dekat = false;
      for (const [a, b] of [[60, 0], [-60, 0], [0, 60], [0, -60], [30, 30], [-30, -30], [30, -30], [-30, 30]]) if (diDalam(x + a, z + b)) dekat = true;
      if (!dekat || rnd() < .7) continue;
    }
    pohon.push([x, z, dalam ? .8 + rnd() * .5 : 1.0 + rnd() * 1.1]);
  }
  {
    const mahkotaGeo = new THREE.IcosahedronGeometry(1.9, opsi.mutu === 'ringan' ? 0 : 1);
    const p = mahkotaGeo.attributes.position;
    for (let i = 0; i < p.count; i++) { const k = .82 + rnd() * .3; p.setXYZ(i, p.getX(i) * k, p.getY(i) * (k * .92), p.getZ(i) * k); }
    mahkotaGeo.computeVertexNormals();
    const batang = new THREE.InstancedMesh(new THREE.CylinderGeometry(.16, .26, 2.4, 6), mat('#5b4a37'), pohon.length);
    const mahkota = new THREE.InstancedMesh(mahkotaGeo, new THREE.MeshStandardMaterial({ roughness: 1 }), pohon.length * 2);
    const tmp = new THREE.Object3D(), tc = new THREE.Color();
    const hijau = ['#2e4724', '#36522a', '#3f5d2f', '#2a3f21', '#47653a', '#34492a'];
    pohon.forEach(([x, z, s], i) => {
      tmp.rotation.set(0, 0, 0); tmp.position.set(x, 1.2 * s, z); tmp.scale.setScalar(s); tmp.updateMatrix();
      batang.setMatrixAt(i, tmp.matrix);
      const dasar = hijau[Math.floor(rnd() * hijau.length)];
      for (let k = 0; k < 2; k++) {
        tmp.position.set(x + (k ? (rnd() - .5) * 1.6 * s : 0), (3.0 + k * .9) * s, z + (k ? (rnd() - .5) * 1.6 * s : 0));
        tmp.rotation.set(rnd(), rnd() * 6, rnd());
        const f = k ? .7 : 1;
        tmp.scale.set(s * f * (1 + rnd() * .25), s * f * (1 + rnd() * .3), s * f * (1 + rnd() * .25));
        tmp.updateMatrix();
        mahkota.setMatrixAt(i * 2 + k, tmp.matrix);
        mahkota.setColorAt(i * 2 + k, tc.set(dasar).offsetHSL(0, 0, (rnd() - .5) * .06).convertSRGBToLinear());
      }
    });
    batang.castShadow = mahkota.castShadow = M.bayangan; mahkota.receiveShadow = M.bayangan;
    scene.add(batang, mahkota);
  }
  {                                                                // rumah kampung di sekitar kawasan
    const atapK = ['#8a5a44', '#6f6f6b', '#7d5a4a', '#5f6560'].map((c) => mat(c, { roughness: .9 }));
    const dindingK = ['#ddd8cc', '#cfc9bb', '#e3ddd0'].map((c) => mat(c, { roughness: .95 }));
    const unit = new THREE.BoxGeometry(1, 1, 1);
    let n = 0;
    const maks = opsi.mutu === 'ringan' ? 260 : 900;
    for (let i = 0; i < 26000 && n < maks; i++) {
      const x = gx0 - 200 + rnd() * (GW + 400), z = gz0 - 200 + rnd() * (GH + 400);
      if (diDalam(x, z) || terdekat(x, z, 24) < 22) continue;
      let dekat = false;
      for (const [a, b] of [[70, 0], [-70, 0], [0, 70], [0, -70], [50, 50], [-50, -50], [50, -50], [-50, 50]]) if (diDalam(x + a, z + b)) dekat = true;
      if (!dekat || rnd() < .45) continue;
      const w = 5 + rnd() * 4, d = 5 + rnd() * 5, h = 2.6 + rnd() * 1.6, ry = rnd() * Math.PI;
      const badan = new THREE.Mesh(unit, dindingK[Math.floor(rnd() * dindingK.length)]);
      badan.position.set(x, h / 2, z); badan.scale.set(w, h, d); badan.rotation.y = ry;
      badan.castShadow = badan.receiveShadow = M.bayangan; scene.add(badan);
      const atap = new THREE.Mesh(unit, atapK[Math.floor(rnd() * atapK.length)]);
      atap.position.set(x, h + .5, z); atap.scale.set(w + 1, 1, d + 1); atap.rotation.y = ry;
      atap.castShadow = M.bayangan; scene.add(atap);
      n++;
    }
  }

  // ---------- kamera ----------
  const cam = new THREE.PerspectiveCamera(W / H < 1 ? 40 : 32, W / H, 8, 6000);
  const target = new THREE.Vector3(0, 0, 0);
  let sxx = 0, szz = 0, sxz = 0;
  for (const [x, z] of titik) { sxx += x * x; szz += z * z; sxz += x * z; }
  const sudut = 0.5 * Math.atan2(2 * sxz, sxx - szz);
  let hx = -Math.sin(sudut), hz = Math.cos(sudut);
  if (hz < 0) { hx = -hx; hz = -hz; }
  const potret = W / H < 1;
  const arah = potret ? new THREE.Vector3(-0.25, 1.35, 0.9).normalize() : new THREE.Vector3(hx, 0.82, hz).normalize();
  const isi = potret ? [0.04, 0.96, 0.10, 0.56] : [0.04, 0.74, 0.12, 0.94];
  const pojok = ([[minX, minZ], [maxX, minZ], [minX, maxZ], [maxX, maxZ], [(minX + maxX) / 2, minZ], [(minX + maxX) / 2, maxZ]] as [number, number][])
    .map(([x, z]) => P(x, z));
  function pas(jarak: number) {
    cam.position.copy(target).addScaledVector(arah, jarak);
    cam.lookAt(target); cam.updateMatrixWorld(); cam.updateProjectionMatrix();
    let x0 = 1, x1 = 0, y0 = 1, y1 = 0;
    for (const [x, z] of pojok) {
      const v = new THREE.Vector3(x, 0, z).project(cam);
      const sx = (v.x + 1) / 2, sy = (1 - v.y) / 2;
      x0 = Math.min(x0, sx); x1 = Math.max(x1, sx); y0 = Math.min(y0, sy); y1 = Math.max(y1, sy);
    }
    return [x0, x1, y0, y1];
  }
  let lo = 100, hi = 3000;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2, [x0, x1, y0, y1] = pas(mid);
    if ((x1 - x0) > (isi[1] - isi[0]) || (y1 - y0) > (isi[3] - isi[2])) lo = mid; else hi = mid;
  }
  {
    const [x0, x1, y0, y1] = pas(hi);
    const dx = (isi[0] + isi[1]) / 2 - (x0 + x1) / 2, dy = (isi[2] + isi[3]) / 2 - (y0 + y1) / 2;
    const kanan = new THREE.Vector3().setFromMatrixColumn(cam.matrixWorld, 0); kanan.y = 0; kanan.normalize();
    const maju = new THREE.Vector3().setFromMatrixColumn(cam.matrixWorld, 1); maju.y = 0; maju.normalize();
    const h = 2 * hi * Math.tan(cam.fov * Math.PI / 360);
    target.addScaledVector(kanan, -dx * h * cam.aspect).addScaledVector(maju, dy * h * 1.25);
  }
  kabut.near = hi * 1.6; kabut.far = hi * 3.4;

  const pusatAwal = target.clone();
  // orbit sederhana (putar, zoom, geser) tanpa pustaka tambahan
  let jarak = hi, azimut = Math.atan2(arah.x, arah.z), elevasi = Math.asin(arah.y);
  const JARAK_MIN = hi * 0.18, JARAK_MAKS = hi * 1.6;
  function pasangKamera() {
    const c = Math.cos(elevasi);
    cam.position.set(target.x + Math.sin(azimut) * c * jarak, target.y + Math.sin(elevasi) * jarak, target.z + Math.cos(azimut) * c * jarak);
    cam.lookAt(target);
  }
  pasangKamera();

  // ---------- linkaran penanda unit terpilih ----------
  const cincin = new THREE.Mesh(new THREE.RingGeometry(8.2, 9.6, 48),
    new THREE.MeshBasicMaterial({ color: lin('#C9E265'), side: THREE.DoubleSide, transparent: true, opacity: .95 }));
  cincin.rotation.x = -Math.PI / 2; cincin.visible = false; scene.add(cincin);
  function tandai(kode: string | null) {
    const g2 = kode ? rumah[kode] : null;
    if (!g2) { cincin.visible = false; return; }
    cincin.position.set(g2.position.x, .14, g2.position.z); cincin.visible = true;
  }
  tandai(opsi.pilih ?? null);

  // ---------- render sesuai permintaan ----------
  let perluRender = true;
  const gambar = () => { perluRender = true; };
  function loop() {
    if (!hidup) return;
    if (perluRender) { perluRender = false; renderer.render(scene, cam); if (onGambar) onGambar(); }
    requestAnimationFrame(loop);
  }
  let onGambar: (() => void) | null = null;
  requestAnimationFrame(loop);

  function ukur() {
    W = wadah.clientWidth || 1; H = wadah.clientHeight || 1;
    renderer.setSize(W, H); cam.aspect = W / H; cam.updateProjectionMatrix(); gambar();
  }

  // ---------- interaksi ----------
  const ray = new THREE.Raycaster();
  const layar = new THREE.Vector2();
  function unitDi(px: number, py: number): string | null {
    const r = renderer.domElement.getBoundingClientRect();
    layar.set(((px - r.left) / r.width) * 2 - 1, -((py - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(layar, cam);
    const kena = ray.intersectObjects(dapatDipilih, true);
    for (const k of kena) {
      let o: Obj3D | null = k.object;
      while (o && !o.userData.kode) o = o.parent;
      if (o?.userData.kode) return o.userData.kode as string;
    }
    return null;
  }
  let seret = false, geser = false, lx = 0, ly = 0, gerak = 0;
  let modeSeret: 'putar' | 'geser' = 'putar';
  const jari = new Map<number, { x: number; y: number }>();      // sentuhan aktif (untuk cubit & geser dua jari)
  let jarakJari = 0, tengahJari = { x: 0, y: 0 };
  const el = renderer.domElement;
  function geserPeta(dx: number, dy: number) {
    const k = jarak * 0.0016;
    const kanan = new THREE.Vector3().setFromMatrixColumn(cam.matrixWorld, 0); kanan.y = 0; kanan.normalize();
    const maju = new THREE.Vector3().setFromMatrixColumn(cam.matrixWorld, 1); maju.y = 0; maju.normalize();
    target.addScaledVector(kanan, -dx * k).addScaledVector(maju, dy * k);
  }
  const onDown = (e: PointerEvent) => {
    jari.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (jari.size === 2) {
      const [a, b] = [...jari.values()];
      jarakJari = Math.hypot(a.x - b.x, a.y - b.y);
      tengahJari = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      seret = false; return;
    }
    seret = true; geser = e.button === 2 || e.shiftKey || modeSeret === 'geser';
    gerak = 0; lx = e.clientX; ly = e.clientY; el.setPointerCapture(e.pointerId);
  };
  const onMove = (e: PointerEvent) => {
    if (jari.has(e.pointerId)) jari.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (jari.size === 2) {                                        // dua jari: cubit untuk zoom + geser
      const [a, b] = [...jari.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y), t = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      if (jarakJari > 0) {
        jarak = Math.min(JARAK_MAKS, Math.max(JARAK_MIN, jarak * (jarakJari / Math.max(1, d))));
        geserPeta(t.x - tengahJari.x, t.y - tengahJari.y);
        pasangKamera(); gambar();
      }
      jarakJari = d; tengahJari = t; return;
    }
    if (!seret) {
      if (opsi.onHover) { const k = unitDi(e.clientX, e.clientY); opsi.onHover(k, e.clientX, e.clientY); }
      return;
    }
    const dx = e.clientX - lx, dy = e.clientY - ly;
    lx = e.clientX; ly = e.clientY; gerak += Math.abs(dx) + Math.abs(dy);
    if (geser) {
      geserPeta(dx, dy);
    } else {
      azimut -= dx * 0.005;
      elevasi = Math.min(Math.PI / 2.05, Math.max(0.22, elevasi + dy * 0.004));
    }
    pasangKamera(); gambar();
  };
  const onUp = (e: PointerEvent) => {
    jari.delete(e.pointerId);
    if (jari.size < 2) jarakJari = 0;
    seret = false;
    try { el.releasePointerCapture(e.pointerId); } catch { /* sudah dilepas */ }
    if (gerak < 6 && opsi.onPilih) { const k = unitDi(e.clientX, e.clientY); opsi.onPilih(k); if (k) tandai(k); }
  };
  const onWheel = (e: WheelEvent) => {
    e.preventDefault();
    jarak = Math.min(JARAK_MAKS, Math.max(JARAK_MIN, jarak * (1 + Math.sign(e.deltaY) * 0.12)));
    pasangKamera(); gambar();
  };
  el.addEventListener('pointerdown', onDown);
  el.addEventListener('pointermove', onMove);
  el.addEventListener('pointerup', onUp);
  el.addEventListener('pointerleave', () => opsi.onHover?.(null, 0, 0));
  el.addEventListener('wheel', onWheel, { passive: false });
  el.addEventListener('contextmenu', (e) => e.preventDefault());

  const ro = new ResizeObserver(ukur);
  ro.observe(wadah);

  return {
    /** Posisi layar sebuah titik dunia (untuk label & pin HTML). */
    keLayar(x: number, z: number, y = 0): [number, number, number] {
      const v = new THREE.Vector3(x, y, z).project(cam);
      return [(v.x + 1) / 2 * W, (1 - v.y) / 2 * H, v.z];
    },
    posisiUnit: (kode: string) => { const g2 = rumah[kode]; return g2 ? ([g2.position.x, g2.position.z] as [number, number]) : null; },
    posisiBlok: (b: LabelBlok) => P(b.x, b.z),
    pilih: (kode: string | null) => { tandai(kode); gambar(); },
    zoom: (faktor: number) => { jarak = Math.min(JARAK_MAKS, Math.max(JARAK_MIN, jarak * faktor)); pasangKamera(); gambar(); },
    putar: (derajat: number) => { azimut += derajat * Math.PI / 180; pasangKamera(); gambar(); },
    geser: (dx: number, dy: number) => { geserPeta(dx, dy); pasangKamera(); gambar(); },
    modeSeret: (m: 'putar' | 'geser') => { modeSeret = m; el.style.cursor = m === 'geser' ? 'move' : 'grab'; },
    reset: () => { jarak = hi; azimut = Math.atan2(arah.x, arah.z); elevasi = Math.asin(arah.y);
      target.set(pusatAwal.x, pusatAwal.y, pusatAwal.z); pasangKamera(); gambar(); },
    utara: () => {                                                  // sudut utara terhadap layar (derajat)
      const a = new THREE.Vector3(0, 0, 0).project(cam), b = new THREE.Vector3(0, 0, -100).project(cam);
      return Math.atan2(b.x - a.x, b.y - a.y) * 180 / Math.PI;
    },
    saatGambar: (f: () => void) => { onGambar = f; },
    gambar,
    dispose() {
      hidup = false;
      ro.disconnect();
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('wheel', onWheel);
      renderer.dispose();
      renderer.forceContextLoss();                                 // bebaskan konteks WebGL (batas ±16 per tab)
      scene.traverse((o) => {
        const m = o as unknown as { geometry?: { dispose(): void }; material?: { dispose(): void } | { dispose(): void }[] };
        m.geometry?.dispose?.();
        if (Array.isArray(m.material)) m.material.forEach((x) => x.dispose());
        else m.material?.dispose?.();
      });
      wadah.removeChild(renderer.domElement);
    },
    batas: { SEG, gx0, gz0, GW, GH },
  };
}
export type Masterplan = ReturnType<typeof buatMasterplan>;
