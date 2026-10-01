import { getPipelineStages } from "@/lib/data";
import { Panel } from "./Panel";
import { GrowBar } from "./GrowBar";

const stageColor: Record<string, string> = {
  New: "#86b6ef",
  Quoted: "#5598e7",
  "Follow-up": "#3987e5",
  Won: "#0ca30c",
  Dispatched: "#199e70",
  Closed: "#7d8fa3",
  Lost: "#d03b3b",
};

export async function PipelineBoard() {
  const stages = await getPipelineStages();
  const total = stages.reduce((s, x) => s + x.count, 0);
  const max = Math.max(...stages.map((s) => s.count), 1);

  return (
    <Panel title="Pipeline" sub={`${total.toLocaleString("en-IN")} enquiries by stage`}>
      <div className="space-y-3">
        {stages.map((s, i) => (
          <div key={s.stage} className="flex items-center gap-3">
            <div className="w-[82px] flex-none text-[0.8rem] font-semibold">{s.stage}</div>
            <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--ink)_8%,transparent)]">
              <GrowBar
                axis="width"
                size={`${Math.max(3, (s.count / max) * 100)}%`}
                delay={i * 0.05}
                className="h-full rounded-full"
                style={{ background: stageColor[s.stage] ?? "var(--accent)" }}
              />
            </div>
            <div className="w-[44px] flex-none text-right font-data text-[0.85rem] font-semibold tabular-nums">{s.count.toLocaleString("en-IN")}</div>
            <div className="hidden w-[36px] flex-none text-right font-data text-[0.72rem] tabular-nums text-ink-dim sm:block">
              {Math.round((s.count / total) * 100)}%
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
