"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// dotLottie player + its WASM are self-hosted and only fetched once an icon scrolls into view.
const Player = dynamic(
  async () => {
    const m = await import("@lottiefiles/dotlottie-react");
    m.setWasmUrl("/lottie/dotlottie-player.wasm");
    return m.DotLottieReact;
  },
  { ssr: false },
);

export function LottieIcon({
  name,
  loop = true,
  className = "h-12 w-12",
  label,
}: {
  name: string;
  loop?: boolean;
  className?: string;
  label?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [seen, setSeen] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setSeen(true), io.disconnect()), { rootMargin: "100px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={`inline-block ${className}`} role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      {seen && <Player src={`/lottie/${name}.lottie`} loop={loop} autoplay={!still} />}
    </span>
  );
}
