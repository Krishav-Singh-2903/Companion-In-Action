import Image from "next/image";
import Link from "next/link";
import { publicSiteContent } from "@/config/public-site";
import { Container } from "@/components/shared/container";
import { PublicLayout } from "./public-layout";

export function OurWorkPage() {
  const {
    workPage,
    areasOfWork,
    featuredProjects,
    projectsPage,
    campaignsPage,
    drivesPage,
    impact,
    volunteerCta,
    donationCta,
    media
  } = publicSiteContent;
  const currentWork = featuredProjects.items.filter(
    (item) => item.status === "Continuing initiative"
  );

  return (
    <PublicLayout>
      <section className="brand-surface border-b border-[var(--cia-border)] py-10 sm:py-12">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-900">
            {workPage.hero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-[var(--cia-ink)] sm:text-4xl">
            {workPage.hero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-700 sm:text-base">
            {workPage.hero.body}
          </p>
        </Container>
      </section>

      <section id="areas-of-work" className="border-b border-stone-200 bg-white py-10 sm:py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                {areasOfWork.eyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--cia-ink)] sm:text-3xl">
                {areasOfWork.title}
              </h2>
              <div className="relative mt-6 max-w-lg pb-8 pr-10 sm:pr-14">
                <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-emerald-950">
                  <Image
                    src={media.story}
                    alt="Companions in Action community outreach"
                    fill
                    sizes="(min-width: 1024px) 38vw, 90vw"
                    className="object-cover"
                    style={{ objectPosition: "56% 38%" }}
                  />
                </figure>
                <figure className="absolute bottom-0 right-0 aspect-[4/3] w-[44%] overflow-hidden rounded-xl border-[5px] border-white bg-emerald-950">
                  <Image
                    src={media.approach}
                    alt="Companions in Action volunteers with community members"
                    fill
                    sizes="(min-width: 1024px) 18vw, 42vw"
                    className="object-cover"
                    style={{ objectPosition: "50% 42%" }}
                  />
                </figure>
              </div>
            </div>
            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:gap-x-10">
              {areasOfWork.items.map((item) => (
                <article key={item.title} className="border-t border-stone-300 pt-3">
                  <h3 className="text-lg font-semibold leading-snug text-[var(--cia-ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-stone-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="featured-work" className="bg-[var(--cia-sage)] py-10 sm:py-12">
        <Container>
          <div className="mb-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--cia-terracotta)]">
                {featuredProjects.eyebrow}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-[var(--cia-ink)] sm:text-3xl">
                {featuredProjects.title}
              </h2>
            </div>
          </div>

          {currentWork.length > 0 ? (
            <div className="grid gap-6 border-t border-emerald-950/15 pt-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10">
              <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-emerald-950">
                <Image
                  src={media.campaign}
                  alt="Companions in Action Pad Donation Drive outreach"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "48% 36%" }}
                />
              </figure>
              <div>
                {currentWork.map((item) => (
                  <article key={item.title}>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--cia-terracotta)]">
                      {item.status}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-[var(--cia-ink)] sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-700">
                      {item.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="border-t border-emerald-950/15 pt-5">
              <p className="text-sm font-semibold text-[var(--cia-ink)]">
                {projectsPage.emptyState.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-700">
                {projectsPage.emptyState.body}
              </p>
            </div>
          )}
        </Container>
      </section>

      <section id="campaigns-drives" className="border-y border-stone-200 bg-white py-10 sm:py-12">
        <Container>
          <div className="mb-6 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              {campaignsPage.hero.eyebrow} &amp; {drivesPage.hero.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--cia-ink)] sm:text-3xl">
              Campaigns &amp; Drives
            </h2>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 sm:gap-10">
            {[campaignsPage, drivesPage].map((section) => (
              <article key={section.hero.eyebrow} className="border-t border-stone-300 pt-4">
                <h3 className="text-lg font-semibold text-[var(--cia-ink)]">
                  {section.hero.eyebrow}
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {section.emptyState.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="impact" className="bg-emerald-950 py-8 text-white sm:py-10">
        <Container>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-sm">
              <h2 className="text-xl font-semibold">{impact.eyebrow}</h2>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 lg:min-w-[58%]">
              {impact.metrics.map((metric) => (
                <div key={metric.label} className="border-l border-white/20 pl-4">
                  <dt className="text-xs leading-5 text-emerald-50/75">{metric.label}</dt>
                  <dd className="mt-1 text-xl font-semibold text-white">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--cia-cream)] py-8 sm:py-10">
        <Container>
          <div className="grid gap-7 lg:grid-cols-2 lg:gap-12">
            {[volunteerCta, donationCta].map((cta) => (
              <article key={cta.title} className="flex flex-col items-start">
                <h2 className="text-xl font-semibold text-[var(--cia-ink)]">{cta.title}</h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-stone-700">{cta.body}</p>
                <Link
                  href={cta.action.href}
                  className="mt-4 inline-flex min-h-10 items-center justify-center rounded-full bg-[var(--cia-forest)] px-5 text-sm font-semibold text-white transition hover:bg-[var(--cia-leaf)] focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)] focus:ring-offset-2"
                >
                  {cta.action.label}
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
