import { Container } from "@/components/shared/container";
import { publicSiteContent } from "@/config/public-site";
import { ContentCard } from "./content-card";
import { EmptyState } from "./empty-state";
import { FormFieldPreview } from "./form-field-preview";
import { PageHero } from "./page-hero";
import { PublicLayout } from "./public-layout";
import { SectionHeading } from "./section-heading";
import { VisualPlaceholder } from "./visual-placeholder";

export function VolunteerPage() {
  const content = publicSiteContent.volunteerPage;

  return (
    <PublicLayout>
      <PageHero {...content.hero} />
      <section className="bg-white py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Volunteer with care"
              title={content.introduction.title}
              body={content.introduction.body}
            />
            <VisualPlaceholder
              label="Volunteer participation media area"
              tone="sage"
              className="mt-8 min-h-72"
            />
          </div>
          <div className="grid gap-5">
            {content.participation.map((item) => (
              <ContentCard
                key={item.title}
                title={item.title}
                body={item.body}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-stone-50 py-16 lg:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <EmptyState
            title={content.applicationPreview.title}
            body={content.applicationPreview.body}
          />
          <form
            aria-describedby="volunteer-form-note"
            className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm shadow-stone-950/5"
          >
            <div className="grid gap-5">
              {content.applicationPreview.fields.map((field) => (
                <FormFieldPreview
                  key={field}
                  id={`volunteer-${field.toLowerCase().replaceAll(" ", "-")}`}
                  label={field}
                  type={field === "Message" ? "textarea" : "text"}
                />
              ))}
            </div>
            <p
              id="volunteer-form-note"
              className="mt-5 rounded-md bg-amber-50 p-4 text-sm leading-6 text-amber-900"
            >
              This presentation form is not connected to submission or storage.
            </p>
            <button
              type="button"
              aria-disabled="true"
              className="mt-5 rounded-md bg-stone-300 px-5 py-3 text-sm font-semibold text-stone-700"
            >
              {content.cta.actionLabel}
            </button>
          </form>
        </Container>
      </section>

      <section className="bg-emerald-950 py-14 text-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold">{content.cta.title}</h2>
            <p className="mt-4 text-base leading-7 text-emerald-50/85">
              {content.cta.body}
            </p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm leading-7 text-emerald-50/85">
            Future live application handling will be added only after backend
            and approved volunteer process work begins.
          </div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
