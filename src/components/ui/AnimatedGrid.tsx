import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface AnimatedGridProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function AnimatedGrid({ children, className = '', staggerDelay = 0.2 }: AnimatedGridProps) {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
