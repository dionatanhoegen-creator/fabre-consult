// Local: src/app/page.tsx
"use function";
"use client";

import { Presentation, TrendingUp, FlaskConical, ShieldCheck } from "lucide-react";
import ClientMarquee from "@/components/ClientMarquee";
import Image from "next/image";

export default function Home() {
  return (
    // Adicionamos um padding-top maior (pt-52) para o conteúdo não ficar escondido atrás do menu flutuante
    <main className="min-h-screen bg-[#111C2E] flex flex-col items-center pt-52 px-4 pb-20 overflow-hidden relative font-sans">
      
      {/* 1. SEÇÃO HERO (Capa premium com o Logotipo OFICIAL LIMPADO, sem luz) */}
      <div className="text-center max-w-7xl mt-10 md:mt-16 flex flex-col items-center relative z-10">
        
        {/* Container do Logotipo OFICIAL LIMPADO (Sem efeito de luz) */}
        <div className="relative w-full max-w-2xl mb-12 group cursor-pointer flex items-center justify-center">
          
          <Image 
            src="/images/logo fundo transparente.png" // O caminho onde você salvou a imagem
            alt="Fabre Consult - Consultoria Magistral"
            width={640} // w-full max-w-2xl (ajustando a proporção)
            height={240} // Proporção aproximada do logotipo fornecido
            className="object-contain mx-auto transition-transform duration-300 group-hover:scale-105"
            // REMOVEMOS: drop-shadow-[0_0_20px_rgba(255,255,255,0.45)] brightness-[1.2]
            priority // Garante que carregue rápido como o hero element
          />
        </div>

        {/* ATUALIZAMOS: Título principal usa font-semibold (SemiBold) */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 leading-snug">
          As Soluções para Impulsionar Sua Farmácia de Manipulação
        </h2>
        
        {/* Texto de apoio usa font-normal (Book por padrão do sans) */}
        <p className="text-lg text-gray-300 mb-10 leading-relaxed font-normal max-w-3xl">
          Mais do que apenas uma ideia de negócio; Um propósito. Somos um elo entre o 
          conhecimento científico, a inovação e o sucesso das farmácias magistrais.
        </p>
        
        {/* Botão de impacto usa font-semibold (SemiBold) */}
        <button className="bg-[#d8b865] text-[#111C2E] px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl relative z-20">
          Descubra Nossas Soluções
        </button>
      </div>

      {/* 2. MANTEMOS A SEÇÃO: CARDS DE SERVIÇOS (Baseado no Instagram - Glassmorphism) */}
      <div className="mt-60 max-w-7xl w-full relative z-10">
        
        {/* Título da Seção (Usa font-semibold) */}
        <div className="text-center mb-16 px-4">
          <h3 className="text-[#d8b865] font-bold tracking-widest uppercase text-sm mb-2">Nossos Pilares</h3>
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">Estratégias mais eficientes para o seu negócio</h2>
        </div>

        {/* Grade com os 4 Cards de Serviços (IDs mantidos para Vercel) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          
          {/* Card 1: Visitação */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:-translate-y-4 hover:bg-white/10 transition-all duration-300 group cursor-pointer shadow-lg">
            <Presentation className="text-[#d8b865] w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-300" />
            
            {/* Título do Pilar usa font-semibold (SemiBold) */}
            <h4 className="text-xl font-semibold text-white mb-4">Visitação aos Prescritores</h4>
            
            {/* Texto do Pilar usa font-normal (Book) */}
            <p className="text-gray-400 text-sm leading-relaxed font-normal">
              Aumente suas indicações! Criamos materiais estratégicos, fórmulas inovadoras e treinamos sua equipe para visitas mais eficazes.
            </p>
          </div>

          {/* Card 2: Treinamento */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:-translate-y-4 hover:bg-white/10 transition-all duration-300 group cursor-pointer shadow-lg">
            <TrendingUp className="text-[#d8b865] w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="text-xl font-semibold text-white mb-4">Treinamento Comercial</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-normal">
              Equipe preparada vende mais! Técnicas de abordagem, persuasão e estratégias que aumentam a confiança dos prescritores.
            </p>
          </div>

          {/* Card 3: Desenvolvimento */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:-translate-y-4 hover:bg-white/10 transition-all duration-300 group cursor-pointer shadow-lg">
            <FlaskConical className="text-[#d8b865] w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="text-xl font-semibold text-white mb-4">Desenvolvimento de Produtos</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-normal">
              Do zero ao sucesso. Pesquisa de formulações, acompanhamento de tendências e estratégias para um lançamento assertivo.
            </p>
          </div>

          {/* Card 4: Assessoria */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:-translate-y-4 hover:bg-white/10 transition-all duration-300 group cursor-pointer shadow-lg">
            <ShieldCheck className="text-[#d8b865] w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h4 className="text-xl font-semibold text-white mb-4">Assessoria Técnica</h4>
            <p className="text-gray-400 text-sm leading-relaxed font-normal">
              Suporte especializado. Apoio regulatório, otimização de processos farmacêuticos e resolução de dúvidas de forma ágil.
            </p>
          </div>

        </div>
      </div>

      {/* 3. MANTEMOS O CARROSSEL INFINITO DE CLIENTES */}
      <ClientMarquee />
      
    </main>
  );
}