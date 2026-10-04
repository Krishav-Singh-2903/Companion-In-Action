import { notFound } from "next/navigation";
import { publicSiteContent } from "@/config/public-site";
import { Container } from "@/components/shared/container";
import { EmptyState } from "./empty-state";
import { PageHero } from "./page-hero";
import { PublicLayout } from "./public-layout";
import { SectionHeading } from "./section-heading";

type ProjectDetailPageProps = {
  slug: string;
};

export function ProjectDetailPage({ slug }: ProjectDetailPageProps) {
  const project = publicSiteContent.projectsPage.placeholders.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PublicLayout>
      <PageHero
        eyebrow={project.status}
        title={project.title}
        body="This is a CMS-ready project detail structure. It intentionally avoids real outcomes, dates, locations, and statistics until verified project data exists."
      />
      <section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Project detail structure"
              title="Ready for future approved project data"
              body={project.body}
            />
            <div className="grid gap-5">
              <EmptyState
                title="Project updates pending"
                body="Future CMS data can populate goals, updates, media, related campaigns, and responsible editorial fields here."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {["Overview", "Updates", "Gallery", "Related campaigns"].map((section) => (
                  <article
                    key={section}
                    className="rounded-lg border border-dashed border-stone-300 bg-stone-50 p-5"
                  >
                    <h2 className="text-base font-semibold text-stone-950">{section}</h2>
                    <p className="mt-2 text-sm leading-6 text-stone-600">CMS content pending</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
