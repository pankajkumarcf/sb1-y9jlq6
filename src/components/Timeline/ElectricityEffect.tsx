import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, Network } from 'lucide-react';

const particleCount = 20;

export function ElectricityEffect() {
  return (
    <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1">
      {/* Main line */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-purple-600 via-pink-500 to-purple-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 blur-md bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Floating particles */}
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 -translate-x-1/2 w-2 h-2"
          initial={{ y: "100%", opacity: 0, scale: 0 }}
          animate={{
            y: ["100%", "0%"],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * (2 / particleCount),
            ease: "linear",
          }}
        >
          <div className="w-2 h-2 rounded-full bg-purple-400" />
        </motion.div>
      ))}

      {/* Lightning bolts */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 -translate-x-1/2"
          initial={{ y: "0%", opacity: 0, scale: 0 }}
          animate={{
            y: ["0%", "100%"],
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
          }}
        >
          <Zap className="w-6 h-6 text-purple-400" />
        </motion.div>
      ))}

      {/* Network icons (replacing Circuit) */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`network-${i}`}
          className="absolute left-1/2 -translate-x-1/2"
          initial={{ y: "0%", opacity: 0, rotate: 0 }}
          animate={{
            y: ["0%", "100%"],
            opacity: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 2,
          }}
        >
          <Network className="w-8 h-8 text-pink-400" />
        </motion.div>
      ))}

      {/* CPU icons */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`cpu-${i}`}
          className="absolute left-1/2 -translate-x-1/2"
          initial={{ y: "100%", opacity: 0, scale: 0 }}
          animate={{
            y: ["100%", "0%"],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            delay: i * 1.75,
          }}
        >
          <Cpu className="w-8 h-8 text-purple-400" />
        </motion.div>
      ))}

      {/* Pulse rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: [0.5, 2.5],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut",
          }}
        >
          <div className="w-8 h-8 rounded-full border-2 border-purple-400" />
        </motion.div>
      ))}
    </div>
  );
}