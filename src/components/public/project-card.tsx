import Link from "next/link";

type ProjectCardProps = {
  title: string;
  body: string;
  status: string;
  href?: string;
};

export function ProjectCard({ title, body, status, href }: ProjectCardProps) {
  const content = (
    <article className="h-full overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm shadow-stone-950/5 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-950/10">
      <div
        role="img"
        aria-label={`${title} future project media placeholder.`}
        className="grid min-h-40 place-items-center bg-[linear-gradient(135deg,#064e3b,#0f766e,#f59e0b)] p-5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white"
      >
        Future media
      </div>
      <div className="p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
        {status}
      </p>
      <h2 className="mt-3 text-xl font-semibold text-stone-950">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-stone-600">{body}</p>
      {href ? (
        <p className="mt-5 text-sm font-semibold text-emerald-900">View structure</p>
      ) : null}
      </div>
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <Link
      href={href}
      className="block rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:ring-offset-4 focus:ring-offset-stone-50"
    >
      {content}
    </Link>
  );
}
