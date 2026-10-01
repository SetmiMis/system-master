"use client";

import { useRef, useState } from "react";

type Pt = { label: string; value: number };

const W = 640, H = 230, L = 40, R = 16, T = 16, B = 28;
const SERIES = "#3987e5"; // validated categorical slot 1 (dark)

export function VolumeChart({ data }: { data: Pt[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const box = useRef<HTMLDivElement>(null);
  const max = Math.max(...data.map((d) => d.value), 1);
  const top = Math.ceil(max / 100) * 100 || max;
  const x = (i: number) => L + (data.length === 1 ? (W - L - R) / 2 : (i * (W - L - R)) / (data.length - 1));
  const y = (v: number) => T + (1 - v / top) * (H - T - B);
  const line = data.map((d, i) => `${i ? "L" : "M"}${x(i)},${y(d.value)}`).join(" ");
  const area = `${line} L${x(data.length - 1)},${H - B} L${x(0)},${H - B} Z`;
  const grid = [0, 0.5, 1].map((f) => ({ v: Math.round(top * f), y: y(top * f) }));

  function move(e: React.MouseEvent<SVGSVGElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * W;
    let best = 0;
    data.forEach((_, i) => Math.abs(x(i) - px) < Math.abs(x(best) - px) && (best = i));
    setHover(best);
  }

  const h = hover === null ? null : data[hover];
  const last = data[data.length - 1];

  return (
    <div ref={box} className="relative">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        role="img"
        aria-label={`Enquiries per period, latest ${last.value}`}
        onMouseMove={move}
        onMouseLeave={() => setHover(null)}
      >
        <defs>
          <linearGradient id="vol-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={SERIES} stopOpacity="0.32" />
            <stop offset="100%" stopColor={SERIES} stopOpacity="0" />
          </linearGradient>
        </defs>
        {grid.map((g) => (
          <g key={g.v}>
            <line x1={L} x2={W - R} y1={g.y} y2={g.y} stroke="currentColor" strokeOpacity="0.1" />
            <text x={L - 8} y={g.y + 4} textAnchor="end" className="fill-ink-dim font-data" fontSize="10">{g.v}</text>
          </g>
        ))}
        <path d={area} fill="url(#vol-fill)" />
        <path d={line} fill="none" stroke={SERIES} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" pathLength={1} className="draw-line" />
        {data.map((d, i) => (
          <text key={d.label} x={x(i)} y={H - 8} textAnchor="middle" className="fill-ink-dim font-data" fontSize="10">
            {d.label.replace(/ 20\d\d$/, "")}
          </text>
        ))}
        {hover === null && (
          <g>
            <circle cx={x(data.length - 1)} cy={y(last.value)} r="4.5" fill={SERIES} stroke="var(--bg-elevated)" strokeWidth="2" />
            <text x={x(data.length - 1)} y={y(last.value) - 10} textAnchor="end" className="fill-ink font-data" fontSize="11" fontWeight="700">{last.value}</text>
          </g>
        )}
        {h && hover !== null && (
          <g>
            <line x1={x(hover)} x2={x(hover)} y1={T} y2={H - B} stroke="currentColor" strokeOpacity="0.3" strokeDasharray="3 3" />
            <circle cx={x(hover)} cy={y(h.value)} r="5" fill={SERIES} stroke="var(--bg-elevated)" strokeWidth="2" />
          </g>
        )}
      </svg>
      {h && hover !== null && (
        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-full rounded-lg border border-panel-line bg-[#0b1625] px-3 py-2 text-[0.78rem] shadow-xl"
          style={{ left: `${(x(hover) / W) * 100}%`, top: `${(y(h.value) / H) * 100 - 3}%` }}
        >
          <div className="text-ink-dim">{h.label}</div>
          <div className="font-data text-[0.95rem] font-bold tabular-nums">{h.value} enquiries</div>
        </div>
      )}
      <details className="mt-1 text-[0.75rem] text-ink-dim">
        <summary className="cursor-pointer hover:text-ink">View as table</summary>
        <table className="mt-2 w-full">
          <tbody>
            {data.map((d) => (
              <tr key={d.label} className="border-t border-panel-line">
                <td className="py-1">{d.label}</td>
                <td className="py-1 text-right font-data tabular-nums">{d.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </div>
  );
}
