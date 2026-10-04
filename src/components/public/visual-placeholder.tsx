import Image from "next/image";

type VisualPlaceholderProps = {
  label: string;
  tone?: "forest" | "warm" | "sage";
  className?: string;
  src?: string;
  imagePosition?: string;
};

const toneClasses = {
  forest: "from-emerald-950 via-emerald-800 to-teal-700 text-emerald-50",
  warm: "from-amber-700 via-orange-600 to-stone-900 text-amber-50",
  sage: "from-lime-100 via-emerald-100 to-amber-100 text-emerald-950"
};

export function VisualPlaceholder({
  label,
  tone = "forest",
  className = "",
  src,
  imagePosition = "center"
}: VisualPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={
        src
          ? `${label}. Actual Companions in Action photo.`
          : `${label}. Visual placeholder for future approved Companions in Action media.`
      }
      className={`relative isolate overflow-hidden rounded-3xl bg-gradient-to-br ${toneClasses[tone]} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          style={{ objectPosition: imagePosition }}
        />
      ) : null}
      <div
        aria-hidden="true"
        className="absolute -left-16 top-8 h-40 w-40 rounded-full bg-white/15 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 right-4 h-52 w-52 rounded-full bg-black/15 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_30%),linear-gradient(135deg,transparent,rgba(255,255,255,0.12))]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      <div className="relative flex h-full min-h-56 items-end p-6">
        <p className="max-w-xs text-sm font-semibold uppercase tracking-[0.18em] text-white">
          {label}
        </p>
      </div>
    </div>
  );
}
