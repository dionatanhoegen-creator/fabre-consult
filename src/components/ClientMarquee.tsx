"use client"; // Essencial para animações no navegador com Framer Motion

import { motion } from "framer-motion";
import Image from "next/image";

// LISTA DE LOGOS PLACEHOLDERS. No futuro, isso virá do Supabase (/admin)
// Certifique-se de que os arquivos existem em /public/logos/
const clientLogos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
];

export default function ClientMarquee() {
  // Duplicamos a lista de logos para criar o efeito visual de loop contínuo e infinito
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    // SEÇÃO CONTAINER (Borda discreta e fundo sutil)
    <section className="bg-white/5 backdrop-blur-sm border-t border-b border-white/10 py-16 mt-40 w-full overflow-hidden">
      
      {/* TÍTULO DA SEÇÃO CENTRALIZADO */}
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
         <h3 className="text-[#d8b865] font-bold tracking-widest uppercase text-sm mb-2">
           Nossos Parceiros Magistrais
         </h3>
         <h2 className="text-3xl md:text-4xl font-bold text-white">
           Farmácias que confiam na Fabre Consult
         </h2>
      </div>

      {/* ÁREA DA ANIMAÇÃO INFINITA */}
      <div className="relative flex w-full">
        
        {/* MÁSCARAS DE GRADIENTE (Efeito moderno de "vidro fumê" nas bordas para fade-in/fade-out) */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#1e2b4d] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#1e2b4d] to-transparent z-10 pointer-events-none"></div>

        {/* O MOTOR DA ANIMAÇÃO INFINITA (Framer Motion) */}
        <motion.div
          className="flex flex-none gap-20 px-10" // flex-none impede que o flex reduza o tamanho dos itens
          animate={{
            // Calcula o movimento com base em 50% da largura total (já que duplicamos a lista)
            x: ["0%", "-50%"], 
          }}
          transition={{
            ease: "linear", // Movimento contínuo, sem aceleração/desaceleração
            duration: 30, // Ajuste a velocidade aqui (maior = mais lento)
            repeat: Infinity, // Loop infinito
          }}
        >
          {duplicatedLogos.map((logoUrl, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-24 w-48 p-4"
            >
              {/* FERRAMENTA DE IMAGEM DO NEXT.JS OTIMIZADA */}
              <Image
                src={logoUrl}
                alt={`Farmácia Magistral Parceira ${index + 1}`}
                width={192} // w-48 (aproximadamente)
                height={96} // h-24 (aproximadamente)
                // AQUI ESTÁ A MUDANÇA: Tiramos os filtros para manter a cor original!
                className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}