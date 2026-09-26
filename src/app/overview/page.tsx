import { nearbyPlaces, projectSummary } from "@/lib/data";

export const metadata = { title: "Overview Perumahan | Puri Safana Cikeas" };

export default function OverviewPage() {
  const grouped = nearbyPlaces.reduce<Record<string, typeof nearbyPlaces>>((acc, p) => {
    acc[p.category] = acc[p.category] ? [...acc[p.category], p] : [p];
    return acc;
  }, {});

  return (
    <div>
      <section className="bg-[#1c2317] text-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#a3d139] text-sm uppercase tracking-wide mb-3">Overview Perumahan</p>
          <h1 className="text-3xl md:text-5xl font-bold">{projectSummary.name}</h1>
          <p className="text-white/70 mt-4 max-w-2xl">{projectSummary.about}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 grid sm:grid-cols-3 gap-6">
        <Info label="Lokasi" value={projectSummary.location} />
        <Info label="Luas Area" value={projectSummary.totalArea} />
        <Info label="Total Unit" value={`${projectSummary.totalUnits} Kavling`} />
        <Info label="Rumah" value={`${projectSummary.totalHouses} Unit`} />
        <Info label="Ruko" value={`${projectSummary.totalRuko} Unit`} />
        <Info label="Pengalaman" value={projectSummary.experience} />
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-14">
        <h2 className="text-2xl font-bold mb-6">Fasilitas Kawasan</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {projectSummary.facilities.map((f) => (
            <div key={f.name} className="rounded-xl border border-black/10 p-5 bg-white">
              <div className="font-semibold">{f.name}</div>
              <p className="text-sm text-black/60 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#eef1e6] py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">Lokasi Strategis</h2>
          <p className="text-black/60 mb-8">
            Dekat dengan akses transportasi, sekolah, pusat perbelanjaan, dan rumah sakit.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {Object.entries(grouped).map(([category, places]) => (
              <div key={category}>
                <div className="font-semibold text-[#557a1f] mb-3">{category}</div>
                <ul className="space-y-2">
                  {places.map((p) => (
                    <li key={p.name} className="flex justify-between text-sm bg-white rounded-lg px-4 py-3">
                      <span>{p.name}</span>
                      <span className="text-black/50">{p.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-black/10 p-5 bg-white">
      <div className="text-xs uppercase tracking-wide text-black/50">{label}</div>
      <div className="text-lg font-semibold mt-1">{value}</div>
    </div>
  );
}
