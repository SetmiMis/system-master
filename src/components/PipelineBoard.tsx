import { getPipelineStages } from "@/lib/data";
import { SectionHead } from "./SectionHead";
import { GrowBar } from "./GrowBar";

export async function PipelineBoard() {
  const stages = await getPipelineStages();
  // "Delivered" is a running total, not a work-in-progress count — scale the
  // in-flight stages against each other and cap the bar so one big number
  // doesn't flatten the rest.
  const inFlight = stages.slice(0, -1);
  const max = Math.max(...inFlight.map((s) => s.count));

  return (
    <section id="pipeline" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="Live Pipeline"
        title="Orders in flight, right now."
        lede="Count of active orders sitting at each stage of the desk — this is the same board the order team looks at."
      />

      <div className="rounded-xl border border-panel-line bg-bg-elevated p-6">
        <div className="space-y-4">
          {stages.map((s, i) => {
            const isDelivered = i === stages.length - 1;
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
        <p className="mt-5 text-[0.78rem] text-ink-dim">
          &ldquo;Delivered&rdquo; counts completed orders this month, shown to scale separately from the in-flight stages above it.
        </p>
      </div>
    </section>
  );
}
