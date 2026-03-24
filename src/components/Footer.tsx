// Local: src/components/Footer.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Configuração de segurança do banco de dados (PLACEHOLDER)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://sua-url-aqui.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sua-chave-aqui";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Footer() {
  const [city, setCity] = useState<string>("Maringá");
  const [stateUf, setStateUf] = useState<string>("PR");

  // useEffect (Desativado temporariamente até conectarmos o banco real)
  /*
  useEffect(() => {
    async function fetchSettings() {
      // Quando tivermos o banco conectado, ele vai buscar aqui
      try {
        const { data, error } = await supabase
          .from("site_settings")
          .select("address_city, address_state_uf")
          .limit(1)
          .single();

        if (data) {
          setCity(data.address_city);
          setStateUf(data.address_state_uf);
        }
      } catch (err) {
        // Fallback em caso de erro
        setCity("Maringá");
        setStateUf("PR");
      }
    }
    fetchSettings();
  }, []);
  */

  return (
    <footer className="bg-white border-t border-gray-100 py-16 w-full relative z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start">
          {/* Título do Rodapé usa font-semibold (SemiBold) */}
          <Link href="/" className="text-2xl font-semibold text-[#111C2E] tracking-wide mb-3">
             FABRE<span className="text-[#d8b865]">CONSULT</span>
          </Link>
          {/* Cidade/UF usa font-normal (Book) */}
          <p className="text-gray-500 font-normal text-sm tracking-wide">
            {city} - {stateUf}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6 max-w-xl">
           <h3 className="text-[#d8b865] font-bold tracking-widest uppercase text-xs mb-1">Contato</h3>
           {/* CTA principal do Rodapé usa font-semibold (SemiBold) */}
           <p className="text-2xl font-semibold text-[#111C2E] leading-snug">
              Entre em contato e descubra como podemos fazer a diferença no seu negócio.
           </p>
          <div className="flex gap-4">
             <Link href="/admin" className="text-sm text-gray-400 hover:text-[#d8b865] transition-colors mt-2">Admin</Link>
             {/* Botão de impacto do Rodapé usa font-semibold (SemiBold) */}
             <button className="bg-[#111C2E] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#d8b865] hover:text-[#111C2E] hover:scale-105 transition-all duration-300 shadow-md">
                Vamos juntos trilhar o caminho?
             </button>
          </div>
        </div>
      </div>
      
      {/* Copyright usa font-normal (Book por padrão do sans) */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-100 text-center text-xs text-gray-400 font-normal">
         &copy; {new Date().getFullYear()} Fabre Consult. Todos os direitos reservados.
      </div>
    </footer>
  );
}