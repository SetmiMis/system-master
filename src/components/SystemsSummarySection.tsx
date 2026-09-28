import { getSystems } from "@/lib/data";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { MotionLink } from "./MotionLink";

export async function SystemsSummarySection() {
  const systems = await getSystems();

  return (
    <section id="systems" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="Behind The Scenes"
        title="Every order runs on a system, not a spreadsheet."
        lede="Six systems keep the desk honest, from the first enquiry to the last delivery confirmation."
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {systems.map((s, i) => (
          <Reveal
            key={s.title}
            delay={i * 0.05}
            className="rounded-lg border border-panel-line bg-bg-elevated p-4"
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ok" />
              <h3 className="text-[0.92rem] font-bold">{s.title}</h3>
            </div>
            <p className="mt-1.5 text-[0.82rem] leading-relaxed text-ink-dim">{s.body}</p>
          </Reveal>
        ))}
      </div>

      <MotionLink
        href="/dashboard"
        className="mt-6 inline-flex items-center gap-2 text-[0.92rem] font-semibold text-accent hover:text-accent-strong"
      >
        View live system status on the dashboard →
      </MotionLink>
    </section>
  );
}
