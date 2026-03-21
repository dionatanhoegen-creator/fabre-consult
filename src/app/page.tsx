export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#1e2b4d] px-4">
      <div className="text-center max-w-3xl">
        {/* Aqui depois entraremos com a imagem do logo */}
        <h1 className="text-5xl md:text-7xl font-bold text-[#d8b865] tracking-wide mb-6">
          FABRE CONSULT
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-light text-white mb-8">
          As Soluções para Impulsionar Sua Farmácia de Manipulação
        </h2>
        
        <p className="text-lg text-gray-200 mb-10 leading-relaxed">
          Mais do que apenas uma ideia de negócio; Um propósito. Somos um elo entre o 
          conhecimento científico, a inovação e o sucesso das farmácias magistrais.
        </p>

        <button className="bg-[#d8b865] text-[#1e2b4d] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-lg">
          Descubra Nossas Soluções
        </button>
      </div>
    </main>
  );
}