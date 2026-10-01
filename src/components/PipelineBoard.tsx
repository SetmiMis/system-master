import { getPipelineStages } from "@/lib/data";
import { SectionHead } from "./SectionHead";
import { GrowBar } from "./GrowBar";

export async function PipelineBoard() {
  const stages = await getPipelineStages();
  // "Delivered" is a running total, not a work-in-progress count — scale the
  // in-flight stages against each other and cap the bar so one big number
  // doesn't flatten the rest.
  const hasTotal = stages.some((s) => s.total);
  const max = Math.max(...stages.filter((s) => !s.total).map((s) => s.count), 1);

  return (
    <section id="pipeline" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="Live Pipeline"
        title="Enquiries by stage, right now."
        lede="Count of enquiries sitting at each stage of the sales desk — the same board the team works from."
      />

      <div className="rounded-xl border border-panel-line bg-bg-elevated p-6">
        <div className="space-y-4">
          {stages.map((s, i) => {
            const isDelivered = !!s.total;
            const pct = isDelivered ? 100 : Math.max(6, (s.count / max) * 100);
            return (
              <div key={s.stage} className="flex items-center gap-4">
                <div className="w-[120px] flex-none text-[0.82rem] font-semibold text-ink-dim sm:w-[150px]">
                  {s.stage}
                </div>
                <div className="relative h-6 flex-1 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--accent-soft)_12%,transparent)]">
                  <GrowBar
                    axis="width"
                    size={`${pct}%`}
                    delay={i * 0.05}
                    className={`h-full rounded-full ${isDelivered ? "bg-ok" : "bg-accent"}`}
                  />
                </div>
                <div className="w-[52px] flex-none text-right font-data text-[0.9rem] font-semibold tabular-nums">
                  {s.count}
                </div>
              </div>
            );
          })}
        </div>
        {hasTotal && (
          <p className="mt-5 text-[0.78rem] text-ink-dim">
            &ldquo;Delivered&rdquo; counts completed orders this month, shown to scale separately from the in-flight stages above it.
          </p>
        )}
      </div>
    </section>
  );
}
