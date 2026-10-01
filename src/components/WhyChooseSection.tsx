import { SectionHead } from "./SectionHead";
import { RevealCard } from "./RevealCard";

const reasons = [
  ["ISO 9001:2015 certified", "Every batch is inspected and logged under a certified quality procedure."],
  ["Making connections since 1983", "Four decades of RF connectors, AV cables, and multimedia hardware."],
  ["Pan-India dispatch", "Packed, labelled, and shipped with a tracking reference on every order."],
  ["One record per order", "Quote, PO, inspection, dispatch, and support — all tied to a single order ID."],
  ["7-day replacement", "Wrong or damaged item? Flag it within 7 days for a straight replacement."],
  ["Spec-matched support", "Our team helps with compatibility and installation after the sale."],
];

export function WhyChooseSection() {
  return (
    <section id="why" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="Why Setmi"
        title="Why customers stay with us."
        lede="Not promises — the way every order is actually handled."
      />
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(([t, b], i) => (
          <RevealCard key={t} delay={i * 0.05}>
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
              ✓
            </div>
            <h3 className="text-[1.02rem] font-bold">{t}</h3>
            <p className="mt-1.5 text-[0.88rem] leading-snug text-ink-dim">{b}</p>
          </RevealCard>
        ))}
      </div>
    </section>
  );
}
