"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const viewport = { once: true, amount: 0.2 };

export const revealTransition = {
  duration: 0.7,
  ease: "easeOut",
} as const;

export const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
} as const;

export const staggerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...revealTransition,
      staggerChildren: 0.1,
    },
  },
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

type RevealItemProps = RevealProps & {
  as?: "div" | "span";
};

export function RevealSection({ children, className, id }: RevealProps) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={staggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.section>
  );
}

export function RevealDiv({ children, className, id }: RevealProps) {
  return (
    <motion.div
      id={id}
      className={className}
      variants={staggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}

export function RevealArticle({ children, className, id }: RevealProps) {
  return (
    <motion.article
      id={id}
      className={className}
      variants={staggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.article>
  );
}

export function RevealFooter({ children, className }: RevealProps) {
  return (
    <motion.footer
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.footer>
  );
}

export function RevealItem({ as = "div", children, className, id }: RevealItemProps) {
  const Component = as === "span" ? motion.span : motion.div;

  return (
    <Component id={id} className={className} variants={revealVariants}>
      {children}
    </Component>
  );
}
