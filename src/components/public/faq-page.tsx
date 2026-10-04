import { Container } from "@/components/shared/container";
import { publicSiteContent } from "@/config/public-site";
import { PageHero } from "./page-hero";
import { PublicLayout } from "./public-layout";

export function FaqPage() {
  const content = publicSiteContent.faqPage;

  return (
    <PublicLayout>
      <PageHero {...content.hero} />
      <section className="bg-white py-16 lg:py-20">
        <Container className="max-w-4xl">
          <div className="grid gap-4">
            {content.items.map((item) => (
              <details
                key={item.question}
                className="group rounded-lg border border-stone-200 bg-stone-50 p-5 shadow-sm shadow-stone-950/5"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-stone-950 focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:ring-offset-4 focus:ring-offset-stone-50">
                  {item.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
