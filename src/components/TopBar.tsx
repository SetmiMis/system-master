import Image from "next/image";
import { MotionLink } from "./MotionLink";

export type NavLink = [label: string, href: string];

const defaultLinks: NavLink[] = [
  ["Overview", "/#overview"],
  ["Story", "/#story"],
  ["Products", "/#products"],
  ["Systems", "/#systems"],
  ["Process", "/#process"],
  ["Support", "/#after-sales"],
  ["FAQs", "/#faqs"],
];

export function TopBar({ links = defaultLinks }: { links?: NavLink[] }) {
  return (
    <header className="header-gradient sticky top-0 z-40 shadow-[0_2px_14px_rgba(1,53,86,0.25)]">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-6 py-3">
        <a href="/" className="flex-none">
          <Image
            src="/setmi-logo.png"
            alt="Setmi India"
            width={175}
            height={58}
            className="h-[38px] w-auto"
            priority
          />
        </a>
        <nav className="hidden flex-wrap justify-center gap-x-5 gap-y-1 lg:flex">
          {links.map(([label, href]) => (
            <MotionLink
              key={href}
              href={href}
              className="text-[0.82rem] font-semibold text-white/80 hover:text-white"
            >
              {label}
            </MotionLink>
          ))}
        </nav>
        <div className="hidden flex-none items-center gap-4 md:flex">
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
      </div>
    </header>
  );
}
