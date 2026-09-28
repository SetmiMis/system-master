"use client";

import { motion } from "motion/react";

const rows = [
  "Access limited to assigned order staff",
  "Daily backup of order & client records",
  "Custom drawings never shared outside the order team",
  "Full order history retrievable on request",
];

export function ComplianceCard() {
  return (
    <div className="rounded-xl border border-panel-line bg-bg-elevated p-6">
      <h3 className="text-[1rem] font-bold">Data &amp; compliance</h3>
      <p className="mt-1 text-[0.82rem] text-ink-dim">
        Specs and order history, kept under ISO 9001:2015 controls.
      </p>

      <ul className="mt-5 space-y-0">
        {rows.map((row, i) => (
          <motion.li
            key={row}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`flex items-center gap-3 py-3 ${
              i < rows.length - 1 ? "border-b border-panel-line" : ""
            }`}
          >
            <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--ok)_18%,transparent)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ok)" strokeWidth={3} className="h-[11px] w-[11px]">
                <path d="M4 12l5 5L20 6" />
              </svg>
            </span>
            <span className="text-[0.88rem] font-medium">{row}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
