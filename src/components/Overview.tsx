import { getOverviewStats } from "@/lib/data";
import { SectionHead } from "./SectionHead";
import { StatCounter } from "./StatCounter";

export async function Overview() {
  const stats = await getOverviewStats();

  return (
    <section id="overview" className="border-t border-panel-line py-[88px]">
      <SectionHead
        eyebrow="Chapter Zero"
        title="Before the story: forty-three years of connectors, cables, and discipline."
        lede="Setmi India manufactures and distributes RF connectors and electronic hardware — from GX and UHF to SMA, BNC, circular and waterproof series — alongside cable assemblies, splitters, and couplers."
      />

      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-panel-line bg-panel-line sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-bg-elevated px-[22px] py-[30px]">
            <div className="font-data text-[2.5rem] font-extrabold text-accent-strong">
              <StatCounter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-1.5 text-[0.85rem] text-ink-dim">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-[52px] grid grid-cols-1 items-start gap-14 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 leading-[1.75] text-[1.02rem] text-ink-dim">
          <p>
            Every product line — connectors, splitters, cable assemblies — moves through
            the same order desk, the same inventory ledger, and the same inspection
            bench. That consistency is what a client actually buys: not just a part,
            but a repeatable way of getting it.
          </p>
          <p>
            What follows is the story we tell visiting clients: seven chapters between
            your enquiry and your delivery, the systems that hold your data, and how we
            keep specs and records intact along the way.
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-1">
          {[
            ["Headquartered", "India"],
            ["Core lines", "GX · UHF · SMA · BNC"],
            ["Certification", "ISO 9001:2015"],
            ["Serving since", "1983"],
          ].map(([dt, dd]) => (
            <div key={dt} className="col-span-2 sm:col-span-1">
              <dt className="font-data text-[0.72rem] uppercase tracking-[0.08em] text-accent-strong">
                {dt}
              </dt>
              <dd className="mb-4 mt-0.5 font-semibold">{dd}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
