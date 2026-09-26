import { developer } from "@/lib/data";

export const metadata = { title: "Tentang Developer | Puri Safana Cikeas" };

export default function DeveloperPage() {
  return (
    <div>
      <section className="bg-[#1c2317] text-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#a3d139] text-sm uppercase tracking-wide mb-3">Pengembang</p>
          <h1 className="text-3xl md:text-5xl font-bold">{developer.name}</h1>
          <p className="text-white/70 mt-2">{developer.legalName}</p>
          <p className="text-[#a3d139] font-medium mt-4 text-lg">{developer.tagline}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
        <p className="text-black/70 leading-relaxed max-w-3xl">{developer.description}</p>

        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {developer.stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-black/10 p-6 bg-white">
              <div className="text-2xl font-bold text-[#1c2317]">{s.value}</div>
              <div className="text-sm text-black/60 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold mt-14 mb-6">Portofolio Bisnis Bumantara</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {developer.projects.map((p) => (
            <div key={p.name} className="rounded-xl border border-black/10 p-5 bg-white hover:shadow-md transition-shadow">
              <div className="text-xs uppercase tracking-wide text-[#557a1f] font-medium">{p.category}</div>
              <div className="font-semibold mt-1">{p.name}</div>
              <div className="text-sm text-black/50 mt-1">{p.year}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
