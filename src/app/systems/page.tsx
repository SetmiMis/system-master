import type { Metadata } from "next";
import { TopBar } from "@/components/TopBar";
import { DashboardFooter } from "@/components/DashboardFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Reveal } from "@/components/Reveal";
import { getLinkedSystems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Systems — How Setmi India Works",
  description: "The systems behind every Setmi India order — orders, purchase, quality, production and records.",
  alternates: { canonical: "/systems" },
};

export default async function SystemsPage() {
  const systems = await getLinkedSystems();

  return (
    <>
      <div className="grid-field" />
      <TopBar links={[["Home", "/"], ["Systems", "/systems"]]} />
      <main className="mx-auto w-full max-w-[1180px] px-6">
        <section className="pb-6 pt-10">
          <div className="mb-2 font-data text-[0.72rem] uppercase tracking-[0.14em] text-accent-strong">How we work</div>
          <h1 className="text-[clamp(1.7rem,3.2vw,2.4rem)] font-extrabold">Every order runs on a system.</h1>
          <p className="mt-2 max-w-[62ch] text-[1rem] text-ink-dim">
            We work systematically — each part of the business has its own system, so nothing depends on memory
            or a spreadsheet. Open any card to see it.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-4 pb-14 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener"
                className="group flex h-full flex-col rounded-xl border border-panel-line bg-bg-elevated p-5 transition-[border-color,box-shadow] duration-300 hover:border-accent hover:shadow-[0_14px_30px_-18px_rgba(15,122,134,0.6)]"
              >
                <h3 className="text-[1.05rem] font-bold">{s.name}</h3>
                <p className="mt-2 flex-1 text-[0.88rem] leading-relaxed text-ink-dim">{s.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[0.86rem] font-semibold text-accent group-hover:text-accent-strong">
                  Open system →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </main>
      <DashboardFooter />
      <WhatsAppButton />
    </>
  );
}
