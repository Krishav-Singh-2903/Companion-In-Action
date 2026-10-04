import Image from "next/image";
import Link from "next/link";
import { publicSiteContent } from "@/config/public-site";
import { Container } from "@/components/shared/container";
import { ContentCard } from "./content-card";
import { PageHero } from "./page-hero";
import { PublicLayout } from "./public-layout";
import { SectionHeading } from "./section-heading";

type TeamMember = {
  name: string;
  role: string;
  label: string;
  city: string | null;
  image: string | null;
  imagePosition: string;
  order: number;
  status: string;
};

function TeamPortrait({
  member,
}: {
  member: TeamMember;
}) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      role="img"
      aria-label={
        member.image
          ? `${member.name} team photo area using actual Companions in Action photography.`
          : `${member.name} portrait placeholder. Photo pending.`
      }
      className="relative isolate aspect-[16/10] overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,var(--cia-sage),var(--cia-cream))]"
    >
      {member.image ? (
        <Image
          src={member.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
          style={{ objectPosition: member.imagePosition }}
        />
      ) : null}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent"
      />
      {!member.image ? (
        <div className="relative flex h-full flex-col items-center justify-center gap-3 border border-white/70 p-5 text-center">
          <div className="grid size-20 place-items-center rounded-full border border-[var(--cia-border)] bg-white/70 text-xl font-semibold text-[var(--cia-forest)] shadow-sm">
            {initials}
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cia-muted)]">
            Photo pending
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function AboutPage() {
  const { aboutPage, facts, legalCredentials } = publicSiteContent;
  const visibleLeadership = aboutPage.team.leadership
    .filter((member) => member.status === "visible")
    .sort((first, second) => first.order - second.order);

  return (
    <PublicLayout>
      <PageHero {...aboutPage.hero} />

      <section className="border-b border-[var(--cia-border)] bg-[var(--cia-cream)] py-16 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow={aboutPage.story.eyebrow}
                title={aboutPage.story.title}
                body={aboutPage.story.body}
              />
              <dl className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["Founder", facts.founder],
                  ["Started", facts.started],
                  ["Reach", facts.reach]
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
                      {label}
                    </dt>
                    <dd className="mt-2 text-sm font-semibold text-stone-950">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div
              role="img"
              aria-label="About CIA visual story. Actual Companions in Action team photo."
              className="relative min-h-[26rem] overflow-hidden rounded-3xl"
            >
              <Image
                src="/assets/team/core-team-cia.jpeg"
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--cia-forest)] py-16 text-white lg:py-24">
        <Container>
          <div className="grid gap-10">
            <SectionHeading
              eyebrow={aboutPage.team.eyebrow}
              title={aboutPage.team.title}
              body={aboutPage.team.body}
              inverted
            />
            <div className="grid gap-6">
              <div className="grid gap-5 lg:grid-cols-2">
                {visibleLeadership.map((member) => {
                const isFounder = member.role === "Founder";

                return (
                <article
                  key={member.name}
                  className={`group flex h-full flex-col rounded-[2rem] border p-5 backdrop-blur transition hover:-translate-y-1 ${
                    isFounder
                      ? "border-amber-200/45 bg-white/15 shadow-2xl shadow-emerald-950/20 hover:bg-white/20"
                      : "border-white/15 bg-white/10 hover:bg-white/15"
                  }`}
                >
                  <TeamPortrait member={member} />
                  <div className="flex flex-1 flex-col pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
                      {member.label}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">
                      {member.name}
                    </h2>
                    <p className="mt-2 text-base font-medium text-emerald-50/80">
                      {member.role}
                    </p>
                  </div>
                </article>
              );
              })}
              </div>

            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-200 bg-stone-50 py-16 lg:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <ContentCard title={aboutPage.mission.title} body={aboutPage.mission.body} />
            <ContentCard
              title={aboutPage.vision.title}
              body={aboutPage.vision.body}
              accent="amber"
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--cia-border)] bg-[var(--cia-sage)] py-16 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Credibility"
              title="Verified organizational information"
              body="These details are stated exactly at the level provided. No registration numbers, certification numbers, legal address, PAN, FCRA, or other identifiers are invented."
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
        </Container>
      </section>

      <section className="border-b border-[var(--cia-border)] bg-[var(--cia-cream)] py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow={aboutPage.approach.eyebrow}
            title={aboutPage.approach.title}
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {aboutPage.approach.items.map((item, index) => (
              <ContentCard
                key={item.title}
                title={item.title}
                body={item.body}
                accent={index === 1 ? "amber" : "emerald"}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--cia-sage)] py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 rounded-[2rem] border border-[var(--cia-border)] bg-[linear-gradient(135deg,var(--cia-sage),var(--cia-cream))] p-8 shadow-sm shadow-stone-950/5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--cia-gold)]">
                Join the movement
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--cia-ink)]">
                Stand with the people building Companions in Action.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--cia-muted)]">
                Volunteer participation remains frontend-only in this phase.
                The page is ready for a secure application flow later.
              </p>
            </div>
            <Link
              href="/volunteer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--cia-forest)] px-6 text-sm font-bold text-white shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5 hover:bg-[var(--cia-emerald)] focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)] focus:ring-offset-4"
            >
              Volunteer with CIA
            </Link>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
