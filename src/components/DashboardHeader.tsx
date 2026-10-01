"use client";

import { useEffect, useState } from "react";

export function DashboardHeader({ live, asOf }: { live: boolean; asOf: string | null }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-wrap items-end justify-between gap-4 pb-5 pt-6">
      <div>
        <div className="mb-2 flex items-center gap-2 font-data text-[0.72rem] uppercase tracking-[0.14em] text-accent-soft">
          <span
            className={`h-1.5 w-1.5 rounded-full ${live ? "bg-ok shadow-[0_0_0_3px_rgba(61,220,132,0.25)]" : "bg-warn shadow-[0_0_0_3px_rgba(180,83,9,0.3)]"}`}
          />
          {live ? `Live · updated ${asOf}` : "Demo data · live feed pending"}
        </div>
        <h1 className="text-[clamp(1.4rem,2.6vw,1.8rem)] font-extrabold">Setmi in numbers</h1>
        <p className="mt-1 text-[0.95rem] text-ink-dim">
          Setmi India — live from our sales desk: who we serve and what they ask for.
        </p>
      </div>
      <div className="rounded-lg border border-panel-line bg-bg-elevated px-4 py-2.5 text-right">
        <div className="font-data text-[0.68rem] uppercase tracking-[0.08em] text-ink-dim">
          Local time
        </div>
        <div className="font-data text-[1.05rem] font-semibold tabular-nums">
          {time ?? "--:--:--"}
        </div>
      </div>
    </div>
  );
}
