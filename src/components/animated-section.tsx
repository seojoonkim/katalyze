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
