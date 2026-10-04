import Image from "next/image";
import Link from "next/link";
import { publicSiteContent } from "@/config/public-site";
import { Container } from "@/components/shared/container";
import { SocialIcon } from "./social-icon";

export function SiteFooter() {
  const { facts, logo, socialLinks, tagline, workPage } = publicSiteContent;

  return (
    <footer
      id="connect"
      className="border-t border-emerald-900/20 bg-[var(--cia-forest)] text-white"
    >
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="relative block h-14 w-14 overflow-hidden rounded-full bg-white ring-1 ring-white/20">
                <Image
                  src={logo.src}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                />
              </span>
              <div>
                <p className="text-lg font-semibold">
                  {publicSiteContent.organizationName}
                </p>
                <p className="text-sm text-emerald-50/75">{tagline}</p>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-7 text-emerald-50/78">
              {publicSiteContent.footer.note}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/volunteer"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-[var(--cia-forest)] transition hover:-translate-y-0.5 hover:bg-[var(--cia-sage)] focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)] focus:ring-offset-4 focus:ring-offset-[var(--cia-forest)]"
              >
                Volunteer
              </Link>
              <Link
                href="/donate"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--cia-gold)] px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[var(--cia-terracotta)] focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)] focus:ring-offset-4 focus:ring-offset-[var(--cia-forest)]"
              >
                Donate
              </Link>
            </div>
            <address className="mt-7 space-y-2 not-italic text-sm text-emerald-50/78">
              <p>Phone: {facts.phone}</p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${facts.email}`}
                  className="rounded-sm underline decoration-emerald-100/40 underline-offset-4 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)] focus:ring-offset-4 focus:ring-offset-[var(--cia-forest)]"
                >
                  {facts.email}
                </a>
              </p>
            </address>
            <nav aria-label="Social links" className="mt-6 flex gap-2">
              {socialLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  className="grid size-10 place-items-center rounded-full bg-white/10 text-emerald-50 transition hover:-translate-y-0.5 hover:bg-white hover:text-[var(--cia-forest)] focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)] focus:ring-offset-4 focus:ring-offset-[var(--cia-forest)]"
                >
                  <SocialIcon name={item.icon} />
                </Link>
              ))}
            </nav>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <nav aria-label="Footer navigation" className="grid content-start gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
                Explore
              </p>
              {[...publicSiteContent.navigation, ...publicSiteContent.secondaryNavigation].map(
                (item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md text-sm text-emerald-50/75 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)] focus:ring-offset-4 focus:ring-offset-[var(--cia-forest)]"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            <div className="grid content-start gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
                Work areas
              </p>
              {workPage.categories.slice(0, 6).map((item) => (
                <p
                  key={item.title}
                  className="text-sm text-emerald-50/75 transition hover:text-white"
                >
                  {item.title}
                </p>
              ))}
            </div>
            <div className="grid content-start gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
                Credibility
              </p>
              {publicSiteContent.legalCredentials.map((item) => (
                <p
                  key={item}
                  className="text-sm leading-6 text-emerald-50/75 transition hover:text-white"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
