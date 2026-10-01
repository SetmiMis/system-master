import { Panel } from "./Panel";

const rows = [
  ["ISO 9001:2015 certified", "Audited by ICV Assessments"],
  ["Registered seller on GeM", "Government e-Marketplace"],
  ["Also on Amazon & IndustryBuying", "Order where you prefer"],
  ["Serving since 1983", "Four decades of connectors & cables"],
  ["Pan-India dispatch", "Packed, labelled and tracked"],
];

export function TrustPanel() {
  return (
    <Panel title="Why customers trust us" sub="Verified, not promised">
      <ul>
        {rows.map(([t, b], i) => (
          <li key={t} className={`flex items-start gap-3 py-2.5 ${i < rows.length - 1 ? "border-b border-panel-line" : ""}`}>
            <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--ok)_18%,transparent)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ok)" strokeWidth={3} className="h-[11px] w-[11px]"><path d="M4 12l5 5L20 6" /></svg>
            </span>
            <span>
              <span className="block text-[0.88rem] font-semibold">{t}</span>
              <span className="block text-[0.76rem] text-ink-dim">{b}</span>
            </span>
          </li>
        ))}
      </ul>
      <a href="/#certifications" className="mt-3 inline-block text-[0.82rem] font-semibold text-accent-soft hover:underline">View certificates →</a>
    </Panel>
  );
}
