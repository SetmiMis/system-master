import { SectionHead } from "./SectionHead";
import { RevealCard } from "./RevealCard";

export function CertificationsSection() {
  return (
    <section id="certifications" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="Certified & trusted"
        title="Verified quality. Government-approved marketplace."
        lede="Independently audited, and a registered seller on India's Government e-Marketplace."
      />
      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
        <RevealCard>
          <div className="text-[0.7rem] uppercase tracking-[0.06em] text-accent-strong">ISO 9001:2015 · Quality Management</div>
          <h3 className="mt-1 text-[1.15rem] font-bold">Audited by ICV Assessments</h3>
          <p className="mt-2 text-[0.88rem] leading-snug text-ink-dim">
            Scope: importers and trading of premium AV cables, connectors, audio-video converters &amp; switchers,
            metal push switches, multimedia tweeters and PA horn speakers.
          </p>
          <dl className="mt-4 grid grid-cols-2 gap-y-2 text-[0.82rem]">
            <dt className="text-ink-dim">Certificate no.</dt>
            <dd className="font-data font-semibold">IN/66820947/4632</dd>
            <dt className="text-ink-dim">Issued</dt>
            <dd className="font-semibold">15 Oct 2025</dd>
            <dt className="text-ink-dim">Valid until</dt>
            <dd className="font-semibold">14 Oct 2028</dd>
          </dl>
          <a href="/iso-9001-certificate.pdf" target="_blank" rel="noopener" className="mt-4 block overflow-hidden rounded-lg border border-panel-line bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/iso-9001-certificate.jpg" alt="ISO 9001:2015 certificate — Setmi India" loading="lazy" className="max-h-[420px] w-full object-contain" />
          </a>
          <a
            href="/iso-9001-certificate.pdf"
            target="_blank"
            rel="noopener"
            className="btn-primary mt-5 inline-block rounded-lg px-5 py-2.5 text-[0.85rem] font-bold text-white"
          >
            View certificate (PDF)
          </a>
        </RevealCard>

        <RevealCard delay={0.05}>
          <div className="text-[0.7rem] uppercase tracking-[0.06em] text-accent-strong">Government e-Marketplace</div>
          <h3 className="mt-1 text-[1.15rem] font-bold">Registered seller on GeM</h3>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/gem-logo.png" alt="Government e-Marketplace (GeM)" loading="lazy" className="mt-3 h-[150px] w-full rounded-lg bg-white object-contain" />
          <p className="mt-3 text-[0.88rem] leading-snug text-ink-dim">
            Government departments and PSUs can buy Setmi India products directly through GeM — efficient, transparent, inclusive.
          </p>
        </RevealCard>
      </div>
    </section>
  );
}
