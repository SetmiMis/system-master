"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import type { MapPoint, StateEnquiries } from "@/lib/data";

export function IndiaMap({ states, points }: { states: StateEnquiries[]; points: MapPoint[] }) {
  const el = useRef<HTMLDivElement>(null);
  const [picked, setPicked] = useState<string | null>(null);
  const total = states.reduce((s, x) => s + x.count, 0);
  const rows = picked ? states.filter((s) => s.state === picked) : states;

  useEffect(() => {
    let map: import("leaflet").Map | undefined;
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !el.current) return;
      map = L.map(el.current, { scrollWheelZoom: false, minZoom: 4, maxBounds: [[2, 60], [40, 104]] }).fitBounds([[7.5, 68.5], [35.5, 97.5]]);
      L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}", {
        attribution: "Tiles &copy; Esri",
        maxZoom: 12,
      }).addTo(map);
      const mappable = states.filter((s) => s.lat != null && s.lng != null);
      const max = Math.max(...mappable.map((s) => s.count), 1);
      // With location dots, states become faint clickable halos; without them, solid bubbles as before.
      const dots = points.length > 0;
      mappable.forEach((s) => {
        L.circleMarker([s.lat!, s.lng!], {
          radius: (dots ? 10 : 4) + Math.sqrt(s.count / max) * (dots ? 22 : 16),
          color: "#013556",
          fillColor: "#0b6fa8",
          fillOpacity: dots ? 0.1 : 0.55,
          weight: dots ? 1 : 1.5,
          dashArray: dots ? "4 4" : undefined,
        })
          .addTo(map!)
          .bindTooltip(`${s.state}: ${s.count} enquiries`)
          .on("click", () => setPicked((p) => (p === s.state ? null : s.state)));
      });
      const pmax = Math.max(...points.map((p) => p.count), 1);
      points.forEach((p) => {
        L.circleMarker([p.lat, p.lng], {
          radius: 3 + Math.sqrt(p.count / pmax) * 8,
          color: "#ffffff",
          fillColor: "#0b6fa8",
          fillOpacity: 0.7,
          weight: 1,
          interactive: false,
        }).addTo(map!);
      });
    })();
    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [states, points]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.5fr_1fr]">
      <div ref={el} className="h-[390px] overflow-hidden rounded-xl border border-panel-line" />
      <div data-lenis-prevent className="max-h-[390px] overflow-auto rounded-xl border border-panel-line p-4">
        <div className="mb-3 flex items-baseline justify-between text-[0.8rem] text-ink-dim">
          <span>{picked ? `Filtered: ${picked}` : "All states"}</span>
          {picked && (
            <button type="button" onClick={() => setPicked(null)} className="font-semibold text-accent hover:underline">
              Clear
            </button>
          )}
        </div>
        <table className="w-full text-[0.88rem]">
          <thead>
            <tr className="text-left text-[0.72rem] uppercase tracking-[0.06em] text-ink-dim">
              <th className="pb-2">State</th>
              <th className="pb-2 text-right">Enquiries</th>
              <th className="pb-2 text-right">Share</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s) => (
              <tr key={s.state} className="border-t border-panel-line">
                <td className="py-1.5 font-semibold">{s.state}</td>
                <td className="py-1.5 text-right font-data tabular-nums">{s.count}</td>
                <td className="py-1.5 text-right font-data tabular-nums text-ink-dim">{Math.round((s.count / total) * 100)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
