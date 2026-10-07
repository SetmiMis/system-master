import type { Metadata } from "next";
import { TopBar } from "@/components/TopBar";
import { DashboardFooter } from "@/components/DashboardFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Reveal } from "@/components/Reveal";
import { getLinkedSystems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Systems — How Setmi India Works",
  description: "The systems behind every Setmi India order — sales, purchase, production, people and reporting.",
  alternates: { canonical: "/systems" },
};

const host = (url: string) => new URL(url).host.replace(/^www\./, "");
const initials = (name: string) =>
  name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();

export default async function SystemsPage() {
  const all = (await getLinkedSystems()).filter((s) => s.public !== false);
  const groups = [...new Set(all.map((s) => s.group))].map((g) => ({
    name: g,
    items: all.filter((s) => s.group === g),
  }));

  return (
    <>
      <div className="grid-field" />
      <TopBar links={[["Home", "/"], ["Systems", "/systems"]]} />

      <section className="relative overflow-hidden bg-[#0b1625] text-white">
        <div className="hero-glow !bg-[radial-gradient(circle,rgba(47,182,161,0.28),transparent_65%)]" />
        <div className="relative mx-auto max-w-[1180px] px-6 py-14 sm:py-20">
          <div className="relative">
            <div className="font-data text-[0.74rem] uppercase tracking-[0.2em] text-[#2fb6a1]">How we work</div>
            <h1 className="mt-4 max-w-[18ch] text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.05]">
              Every order runs on a system.
            </h1>
            <p className="mt-5 max-w-[56ch] text-[1.05rem] leading-relaxed text-white/70">
              Each part of Setmi India has its own system — so nothing depends on memory or a
              spreadsheet. Open any card to see it working.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {[`${all.length} live systems`, `${groups.length} areas of the business`, "One record per order"].map((t) => (
                <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-white/75">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1180px] px-6 py-12">
        {groups.map((g) => (
          <section key={g.name} className="mb-12">
            <div className="mb-4 flex items-baseline gap-3">
              <h2 className="text-[1.25rem] font-extrabold">{g.name}</h2>
              <span className="h-px flex-1 bg-panel-line" />
              <span className="font-data text-[0.74rem] text-ink-dim">{g.items.length}</span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.05}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener"
                    className="group flex h-full flex-col rounded-2xl border border-panel-line bg-bg-elevated p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_18px_34px_-20px_rgba(1,53,86,0.55)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="header-gradient flex h-11 w-11 flex-none items-center justify-center rounded-xl font-data text-[0.9rem] font-bold text-white">
                        {initials(s.name)}
                      </span>
                      <h3 className="text-[1.05rem] font-bold leading-tight">{s.name}</h3>
                    </div>
                    <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-ink-dim">{s.description}</p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className="truncate font-data text-[0.72rem] text-ink-dim">{host(s.url)}</span>
                      <span className="flex-none text-[0.86rem] font-semibold text-accent transition-transform group-hover:translate-x-0.5 group-hover:text-accent-strong">
                        Open ↗
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        <div className="header-gradient rounded-2xl px-6 py-7 text-white sm:px-10">
          <h2 className="text-[1.25rem] font-extrabold">Want to see it on your order?</h2>
          <p className="mt-1 text-[0.92rem] text-white/80">Place an enquiry and we&apos;ll walk you through how it moves.</p>
          <a href="/#quote" className="mt-4 inline-block rounded-lg bg-white px-5 py-2.5 text-[0.9rem] font-bold text-accent-strong hover:bg-white/90">
            Get a quote
          </a>
        </div>
      </main>
      <div className="mx-auto w-full max-w-[1180px] px-6"><DashboardFooter /></div>
      <WhatsAppButton />
    </>
  );
}
