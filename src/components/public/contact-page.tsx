import { Container } from "@/components/shared/container";
import { publicSiteContent } from "@/config/public-site";
import { EmptyState } from "./empty-state";
import { FormFieldPreview } from "./form-field-preview";
import { PageHero } from "./page-hero";
import { PublicLayout } from "./public-layout";
import { SectionHeading } from "./section-heading";
import { VisualPlaceholder } from "./visual-placeholder";

export function ContactPage() {
  const content = publicSiteContent.contactPage;

  return (
    <PublicLayout>
      <PageHero {...content.hero} />
      <section className="bg-white py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="grid gap-6">
            <SectionHeading
              eyebrow="Contact"
              title="Reach Companions in Action through the official channels."
              body="Phone and email are published from the authoritative CIA information. Address and additional legal identifiers are not shown because they have not been provided."
            />
            <EmptyState
              title={content.contactInfo.title}
              body={content.contactInfo.body}
            />
            <VisualPlaceholder
              label="Contact and community connection visual area"
              tone="sage"
              className="min-h-64"
            />
          </div>

          <form
            aria-describedby="contact-form-note"
            className="rounded-lg border border-stone-200 bg-stone-50 p-6 shadow-sm shadow-stone-950/5"
          >
            <h2 className="text-2xl font-semibold text-stone-950">
              {content.form.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              {content.form.body}
            </p>
            <div className="mt-6 grid gap-5">
              {content.form.fields.map((field) => (
                <FormFieldPreview
                  key={field.label}
                  id={`contact-${field.label.toLowerCase()}`}
                  label={field.label}
                  type={field.type}
                />
              ))}
            </div>
            <p
              id="contact-form-note"
              className="mt-5 rounded-md bg-amber-50 p-4 text-sm leading-6 text-amber-900"
            >
              This contact form is not connected to backend submission.
            </p>
            <div className="mt-5 grid gap-3">
              <p
                role="status"
                className="rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-950"
              >
                {content.form.successState}
              </p>
              <p
                role="alert"
                className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-950"
              >
                {content.form.errorState}
              </p>
            </div>
            <button
              type="button"
              aria-disabled="true"
              className="mt-5 rounded-md bg-stone-300 px-5 py-3 text-sm font-semibold text-stone-700"
            >
              Submission pending
            </button>
          </form>
        </Container>
      </section>
    </PublicLayout>
  );
}
