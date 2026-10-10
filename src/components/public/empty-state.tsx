type EmptyStateProps = {
  title: string;
  body: string;
};

export function EmptyState({ title, body }: EmptyStateProps) {
  return (
    <aside className="rounded-3xl border border-dashed border-emerald-300 bg-[linear-gradient(135deg,#fff1e8,#eaf1f8)] p-7 text-center shadow-sm shadow-emerald-950/5">
      <h2 className="text-xl font-semibold text-stone-950">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-stone-600">{body}</p>
    </aside>
  );
}
