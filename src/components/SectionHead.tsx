export function SectionHead({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <div className="mb-[52px] max-w-[64ch]">
      <div className="mb-3.5 flex items-center gap-3 font-data text-[0.76rem] uppercase tracking-[0.14em] text-accent-strong before:h-px before:w-[22px] before:bg-accent-soft before:content-['']">
        {eyebrow}
      </div>
      <h2 className="text-[clamp(1.7rem,3.4vw,2.5rem)] font-extrabold">{title}</h2>
      <p className="mt-3.5 max-w-[58ch] text-[1.03rem] leading-relaxed text-ink-dim">
        {lede}
      </p>
    </div>
  );
}
