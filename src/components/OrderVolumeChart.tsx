import { getOrderVolume } from "@/lib/data";

export async function OrderVolumeChart() {
  const weeks = await getOrderVolume();
  const max = Math.max(...weeks.map((w) => w.orders));
  const chartH = 160;

  return (
    <div className="rounded-xl border border-panel-line bg-bg-elevated p-6">
      <h3 className="text-[1rem] font-bold">Order volume, last 8 weeks</h3>
      <p className="mt-1 text-[0.82rem] text-ink-dim">Orders placed per week, across all product lines.</p>

      <div className="mt-6 flex items-end gap-3" style={{ height: chartH }}>
        {weeks.map((w) => {
          const h = Math.max(6, (w.orders / max) * chartH);
          const isLast = w.week === weeks[weeks.length - 1].week;
          return (
            <div key={w.week} className="flex flex-1 flex-col items-center justify-end gap-2">
              <span className="font-data text-[0.7rem] font-semibold tabular-nums text-ink-dim">
                {w.orders}
              </span>
              <div
                className={`w-full rounded-t-[4px] ${isLast ? "bg-accent" : "bg-accent-soft/55"}`}
                style={{ height: h }}
              />
              <span className="font-data text-[0.68rem] text-ink-dim">{w.week}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
