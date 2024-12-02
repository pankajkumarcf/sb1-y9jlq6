import { motion } from 'framer-motion';
import React from 'react';

interface TextGradientProps {
  children: React.ReactNode;
  delay?: number;
}

export function TextGradient({ children, delay = 0 }: TextGradientProps) {
  return (
    <motion.span
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={{
        duration: 5,
        ease: 'linear',
        repeat: Infinity,
        delay
      }}
      className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-[length:200%_auto] text-transparent bg-clip-text"
    >
      {children}
    </motion.span>
  );
}