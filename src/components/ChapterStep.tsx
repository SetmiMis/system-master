"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Chapter } from "@/lib/data";

export function ChapterStep({
  chapter,
  isFirst,
  isLast,
}: {
  chapter: Chapter;
  isFirst: boolean;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`relative ${isFirst ? "pt-0" : "pt-[26px]"} pb-[26px]`}>
      <div
        className={`absolute -left-16 flex h-[46px] w-[46px] items-center justify-center rounded-full border-2 font-data text-[0.85rem] font-semibold transition-all duration-500 ${
          isFirst ? "top-0" : "top-[26px]"
        } ${
          inView
            ? "border-accent text-accent-strong shadow-[0_0_0_5px_rgba(15,122,134,0.14)]"
            : "border-panel-line text-ink-dim"
        }`}
      >
        {chapter.n}
      </div>

      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: inView ? "calc(100% + 26px)" : 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute -left-[41px] top-0 w-0.5 bg-accent"
          style={{ top: isFirst ? 23 : 49 }}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="font-data text-[0.7rem] uppercase tracking-[0.06em] text-accent-strong">
          {chapter.tag}
        </div>
        <h3 className="mt-1 text-[1.2rem] font-bold">{chapter.title}</h3>
        <p className="mt-2 max-w-[60ch] leading-relaxed text-ink-dim">{chapter.body}</p>
      </motion.div>
    </div>
  );
}
