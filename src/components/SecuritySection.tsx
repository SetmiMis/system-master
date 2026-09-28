"use client";

import { motion } from "framer-motion";
import { SectionHead } from "./SectionHead";

const vaultRows = [
  "Access limited to assigned order staff",
  "Daily backup of order & client records",
  "Custom drawings never shared outside the order team",
  "Full order history retrievable on request",
];

const list = [
  {
    h: "Role-based access",
    p: "Warehouse staff see stock and dispatch; sales sees quotes and history. Nobody sees more of a client file than their job needs.",
  },
  {
    h: "Backed-up, not brittle",
    p: "Order and inventory data is backed up daily, so a single machine failure never means a lost order history.",
  },
  {
    h: "Confidential by default",
    p: "Custom specs and drawings are treated as client-confidential and stay inside the order record, not forwarded loosely over chat or email.",
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="border-t border-panel-line py-[88px]">
      <SectionHead
        eyebrow="The Epilogue"
        title="Your specs and order history, kept intact."
        lede="A connector spec or a custom drawing is business information. We treat it that way — the story doesn't end when the record closes."
      />

      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-panel-line bg-bg-elevated p-[34px]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(15,122,134,0.14),transparent_60%)]" />
          {vaultRows.map((row, i) => (
            <div
              key={row}
              className={`flex items-center gap-3.5 py-3.5 ${
                i < vaultRows.length - 1 ? "border-b border-dashed border-panel-line" : ""
              }`}
            >
              <div className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-ok/18">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--ok)" strokeWidth={3} className="h-[11px] w-[11px]">
                  <path d="M4 12l5 5L20 6" />
                </svg>
              </div>
              <span className="text-[0.94rem] font-semibold">{row}</span>
            </div>
          ))}
        </motion.div>

        <ul className="space-y-[22px]">
          {list.map((item, i) => (
            <motion.li
              key={item.h}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-3.5"
            >
              <span className="flex-none font-data font-semibold text-accent-strong">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="text-[1.02rem] font-bold">{item.h}</h4>
                <p className="mt-1 text-[0.92rem] leading-relaxed text-ink-dim">{item.p}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
