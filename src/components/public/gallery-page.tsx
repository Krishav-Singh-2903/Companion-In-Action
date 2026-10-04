import { publicSiteContent } from "@/config/public-site";
import { Container } from "@/components/shared/container";
import { ContentCard } from "./content-card";
import { EmptyState } from "./empty-state";
import { PageHero } from "./page-hero";
import { PublicLayout } from "./public-layout";
import { SectionHeading } from "./section-heading";
import { VisualPlaceholder } from "./visual-placeholder";

export function GalleryPage() {
  const { galleryPage } = publicSiteContent;

  return (
    <PublicLayout>
      <PageHero {...galleryPage.hero} />
      <section className="border-b border-stone-200 bg-white py-16 lg:py-20">
        <Container>
          <EmptyState title={galleryPage.emptyState.title} body={galleryPage.emptyState.body} />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {galleryPage.albums.map((album) => (
              <article
                key={album.title}
                className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm shadow-stone-950/5"
              >
                <VisualPlaceholder
                  label={`${album.title} future album cover`}
                  tone="sage"
                  className="min-h-56 rounded-none"
                />
                <div className="p-6">
                  <ContentCard
                    title={album.title}
                    body={album.body}
                    meta={album.status}
                  />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-stone-50 py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Media grid"
            title="Responsive placeholder grid for future approved assets"
            body="Each tile is a placeholder only. It does not represent an actual activity, location, person, or event."
          />
          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-4">
            {galleryPage.mediaPlaceholders.map((label, index) => (
              <figure
                key={label}
                className="mb-4 break-inside-avoid overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm shadow-stone-950/5"
              >
                <div
                  role="img"
                  aria-label={`${label}. Placeholder media slot, not an actual NGO image.`}
                  className={`grid place-items-center bg-[linear-gradient(135deg,#d9e8dd,#f3e6ce)] p-4 text-center text-sm font-semibold text-stone-700 ${index % 2 === 0 ? "aspect-[4/3]" : "aspect-[3/4]"}`}
                >
                  Media slot {index + 1}
                </div>
                <figcaption className="border-t border-stone-200 px-4 py-3 text-sm text-stone-600">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
