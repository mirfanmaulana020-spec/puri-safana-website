export const metadata = { title: "Kontak | Puri Safana Cikeas" };

export default function KontakPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-[#557a1f] text-sm uppercase tracking-wide mb-2">Hubungi Kami</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Wujudkan Hunian Impian Anda</h1>
      <p className="text-black/60 max-w-xl mb-10">
        Mari terhubung dan wujudkan hunian impian Anda bersama kami. Ceritakan
        kebutuhan atau pertanyaan Anda, dan tim kami siap membantu dengan sepenuh hati.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <ContactItem label="WhatsApp" value="0851-1780-3838" href="https://wa.me/6285117803838" />
          <ContactItem label="Email" value="info@purisafana.com" href="mailto:info@purisafana.com" />
          <ContactItem label="Instagram" value="@purisafanacikeas" href="https://instagram.com/purisafanacikeas" />
          <ContactItem label="TikTok" value="purisafanadicikeas" href="https://tiktok.com/@purisafanadicikeas" />
          <ContactItem label="Lokasi" value="Cikeas, Gunung Putri, Bogor" href="https://maps.google.com" />
        </div>

        <a
          href="https://wa.me/6285117803838?text=Halo%2C%20saya%20tertarik%20dengan%20Puri%20Safana%20Cikeas"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl bg-[#1c2317] text-white p-8 flex flex-col justify-center items-center text-center hover:bg-[#2a3423] transition-colors"
        >
          <div className="text-xl font-semibold mb-2">Chat via WhatsApp</div>
          <p className="text-white/60 text-sm mb-4">Respon cepat dari tim sales kami</p>
          <span className="rounded-full bg-[#a3d139] text-[#1c2317] font-semibold px-6 py-3">
            Mulai Chat →
          </span>
        </a>
      </div>
    </div>
  );
}

function ContactItem({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-between items-center rounded-xl border border-black/10 bg-white px-5 py-4 hover:border-[#a3d139] transition-colors"
    >
      <span className="text-black/50 text-sm">{label}</span>
      <span className="font-medium">{value}</span>
    </a>
  );
}
