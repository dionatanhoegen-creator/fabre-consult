"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image"; // IMPORTAMOS A FERRAMENTA DE IMAGENS DO NEXT.JS

export default function AnimatedCapsuleBackground() {
  const granuleSize = 6;
  const numGranules = 15;
  
  // Criamos um "estado" para guardar as posições aleatórias
  const [randomPositions, setRandomPositions] = useState<number[]>([]);

  // O useEffect garante que a aleatoriedade só aconteça no navegador do cliente
  useEffect(() => {
    // Gera 15 números aleatórios e guarda eles
    const positions = Array.from({ length: numGranules }).map(() => (Math.random() - 0.5) * 80);
    setRandomPositions(positions);
  }, []); // A array vazia [] significa "rode isso apenas uma vez, na inicialização"

  // Variantes para a animação da cápsula premium
  const capsuleVariants = {
    animate: {
      scale: [1, 1.05, 1], // Dá uma leve "pulsação" orgânica
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const granuleVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (i: number) => ({
      y: [0, 100], // Ponto de partida e chegada da queda
      x: [0, (Math.random() - 0.5) * 50], // Uma leve dispersão para os lados
      opacity: [1, 0], // Começa visível e some no final
      transition: {
        delay: i * 0.15, // Atraso para que cada granulo caia em tempos diferentes
        duration: 2.5,
        repeat: Infinity,
        ease: "easeOut",
      },
    }),
  };

  // Se as posições aleatórias ainda não foram geradas, não mostra nada (evita o erro)
  if (randomPositions.length === 0) return null;

  return (
    // O contêiner da animação flutuando atrás do texto (Opacity baixa e z-index negativo)
    <div className="absolute inset-0 flex items-center justify-center opacity-40 -z-10 overflow-hidden scale-75 md:scale-100">
      
      {/* 1. SEÇÃO CÁPSULA: Usamos uma imagem pré-renderizada de alta qualidade */}
      <motion.div
        variants={capsuleVariants}
        animate="animate"
        className="relative w-40 h-40 flex items-center justify-center rotate-15"
      >
        {/* Carregamos a imagem da cápsula premium que você me mandou. Certifique-se de que é a versão helicoidal abrindo com fundo transparente. */}
        <Image 
          src="/images/capsula.png" // O caminho onde você deve colocar o arquivo PNG transparente
          alt="Cápsula de manipulação helicoidal Fabre Consult"
          width={160} // w-40
          height={160} // h-40
          className="object-contain"
          priority // Garante que carregue rápido
        />
      </motion.div>

      {/* 2. SEÇÃO GRÂNULOS: Grânulos gerados por código flutuando e caindo */}
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
        {randomPositions.map((pos, i) => (
          <motion.circle
            key={i}
            cx={100 + pos} // Ponto de partida aleatório e seguro no topo
            cy={100} // Começa na altura do meio da cápsula
            r={granuleSize / 2}
            fill={i % 2 === 0 ? "#d8b865" : "white"} // Grânulos dourados e brancos misturados
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