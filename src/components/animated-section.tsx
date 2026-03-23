"use client";

import { motion } from "framer-motion";
import { CSSProperties, PropsWithChildren } from "react";

export function AnimatedSection({ 
  children, 
  className = "",
  style,
  noAnimation = false
}: PropsWithChildren<{ className?: string; style?: CSSProperties; noAnimation?: boolean }>) {
  if (noAnimation) {
    return (
      <section className={className} style={style}>
        {children}
      </section>
    );
  }
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  );
}
