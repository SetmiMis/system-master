import { getFocus } from "@/lib/data";
import { GrowBar } from "./GrowBar";

const tiers = [
  ["Hot", "var(--critical)", "hot"],
  ["Warm", "var(--cat-4)", "warm"],
  ["Cold", "var(--accent-soft)", "cold"],
] as const;

export async function FocusPanel() {
  const f = await getFocus();
  const total = f.hot + f.warm + f.cold || 1;

  return (
    <div className="rounded-xl border border-panel-line bg-bg-elevated p-6">
      <h3 className="text-[1rem] font-bold">Today&apos;s focus</h3>
      <p className="mt-1 text-[0.82rem] text-ink-dim">Open enquiries by priority, and follow-ups that need a call.</p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-panel-line p-4">
          <div className="text-[0.74rem] uppercase tracking-[0.06em] text-ink-dim">Overdue</div>
          <div className="mt-1 font-data text-[1.8rem] font-bold tabular-nums text-critical">{f.overdue}</div>
        </div>
        <div className="rounded-lg border border-panel-line p-4">
          <div className="text-[0.74rem] uppercase tracking-[0.06em] text-ink-dim">Due today</div>
          <div className="mt-1 font-data text-[1.8rem] font-bold tabular-nums text-accent-soft">{f.dueToday}</div>
        </div>
      </div>

      <div className="mt-5 space-y-3.5">
        {tiers.map(([label, color, key], i) => (
          <div key={key} className="flex items-center gap-3">
            <div className="w-[52px] flex-none text-[0.82rem] font-semibold">{label}</div>
            <div className="relative h-3.5 flex-1 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--ink)_8%,transparent)]">
              <GrowBar axis="width" size={`${Math.max(4, (f[key] / total) * 100)}%`} delay={i * 0.06} className="h-full rounded-full" style={{ background: color }} />
            </div>
            <div className="w-[34px] flex-none text-right font-data text-[0.85rem] font-semibold tabular-nums">{f[key]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
