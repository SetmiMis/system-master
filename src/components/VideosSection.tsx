import { getVideos } from "@/lib/videos";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { VideoCard } from "./VideoCard";

export async function VideosSection() {
  const videos = await getVideos();
  if (!videos.length) return null;

  return (
    <section id="videos" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="Watch"
        title="See our products in action."
        lede="Explainers and walkthroughs from the Setmi India channel."
      />
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v, i) => (
          <Reveal key={v.id} delay={i * 0.05}>
            <VideoCard id={v.id} title={v.title} />
          </Reveal>
        ))}
      </div>
      <a href="https://www.youtube.com/@SetmiIndia" target="_blank" rel="noopener" className="mt-6 inline-block text-[0.9rem] font-semibold text-accent hover:underline">
        More on YouTube →
      </a>
    </section>
  );
}
