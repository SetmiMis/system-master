"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function StatCounter({ value, suffix }: { value: string; suffix?: string }) {
  const target = parseInt(value, 10);
  const isNumeric = !Number.isNaN(target);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(isNumeric ? 0 : target);

  useEffect(() => {
    if (!inView || !isNumeric) return;
    const dur = 1100;
    let start: number | null = null;
    let raf = 0;
    function step(ts: number) {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      setDisplay(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, isNumeric, target]);

  return (
    <span ref={ref}>
      {isNumeric ? display : value}
      {suffix && <sup className="top-[-0.9em] text-[1.1rem]">{suffix}</sup>}
    </span>
  );
}
