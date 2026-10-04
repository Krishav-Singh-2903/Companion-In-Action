import Link from "next/link";
import { publicSiteContent } from "@/config/public-site";
import { Container } from "@/components/shared/container";
import { VisualPlaceholder } from "./visual-placeholder";

export function HomeHero() {
  const { hero, facts, organizationName, tagline, media } = publicSiteContent;

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-emerald-900/10 bg-[linear-gradient(135deg,var(--cia-forest)_0%,#0f5b3f_48%,#1d2f25_100%)] text-white"
      aria-labelledby="home-hero-title"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-emerald-700/15 blur-3xl"
      />
      <Container className="relative grid min-h-[calc(100vh-4.5rem)] items-center gap-12 py-12 lg:grid-cols-[1fr_0.9fr] lg:py-20">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
            {hero.eyebrow}
          </p>
          <h1
            id="home-hero-title"
            className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.98] text-white sm:text-5xl lg:text-6xl"
          >
            {tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-50/82">
            {hero.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={hero.primaryAction.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--cia-gold)] px-6 text-sm font-semibold text-white shadow-xl shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-[var(--cia-terracotta)] focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)] focus:ring-offset-4 focus:ring-offset-[var(--cia-forest)]"
            >
              {hero.primaryAction.label}
            </Link>
            <Link
              href={hero.secondaryAction.href}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:text-[var(--cia-forest)] focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)] focus:ring-offset-4 focus:ring-offset-[var(--cia-forest)]"
            >
              {hero.secondaryAction.label}
            </Link>
          </div>
          <dl className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              ["Started", facts.started],
              ["Founder", facts.founder],
              ["Reach", facts.reach]
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-sm shadow-stone-950/5 backdrop-blur"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
                  {label}
                </dt>
                <dd className="mt-2 text-base font-semibold text-white">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <VisualPlaceholder
            label={`${organizationName} community action media area`}
            src={media.hero}
            imagePosition="50% 34%"
            className="min-h-[30rem] shadow-2xl shadow-emerald-950/20"
          />
          <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-white/70 bg-white/85 p-5 shadow-2xl shadow-stone-950/15 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
              People-first action
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-700">
              Real CIA photography now anchors the public site while project
              stories and CMS-managed updates remain structured for later.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
