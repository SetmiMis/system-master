"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MotionLink } from "./MotionLink";

export function HeroOverview() {
  return (
    <section id="overview" className="pb-14 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5 flex flex-wrap gap-2.5"
      >
        {["ISO 9001:2015 Certified", "Serving since 1983", "Pan-India Dispatch"].map((b) => (
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
        className="max-w-[16ch] text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold leading-[1.05]"
      >
        Your trusted electronics partner, engineered for the extraordinary.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.16 }}
        className="mt-5 max-w-[62ch] text-[1.08rem] leading-relaxed text-ink-dim"
      >
        Setmi India designs, sources, and delivers RF connectors, AV cables, and
        multimedia hardware — backed by the systems that keep every order, every
        spec, and every client record on track.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.24 }}
        className="mt-8 flex flex-wrap gap-3.5"
      >
        <MotionLink
          href="#products"
          className="rounded-lg bg-accent px-[22px] py-[13px] text-[0.92rem] font-bold text-white hover:bg-accent-strong"
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

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.32 }}
        className="relative mt-10 h-[220px] overflow-hidden rounded-2xl border border-panel-line sm:h-[320px]"
      >
        <Image
          src="/products/hero.png"
          alt="Setmi India GX Series connectors"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%]"
        />
      </motion.div>
    </section>
  );
}
