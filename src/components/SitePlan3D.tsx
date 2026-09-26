"use client";

import Image from "next/image";
import * as THREE from "three";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Text, ContactShadows, Html } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import {
  blocks,
  units,
  houseTypes,
  facilities,
  rukoList,
  statusColor,
  statusLabel,
  type Unit,
  type UnitStatus,
  type Facility,
  type Ruko,
  type HouseType,
} from "@/lib/data";

type ViewMode = "status" | "progress";

function progressColor(pct: number): string {
  if (pct >= 100) return "#4a8f3c";
  if (pct <= 0) return "#c0574a";
  const stops: [number, string][] = [
    [0, "#c0574a"],
    [50, "#e0b04c"],
    [100, "#4a8f3c"],
  ];
  for (let i = 0; i < stops.length - 1; i++) {
    const [p0, c0] = stops[i];
    const [p1, c1] = stops[i + 1];
    if (pct >= p0 && pct <= p1) {
      const t = (pct - p0) / (p1 - p0);
      return lerpColor(c0, c1, t);
    }
  }
  return "#8bc34a";
}

function lerpColor(a: string, b: string, t: number): string {
  const pa = hexToRgb(a);
  const pb = hexToRgb(b);
  const r = Math.round(pa.r + (pb.r - pa.r) * t);
  const g = Math.round(pa.g + (pb.g - pa.g) * t);
  const bl = Math.round(pa.b + (pb.b - pa.b) * t);
  return `rgb(${r},${g},${bl})`;
}

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.substring(0, 2), 16),
    g: parseInt(h.substring(2, 4), 16),
    b: parseInt(h.substring(4, 6), 16),
  };
}

/* ------------------------------------------------------------------ */
/* Geometri rumah bergaya arsitektural: pondasi, dinding, atap pelana  */
/* (dibangun sekali di module scope, dipakai ulang oleh semua unit)    */
/* ------------------------------------------------------------------ */

const FOOT = 1.28; // lebar & dalam dasar rumah
const WALL_H1 = 0.52; // tinggi lantai 1
const WALL_H2 = 0.42; // tinggi lantai 2 (rumah 2 lantai)
const ROOF_H = 0.34; // tinggi puncak atap dari atas dinding
const OV = 0.12; // tritisan atap

function buildGable(width: number, height: number, depth: number) {
  const s = new THREE.Shape();
  s.moveTo(-width / 2, 0);
  s.lineTo(width / 2, 0);
  s.lineTo(0, height);
  s.lineTo(-width / 2, 0);
  const geo = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false });
  geo.translate(0, 0, -depth / 2);
  return geo;
}

const plinthGeo = new THREE.BoxGeometry(FOOT + 0.06, 0.07, FOOT + 0.06);
const wall1Geo = new THREE.BoxGeometry(FOOT, WALL_H1, FOOT);
const wall2Geo = new THREE.BoxGeometry(FOOT * 0.86, WALL_H2, FOOT * 0.86);
const gableGeo = buildGable(FOOT, ROOF_H, FOOT);
const ridgeGeo = new THREE.BoxGeometry(0.05, 0.05, FOOT + OV * 2);
const dimmerGeo = new THREE.BoxGeometry(FOOT * 1.05, 1, FOOT * 1.05); // di-scale per instance

// perhitungan kemiringan atap (dua bidang simetris, sesuai render arsitek asli)
const RUN = FOOT / 2 + OV;
const SLOPE_RATIO = ROOF_H / (FOOT / 2);
const RISE = SLOPE_RATIO * RUN;
const SLOPE_LEN = Math.hypot(RUN, RISE);
const TILT = Math.atan(SLOPE_RATIO);
const roofSlabGeo = new THREE.BoxGeometry(SLOPE_LEN, 0.045, FOOT + OV * 2);
const CX_OFFSET = (FOOT / 2 + OV) / 2;

const wallMat = new THREE.MeshStandardMaterial({ color: "#eeebe4", roughness: 0.85 });
const plinthMat = new THREE.MeshStandardMaterial({ color: "#8f8a80", roughness: 0.9 });
const dimmerMat = new THREE.MeshBasicMaterial({ color: "#f4f2ec", transparent: true, opacity: 0.62, depthWrite: false });
const ROOF_PALETTE = ["#4b4e52", "#54575b", "#5c564f", "#4e5357", "#655f58"];
const ROOF_SOLD = "#9a968e";
const roofMatCache: Record<string, THREE.MeshStandardMaterial> = {};
function roofMat(color: string) {
  return (roofMatCache[color] ??= new THREE.MeshStandardMaterial({ color, roughness: 0.7 }));
}

interface HouseMeshProps {
  unit: Unit;
  type: HouseType | undefined;
  onSelect: (unit: Unit) => void;
  onHover: (unit: Unit | null) => void;
  selected: boolean;
  dimmed: boolean;
  viewMode: ViewMode;
}

function HouseMesh({ unit, type, onSelect, onHover, selected, dimmed, viewMode }: HouseMeshProps) {
  const [hovered, setHovered] = useState(false);
  const singleStory = unit.typeSlug === "ansara";
  const wallTop = singleStory ? WALL_H1 : WALL_H1 + WALL_H2;
  const isSold = unit.status === "terjual";
  const roofColor =
    viewMode === "progress"
      ? progressColor(unit.progress)
      : isSold
      ? ROOF_SOLD
      : ROOF_PALETTE[(unit.code.length * 7 + unit.code.charCodeAt(unit.code.length - 1)) % ROOF_PALETTE.length];
  const stripColor = viewMode === "status" ? statusColor[unit.status] : progressColor(unit.progress);
  const roofY = wallTop + ROOF_H - RISE / 2;
  const totalH = wallTop + ROOF_H;

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSelect(unit);
  };

  return (
    <group position={[unit.x, 0, unit.z]} rotation={[0, (unit.rot * Math.PI) / 180, 0]}>
      {/* hit target transparan, mencakup seluruh silhouette rumah */}
      <mesh
        position={[0, totalH / 2, 0]}
        onClick={handleClick}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          onHover(unit);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(null);
          document.body.style.cursor = "default";
        }}
      >
        <boxGeometry args={[FOOT * 1.15, totalH + 0.1, FOOT * 1.15]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      <mesh geometry={plinthGeo} position={[0, 0.035, 0]} material={plinthMat} receiveShadow />
      <mesh geometry={wall1Geo} position={[0, WALL_H1 / 2 + 0.07, 0]} material={wallMat} castShadow receiveShadow />
      {!singleStory && (
        <mesh
          geometry={wall2Geo}
          position={[0, WALL_H1 + WALL_H2 / 2 + 0.07, 0]}
          material={wallMat}
          castShadow
          receiveShadow
        />
      )}
      <mesh geometry={gableGeo} position={[0, wallTop + 0.07, 0]} material={wallMat} castShadow />
      <mesh
        geometry={roofSlabGeo}
        position={[-CX_OFFSET, roofY + 0.07, 0]}
        rotation={[0, 0, TILT]}
        material={roofMat(roofColor)}
        castShadow
      />
      <mesh
        geometry={roofSlabGeo}
        position={[CX_OFFSET, roofY + 0.07, 0]}
        rotation={[0, 0, -TILT]}
        material={roofMat(roofColor)}
        castShadow
      />
      <mesh geometry={ridgeGeo} position={[0, wallTop + ROOF_H + 0.1, 0]} material={roofMat(roofColor)} />

      {/* carport / strip depan — highlight status/progres yang elegan, bukan solid paint */}
      <mesh position={[0, 0.012, FOOT / 2 + 0.24]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[FOOT * 0.88, 0.34]} />
        <meshStandardMaterial color={stripColor} roughness={0.95} />
      </mesh>

      {selected && (
        <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[FOOT * 0.62, FOOT * 0.8, 40]} />
          <meshBasicMaterial color="#8fc23a" />
        </mesh>
      )}

      {/* redupkan unit yang tidak lolos filter, tanpa mengubah/menghilangkan modelnya */}
      {dimmed && (
        <mesh
          position={[0, totalH / 2, 0]}
          scale={[1, totalH, 1]}
          geometry={dimmerGeo}
          material={dimmerMat}
          raycast={() => null}
        />
      )}

      {/* tooltip hover ringkas — muncul di luar mode seleksi */}
      <Html
        position={[0, totalH + 0.55, 0]}
        center
        distanceFactor={11}
        style={{
          pointerEvents: "none",
          opacity: hovered && !selected ? 1 : 0,
          transition: "opacity 180ms ease",
        }}
        occlude={false}
      >
        <div className="bg-white/95 rounded-lg shadow-lg px-2.5 py-1.5 text-[11px] leading-tight border border-black/10 whitespace-nowrap">
          <div className="font-semibold text-[#1c2317]">{unit.code}</div>
          <div className="text-black/55">
            {type?.name ?? unit.typeSlug} · {statusLabel[unit.status]}
          </div>
          <div className="text-black/70 font-medium">
            Rp {(unit.price / 1_000_000).toLocaleString("id-ID")} Jt
          </div>
        </div>
      </Html>
    </group>
  );
}

const RUKO_FACADE = ["#1c2748", "#d8cdbb", "#6b4a3a"];

function RukoMesh({
  ruko,
  index,
  onSelect,
  onHover,
  selected,
  dimmed,
}: {
  ruko: Ruko;
  index: number;
  onSelect: (r: Ruko) => void;
  onHover: (r: Ruko | null) => void;
  selected: boolean;
  dimmed: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const facade = RUKO_FACADE[index % RUKO_FACADE.length];
  const height = ruko.floors * 0.85;

  return (
    <group position={[ruko.x, 0, ruko.z]} rotation={[0, (ruko.rot * Math.PI) / 180, 0]}>
      <mesh
        position={[0, height / 2, 0]}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(ruko);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          onHover(ruko);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(null);
          document.body.style.cursor = "default";
        }}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.56, height, 0.62]} />
        <meshStandardMaterial
          color={facade}
          emissive={selected ? "#a3d139" : "#000000"}
          emissiveIntensity={selected ? 0.6 : 0}
        />
      </mesh>
      <mesh position={[0, 0.32, 0.32]}>
        <planeGeometry args={[0.4, 0.42]} />
        <meshStandardMaterial color="#bcd6e8" metalness={0.2} roughness={0.15} />
      </mesh>
      <mesh position={[0, height + 0.03, 0]}>
        <boxGeometry args={[0.56, 0.06, 0.62]} />
        <meshStandardMaterial color={statusColor[ruko.status]} />
      </mesh>
      {dimmed && (
        <mesh position={[0, height / 2, 0]} raycast={() => null}>
          <boxGeometry args={[0.6, height + 0.1, 0.66]} />
          <meshBasicMaterial color="#f4f2ec" transparent opacity={0.6} depthWrite={false} />
        </mesh>
      )}
      <Html
        position={[0, height + 0.5, 0]}
        center
        distanceFactor={11}
        style={{ pointerEvents: "none", opacity: hovered && !selected ? 1 : 0, transition: "opacity 180ms ease" }}
      >
        <div className="bg-white/95 rounded-lg shadow-lg px-2.5 py-1.5 text-[11px] leading-tight border border-black/10 whitespace-nowrap">
          <div className="font-semibold text-[#1c2317]">Ruko {ruko.code}</div>
          <div className="text-black/55">
            {ruko.floors} Lantai · {statusLabel[ruko.status]}
          </div>
        </div>
      </Html>
    </group>
  );
}

function RukoBlockLabel({ code, position }: { code: string; position: [number, number, number] }) {
  return (
    <Text position={position} fontSize={0.42} color="#1c2317" anchorX="center" anchorY="bottom" outlineWidth={0.02} outlineColor="#ffffff">
      Ruko {code}
    </Text>
  );
}

const facilityWallMat = new THREE.MeshStandardMaterial({ color: "#f2ede2", roughness: 0.8 });
const facilityRoofMat = new THREE.MeshStandardMaterial({ color: "#33473b", roughness: 0.55 });
const facilityGlassMat = new THREE.MeshStandardMaterial({ color: "#a9d2e0", metalness: 0.25, roughness: 0.1 });
const facilityPoolMat = new THREE.MeshStandardMaterial({ color: "#3fa9c9", roughness: 0.12, metalness: 0.1 });
const facilityDomeMat = new THREE.MeshStandardMaterial({ color: "#c9a86b", roughness: 0.5 });

function FacilityMesh({
  facility,
  onSelect,
  selected,
}: {
  facility: Facility;
  onSelect: (f: Facility) => void;
  selected: boolean;
}) {
  const isClubhouse = facility.code === "clubhouse";
  const bodyH = isClubhouse ? 0.95 : 0.6;
  const bodyW = facility.size * 0.9;
  const bodyD = facility.size * 0.72;

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSelect(facility);
  };
  const handleOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    document.body.style.cursor = "pointer";
  };
  const handleOut = () => {
    document.body.style.cursor = "default";
  };

  return (
    <group position={[facility.x, 0, facility.z]}>
      {/* plaza dasar */}
      <mesh
        position={[0, 0.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={handleClick}
        onPointerOver={handleOver}
        onPointerOut={handleOut}
      >
        <circleGeometry args={[facility.size * 0.75, 28]} />
        <meshStandardMaterial
          color="#e6dfcc"
          emissive={selected ? "#8fc4e0" : "#000000"}
          emissiveIntensity={selected ? 0.35 : 0}
        />
      </mesh>

      {/* badan bangunan */}
      <mesh
        position={[0, bodyH / 2 + 0.02, 0]}
        material={facilityWallMat}
        castShadow
        receiveShadow
        onClick={handleClick}
        onPointerOver={handleOver}
        onPointerOut={handleOut}
      >
        <boxGeometry args={[bodyW, bodyH, bodyD]} />
      </mesh>
      {/* jendela kaca depan */}
      <mesh position={[0, bodyH * 0.58, bodyD / 2 + 0.005]} material={facilityGlassMat}>
        <planeGeometry args={[bodyW * 0.65, bodyH * 0.5]} />
      </mesh>
      {/* atap datar bertritisan — arsitektur berbeda dari rumah tinggal */}
      <mesh position={[0, bodyH + 0.06, 0]} material={facilityRoofMat} castShadow>
        <boxGeometry args={[bodyW + 0.28, 0.09, bodyD + 0.28]} />
      </mesh>

      {isClubhouse ? (
        <mesh position={[bodyW * 0.72, 0.015, 0]} rotation={[-Math.PI / 2, 0, 0]} material={facilityPoolMat}>
          <planeGeometry args={[bodyW * 0.65, bodyD * 0.75]} />
        </mesh>
      ) : (
        <mesh position={[0, bodyH + 0.3, 0]} material={facilityDomeMat} castShadow>
          <sphereGeometry args={[bodyW * 0.3, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
        </mesh>
      )}

      <Html position={[0, bodyH + 0.65, 0]} center distanceFactor={12} style={{ pointerEvents: "none" }}>
        <div
          className={`px-2.5 py-1 rounded-full shadow-md text-[11px] font-semibold whitespace-nowrap border ${
            selected ? "bg-[#3d6b8f] text-white border-[#3d6b8f]" : "bg-white/95 text-[#1c2317] border-black/10"
          }`}
        >
          {facility.name}
        </div>
      </Html>
    </group>
  );
}

function BlockLabel({ code, position }: { code: string; position: [number, number, number] }) {
  return (
    <Text position={position} fontSize={0.46} color="#1c2317" anchorX="center" anchorY="bottom" outlineWidth={0.025} outlineColor="#ffffff">
      {code}
    </Text>
  );
}

/* Tekstur tanah bergaya foto udara: dasar hijau netral, ditaburi variasi
   halus (bukan hijau gelap repetitif) agar terasa seperti lanskap nyata,
   dibuat sekali di client via canvas 2D lalu di-repeat sebagai tekstur. */
function useSiteGroundTexture() {
  return useMemo(() => {
    if (typeof document === "undefined") return null;
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.fillStyle = "#5c7048";
    ctx.fillRect(0, 0, size, size);

    const rand = (seed: number) => {
      const x = Math.sin(seed * 12.9898) * 43758.5453;
      return x - Math.floor(x);
    };
    const speckle = ["#66794f", "#526640", "#6e8257", "#495c39", "#788c5f"];
    for (let i = 0; i < 6000; i++) {
      const x = rand(i * 3.1) * size;
      const y = rand(i * 7.7 + 4.2) * size;
      const r = rand(i * 5.3 + 1.1) * 2.2 + 0.4;
      ctx.fillStyle = speckle[i % speckle.length];
      ctx.globalAlpha = 0.55;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    // gumpalan kanopi lembut, kontras rendah
    for (let i = 0; i < 160; i++) {
      const x = rand(i * 19.3 + 11) * size;
      const y = rand(i * 27.1 + 3) * size;
      const r = rand(i * 4.1 + 2) * 16 + 8;
      ctx.fillStyle = speckle[(i + 2) % speckle.length];
      ctx.globalAlpha = 0.22;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(7, 6);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }, []);
}

function Ground() {
  const texture = useSiteGroundTexture();
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
      <planeGeometry args={[130, 110]} />
      {texture ? (
        <meshStandardMaterial map={texture} roughness={1} />
      ) : (
        <meshStandardMaterial color="#5c7048" roughness={1} />
      )}
    </mesh>
  );
}

/* Marker pin hijau + label melayang di atas unit yang sedang dipilih. */
function PinMarker({ position, label }: { position: [number, number, number]; label: string }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.95, 0]} castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#4a8f3c" emissive="#4a8f3c" emissiveIntensity={0.35} />
      </mesh>
      <mesh position={[0, 0.58, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.15, 0.7, 20]} />
        <meshStandardMaterial color="#4a8f3c" />
      </mesh>
      <Html position={[0, 1.35, 0]} center distanceFactor={14} style={{ pointerEvents: "none" }}>
        <div className="px-2.5 py-1 rounded-md bg-white shadow-lg text-[11px] font-semibold text-[#1c2317] whitespace-nowrap border border-black/10">
          {label}
        </div>
      </Html>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* Kontrol kamera: framing awal otomatis dari bounding box kawasan,    */
/* intro sinematik halus, dan animasi fokus saat memilih unit.         */
/* ------------------------------------------------------------------ */

interface CameraControllerProps {
  defaultPosition: THREE.Vector3;
  defaultTarget: THREE.Vector3;
  focusPosition: THREE.Vector3 | null;
  boundsRadius: number;
  resetToken: number;
}

function CameraController({ defaultPosition, defaultTarget, focusPosition, boundsRadius, resetToken }: CameraControllerProps) {
  const { camera } = useThree();
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const introStarted = useRef(false);
  const anim = useRef<{
    fromPos: THREE.Vector3;
    toPos: THREE.Vector3;
    fromTarget: THREE.Vector3;
    toTarget: THREE.Vector3;
    t: number;
    duration: number;
  } | null>(null);

  // Intro sinematik: mulai lebih lebar & tinggi, lalu turun ke framing utama.
  useEffect(() => {
    if (introStarted.current) return;
    introStarted.current = true;
    const reduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      camera.position.copy(defaultPosition);
      controlsRef.current?.target.copy(defaultTarget);
      controlsRef.current?.update();
      return;
    }
    const wideStart = defaultTarget
      .clone()
      .add(defaultPosition.clone().sub(defaultTarget).multiplyScalar(1.7).add(new THREE.Vector3(0, 8, 0)));
    camera.position.copy(wideStart);
    anim.current = {
      fromPos: wideStart.clone(),
      toPos: defaultPosition.clone(),
      fromTarget: defaultTarget.clone(),
      toTarget: defaultTarget.clone(),
      t: 0,
      duration: 2.1,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fokus ke unit terpilih, atau kembali ke framing default saat reset.
  useEffect(() => {
    if (!introStarted.current) return;
    const currentTarget = controlsRef.current ? controlsRef.current.target.clone() : defaultTarget.clone();
    let toPos: THREE.Vector3;
    let toTarget: THREE.Vector3;
    if (focusPosition) {
      const dir = camera.position.clone().sub(currentTarget).normalize();
      const focusDist = Math.max(boundsRadius * 0.22, 6);
      toPos = focusPosition.clone().add(dir.multiplyScalar(focusDist));
      toTarget = focusPosition.clone();
    } else {
      toPos = defaultPosition.clone();
      toTarget = defaultTarget.clone();
    }
    anim.current = {
      fromPos: camera.position.clone(),
      toPos,
      fromTarget: currentTarget,
      toTarget,
      t: 0,
      duration: 0.85,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusPosition, resetToken]);

  useFrame((_, delta) => {
    const a = anim.current;
    if (a) {
      a.t += delta / a.duration;
      const t = Math.min(a.t, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      camera.position.lerpVectors(a.fromPos, a.toPos, ease);
      if (controlsRef.current) {
        controlsRef.current.target.lerpVectors(a.fromTarget, a.toTarget, ease);
      }
      if (t >= 1) anim.current = null;
    }
    controlsRef.current?.update();
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan
      enableDamping
      dampingFactor={0.08}
      maxPolarAngle={Math.PI / 2.25}
      minPolarAngle={0.12}
      minDistance={Math.max(boundsRadius * 0.28, 6)}
      maxDistance={Math.max(boundsRadius * 2.6, 40)}
    />
  );
}

interface SceneProps {
  filterType: string | null;
  filterStatus: UnitStatus | null;
  selected: Unit | null;
  onSelect: (unit: Unit) => void;
  onHoverUnit: (unit: Unit | null) => void;
  selectedFacility: Facility | null;
  onSelectFacility: (f: Facility) => void;
  viewMode: ViewMode;
  showRuko: boolean;
  selectedRuko: Ruko | null;
  onSelectRuko: (r: Ruko) => void;
  onHoverRuko: (r: Ruko | null) => void;
  defaultCamPos: THREE.Vector3;
  defaultCamTarget: THREE.Vector3;
  boundsRadius: number;
  resetToken: number;
}

function Scene({
  filterType,
  filterStatus,
  selected,
  onSelect,
  onHoverUnit,
  selectedFacility,
  onSelectFacility,
  viewMode,
  showRuko,
  selectedRuko,
  onSelectRuko,
  onHoverRuko,
  defaultCamPos,
  defaultCamTarget,
  boundsRadius,
  resetToken,
}: SceneProps) {
  const typeBySlug = useMemo(() => {
    const m = new Map<string, HouseType>();
    houseTypes.forEach((t) => m.set(t.slug, t));
    return m;
  }, []);

  const visibleCodes = useMemo(() => {
    const out = new Set<string>();
    units.forEach((u) => {
      if (filterType && u.typeSlug !== filterType) return;
      if (filterStatus && u.status !== filterStatus) return;
      out.add(u.code);
    });
    return out;
  }, [filterType, filterStatus]);

  const hasFilter = Boolean(filterType || filterStatus);

  const focusPosition = useMemo(() => {
    if (selected) return new THREE.Vector3(selected.x, 0.9, selected.z);
    if (selectedRuko) return new THREE.Vector3(selectedRuko.x, 0.9, selectedRuko.z);
    return null;
  }, [selected, selectedRuko]);

  return (
    <>
      <ambientLight intensity={0.95} />
      <directionalLight
        position={[22, 32, 14]}
        intensity={1.35}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-45}
        shadow-camera-right={45}
        shadow-camera-top={45}
        shadow-camera-bottom={-45}
      />
      <directionalLight position={[-18, 14, -10]} intensity={0.35} />
      <hemisphereLight args={["#e8f0e0", "#465237", 0.55]} />
      <Ground />
      {units.map((unit) => {
        return (
          <HouseMesh
            key={unit.code}
            unit={unit}
            type={typeBySlug.get(unit.typeSlug)}
            onSelect={onSelect}
            onHover={onHoverUnit}
            selected={selected?.code === unit.code}
            dimmed={hasFilter && !visibleCodes.has(unit.code)}
            viewMode={viewMode}
          />
        );
      })}
      {selected && <PinMarker position={[selected.x, 0, selected.z]} label={selected.code} />}
      {selectedRuko && <PinMarker position={[selectedRuko.x, 0, selectedRuko.z]} label={selectedRuko.code} />}
      {facilities.map((f) => (
        <FacilityMesh key={f.code} facility={f} onSelect={onSelectFacility} selected={selectedFacility?.code === f.code} />
      ))}
      {blocks.map((block) => (
        <BlockLabel key={block.code} code={block.code} position={[block.x, 0.05, block.z]} />
      ))}
      {showRuko &&
        rukoList.map((r, i) => (
          <RukoMesh
            key={r.code}
            ruko={r}
            index={i}
            onSelect={onSelectRuko}
            onHover={onHoverRuko}
            selected={selectedRuko?.code === r.code}
            dimmed={false}
          />
        ))}
      {showRuko &&
        ["RK1", "RK2", "RK3"].map((blockCode) => {
          const first = rukoList.find((r) => r.block === blockCode);
          if (!first) return null;
          return <RukoBlockLabel key={blockCode} code={blockCode} position={[first.x, 0.05, first.z]} />;
        })}
      <ContactShadows position={[0, 0, 0]} opacity={0.35} scale={100} blur={1.8} far={10} />
      <CameraController
        defaultPosition={defaultCamPos}
        defaultTarget={defaultCamTarget}
        focusPosition={focusPosition}
        boundsRadius={boundsRadius}
        resetToken={resetToken}
      />
    </>
  );
}

export default function SitePlan3D() {
  const [viewMode, setViewMode] = useState<ViewMode>("status");
  const [filterType, setFilterType] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<UnitStatus | null>(null);
  const [selected, setSelected] = useState<Unit | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [selectedRuko, setSelectedRuko] = useState<Ruko | null>(null);
  const [hoveredUnit, setHoveredUnit] = useState<Unit | null>(null);
  const [hoveredRuko, setHoveredRuko] = useState<Ruko | null>(null);
  const [showRuko, setShowRuko] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [resetToken, setResetToken] = useState(0);

  const selectedType = selected ? houseTypes.find((t) => t.slug === selected.typeSlug) : null;

  useEffect(() => {
    setExpanded(false);
  }, [selected?.code, selectedRuko?.code]);

  const avgProgress = useMemo(
    () => Math.round((units.reduce((s, u) => s + u.progress, 0) / units.length) * 10) / 10,
    []
  );

  const summary = useMemo(() => {
    const total = units.length;
    const tersedia = units.filter((u) => u.status === "tersedia").length;
    const booking = units.filter((u) => u.status === "booking").length;
    const terjual = units.filter((u) => u.status === "terjual").length;
    return { total, tersedia, booking, terjual };
  }, []);

  const filteredCount = useMemo(() => {
    if (!filterType && !filterStatus) return null;
    return units.filter((u) => {
      if (filterType && u.typeSlug !== filterType) return false;
      if (filterStatus && u.status !== filterStatus) return false;
      return true;
    }).length;
  }, [filterType, filterStatus]);

  // Framing kamera otomatis dari bounding box seluruh unit + ruko.
  const { defaultCamPos, defaultCamTarget, boundsRadius } = useMemo(() => {
    const xs = [...units.map((u) => u.x), ...rukoList.map((r) => r.x)];
    const zs = [...units.map((u) => u.z), ...rukoList.map((r) => r.z)];
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minZ = Math.min(...zs);
    const maxZ = Math.max(...zs);
    const cx = (minX + maxX) / 2;
    const cz = (minZ + maxZ) / 2;
    const radius = Math.max(maxX - minX, maxZ - minZ) / 2;

    const elevRad = (42 * Math.PI) / 180; // sudut pandang arsitektural ~42°
    const dist = radius * 1.5;
    const dirX = 0.5;
    const dirZ = 0.86;
    const norm = Math.hypot(dirX, dirZ);
    const horiz = dist * Math.cos(elevRad);
    const height = dist * Math.sin(elevRad);

    return {
      defaultCamPos: new THREE.Vector3(cx + (dirX / norm) * horiz, height, cz + (dirZ / norm) * horiz),
      defaultCamTarget: new THREE.Vector3(cx, 0, cz),
      boundsRadius: radius,
    };
  }, []);

  function selectUnit(u: Unit) {
    setSelected(u);
    setSelectedFacility(null);
    setSelectedRuko(null);
  }
  function selectFacility(f: Facility) {
    setSelectedFacility(f);
    setSelected(null);
    setSelectedRuko(null);
  }
  function selectRuko(r: Ruko) {
    setSelectedRuko(r);
    setSelected(null);
    setSelectedFacility(null);
  }
  function closeAllPanels() {
    setSelected(null);
    setSelectedFacility(null);
    setSelectedRuko(null);
  }
  function resetFilters() {
    setFilterType(null);
    setFilterStatus(null);
  }
  function resetView() {
    closeAllPanels();
    setResetToken((v) => v + 1);
  }

  const statusOptions: { value: UnitStatus | null; label: string }[] = [
    { value: null, label: "Semua" },
    { value: "tersedia", label: "Tersedia" },
    { value: "booking", label: "Booking" },
    { value: "terjual", label: "Terjual" },
  ];

  return (
    <div className="relative w-full h-[75vh] min-h-[560px] rounded-2xl overflow-hidden border border-black/10 bg-[#e9e4d8]">
      <Canvas
        shadows
        camera={{ position: defaultCamPos.toArray(), fov: 38 }}
        gl={{ toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.05 }}
      >
        <Suspense fallback={null}>
          <Scene
            filterType={filterType}
            filterStatus={filterStatus}
            selected={selected}
            onSelect={selectUnit}
            onHoverUnit={setHoveredUnit}
            selectedFacility={selectedFacility}
            onSelectFacility={selectFacility}
            viewMode={viewMode}
            showRuko={showRuko}
            selectedRuko={selectedRuko}
            onSelectRuko={selectRuko}
            onHoverRuko={setHoveredRuko}
            defaultCamPos={defaultCamPos}
            defaultCamTarget={defaultCamTarget}
            boundsRadius={boundsRadius}
            resetToken={resetToken}
          />
        </Suspense>
      </Canvas>

      {/* Branding + mode switcher — kiri atas */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 max-w-[calc(100%-2rem)]">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex gap-1 bg-white/95 rounded-full p-1 shadow-md">
            <button
              onClick={() => setViewMode("status")}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
                viewMode === "status" ? "bg-[#1c2317] text-white" : "text-black/55 hover:text-black/80"
              }`}
            >
              Status Penjualan
            </button>
            <button
              onClick={() => setViewMode("progress")}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
                viewMode === "progress" ? "bg-[#1c2317] text-white" : "text-black/55 hover:text-black/80"
              }`}
            >
              Progres Konstruksi
            </button>
          </div>
          {viewMode === "progress" && (
            <div className="bg-white/95 rounded-full px-3.5 py-1.5 text-xs shadow-md font-medium text-black/70">
              Rata-rata {avgProgress}%
            </div>
          )}
        </div>

        {viewMode === "status" && (
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex gap-1 bg-white/95 rounded-full p-1 shadow-md text-xs">
              {statusOptions.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setFilterStatus(opt.value)}
                  className={`rounded-full px-3 py-1 font-medium transition-all duration-200 ${
                    filterStatus === opt.value ? "bg-[#3d6b8f] text-white" : "text-black/55 hover:text-black/80"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowRuko((v) => !v)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium shadow-md transition-all duration-200 ${
                showRuko ? "bg-[#1c2748] text-white" : "bg-white/95 text-black/55"
              }`}
            >
              Ruko
            </button>
            {(filterType || filterStatus) && (
              <button
                onClick={resetFilters}
                className="rounded-full px-3 py-1.5 text-xs font-medium shadow-md bg-white/95 text-black/55 hover:text-black/80 transition-all duration-200"
              >
                Reset Filter
              </button>
            )}
          </div>
        )}

        {filteredCount !== null && (
          <div className="bg-white/90 rounded-full px-3.5 py-1 text-[11px] font-medium text-black/60 shadow w-fit">
            {filteredCount} unit sesuai filter
          </div>
        )}
      </div>

      {/* Reset view + ringkasan — kanan atas */}
      <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
        <button
          onClick={resetView}
          className="rounded-full bg-white/95 shadow-md px-3.5 py-1.5 text-xs font-medium text-black/65 hover:text-black/90 transition-all duration-200"
        >
          ⟲ Reset Tampilan
        </button>
      </div>

      {/* Legend + ringkasan penjualan — kiri bawah */}
      <div className="absolute bottom-4 left-4 flex flex-col gap-2 max-w-[calc(100%-2rem)]">
        <div className="flex flex-wrap gap-3 bg-white/95 rounded-full px-4 py-2 text-xs shadow-md">
          {viewMode === "status" ? (
            <>
              {(Object.keys(statusLabel) as UnitStatus[]).map((s) => (
                <div key={s} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: statusColor[s] }} />
                  {statusLabel[s]}
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: progressColor(0) }} />
                Belum mulai
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: progressColor(50) }} />
                Berjalan
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: progressColor(100) }} />
                Selesai
              </div>
            </>
          )}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full inline-block bg-[#3d6b8f]" />
            Fasilitas
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full inline-block bg-[#1c2748]" />
            Ruko
          </div>
        </div>
        <div className="hidden sm:block bg-white/90 rounded-full px-4 py-1.5 text-[11px] text-black/60 shadow w-fit">
          {summary.total} Total Unit · {summary.tersedia} Tersedia · {summary.booking} Booking · {summary.terjual} Terjual
        </div>
      </div>

      {/* Selektor tipe hunian — kanan bawah */}
      <div className="absolute bottom-4 right-4 flex items-end gap-2 max-w-[calc(100%-2rem)] overflow-x-auto pb-1">
        {houseTypes.map((t) => {
          const active = filterType === t.slug;
          return (
            <button
              key={t.slug}
              onClick={() => setFilterType((cur) => (cur === t.slug ? null : t.slug))}
              className="flex flex-col items-center gap-1 shrink-0"
            >
              <span
                className={`relative w-14 h-14 rounded-full overflow-hidden border-2 shadow-lg transition-colors duration-200 ${
                  active ? "border-[#a3d139]" : "border-white"
                }`}
              >
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              </span>
              <span
                className={`text-[10px] font-medium rounded-full px-2 py-0.5 shadow whitespace-nowrap transition-colors duration-200 ${
                  active ? "bg-[#a3d139] text-[#1c2317]" : "bg-white/95 text-black/70"
                }`}
              >
                {t.name} · {t.totalUnits}
              </span>
            </button>
          );
        })}
      </div>

      {/* Panel detail unit rumah — kanan (desktop) / bottom sheet (mobile) */}
      {selected && selectedType && (
        <div className="fixed inset-x-0 bottom-0 sm:absolute sm:inset-x-auto sm:top-4 sm:right-4 sm:bottom-auto w-full sm:w-80 bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[80vh] sm:max-h-[calc(100%-2rem)] overflow-y-auto z-20">
          <button
            className="absolute top-3 right-3 text-white/90 hover:text-white z-10 bg-black/30 rounded-full w-6 h-6 flex items-center justify-center"
            onClick={() => setSelected(null)}
            aria-label="Tutup"
          >
            ✕
          </button>
          <div className="relative aspect-[4/3]">
            <Image src={selectedType.image} alt={selectedType.name} fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              <div className="text-white/70 text-xs uppercase tracking-wide">Blok {selected.block} · {selected.code}</div>
              <div className="text-white text-lg font-semibold">Tipe {selectedType.name}</div>
            </div>
          </div>
          <div className="p-4">
            {/* Info primer — langsung terlihat */}
            <div className="flex items-center justify-between mb-3">
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ backgroundColor: `${statusColor[selected.status]}22`, color: statusColor[selected.status] }}
              >
                {statusLabel[selected.status]}
              </span>
              <span className="text-xs text-black/50">
                {selectedType.bedrooms} KT · {selectedType.bathrooms} KM
              </span>
            </div>
            <div className="text-black/50 text-xs">Harga</div>
            <div className="text-xl font-bold text-[#1c2317] mb-3">
              Rp {(selected.price / 1_000_000).toLocaleString("id-ID")} Jt
            </div>

            {/* Info sekunder — progressive disclosure */}
            {expanded && (
              <div className="mb-3 space-y-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <div className="text-black/50 text-xs">Luas Tanah</div>
                    <div className="font-medium">{selected.landArea} m²</div>
                  </div>
                  <div>
                    <div className="text-black/50 text-xs">Luas Bangunan</div>
                    <div className="font-medium">{selected.buildingArea} m²</div>
                  </div>
                </div>
                <p className="text-xs text-black/50">{selectedType.tagline}</p>
                <div>
                  <div className="flex justify-between text-xs text-black/50 mb-1">
                    <span>Progres Konstruksi</span>
                    <span className="font-medium text-black/70">{selected.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-black/10 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{ width: `${selected.progress}%`, backgroundColor: progressColor(selected.progress) }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-2">
              <button
                onClick={() => setExpanded((v) => !v)}
                className="flex-1 text-center rounded-full bg-black/5 text-[#1c2317] font-medium text-sm py-2 hover:bg-black/10 transition-colors duration-200"
              >
                {expanded ? "Sembunyikan" : "Lihat Detail"}
              </button>
              {selected.status === "tersedia" ? (
                <a
                  href={`https://wa.me/6285117803838?text=${encodeURIComponent(
                    `Halo, saya tertarik dengan unit ${selected.code} tipe ${selectedType.name} di Puri Safana Cikeas.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center rounded-full bg-[#a3d139] text-[#1c2317] font-semibold text-sm py-2 hover:bg-[#b6e34f] transition-colors duration-200"
                >
                  Hubungi Sales
                </a>
              ) : (
                <div className="flex-1 text-center rounded-full bg-black/5 text-black/40 text-sm py-2">Tidak tersedia</div>
              )}
            </div>
            <a
              href={`/tipe-rumah/${selectedType.slug}`}
              className="block text-center mt-2 text-xs text-black/45 hover:text-black/70 underline underline-offset-2"
            >
              Lihat halaman tipe {selectedType.name}
            </a>
          </div>
        </div>
      )}

      {selectedFacility && (
        <div className="fixed inset-x-0 bottom-0 sm:absolute sm:inset-x-auto sm:top-4 sm:right-4 sm:bottom-auto w-full sm:w-72 bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl p-4 z-20">
          <button
            className="absolute top-3 right-3 text-black/40 hover:text-black"
            onClick={() => setSelectedFacility(null)}
            aria-label="Tutup"
          >
            ✕
          </button>
          <div className="text-xs uppercase tracking-wide text-black/50">Fasilitas Kawasan</div>
          <div className="text-lg font-semibold text-[#1c2317] mb-2">{selectedFacility.name}</div>
          <p className="text-sm text-black/60">{selectedFacility.desc}</p>
        </div>
      )}

      {selectedRuko && (
        <div className="fixed inset-x-0 bottom-0 sm:absolute sm:inset-x-auto sm:top-4 sm:right-4 sm:bottom-auto w-full sm:w-72 bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[80vh] sm:max-h-[calc(100%-2rem)] overflow-y-auto z-20">
          <button
            className="absolute top-3 right-3 text-white/90 hover:text-white z-10 bg-black/30 rounded-full w-6 h-6 flex items-center justify-center"
            onClick={() => setSelectedRuko(null)}
            aria-label="Tutup"
          >
            ✕
          </button>
          <div className="relative aspect-[4/3]">
            <Image src="/tipe/ruko.jpg" alt="Ruko" fill className="object-cover" />
          </div>
          <div className="p-4">
            <div className="text-xs uppercase tracking-wide text-black/50">Blok {selectedRuko.block}</div>
            <div className="text-lg font-semibold text-[#1c2317]">{selectedRuko.code}</div>
            <div className="text-sm text-black/60 mb-3">
              Ruko {selectedRuko.floors} Lantai ·{" "}
              <span className="font-medium" style={{ color: statusColor[selectedRuko.status] }}>
                {statusLabel[selectedRuko.status]}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm mb-3">
              <div>
                <div className="text-black/50 text-xs">Luas Tanah</div>
                <div className="font-medium">{selectedRuko.landArea} m²</div>
              </div>
              <div>
                <div className="text-black/50 text-xs">Luas Bangunan</div>
                <div className="font-medium">{selectedRuko.buildingArea} m²</div>
              </div>
            </div>
            <div className="text-black/50 text-xs">Harga</div>
            <div className="text-xl font-bold text-[#1c2317] mb-3">
              {selectedRuko.price > 0 ? `Rp ${(selectedRuko.price / 1_000_000).toLocaleString("id-ID")} Jt` : "Hubungi Kami"}
            </div>
            {selectedRuko.status === "tersedia" ? (
              <a
                href={`https://wa.me/6285117803838?text=${encodeURIComponent(
                  `Halo, saya tertarik dengan ${selectedRuko.code} di Puri Safana Cikeas.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center rounded-full bg-[#a3d139] text-[#1c2317] font-semibold text-sm py-2 hover:bg-[#b6e34f] transition-colors duration-200"
              >
                Tanya Ruko Ini
              </a>
            ) : (
              <div className="text-center rounded-full bg-black/5 text-black/40 text-sm py-2">Unit tidak tersedia</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
