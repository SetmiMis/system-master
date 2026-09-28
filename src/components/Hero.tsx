"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 70, label: "ENQUIRY" },
  { x: 430, label: "QC + STOCK" },
  { x: 620, label: "PACK" },
  { x: 780, label: "DISPATCH" },
  { x: 930, label: "DELIVERED" },
];

export function Hero() {
  return (
    <section className="pb-[60px] pt-[76px]">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 flex flex-wrap gap-2.5"
      >
        {["ISO 9001:2015 Certified", "RF & Electronic Connectors", "Pan-India Dispatch"].map(
          (b, i) => (
            <span
              key={b}
              className="inline-flex items-center gap-1.5 rounded-full border border-panel-line bg-bg-elevated px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-ink-dim"
            >
              {i === 0 && (
                <span className="h-1.5 w-1.5 rounded-full bg-ok shadow-[0_0_0_3px_rgba(28,138,90,0.22)]" />
              )}
              {b}
            </span>
          )
        )}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-[14ch] text-[clamp(2.5rem,6vw,4.6rem)] font-extrabold leading-[1.02]"
      >
        Every order is a story. Here&apos;s <em className="text-accent not-italic">ours</em>.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-[22px] max-w-[56ch] text-[1.13rem] leading-relaxed text-ink-dim"
      >
        A client-facing walkthrough of how Setmi India runs — seven chapters, from the
        moment an enquiry lands to the day an order reaches your dock. Same story for
        a single SMA connector or a container of GX series parts.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-[34px] flex flex-wrap items-center gap-3.5"
      >
        <a
          href="#story"
          className="rounded-lg bg-accent px-[22px] py-[13px] text-[0.92rem] font-bold text-white hover:bg-accent-strong"
        >
          Read the order&apos;s story
        </a>
        <a
          href="#systems"
          className="rounded-lg border border-panel-line px-[22px] py-[13px] text-[0.92rem] font-bold text-ink hover:border-accent hover:text-accent-strong"
        >
          Systems we run on
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-14 overflow-hidden rounded-2xl border border-panel-line bg-bg-elevated"
      >
        <svg viewBox="0 0 1000 220" className="block w-full" preserveAspectRatio="xMidYMid meet">
          <line className="trace" x1="70" y1="110" x2="270" y2="110" />
          <line className="trace" x1="270" y1="110" x2="270" y2="60" />
          <line className="trace" x1="270" y1="60" x2="430" y2="60" />
          <line className="trace" x1="270" y1="110" x2="270" y2="160" />
          <line className="trace" x1="270" y1="160" x2="430" y2="160" />
          <line className="trace" x1="430" y1="60" x2="430" y2="110" />
          <line className="trace" x1="430" y1="160" x2="430" y2="110" />
          <line className="trace" x1="430" y1="110" x2="620" y2="110" />
          <line className="trace" x1="620" y1="110" x2="780" y2="110" />
          <line className="trace" x1="780" y1="110" x2="930" y2="110" />

          {nodes.map((n) => (
            <g key={n.label}>
              <circle
                cx={n.x}
                cy={110}
                r={20}
                fill="var(--bg-elevated)"
                stroke="var(--accent-soft)"
                strokeWidth={1.6}
              />
              <text
                x={n.x}
                y={150}
                textAnchor="middle"
                fontFamily="var(--font-data)"
                fontSize={10}
                fill="var(--ink-dim)"
              >
                {n.label}
              </text>
            </g>
          ))}

          <circle r={4.5} fill="var(--accent)">
            <animateMotion
              dur="4.2s"
              repeatCount="indefinite"
              path="M70,110 L270,110 L270,60 L430,60 L430,110 L620,110 L780,110 L930,110"
            />
          </circle>
        </svg>
      </motion.div>
    </section>
  );
}
