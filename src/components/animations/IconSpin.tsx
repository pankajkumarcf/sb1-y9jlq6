import { motion } from 'framer-motion';
import React from 'react';

interface IconSpinProps {
  children: React.ReactNode;
  hover?: boolean;
}

export function IconSpin({ children, hover = true }: IconSpinProps) {
  return (
    <motion.div
      whileHover={hover ? { rotate: 360 } : undefined}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}