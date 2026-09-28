import Image from "next/image";

export function TopBar() {
  return (
    <header className="header-gradient sticky top-0 z-40 shadow-[0_2px_14px_rgba(1,53,86,0.25)]">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-3">
        <Image
          src="/setmi-logo.png"
          alt="Setmi India"
          width={175}
          height={58}
          className="h-[42px] w-auto"
          priority
        />
        <nav className="hidden gap-6 sm:flex">
          {[
            ["Overview", "#overview"],
            ["The Story", "#story"],
            ["Systems", "#systems"],
            ["Data & Security", "#security"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[0.86rem] font-semibold text-white/80 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="font-data text-[0.72rem] tracking-[0.08em] text-white/70">
          EST. 1983
        </div>
      </div>
    </header>
  );
}
