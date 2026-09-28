"use client";

import { useEffect, useState } from "react";
import type { ActivityEvent } from "@/lib/data";

const pool = [
  "New enquiry logged — GX Series, custom drawing attached",
  "Order #4822 moved to quality check",
  "Stock allocated for order #4820 — UHF Series",
  "Quote sent for enquiry #E-2291",
  "Order #4823 packed and ready for dispatch",
  "Client confirmed PO for order #4817",
];

function timeAgo(mins: number) {
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  return `${Math.floor(mins / 60)}h ago`;
}

export function ActivityFeed({ initial }: { initial: ActivityEvent[] }) {
  const [events, setEvents] = useState(initial);

  useEffect(() => {
    let nextId = Math.max(...initial.map((e) => e.id)) + 1;
    const id = setInterval(() => {
      setEvents((prev) => {
        const aged = prev.map((e) => ({ ...e, minsAgo: e.minsAgo + 1 }));
        const text = pool[Math.floor(Math.random() * pool.length)];
        return [{ id: nextId++, text, minsAgo: 0 }, ...aged].slice(0, 6);
      });
    }, 7000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="rounded-xl border border-panel-line bg-bg-elevated p-6">
      <h3 className="text-[1rem] font-bold">Recent activity</h3>
      <p className="mt-1 text-[0.82rem] text-ink-dim">Live feed from the order desk.</p>

      <ul className="mt-5 space-y-0">
        {events.map((e, i) => (
          <li
            key={e.id}
            className={`flex items-start gap-3 py-3 ${
              i < events.length - 1 ? "border-b border-panel-line" : ""
            }`}
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-soft" />
            <span className="flex-1 text-[0.88rem]">{e.text}</span>
            <span className="flex-none font-data text-[0.72rem] text-ink-dim tabular-nums">
              {timeAgo(e.minsAgo)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
