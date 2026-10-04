import { Container } from "@/components/shared/container";
import { ContentCard } from "./content-card";
import { EmptyState } from "./empty-state";
import { PageHero } from "./page-hero";
import { PublicLayout } from "./public-layout";

type LegalPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
  };
  reviewNotice: {
    title: string;
    body: string;
  };
  sections: readonly {
    title: string;
    body: string;
  }[];
};

type LegalPageProps = {
  content: LegalPageContent;
};

export function LegalPage({ content }: LegalPageProps) {
  return (
    <PublicLayout>
      <PageHero {...content.hero} />
      <section className="bg-white py-16 lg:py-20">
        <Container>
          <EmptyState
            title={content.reviewNotice.title}
            body={content.reviewNotice.body}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {content.sections.map((section) => (
              <ContentCard
                key={section.title}
                title={section.title}
                body={section.body}
                meta="Requires review"
              />
            ))}
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
