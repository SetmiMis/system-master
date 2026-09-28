import { getFaqs } from "@/lib/data";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";

export async function FaqSection() {
  const faqs = await getFaqs();

  return (
    <section id="faqs" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="Questions"
        title="Frequently asked questions."
        lede="The questions that come up most often in the first enquiry call."
      />

      <Reveal className="divide-y divide-panel-line rounded-xl border border-panel-line bg-bg-elevated">
        {faqs.map((f) => (
          <details key={f.q} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[0.98rem] font-semibold">
              {f.q}
              <span className="flex-none text-accent-soft transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-dim">{f.a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
