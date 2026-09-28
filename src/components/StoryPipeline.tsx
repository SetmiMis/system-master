import { getStoryChapters } from "@/lib/data";
import { SectionHead } from "./SectionHead";
import { ChapterStep } from "./ChapterStep";

export async function StoryPipeline() {
  const chapters = await getStoryChapters();

  return (
    <section id="story" className="border-t border-panel-line py-[88px]">
      <SectionHead
        eyebrow="The Story"
        title="Seven chapters, one order."
        lede="This is the literal path an order takes through Setmi — the same sequence for a repeat buyer reordering BNC connectors or a new client with a custom spec sheet."
      />

      <div className="relative pl-16">
        <div className="absolute bottom-2.5 left-[23px] top-2.5 w-0.5 bg-panel-line" />
        {chapters.map((c, i) => (
          <ChapterStep key={c.n} chapter={c} isFirst={i === 0} isLast={i === chapters.length - 1} />
        ))}
      </div>
    </section>
  );
}
