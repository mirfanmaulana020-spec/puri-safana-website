import Icon from "./Icon";

/**
 * Placeholder foto premium — dipakai di section yang butuh foto asli Puri Safana
 * (lifestyle keluarga, aerial masterplan, fasilitas, dsb.) yang belum tersedia di
 * project files. Ditandai jelas dengan label supaya gampang diganti nanti begitu
 * foto aslinya ada. Styling tetap mengikuti palet warm ivory/forest supaya section
 * tidak terasa seperti kotak abu-abu kosong.
 */
export default function ImagePlaceholder({
  label,
  icon = "cam",
  className = "",
  dark = false,
}: {
  label: string;
  icon?: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${
        dark ? "bg-forest text-ivory/70" : "bg-beige text-forest/60"
      } ${className}`}
      style={{
        backgroundImage: dark
          ? "radial-gradient(circle at 30% 20%, rgba(255,255,255,.06), transparent 60%)"
          : "radial-gradient(circle at 30% 20%, rgba(255,255,255,.5), transparent 60%)",
      }}
    >
      <div className="flex flex-col items-center gap-2 px-6 text-center">
        <Icon n={icon} s={22} />
        <span className="text-[11px] uppercase tracking-[0.14em] font-medium">
          {label}
        </span>
      </div>
    </div>
  );
}
