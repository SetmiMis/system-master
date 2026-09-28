"use client";

import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-[88px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="rounded-[18px] border border-panel-line bg-[linear-gradient(135deg,rgba(15,122,134,0.1),var(--bg-elevated))] px-11 py-14 text-center"
      >
        <h2 className="mx-auto max-w-[22ch] text-[clamp(1.6rem,3.6vw,2.3rem)] font-extrabold">
          Want to see this run on your order?
        </h2>
        <p className="mt-3.5 text-ink-dim">
          Bring a spec sheet, a quantity, and a deadline — we&apos;ll walk it through the
          same seven chapters above.
        </p>
        <div className="mt-[30px] flex flex-wrap justify-center gap-6 font-data text-[0.92rem]">
          <span>+91 85868 78111</span>
          <span>setmiindia.com</span>
          <span>Serving since 1983</span>
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 text-center text-[0.82rem] text-ink-dim">
      © Setmi India · ISO 9001:2015 Certified · This page is a client-facing process overview.
    </footer>
  );
}
