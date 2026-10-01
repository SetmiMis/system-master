import type { ReviewData } from "@/lib/reviews";
import { SectionHead } from "./SectionHead";

const Stars = ({ n }: { n: number }) => (
  <div className="text-[#f5b301]" aria-label={`${n} out of 5 stars`}>{"★".repeat(n)}</div>
);

export function ReviewsSection({ data }: { data: ReviewData }) {
  // repeat so the marquee loops seamlessly even with few reviews
  const base = data.reviews.length < 4 ? [...data.reviews, ...data.reviews] : data.reviews;
  const loop = [...base, ...base];

  return (
    <section id="reviews" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="Reviews"
        title="What our customers say."
        lede={`Rated ${data.rating} on Google by ${data.count} customers.`}
      />
      <div className="-mx-6 overflow-hidden px-6 [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
        <div className="marquee flex w-max gap-[18px]">
          {loop.map((r, i) => (
            <figure
              key={i}
              aria-hidden={i >= base.length}
              className="w-[300px] flex-none rounded-xl border border-panel-line bg-bg-elevated p-5"
            >
              <Stars n={r.rating} />
              <blockquote className="mt-2 line-clamp-5 text-[0.9rem] leading-relaxed text-ink-dim">“{r.text}”</blockquote>
              <figcaption className="mt-3 text-[0.78rem] font-semibold text-ink">{r.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <a
        href="https://www.google.com/maps?cid=9005407250904435735"
        target="_blank"
        rel="noopener"
        className="mt-6 inline-block text-[0.9rem] font-semibold text-accent hover:underline"
      >
        Read all {data.count} reviews on Google →
      </a>
    </section>
  );
}
