"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export function AnimatedSection({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
