import { getKpis } from "@/lib/data";
import { StatCounter } from "./StatCounter";
import { Sparkline } from "./Sparkline";
import { Reveal } from "./Reveal";

export async function KpiRow() {
  const kpis = await getKpis();

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {kpis.map((k, i) => {
        const up = (k.deltaPct ?? 0) >= 0;
        return (
          <Reveal
            key={k.label}
            delay={i * 0.06}
            className="rounded-2xl border border-panel-line bg-bg-elevated p-5 shadow-[inset_0_2px_0_0_rgba(76,195,217,0.4)]"
          >
            <div className="text-[0.82rem] text-ink-dim">{k.label}</div>
            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="font-data text-[1.9rem] font-bold tabular-nums">
                <StatCounter value={String(k.value)} suffix={k.suffix} />
              </span>
              {k.deltaPct !== undefined && (
                <span
                  className={`font-data text-[0.78rem] font-semibold ${
                    up ? "text-ok" : "text-accent"
                  }`}
                >
                  {up ? "▲" : "▼"} {Math.abs(k.deltaPct)}%
                </span>
              )}
            </div>
            {k.spark && (
              <div className="mt-3">
                <Sparkline values={k.spark} color="var(--accent-soft)" />
              </div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
