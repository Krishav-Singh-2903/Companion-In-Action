type ContentCardProps = {
  title: string;
  body: string;
  meta?: string;
  accent?: "emerald" | "amber" | "stone";
};

export function ContentCard({
  title,
  body,
  meta,
  accent = "emerald"
}: ContentCardProps) {
  const accentClass =
    accent === "amber"
      ? "bg-amber-600"
      : accent === "stone"
        ? "bg-stone-400"
        : "bg-emerald-700";

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-6 shadow-sm shadow-stone-950/5 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-950/10">
      <span
        aria-hidden="true"
        className={`absolute left-0 top-0 h-full w-1 ${accentClass}`}
      />
      {meta ? (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
          {meta}
        </p>
      ) : null}
      <h2 className="mt-2 text-xl font-semibold text-stone-950">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-stone-600">{body}</p>
    </article>
  );
}
