export function TickerBar({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-b border-panel-line bg-accent-strong py-2 text-white" aria-label="Highlights">
      <div className="marquee flex w-max [animation-duration:30s]">
        {loop.map((t, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="flex-none whitespace-nowrap px-6 text-[0.78rem] font-semibold uppercase tracking-[0.08em] after:ml-12 after:text-accent-soft after:content-['◆']"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
