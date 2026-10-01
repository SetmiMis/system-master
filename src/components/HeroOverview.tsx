"use client";

import { motion } from "motion/react";
import { MotionLink } from "./MotionLink";

const U = "https://setmiindia.com/wp-content/uploads";
const cards = [
  { label: "RF Connectors", alt: "BNC Socket to 2 Banana Pin", src: `${U}/2026/03/37.png`, href: "https://setmiindia.com/bnc-connectors/", rot: -3, dy: 0 },
  { label: "Circular & GX", alt: "M12 6-Pin Connector Male & Female", src: `${U}/2026/03/11-2.png`, href: "https://setmiindia.com/product-category/circular-connectors/", rot: 2, dy: -16 },
  { label: "Solar", alt: "SB50 Power Connector", src: `${U}/2025/06/7-1.png`, href: "https://setmiindia.com/solar-connectors/", rot: -1.5, dy: 12 },
  { label: "Audio", alt: "Powercon Socket White", src: `${U}/2026/04/19-1.png`, href: "https://setmiindia.com/product-category/other-products/", rot: 3, dy: -4 },
];

export function HeroOverview({ rating }: { rating: string }) {
  return (
    <section id="overview" className="relative overflow-hidden bg-[#0b1625] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          maskImage: "radial-gradient(ellipse 80% 80% at 60% 40%, black 30%, transparent 80%)",
        }}
      />
      <div className="hero-glow !bg-[radial-gradient(circle,rgba(47,182,161,0.28),transparent_65%)]" />

      <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 px-6 py-16 lg:grid-cols-[1fr_1.05fr] lg:py-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-data text-[0.74rem] uppercase tracking-[0.2em] text-[#2fb6a1]"
          >
            Technology for the extraordinary
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 text-[clamp(2.6rem,6vw,4.4rem)] font-extrabold leading-[1.02]"
          >
            Precision Connections.
            <span className="block text-[#2fb6a1]">Reliable Performance.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-[52ch] text-[1.05rem] leading-relaxed text-white/70"
          >
            Setmi India designs, sources, and delivers RF connectors, AV cables, and multimedia
            hardware — backed by the systems that keep every order, every spec, and every client
            record on track.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3.5"
          >
            <MotionLink
              href="#products"
              className="rounded-md bg-[#2fb6a1] px-6 py-3 text-[0.92rem] font-bold text-[#06201c] hover:bg-[#3cc8b2]"
            >
              Explore Products →
            </MotionLink>
            <MotionLink
              href="#quote"
              className="rounded-md border border-white/25 px-6 py-3 text-[0.92rem] font-bold text-white hover:bg-white/10"
            >
              Request a Quote
            </MotionLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-2.5"
          >
            {["ISO 9001:2015 Certified", "Serving since 1983", "Pan-India Dispatch", rating].map((b) => (
              <span
                key={b}
                className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-white/70"
              >
                {b}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {cards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0, y: 30, rotate: c.rot }}
              animate={{ opacity: 1, y: c.dy, rotate: c.rot }}
              whileHover={{ rotate: 0, y: c.dy - 8, scale: 1.04 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="block rounded-xl bg-white p-2.5 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.7)]"
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.src}
                  alt={c.alt}
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="pb-1 pt-2.5 text-center text-[0.78rem] font-semibold text-[#0b2540]">
                {c.label}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
