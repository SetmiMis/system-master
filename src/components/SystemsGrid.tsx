import { getSystems } from "@/lib/data";
import { SectionHead } from "./SectionHead";
import { RevealCard } from "./RevealCard";

const icons = [
  <path key="1" d="M3 4h18v16H3zM3 9h18M8 4v5" />,
  <path key="2" d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8" />,
  <path key="3" d="M9 12l2 2 4-4M12 21a9 9 0 100-18 9 9 0 000 18z" />,
  <path key="4" d="M4 3h16v18H4zM8 8h8M8 12h8M8 16h5" />,
  <path key="5" d="M3 12h4l3 8 4-16 3 8h4" />,
  <path key="6" d="M4 4h16v12H7l-3 3z" />,
];

export async function SystemsGrid() {
  const systems = await getSystems();

  return (
    <section id="systems" className="border-t border-panel-line py-[88px]">
      <SectionHead
        eyebrow="Behind The Story"
        title="What's actually running behind the counter."
        lede="No chapter above relies on memory or a loose spreadsheet. Each one is backed by a system built to keep that stage honest."
      />

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {systems.map((s, i) => (
          <RevealCard key={s.title} delay={i * 0.05}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent)"
              strokeWidth={1.6}
              className="mb-4 h-[38px] w-[38px]"
            >
              {icons[i]}
            </svg>
            <h3 className="text-[1.06rem] font-bold">{s.title}</h3>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-dim">{s.body}</p>
            <div className="mt-3.5 font-data text-[0.7rem] tracking-[0.05em] text-accent-strong">
              {s.spec}
            </div>
          </RevealCard>
        ))}
      </div>
    </section>
  );
}
