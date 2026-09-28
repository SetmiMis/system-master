import { getSystems } from "@/lib/data";
import { SectionHead } from "./SectionHead";
import { RevealCard } from "./RevealCard";

export async function SystemsGrid() {
  const systems = await getSystems();

  return (
    <section id="systems" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="System Health"
        title="What's running behind the counter, right now."
        lede="No stage above relies on memory or a loose spreadsheet. Each one is backed by a system, and every system reports its own status."
      />

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {systems.map((s, i) => (
          <RevealCard key={s.title} delay={i * 0.05}>
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-[1.02rem] font-bold">{s.title}</h3>
              <span className="flex flex-none items-center gap-1.5 rounded-full bg-[color-mix(in_srgb,var(--ok)_14%,transparent)] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.04em] text-ok">
                <span className="h-1.5 w-1.5 rounded-full bg-ok" />
                Operational
              </span>
            </div>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-dim">{s.body}</p>
            <div className="mt-3.5 font-data text-[0.7rem] tracking-[0.05em] text-accent-strong">
              SYNCED {s.lastSync.toUpperCase()}
            </div>
          </RevealCard>
        ))}
      </div>
    </section>
  );
}
