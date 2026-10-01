"use client";

import { useEffect, useState } from "react";

export function DashboardHeader() {
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
    <div className="flex flex-wrap items-end justify-between gap-4 pb-6 pt-9">
      <div>
        <div className="mb-2 flex items-center gap-2 font-data text-[0.72rem] uppercase tracking-[0.14em] text-accent-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-ok shadow-[0_0_0_3px_rgba(4,124,0,0.18)]" />
          All systems operational
        </div>
        <h1 className="text-[clamp(1.6rem,3vw,2.1rem)] font-extrabold">Operations Overview</h1>
        <p className="mt-1 text-[0.95rem] text-ink-dim">
          Setmi India — live view of enquiries and the sales desk.
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
