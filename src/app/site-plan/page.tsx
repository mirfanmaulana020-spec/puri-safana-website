"use client";

import dynamic from "next/dynamic";
import "@/styles/masterplan.css";

const Masterplan3D = dynamic(() => import("@/components/Masterplan3D"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-[#20301f] flex items-center justify-center text-white/60">
      Memuat peta 3D…
    </div>
  ),
});

export default function SitePlanPage() {
  return <Masterplan3D />;
}
