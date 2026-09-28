import { getProductCategories } from "@/lib/data";
import { SectionHead } from "./SectionHead";
import { RevealCard } from "./RevealCard";
import { ZoomableImage } from "./ZoomableImage";

export async function ProductsSection() {
  const categories = await getProductCategories();

  return (
    <section id="products" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="Product Lines"
        title="What we make and move."
        lede="From industrial RF connectors to AV cables and multimedia hardware — organized by where each series actually gets used."
      />

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, i) => (
          <RevealCard key={c.name} delay={i * 0.05}>
            <div className="relative -mx-[26px] -mt-[26px] mb-4 h-[150px] overflow-hidden rounded-t-xl bg-bg">
              <ZoomableImage
                src={c.image}
                alt={c.name}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                style={{ objectPosition: c.imagePosition }}
              />
            </div>
            <h3 className="text-[1.06rem] font-bold">{c.name}</h3>
            <div className="mt-1 text-[0.7rem] uppercase tracking-[0.06em] text-accent-strong">
              Best for
            </div>
            <ul className="mt-2 space-y-1.5">
              {c.bestFor.map((b) => (
                <li key={b} className="flex gap-2 text-[0.88rem] leading-snug text-ink-dim">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent-soft" />
                  {b}
                </li>
              ))}
            </ul>
          </RevealCard>
        ))}
      </div>
    </section>
  );
}
