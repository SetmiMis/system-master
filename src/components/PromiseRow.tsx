const items = [
  ["Since 1983", "Four decades making connections"],
  ["7-day replacement", "Wrong or damaged? Flag it, we replace it"],
  ["Pan-India dispatch", "Packed, labelled and tracked"],
  ["One record per order", "Quote to delivery, on a single order ID"],
];

export function PromiseRow() {
  return (
    <ul className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {items.map(([t, b]) => (
        <li key={t} className="rounded-2xl border border-panel-line bg-bg-elevated p-4">
          <div className="text-[0.95rem] font-bold text-accent-strong">{t}</div>
          <div className="mt-1 text-[0.8rem] leading-snug text-ink-dim">{b}</div>
        </li>
      ))}
    </ul>
  );
}
