import Image from "next/image";
import { getCompanyStory, getCompanyStats } from "@/lib/data";
import { SectionHead } from "./SectionHead";
import { StatCounter } from "./StatCounter";
import { Reveal } from "./Reveal";

export async function StorySection() {
  const story = await getCompanyStory();
  const stats = await getCompanyStats();

  return (
    <section id="story" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="Our Story"
        title={story.heading}
        lede={story.body}
      />

      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-panel-line bg-panel-line sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="bg-bg-elevated px-[22px] py-[30px]">
            <div className="font-data text-[2.2rem] font-extrabold text-accent-strong">
              <StatCounter value={String(s.value)} suffix={s.suffix} />
            </div>
            <div className="mt-1.5 text-[0.85rem] text-ink-dim">{s.label}</div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-6 grid grid-cols-1 gap-3 sm:h-[420px] sm:grid-cols-2">
        <div className="relative h-[240px] overflow-hidden rounded-xl border border-panel-line sm:h-full">
          <Image
            src="/team/team-1.jpg"
            alt="Setmi India team at an industry exhibition"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 sm:h-full sm:grid-cols-1 sm:grid-rows-2">
          <div className="relative h-[160px] overflow-hidden rounded-xl border border-panel-line sm:h-full">
            <Image
              src="/team/team-2.png"
              alt="Setmi India team signing a business agreement with a customer"
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover object-top"
            />
          </div>
          <div className="relative h-[160px] overflow-hidden rounded-xl border border-panel-line sm:h-full">
            <Image
              src="/team/team-3.png"
              alt="Setmi India team discussing an order with a customer"
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
