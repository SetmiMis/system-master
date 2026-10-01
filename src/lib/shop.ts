export type ShopProduct = { title: string; url: string; image: string; price: string; moq?: string };
export type ShopSeries = { name: string; url: string; products: ShopProduct[] };

const SERIES: [name: string, slug: string][] = [
  ["BNC Series", "bnc-connectors"],
  ["UHF Series", "uhf-connectors"],
  ["SMA Series", "sma-connectors"],
  ["Solar MC4 Series", "solar-connectors"],
];

const decode = (s: string) =>
  s.replace(/&#8377;/g, "₹").replace(/&amp;/g, "&").replace(/&#8211;|&#8212;/g, "–").replace(/&#038;/g, "&").replace(/&#8217;/g, "'").replace(/<[^>]+>/g, "").trim();

// Parses the public WooCommerce listing pages on setmiindia.com; hourly refresh, empty on any failure.
async function loadSeries([name, slug]: (typeof SERIES)[number]): Promise<ShopSeries> {
  const url = `https://setmiindia.com/${slug}/`;
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(String(res.status));
    const html = await res.text();
    const products = html
      .split('<li class="ast-article-single')
      .slice(1)
      .flatMap((li): ShopProduct[] => {
        const link = li.match(/href="(https:\/\/setmiindia\.com\/product\/[^"]+)"/)?.[1];
        const image = li.match(/data-src="([^"]+)"/)?.[1];
        const title = li.match(/loop-product__title">([^<]+)</)?.[1];
        const price = li.match(/Current price is: ([^<]+)\./)?.[1] ?? li.match(/Price-currencySymbol[^>]*>([^<]+)<\/span>([\d,.]+)/)?.slice(1).join("");
        if (!link || !image || !title || !price) return [];
        return [{
          title: decode(title).replace(/\s*Setmi India$/i, ""),
          url: link,
          image,
          price: decode(price).replace(/\.00$/, ""),
          moq: li.match(/Minimum qty is (\d+)/)?.[1],
        }];
      })
      .slice(0, 4);
    return { name, url, products };
  } catch {
    return { name, url, products: [] };
  }
}

export async function getShopSeries(): Promise<ShopSeries[]> {
  return (await Promise.all(SERIES.map(loadSeries))).filter((s) => s.products.length);
}
