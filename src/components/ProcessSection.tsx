import { getProcessSteps } from "@/lib/data";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";

export async function ProcessSection() {
  const steps = await getProcessSteps();

  return (
    <section id="process" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="How It Works"
        title="Seven steps, from enquiry to delivery."
        lede="The same sequence for a single connector or a bulk order — nothing skips a step."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 0.05}
            className="rounded-lg border border-panel-line bg-bg-elevated p-4"
          >
            <div className="font-data text-[1.4rem] font-bold text-accent-soft">{s.n}</div>
            <h3 className="mt-1 text-[0.96rem] font-bold">{s.title}</h3>
            <p className="mt-1.5 text-[0.82rem] leading-relaxed text-ink-dim">{s.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
