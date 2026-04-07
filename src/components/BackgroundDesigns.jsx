import React from 'react';
import { motion } from 'framer-motion';

const BackgroundDesigns = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Dynamic Mesh Gradient Layer */}
      <div className="absolute inset-0 bg-[#FDF2F0] opacity-50">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-inst-blue/5 blur-[120px] animate-mesh" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-inst-yellow/10 blur-[120px] animate-mesh [animation-delay:2s]" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-inst-pink blur-[100px] animate-mesh [animation-delay:4s]" />
      </div>

      {/* Structured Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Floating Animated Blobs */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[15%] left-[5%] w-64 h-64 bg-inst-blue/5 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-inst-yellow/5 rounded-full blur-3xl opacity-60"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[40%] left-[45%] w-48 h-48 bg-inst-pink rounded-full blur-3xl"
      />

      {/* Sub-vibrant accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20" />
    </div>
  );
};

export default BackgroundDesigns;
