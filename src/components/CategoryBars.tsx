import { getCategoryBreakdown } from "@/lib/data";

const colors = ["var(--cat-1)", "var(--cat-2)", "var(--cat-3)", "var(--cat-4)", "var(--cat-5)", "var(--cat-6)"];

export async function CategoryBars() {
  const cats = await getCategoryBreakdown();
  const total = cats.reduce((s, c) => s + c.value, 0);
  const max = Math.max(...cats.map((c) => c.value));

  return (
    <div className="rounded-xl border border-panel-line bg-bg-elevated p-6">
      <h3 className="text-[1rem] font-bold">Orders by connector category</h3>
      <p className="mt-1 text-[0.82rem] text-ink-dim">Share of this month&apos;s {total} orders, by product line.</p>

      <div className="mt-6 space-y-3.5">
        {cats.map((c, i) => (
          <div key={c.name} className="flex items-center gap-3">
            <div className="flex w-[130px] flex-none items-center gap-2 text-[0.82rem] font-semibold sm:w-[150px]">
              <span
                className="h-2.5 w-2.5 flex-none rounded-full"
                style={{ background: colors[i % colors.length] }}
              />
              {c.name}
            </div>
            <div className="relative h-4 flex-1 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--ink)_6%,transparent)]">
              <div
                className="h-full rounded-full"
                style={{ width: `${Math.max(4, (c.value / max) * 100)}%`, background: colors[i % colors.length] }}
              />
            </div>
            <div className="w-[34px] flex-none text-right font-data text-[0.85rem] font-semibold tabular-nums">
              {c.value}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
