"use client";

import { SectionHead } from "./SectionHead";

const WA = "918586878111";
const series = ["GX Series", "UHF Series", "SMA Series", "BNC Series", "Circular & Waterproof", "Cables, Splitters & Plugs", "Custom / not sure"];
const field =
  "w-full rounded-lg border border-panel-line bg-bg px-3.5 py-2.5 text-[0.92rem] outline-none focus:border-accent focus:ring-2 focus:ring-accent-soft/30";

export function QuoteSection() {
  function send(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = `Hi Setmi India, I'd like a quote.\nName: ${f.get("name")}\nCompany: ${f.get("company")}\nProduct: ${f.get("series")}\nQuantity: ${f.get("qty")}\nDetails: ${f.get("notes")}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <section id="quote" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="Get a quote"
        title="Tell us what you need."
        lede="Share the connector type and quantity — our team replies with pricing and lead time."
      />
      <form
        onSubmit={send}
        className="grid max-w-[720px] gap-4 rounded-2xl border border-panel-line bg-bg-elevated p-6 sm:grid-cols-2 sm:p-8"
      >
        <input name="name" required placeholder="Your name" className={field} />
        <input name="company" placeholder="Company" className={field} />
        <select name="series" required defaultValue="" className={field}>
          <option value="" disabled>Product series</option>
          {series.map((s) => <option key={s}>{s}</option>)}
        </select>
        <input name="qty" required placeholder="Quantity (e.g. 500 pcs)" className={field} />
        <textarea name="notes" rows={3} placeholder="Specs, size, application…" className={`${field} sm:col-span-2`} />
        <button type="submit" className="btn-primary rounded-lg px-6 py-3 text-[0.92rem] font-bold text-white sm:col-span-2">
          Send enquiry on WhatsApp
        </button>
        <p className="text-[0.78rem] text-ink-dim sm:col-span-2">
          Opens WhatsApp with your details filled in. Prefer a call? +91 85868 78111
        </p>
      </form>
    </section>
  );
}
