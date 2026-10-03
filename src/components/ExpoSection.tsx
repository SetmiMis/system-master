import expo from "@/lib/expo.json";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { ExpoGallery } from "./ExpoGallery";

// landscape first, then the two portrait clips (ratios = width / height of each file)
const videos = [
  { file: "video-2.mp4", ratio: 16 / 9 },
  { file: "video-1.mp4", ratio: 9 / 16 },
  { file: "video-3.mp4", ratio: 9 / 16 },
];

export function ExpoSection() {
  return (
    <section id="expo" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="On the show floor"
        title="Meet us at industry expos."
        lede="GX Series connectors and metal push-button switches, up close — with the engineers and the customers who use them."
      />

      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
        {videos.map((v, i) => (
          <Reveal key={v.file} delay={i * 0.06} className={v.ratio > 1 ? "w-full md:w-auto" : "w-full max-w-[320px] md:w-auto"}>
            <video
              controls
              playsInline
              preload="metadata"
              src={`/expo/${v.file}#t=0.1`}
              style={{ aspectRatio: v.ratio }}
              className="w-full rounded-xl border border-panel-line bg-black md:h-[380px] md:w-auto"
            />
          </Reveal>
        ))}
      </div>

      <div className="mt-8">
        <ExpoGallery photos={expo.photos} />
      </div>

      <p className="mt-6 text-[0.9rem] text-ink-dim">
        Want to see the range in person?{" "}
        <a href="#quote" className="font-semibold text-accent hover:underline">Send us an enquiry →</a>
      </p>
    </section>
  );
}
