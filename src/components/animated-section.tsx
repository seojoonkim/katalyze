"use client";

import { motion } from "framer-motion";
import { CSSProperties, PropsWithChildren } from "react";

export function AnimatedSection({ 
  children, 
  className = "",
  style
}: PropsWithChildren<{ className?: string; style?: CSSProperties }>) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  );
}
