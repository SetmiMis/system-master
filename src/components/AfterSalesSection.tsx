import { getAfterSales } from "@/lib/data";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";

export async function AfterSalesSection() {
  const items = await getAfterSales();

  return (
    <section id="after-sales" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="After The Sale"
        title="Support doesn't end at delivery."
        lede="Warranty, replacements, and technical help — the same order record carries all of it forward."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 0.05}
            className="rounded-lg border border-panel-line bg-bg-elevated p-5"
          >
            <h3 className="text-[0.98rem] font-bold">{item.title}</h3>
            <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-dim">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
