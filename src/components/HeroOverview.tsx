"use client";

import { motion } from "motion/react";
import { MotionLink } from "./MotionLink";
import { CircuitBackground } from "./CircuitBackground";
import { ZoomableImage } from "./ZoomableImage";

export function HeroOverview({ rating }: { rating: string }) {
  return (
    <section id="overview" className="pb-14 pt-12">
      <div className="relative -mx-6 px-6 pb-2 pt-2 sm:-mx-10 sm:px-10">
        <div className="hero-glow" />
        <CircuitBackground />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-5 flex flex-wrap gap-2.5"
        >
          {["ISO 9001:2015 Certified", "Serving since 1983", "Pan-India Dispatch", rating].map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1.5 rounded-full border border-panel-line bg-bg-elevated px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-ink-dim"
            >
              {b}
            </span>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="relative max-w-[20ch] text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold leading-[1.05]"
        >
          Your trusted electronics partner, engineered for the <span className="text-gradient">extraordinary.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="relative mt-5 max-w-[62ch] text-[1.08rem] leading-relaxed text-ink-dim"
        >
          Setmi India designs, sources, and delivers RF connectors, AV cables, and
          multimedia hardware — backed by the systems that keep every order, every
          spec, and every client record on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="relative mt-8 flex flex-wrap gap-3.5"
        >
          <MotionLink
            href="#products"
            className="btn-primary rounded-lg px-[22px] py-[13px] text-[0.92rem] font-bold text-white"
          >
            Explore product lines
          </MotionLink>
          <MotionLink
            href="/dashboard"
            className="rounded-lg border border-panel-line px-[22px] py-[13px] text-[0.92rem] font-bold text-ink hover:border-accent hover:text-accent-strong"
          >
            See the live dashboard
          </MotionLink>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.32 }}
        className="relative mt-10 h-[220px] overflow-hidden rounded-2xl border border-panel-line shadow-[0_30px_60px_-30px_rgba(1,53,86,0.5)] sm:h-[320px]"
      >
        <ZoomableImage
          src="/products/hero.png"
          alt="Setmi India GX Series connectors"
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 28%" }}
          priority
        />
      </motion.div>
    </section>
  );
}
