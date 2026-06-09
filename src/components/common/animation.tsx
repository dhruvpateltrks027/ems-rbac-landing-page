"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeUp({
  children,
  delay = 0,
  className,
}: AnimatedProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className,
}: AnimatedProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  delay = 0,
  className,
}: AnimatedProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function HoverCard({
  children,
  className,
}: AnimatedProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}