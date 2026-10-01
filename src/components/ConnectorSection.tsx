"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

// three.js + R3F are only downloaded once this section nears the viewport.
const Scene = dynamic(() => import("./ConnectorScene"), { ssr: false });

const points = [
  ["75 Ω coaxial", "Matched impedance for video, CCTV and RF test gear."],
  ["Bayonet lock", "Quarter-turn coupling — fast to fit, hard to shake loose."],
  ["Gold centre pin", "Low contact resistance and corrosion-free signal path."],
];

export function ConnectorSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setNear(true), io.disconnect()), { rootMargin: "300px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="connector" className="relative overflow-hidden bg-[#0b1625] py-16 text-white">
      <div className="hero-glow !bg-[radial-gradient(circle,rgba(47,182,161,0.22),transparent_65%)]" />
      <div className="relative mx-auto grid max-w-[1180px] items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="font-data text-[0.74rem] uppercase tracking-[0.2em] text-[#2fb6a1]">Inside our connectors</div>
          <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.9rem)] font-extrabold leading-tight">Engineered down to the last pin.</h2>
          <p className="mt-4 max-w-[48ch] text-white/70">
            A look at a BNC plug from our range. Drag to turn it around — every part is chosen for a clean signal and a long service life.
          </p>
          <ul className="mt-7 space-y-4">
            {points.map(([t, b]) => (
              <li key={t} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-[#2fb6a1]" />
                <span>
                  <span className="font-semibold">{t}</span>
                  <span className="block text-[0.88rem] text-white/60">{b}</span>
                </span>
              </li>
            ))}
          </ul>
          <a href="#shop" className="mt-8 inline-block rounded-md bg-[#2fb6a1] px-6 py-3 text-[0.92rem] font-bold text-[#06201c] hover:bg-[#3cc8b2]">
            Shop BNC connectors →
          </a>
        </div>

        <div ref={ref} className="relative h-[360px] sm:h-[460px]">
          {near ? (
            <Scene />
          ) : (
            <div className="flex h-full items-center justify-center text-[0.85rem] text-white/40">Loading 3D view…</div>
          )}
          <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.72rem] text-white/60">
            Drag to rotate
          </div>
        </div>
      </div>
    </section>
  );
}
