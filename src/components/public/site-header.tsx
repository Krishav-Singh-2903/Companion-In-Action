import Image from "next/image";
import Link from "next/link";
import { publicSiteContent } from "@/config/public-site";
import { Container } from "@/components/shared/container";
import { SocialIcon } from "./social-icon";

const desktopNavigation = publicSiteContent.navigation.filter(
  (item) => !["Volunteer", "Donate"].includes(item.label)
);

const compactMoreNavigation = publicSiteContent.navigation.filter((item) =>
  ["Contact", "FAQ"].includes(item.label)
);

const actionNavigation = publicSiteContent.navigation.filter((item) =>
  ["Volunteer", "Donate"].includes(item.label)
);

export function SiteHeader() {
  const { facts, logo, socialLinks } = publicSiteContent;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--cia-border)] bg-[rgb(251_245_234/0.96)] shadow-sm shadow-emerald-950/5 backdrop-blur-xl">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--cia-forest)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <div className="hidden border-b border-[var(--cia-border)] bg-[var(--cia-forest)] text-white lg:block">
        <Container className="flex min-h-10 items-center justify-between gap-6 text-xs">
          <div className="flex items-center gap-5 text-emerald-50/85">
            <a
              href={`tel:${facts.phone}`}
              className="rounded-sm transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)] focus:ring-offset-2 focus:ring-offset-[var(--cia-forest)]"
            >
              Phone: {facts.phone}
            </a>
            <a
              href={`mailto:${facts.email}`}
              className="rounded-sm transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)] focus:ring-offset-2 focus:ring-offset-[var(--cia-forest)]"
            >
              {facts.email}
            </a>
            <span>{facts.reach}</span>
          </div>
          <nav aria-label="Official social links" className="flex items-center gap-2">
            {socialLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className="grid size-7 place-items-center rounded-full text-emerald-50/85 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)] focus:ring-offset-2 focus:ring-offset-[var(--cia-forest)]"
              >
                <SocialIcon name={item.icon} />
              </Link>
            ))}
          </nav>
        </Container>
      </div>

      <Container className="flex min-h-20 items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)] focus:ring-offset-4 focus:ring-offset-[var(--cia-cream)]"
          aria-label={`${publicSiteContent.organizationName} home`}
        >
          <span className="relative block h-14 w-14 overflow-hidden rounded-full bg-white shadow-lg shadow-emerald-950/15 ring-1 ring-[var(--cia-border)]">
            <Image
              src={logo.src}
              alt=""
              fill
              sizes="56px"
              className="object-contain p-1"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--cia-leaf)]">
              Companions
            </span>
            <span className="text-lg font-semibold text-[var(--cia-ink)]">
              in Action
            </span>
          </span>
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          {desktopNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-semibold text-[var(--cia-ink)] transition hover:bg-white hover:text-[var(--cia-forest)] focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)] focus:ring-offset-4 focus:ring-offset-[var(--cia-cream)] ${
                ["Contact", "FAQ"].includes(item.label) ? "hidden xl:inline-flex" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <details className="relative xl:hidden">
            <summary className="cursor-pointer list-none rounded-full px-3 py-2 text-sm font-semibold text-[var(--cia-ink)] transition hover:bg-white hover:text-[var(--cia-forest)] focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)] focus:ring-offset-4 focus:ring-offset-[var(--cia-cream)]">
              More
            </summary>
            <div className="absolute right-0 mt-3 grid min-w-44 gap-1 rounded-2xl border border-[var(--cia-border)] bg-white p-2 shadow-2xl shadow-emerald-950/15">
              {compactMoreNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-[var(--cia-ink)] transition hover:bg-[var(--cia-sage)] focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {actionNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.label === "Donate"
                  ? "inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--cia-gold)] px-5 text-sm font-bold text-white shadow-lg shadow-amber-950/15 transition hover:-translate-y-0.5 hover:bg-[var(--cia-terracotta)] focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)] focus:ring-offset-4 focus:ring-offset-[var(--cia-cream)]"
                  : "inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--cia-border)] bg-white px-5 text-sm font-bold text-[var(--cia-forest)] transition hover:-translate-y-0.5 hover:border-[var(--cia-leaf)] focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)] focus:ring-offset-4 focus:ring-offset-[var(--cia-cream)]"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center rounded-full border border-[var(--cia-border)] bg-white px-4 py-2 text-sm font-bold text-[var(--cia-forest)] shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)] focus:ring-offset-4 focus:ring-offset-[var(--cia-cream)]">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-72 rounded-3xl border border-[var(--cia-border)] bg-white p-3 shadow-2xl shadow-emerald-950/15">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {publicSiteContent.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--cia-ink)] hover:bg-[var(--cia-sage)] hover:text-[var(--cia-forest)] focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <nav
              aria-label="Mobile social links"
              className="mt-3 flex items-center gap-2 border-t border-[var(--cia-border)] pt-3"
            >
              {socialLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  className="grid size-9 place-items-center rounded-full bg-[var(--cia-sage)] text-[var(--cia-forest)] transition hover:bg-[var(--cia-forest)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--cia-gold)]"
                >
                  <SocialIcon name={item.icon} />
                </Link>
              ))}
            </nav>
          </div>
        </details>
      </Container>
    </header>
  );
}
