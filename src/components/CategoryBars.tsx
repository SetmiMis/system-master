import { getDemand } from "@/lib/data";
import { Panel } from "./Panel";
import { GrowBar } from "./GrowBar";

// Validated categorical palette (dark surface), fixed order — see dataviz skill.
const colors = ["#3987e5", "#d95926", "#199e70", "#c98500", "#d55181", "#9085e9"];

export async function CategoryBars() {
  const items = await getDemand();
  const total = items.reduce((s, c) => s + c.count, 0) || 1;
  const max = Math.max(...items.map((c) => c.count), 1);

  return (
    <Panel title="What customers ask for" sub="Share of enquiries, by product line">
      <div className="space-y-3">
        {items.map((c, i) => (
          <div key={c.name} className="flex items-center gap-3">
            <div className="flex w-[160px] flex-none items-center gap-2 text-[0.8rem] font-semibold">
              <span className="h-2.5 w-2.5 flex-none rounded-full" style={{ background: colors[i % colors.length] }} />
              <span className="truncate">{c.name}</span>
            </div>
            <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--ink)_8%,transparent)]">
              <GrowBar axis="width" size={`${Math.max(3, (c.count / max) * 100)}%`} delay={i * 0.05} className="h-full rounded-full" style={{ background: colors[i % colors.length] }} />
            </div>
            <div className="w-[38px] flex-none text-right font-data text-[0.85rem] font-semibold tabular-nums">{Math.round((c.count / total) * 100)}%</div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
