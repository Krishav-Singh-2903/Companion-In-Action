import Image from "next/image";
import Link from "next/link";
import { publicSiteContent } from "@/config/public-site";
import { Container } from "@/components/shared/container";
import { EmptyState } from "./empty-state";
import { SectionHeading } from "./section-heading";
import { SocialIcon } from "./social-icon";
import { VisualPlaceholder } from "./visual-placeholder";
import { HomePhotoLibrary } from "./home-photo-library";

function SectionBand({
  children,
  id,
  tone = "light"
}: {
  children: React.ReactNode;
  id?: string;
  tone?: "light" | "white" | "dark";
}) {
  const toneClass =
    tone === "dark"
      ? "bg-emerald-950 text-white"
      : tone === "white"
        ? "bg-white"
        : "bg-stone-50";

  return (
    <section id={id} className={`${toneClass} border-b border-stone-200 py-16 lg:py-24`}>
      <Container>{children}</Container>
    </section>
  );
}

export function HomeSections() {
  const {
    aboutPreview,
    mission,
    vision,
    areasOfWork,
    featuredProjects,
    campaigns,
    impact,
    stories,
    volunteerCta,
    donationCta,
    socialPresence,
    socialLinks,
    legalCredentials,
    cities,
    media
  } = publicSiteContent;

  return (
    <>
      <SectionBand id="about-preview" tone="white">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow={aboutPreview.eyebrow}
              eyebrowColor="primary"
              title={aboutPreview.title}
              body={aboutPreview.body}
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {aboutPreview.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm font-semibold text-emerald-950"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>
          <VisualPlaceholder
            label="Organization story image area"
            tone="sage"
            src={media.story}
            imagePosition="56% 38%"
            className="min-h-[24rem]"
          />
        </div>
      </SectionBand>

      <SectionBand tone="dark">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
          <article className="border-t border-white/25 pt-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
              {mission.title}
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-white sm:text-5xl">
              {mission.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-emerald-50/80">
              {mission.body}
            </p>
          </article>
          <article className="border-t border-white/25 pt-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
              {vision.title}
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-white sm:text-5xl">
              {vision.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-emerald-50/80">
              {vision.body}
            </p>
          </article>
        </div>
      </SectionBand>

      <HomePhotoLibrary />

      <section id="areas-of-work" className="border-b border-stone-200 bg-white py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="grid gap-9 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14">
            <div>
              <p className="text-xl font-bold uppercase tracking-[0.18em] text-[#806400] sm:text-2xl">
                {areasOfWork.eyebrow}
              </p>
              <h2 className="mt-3 max-w-lg text-xl font-bold leading-tight text-[var(--cia-ink)] sm:text-2xl">
                {areasOfWork.title}
              </h2>
              <p className="mt-4 max-w-lg text-[0.8125rem] leading-7 text-stone-700">
                Each area is prepared for future CMS-managed projects, drives, media, and updates.
              </p>
              <div className="relative mt-7 max-w-xl pb-9 pr-10 sm:pr-14">
                <figure className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-emerald-950">
                  <Image
                    src="/assets/team/team-photo-01.jpg"
                    alt="Children and community members with Companions in Action"
                    fill
                    sizes="(min-width: 1024px) 38vw, 90vw"
                    className="object-cover"
                    style={{ objectPosition: "50% 42%" }}
                  />
                </figure>
                <figure className="absolute bottom-0 right-0 aspect-[4/3] w-[46%] overflow-hidden rounded-[1rem] border-[6px] border-white bg-emerald-950">
                  <Image
                    src="/assets/team/team-photo-03.jpg"
                    alt="Companions in Action volunteers during community outreach"
                    fill
                    sizes="(min-width: 1024px) 18vw, 42vw"
                    className="object-cover"
                    style={{ objectPosition: "50% 42%" }}
                  />
                </figure>
              </div>
            </div>
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-9">
              {areasOfWork.items.map((item) => (
                <article key={item.title} className="group border-t border-stone-300 pt-4">
                  <h3 className="text-xl font-semibold leading-snug text-[var(--cia-ink)] transition-transform duration-200 group-hover:translate-x-1">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <SectionBand id="impact" tone="dark">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-2xl font-bold uppercase tracking-[0.18em] text-amber-300 sm:text-3xl">
              {impact.eyebrow}
            </p>
            <h2 className="mt-3 text-base font-bold leading-tight text-white sm:text-lg">
              {impact.title}
            </h2>
            <p className="mt-5 text-[0.8125rem] leading-8 text-emerald-50/80">
              {impact.note}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {impact.metrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:bg-white/15"
              >
                <p className="text-4xl font-semibold text-white">
                  {metric.value ?? "CMS pending"}
                </p>
                <p className="mt-3 text-sm leading-6 text-emerald-50/75">
                  {metric.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionBand>

      <SectionBand id="trust" tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="Trust and credibility"
            eyebrowColor="primary"
            title="Verified organizational information, presented without invented identifiers."
            body="CIA has provided these organizational credentials. Registration numbers, certification numbers, addresses, and other legal identifiers are intentionally not invented."
            titleSize="supporting"
            titleWeight="slightly-bolder"
            bodySize="small"
            eyebrowProminent
            eyebrowSmaller
            eyebrowNoWrapOnDesktop
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {legalCredentials.map((credential) => (
              <article
                key={credential}
                className="rounded-3xl border border-[var(--cia-border)] bg-[var(--cia-sage)] p-5"
              >
                <p className="text-sm font-semibold leading-6 text-[var(--cia-forest)]">
                  {credential}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-10 rounded-3xl border border-[var(--cia-border)] bg-[var(--cia-cream)] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--cia-gold)]">
            Cities reached
          </p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Cities reached by CIA">
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
      </SectionBand>

      <section
        id="featured-projects"
        className="relative isolate overflow-hidden bg-[linear-gradient(180deg,var(--cia-forest)_0%,#1e5aa8_52%,#d7e6f5_100%)] pb-10 pt-10 sm:pb-12 sm:pt-12 lg:pb-[4.5rem] lg:pt-[4.75rem]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgb(255 255 255 / 0.2) 0.65px, transparent 0.8px)",
            backgroundSize: "4px 4px"
          }}
        />
        <div className="relative mx-auto w-full max-w-[1760px] px-4">
          <div className="grid gap-6 rounded-[2.5rem] bg-[var(--cia-sage)] px-6 py-6 sm:px-10 sm:py-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-12 lg:py-8">
            <div className="max-w-2xl">
              <p className="text-xl font-extrabold uppercase tracking-[0.18em] text-[var(--cia-terracotta)] sm:text-2xl">
                {featuredProjects.eyebrow}
              </p>
              <h2 className="mt-2 font-serif text-xl font-semibold leading-tight text-[var(--cia-ink)] sm:text-2xl">
                {featuredProjects.title}
              </h2>
              <p className="mt-3 text-xs leading-5 text-stone-700">
                The layout is intentionally substantial, ready for real project
                photography and CMS records.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[var(--cia-ink)] marker:text-[var(--cia-terracotta)]">
                {featuredProjects.items.map((item) => (
                  <li key={item.title}>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--cia-terracotta)]">
                      {item.status}
                    </p>
                    <h3 className="mt-0.5 text-base font-semibold leading-5">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-5 text-stone-700">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 items-stretch gap-2 sm:gap-3 lg:grid-rows-2 lg:gap-3">
              <figure className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-[1.25rem] lg:col-span-1 lg:row-span-2 lg:aspect-auto lg:min-h-[20rem]">
                <Image
                  src={media.campaign}
                  alt="Companions in Action project photo"
                  fill
                  sizes="(min-width: 1024px) 28vw, 90vw"
                  className="object-cover"
                  style={{ objectPosition: "48% 36%" }}
                />
              </figure>
              <figure className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] lg:aspect-auto lg:min-h-0">
                <Image
                  src={media.approach}
                  alt="Companions in Action project photo"
                  fill
                  sizes="(min-width: 1024px) 15vw, 44vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 42%" }}
                />
              </figure>
              <figure className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] lg:aspect-auto lg:min-h-0">
                <Image
                  src={media.impact}
                  alt="Companions in Action project photo"
                  fill
                  sizes="(min-width: 1024px) 15vw, 44vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 42%" }}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <SectionBand id="campaigns" tone="white">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <VisualPlaceholder
            label="Campaigns and drives storytelling area"
            tone="warm"
            src={media.campaign}
            imagePosition="48% 36%"
            className="min-h-[20rem] rounded-[1.25rem]"
          />
          <div>
            <SectionHeading
              eyebrow={campaigns.eyebrow}
              eyebrowColor="primary"
              title={campaigns.title}
              titleSize="supporting"
              titleWeight="slightly-bolder"
              eyebrowProminent
              eyebrowSmaller
            />
            <div className="mt-6 border-t border-stone-200">
              {campaigns.items.map((item) => (
                <article key={item.title} className="border-b border-stone-200 py-4">
                  <h3 className="text-lg font-semibold text-[var(--cia-ink)]">{item.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-stone-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionBand>

      <SectionBand id="stories">
        <SectionHeading
          eyebrow={stories.eyebrow}
          eyebrowColor="primary"
          title={stories.title}
          titleSize="supporting"
          align="center"
          body="Real stories and testimonials require consent and approval. Until then, the site uses a designed CMS-empty state."
          eyebrowProminent
        />
        <div className="mt-10">
          <EmptyState
            title="Approved stories are pending"
            body="Future testimonials can be displayed here after source material, consent, attribution, and editorial review are complete."
          />
        </div>
      </SectionBand>

      <SectionBand tone="white">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-3xl bg-emerald-950 p-8 text-white shadow-2xl shadow-emerald-950/20">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-300/20 blur-2xl"
            />
            <h2 className="relative text-3xl font-semibold">{volunteerCta.title}</h2>
            <p className="relative mt-4 text-sm leading-7 text-emerald-50/80">
              {volunteerCta.body}
            </p>
            <Link
              href={volunteerCta.action.href}
              className="relative mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-emerald-900"
            >
              {volunteerCta.action.label}
            </Link>
          </article>
          <article className="rounded-3xl border border-amber-200 bg-[linear-gradient(135deg,#fff1e8,#ffe7a0)] p-8 shadow-xl shadow-amber-950/10">
            <h2 className="text-3xl font-semibold text-stone-950">
              {donationCta.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-700">{donationCta.body}</p>
            <Link
              href={donationCta.action.href}
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-stone-950 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-4 focus:ring-offset-amber-50"
            >
              {donationCta.action.label}
            </Link>
          </article>
        </div>
      </SectionBand>

      <SectionBand id="social-presence">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <SectionHeading
            eyebrow={socialPresence.eyebrow}
            eyebrowColor="primary"
            title={socialPresence.title}
            body={socialPresence.body}
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:min-w-[28rem]" aria-label="Social channels">
            {socialLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-5 py-4 text-sm font-semibold text-stone-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:ring-offset-4"
                >
                  <span className="grid size-9 place-items-center rounded-full bg-[var(--cia-sage)] text-[var(--cia-forest)]">
                    <SocialIcon name={item.icon} />
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionBand>
    </>
  );
}
