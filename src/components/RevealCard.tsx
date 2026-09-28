"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export function RevealCard({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-xl border border-panel-line bg-bg-elevated p-[26px] transition-[border-color,box-shadow] duration-300 hover:border-accent hover:shadow-[0_14px_30px_-18px_rgba(15,122,134,0.6)]"
    >
      {children}
    </motion.div>
  );
}
