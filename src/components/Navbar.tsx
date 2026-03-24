"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedCapsuleBackground from "./AnimatedCapsuleBackground"; // IMPORTAMOS O NOVO COMPONENTE

export default function Navbar() {
  return (
    // Esta div por fora garante que o menu fique centralizado e afastado do topo
    <div className="fixed top-6 w-full flex justify-center z-50 px-4 pointer-events-none">
      
      {/* O Menu em si, parecendo uma "pílula" */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="pointer-events-auto bg-[#111C2E]/80 backdrop-blur-xl border border-[#d8b865]/30 shadow-2xl rounded-full px-8 py-4 flex justify-between items-center w-full max-w-5xl"
      >
        
        {/* LOGOTIPO - Com a animação discreta flutuando atrás do nome */}
        <div className="relative group cursor-pointer flex items-center justify-center min-w-[150px] min-h-[60px]">
          
          {/* AQUI ESTÁ A MÁGICA: A animação discreta flutuando atrás do nome */}
          <AnimatedCapsuleBackground />
          
          <Link href="/" className="text-xl font-semibold text-white tracking-wider relative z-10 hover:scale-105 transition-transform duration-300 font-semibold">
            FABRE<span className="text-[#CEA34C]">CONSULT</span>
          </Link>
        </div>

        {/* Links - Agora com gap-8 para dar respiro, e cores ajustadas */}
        <div className="hidden md:flex gap-8 font-normal text-sm uppercase tracking-widest text-gray-300">
          <Link href="/" className="hover:text-[#CEA34C] transition-colors duration-300">Home</Link>
          <Link href="/nossa-historia" className="hover:text-[#CEA34C] transition-colors duration-300">Nossa História</Link>
          <Link href="/servicos" className="hover:text-[#CEA34C] transition-colors duration-300">Serviços</Link>
          <Link href="/materiais" className="hover:text-[#CEA34C] transition-colors duration-300">Materiais</Link>
        </div>

        {/* Botão de Contato - Invertemos as cores para destacar */}
        <button className="bg-[#CEA34C] text-[#111C2E] px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[#111C2E] hover:scale-105 transition-all duration-300 shadow-lg relative z-10">
          Contato
        </button>
        
      </motion.nav>
    </div>
  );
}