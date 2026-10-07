export function DashboardHeader({ live, asOf }: { live: boolean; asOf: string | null }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 pb-5 pt-8">
      <div>
        <div className="mb-2 flex items-center gap-2 font-data text-[0.72rem] uppercase tracking-[0.14em] text-accent-strong">
          <span
            className={`h-1.5 w-1.5 rounded-full ${live ? "bg-ok shadow-[0_0_0_3px_rgba(4,124,0,0.2)]" : "bg-warn shadow-[0_0_0_3px_rgba(180,83,9,0.25)]"}`}
          />
          {live ? `Live · updated ${asOf}` : "Sample figures · live feed pending"}
        </div>
        <h1 className="text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold">Setmi India in numbers</h1>
        <p className="mt-1 max-w-[56ch] text-[0.98rem] text-ink-dim">
          Who we serve, what they ask for, and how we deliver — straight from our sales desk.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a href="/#quote" className="btn-primary rounded-lg px-5 py-2.5 text-[0.9rem] font-bold text-white">Get a quote</a>
        <a href="/#shop" className="rounded-lg border border-panel-line px-5 py-2.5 text-[0.9rem] font-bold hover:border-accent hover:text-accent-strong">Browse products</a>
      </div>
    </div>
  );
}
