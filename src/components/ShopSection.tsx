import { getShopSeries } from "@/lib/shop";
import { SectionHead } from "./SectionHead";
import { RevealCard } from "./RevealCard";

export async function ShopSection() {
  const series = await getShopSeries();
  if (!series.length) return null;

  return (
    <section id="shop" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="Popular products"
        title="Ready to order today."
        lede="Live prices from our online store. Click a product to buy it on setmiindia.com, or request a bulk quote below."
      />
      <div className="space-y-10">
        {series.map((s) => (
          <div key={s.name}>
            <div className="mb-4 flex items-baseline justify-between gap-4">
              <h3 className="text-[1.15rem] font-bold">{s.name}</h3>
              <a href={s.url} target="_blank" rel="noopener" className="text-[0.85rem] font-semibold text-accent hover:underline">
                View all →
              </a>
            </div>
            <div className="grid grid-cols-2 gap-[14px] lg:grid-cols-4">
              {s.products.map((p, i) => (
                <RevealCard key={p.url} delay={i * 0.05}>
                  <a href={p.url} target="_blank" rel="noopener" className="block">
                    <div className="-mx-[26px] -mt-[26px] mb-3 aspect-square overflow-hidden rounded-t-xl bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-contain" />
                    </div>
                    <div className="line-clamp-2 min-h-[2.4em] text-[0.88rem] font-semibold leading-snug">{p.title}</div>
                    <div className="mt-2 text-[1.1rem] font-extrabold text-accent-strong">{p.price}</div>
                    {p.moq && <div className="text-[0.72rem] text-ink-dim">Min. order {p.moq} pcs</div>}
                  </a>
                </RevealCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
