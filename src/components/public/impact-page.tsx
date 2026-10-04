import { publicSiteContent } from "@/config/public-site";
import { Container } from "@/components/shared/container";
import { EmptyState } from "./empty-state";
import { PageHero } from "./page-hero";
import { PublicLayout } from "./public-layout";
import { VisualPlaceholder } from "./visual-placeholder";

export function ImpactPage() {
  const { impactPage, cities } = publicSiteContent;

  return (
    <PublicLayout>
      <PageHero {...impactPage.hero} />
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <EmptyState
                title={impactPage.emptyState.title}
                body={impactPage.emptyState.body}
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {impactPage.metricSlots.map((metric) => (
                  <article
                    key={metric.label}
                    className="rounded-3xl border border-stone-200 bg-stone-50 p-6 shadow-sm shadow-stone-950/5"
                  >
                    <p className="text-4xl font-semibold text-emerald-950">
                      {metric.value ?? "CMS pending"}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-stone-600">
                      {metric.label}
                    </p>
                  </article>
                ))}
              </div>
              <div className="mt-8 rounded-3xl border border-[var(--cia-border)] bg-[var(--cia-cream)] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--cia-gold)]">
                  Cities included in current reach
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Cities included in current reach">
                  {cities.map((city) => (
                    <li
                      key={city}
                      className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--cia-ink)] shadow-sm shadow-stone-950/5"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <VisualPlaceholder
              label="Impact storytelling and reporting media area"
              className="min-h-[32rem]"
            />
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
