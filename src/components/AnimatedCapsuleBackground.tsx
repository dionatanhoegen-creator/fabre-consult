"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AnimatedCapsuleBackground() {
  const granuleSize = 6;
  const numGranules = 15;
  
  const [randomPositions, setRandomPositions] = useState<number[]>([]);

  useEffect(() => {
    const positions = Array.from({ length: numGranules }).map(() => (Math.random() - 0.5) * 80);
    setRandomPositions(positions);
  }, []);

  const capsuleVariants = {
    animate: {
      scale: [1, 1.05, 1],
      // CORREÇÃO: Adicionamos o 'as const' para o TypeScript aprovar
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const }, 
    },
  };

  const granuleVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (i: number) => ({
      y: [0, 100],
      x: [0, (Math.random() - 0.5) * 50],
      opacity: [1, 0],
      transition: {
        delay: i * 0.15,
        duration: 2.5,
        repeat: Infinity,
        // CORREÇÃO: Adicionamos o 'as const' aqui também
        ease: "easeOut" as const, 
      },
    }),
  };

  if (randomPositions.length === 0) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-40 -z-10 overflow-hidden scale-75 md:scale-100">
      
      <motion.div
        variants={capsuleVariants}
        animate="animate"
        className="relative w-40 h-40 flex items-center justify-center rotate-15"
      >
        <Image 
          src="/images/capsula.png" 
          alt="Cápsula de manipulação helicoidal Fabre Consult"
          width={160} 
          height={160} 
          className="object-contain"
          priority 
        />
      </motion.div>

      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
        {randomPositions.map((pos, i) => (
          <motion.circle
            key={i}
            cx={100 + pos} 
            cy={100} 
            r={granuleSize / 2}
            fill={i % 2 === 0 ? "#d8b865" : "white"} 
            variants={granuleVariants}
            custom={i}
            initial="initial"
            animate="animate"
          />
        ))}
      </svg>
    </div>
  );
}