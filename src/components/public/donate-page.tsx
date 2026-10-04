import { Container } from "@/components/shared/container";
import { publicSiteContent } from "@/config/public-site";
import { ContentCard } from "./content-card";
import { FormFieldPreview } from "./form-field-preview";
import { PageHero } from "./page-hero";
import { PublicLayout } from "./public-layout";
import { SectionHeading } from "./section-heading";
import { VisualPlaceholder } from "./visual-placeholder";

export function DonatePage() {
  const content = publicSiteContent.donatePage;

  return (
    <PublicLayout>
      <PageHero {...content.hero} />
      <section className="bg-white py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Donation flow"
            title={content.introduction.title}
            body={content.introduction.body}
          />

          <form
            aria-describedby="donation-flow-note"
            className="rounded-lg border border-stone-200 bg-stone-50 p-6 shadow-sm shadow-stone-950/5"
          >
            <fieldset>
              <legend className="text-base font-semibold text-stone-950">
                Donation amount selection
              </legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {content.amountOptions.map((option, index) => (
                  <button
                    key={`${option}-${index}`}
                    type="button"
                    className="rounded-md border border-stone-300 bg-white px-4 py-4 text-sm font-semibold text-stone-800 shadow-sm transition hover:border-emerald-800 hover:text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:ring-offset-2"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-6 grid gap-5">
              <FormFieldPreview
                id="custom-donation-amount"
                label={content.customAmount.label}
                type="text"
                helpText={content.customAmount.helpText}
              />
              <FormFieldPreview
                id="campaign-specific-donation"
                label={content.campaignSpecific.label}
                type="select"
                options={["Campaign record pending"]}
                helpText={content.campaignSpecific.helpText}
              />
              <div className="rounded-md border border-stone-200 bg-white p-4">
                <label
                  htmlFor="anonymous-donation"
                  className="flex items-start gap-3 text-sm font-semibold text-stone-900"
                >
                  <input
                    id="anonymous-donation"
                    name="anonymous-donation"
                    type="checkbox"
                    className="mt-1 size-4 rounded border-stone-300 text-emerald-900 focus:ring-emerald-800"
                  />
                  <span>{content.anonymousOption.label}</span>
                </label>
                <p className="mt-2 text-xs leading-5 text-stone-500">
                  {content.anonymousOption.helpText}
                </p>
              </div>
            </div>

            <p
              id="donation-flow-note"
              className="mt-6 rounded-md bg-amber-50 p-4 text-sm leading-6 text-amber-900"
            >
              No real payment, donor record, donor wall, receipt, or payment
              provider request is created from this page.
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

      <section className="bg-stone-50 py-16 lg:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ContentCard title={content.cta.title} body={content.cta.body} />
          <VisualPlaceholder
            label="Donation support visual area"
            tone="warm"
            className="min-h-72"
          />
        </Container>
      </section>
    </PublicLayout>
  );
}
