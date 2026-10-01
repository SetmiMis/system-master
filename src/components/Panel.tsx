import type { ReactNode } from "react";

export function Panel({
  title,
  sub,
  right,
  children,
  className = "",
}: {
  title: string;
  sub?: string;
  right?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`h-full rounded-2xl border border-panel-line bg-bg-elevated p-5 ${className}`}>
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[0.98rem] font-bold">{title}</h3>
          {sub && <p className="mt-0.5 text-[0.78rem] text-ink-dim">{sub}</p>}
        </div>
        {right}
      </div>
      {children}
    </div>
  );
}
