import Image from "next/image";
import { MotionLink } from "./MotionLink";

export type NavLink = [label: string, href: string];

const defaultLinks: NavLink[] = [
  ["Overview", "/#overview"],
  ["Story", "/#story"],
  ["Products", "/#products"],
  ["Shop", "/#shop"],
  ["Certified", "/#certifications"],
  ["Reviews", "/#reviews"],
  ["Expo", "/#expo"],
  ["Videos", "/#videos"],
  ["Systems", "/#systems"],
  ["Process", "/#process"],
  ["Support", "/#after-sales"],
  ["FAQs", "/#faqs"],
  ["Get a quote", "/#quote"],
];

// Desktop shows a short one-line nav; the hamburger keeps every link.
const compact = new Set(["Expo", "Overview", "Story", "Systems", "Support", "Get a quote"]);

export function TopBar({ links = defaultLinks }: { links?: NavLink[] }) {
  const allLinks: NavLink[] = [...links, ["Dashboard", "/dashboard"], ["Admin", "/admin"]];
  const isMain = links === defaultLinks;
  const desktopLinks = isMain ? links.filter(([l]) => !compact.has(l)) : links;

  return (
    <header className="header-gradient sticky top-0 z-40 shadow-[0_2px_14px_rgba(1,53,86,0.25)]">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-6 py-2">
        <a href="/" className="flex-none">
          <Image
            src="/setmi-logo.png"
            alt="Setmi India"
            width={175}
            height={58}
            className="h-[52px] w-auto sm:h-[62px]"
            priority
          />
        </a>
        <nav className="hidden flex-nowrap items-center justify-center gap-x-5 whitespace-nowrap xl:flex">
          {desktopLinks.map(([label, href]) => (
            <MotionLink
              key={href}
              href={href}
              className="text-[0.82rem] font-semibold text-white/80 hover:text-white"
            >
              {label}
            </MotionLink>
          ))}
        </nav>
        <div className="hidden flex-none items-center gap-4 xl:flex">
          {isMain && (
            <MotionLink
              href="/#quote"
              className="rounded-md bg-[#2fb6a1] px-3.5 py-1.5 text-[0.8rem] font-bold text-[#06201c] hover:bg-[#3cc8b2]"
            >
              Get a quote
            </MotionLink>
          )}
          <MotionLink href="/dashboard" className="text-[0.82rem] font-semibold text-white/80 hover:text-white">
            Dashboard
          </MotionLink>
          <MotionLink
            href="/admin"
            className="rounded-md border border-white/25 px-3 py-1.5 text-[0.78rem] font-semibold text-white hover:bg-white/10"
          >
            Admin
          </MotionLink>
        </div>

        <details className="group relative flex-none xl:hidden">
          <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-md border border-white/25 text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 group-open:hidden">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="hidden h-5 w-5 group-open:block">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </summary>
          <div className="absolute right-0 top-[calc(100%+10px)] flex w-52 flex-col gap-1 rounded-lg border border-panel-line bg-bg-elevated p-2 shadow-[0_14px_30px_-10px_rgba(1,53,86,0.4)]">
            {allLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-md px-3 py-2 text-[0.86rem] font-semibold text-ink hover:bg-[color-mix(in_srgb,var(--accent-soft)_12%,transparent)]"
              >
                {label}
              </a>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
