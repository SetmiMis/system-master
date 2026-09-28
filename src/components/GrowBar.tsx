"use client";

import { motion } from "motion/react";

export function GrowBar({
  axis,
  size,
  className,
  style,
  delay = 0,
}: {
  axis: "width" | "height";
  size: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ [axis]: 0 }}
      whileInView={{ [axis]: size }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    />
  );
}
