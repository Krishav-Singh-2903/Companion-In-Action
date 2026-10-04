import { Container } from "@/components/shared/container";
import { ContentCard } from "./content-card";
import { EmptyState } from "./empty-state";
import { PageHero } from "./page-hero";
import { ProjectCard } from "./project-card";
import { PublicLayout } from "./public-layout";
import { VisualPlaceholder } from "./visual-placeholder";

type PlaceholderItem = {
  title: string;
  body: string;
  status: string;
  slug?: string;
};

type ListingPageProps = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
  };
  emptyState: {
    title: string;
    body: string;
  };
  items: readonly PlaceholderItem[];
  variant?: "project" | "card";
  basePath?: string;
};

export function ListingPage({
  hero,
  emptyState,
  items,
  variant = "card",
  basePath = ""
}: ListingPageProps) {
  return (
    <PublicLayout>
      <PageHero {...hero} />
      <section className="bg-white py-16 lg:py-20">
        <Container>
          <EmptyState title={emptyState.title} body={emptyState.body} />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <VisualPlaceholder
              label={`${hero.eyebrow} featured media area`}
              tone="sage"
              className="min-h-72"
            />
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6 shadow-sm shadow-stone-950/5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-800">
                CMS-ready structure
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-stone-950">
                Ready for verified records and real media
              </h2>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                This page keeps the presentation rich while avoiding invented
                names, dates, outcomes, totals, or project results.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) =>
              variant === "project" ? (
                <ProjectCard
                  key={item.title}
                  title={item.title}
                  body={item.body}
                  status={item.status}
                  href={item.slug ? `${basePath}/${item.slug}` : undefined}
                />
              ) : (
                <ContentCard
                  key={item.title}
                  title={item.title}
                  body={item.body}
                  meta={item.status}
                />
              )
            )}
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
