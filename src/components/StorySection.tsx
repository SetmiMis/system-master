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
    </section>
  );
}
