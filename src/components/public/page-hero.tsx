import { Container } from "@/components/shared/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function PageHero({ eyebrow, title, body }: PageHeroProps) {
  return (
    <section className="brand-surface relative isolate overflow-hidden border-b border-[var(--cia-border)] py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute -right-20 top-8 h-56 w-56 rounded-full bg-amber-300/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-emerald-700/10 blur-3xl"
      />
      <Container>
        <div className="relative max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-900">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-stone-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700 sm:text-lg">{body}</p>
        </div>
      </Container>
    </section>
  );
}
