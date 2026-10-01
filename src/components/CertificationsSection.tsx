import { SectionHead } from "./SectionHead";
import { RevealCard } from "./RevealCard";

const marketplaces = [
  {
    name: "Government e-Marketplace (GeM)",
    logo: "/gem-logo.png",
    href: "https://gem.gov.in",
    note: "Registered seller — government departments and PSUs can buy directly.",
    cta: "Find us on GeM →",
  },
  {
    name: "Amazon.in",
    logo: "/logos/amazon.svg",
    href: "https://www.amazon.in/stores/SetmiIndia/page/0A46CD60-B6C5-4476-BD1D-01F0AC3DE15B",
    note: "Connectors, cables and audio hardware, delivered by Amazon.",
    cta: "Visit our store →",
  },
  {
    name: "IndustryBuying",
    logo: "/logos/industrybuying.webp",
    href: "https://www.industrybuying.com/brands/setmi-india-26440/it-security-3369/networking-connecters-14410",
    note: "Industrial buyers can order our range with business invoicing.",
    cta: "Visit our store →",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="Certified & trusted"
        title="Verified quality. Buy where you prefer."
        lede="Independently audited, and available on India's Government e-Marketplace and leading online stores."
      />

      <RevealCard>
        <div className="grid items-center gap-6 md:grid-cols-[200px_1fr]">
          <a
            href="/iso-9001-certificate.pdf"
            target="_blank"
            rel="noopener"
            aria-label="Open ISO 9001:2015 certificate (PDF)"
            className="mx-auto block w-[200px] overflow-hidden rounded-lg border border-panel-line bg-white shadow-[0_14px_30px_-18px_rgba(1,53,86,0.5)] transition-transform hover:-translate-y-1"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/iso-9001-certificate.jpg" alt="ISO 9001:2015 certificate — Setmi India" loading="lazy" className="w-full" />
          </a>
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.06em] text-accent-strong">ISO 9001:2015 · Quality Management</div>
            <h3 className="mt-1 text-[1.2rem] font-bold">Audited by ICV Assessments</h3>
            <p className="mt-2 max-w-[62ch] text-[0.9rem] leading-snug text-ink-dim">
              Scope: importers and trading of premium AV cables, connectors, audio-video converters &amp; switchers,
              metal push switches, multimedia tweeters and PA horn speakers.
            </p>
            <dl className="mt-4 flex flex-wrap gap-x-10 gap-y-2 text-[0.84rem]">
              <div>
                <dt className="text-ink-dim">Certificate no.</dt>
                <dd className="font-data font-semibold">IN/66820947/4632</dd>
              </div>
              <div>
                <dt className="text-ink-dim">Issued</dt>
                <dd className="font-semibold">15 Oct 2025</dd>
              </div>
            </dl>
            <a
              href="/iso-9001-certificate.pdf"
              target="_blank"
              rel="noopener"
              className="btn-primary mt-5 inline-block rounded-lg px-5 py-2.5 text-[0.85rem] font-bold text-white"
            >
              View certificate (PDF)
            </a>
          </div>
        </div>
      </RevealCard>

      <div className="mt-[18px] grid grid-cols-1 gap-[18px] md:grid-cols-3">
        {marketplaces.map((m, i) => (
          <RevealCard key={m.name} delay={i * 0.05}>
            <a href={m.href} target="_blank" rel="noopener" className="group flex h-full flex-col">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.logo} alt={m.name} loading="lazy" className="h-14 w-full rounded-lg bg-white object-contain p-1" />
              <p className="mt-4 flex-1 text-[0.86rem] leading-snug text-ink-dim">{m.note}</p>
              <span className="mt-3 text-[0.84rem] font-semibold text-accent group-hover:underline">{m.cta}</span>
            </a>
          </RevealCard>
        ))}
      </div>
    </section>
  );
}
