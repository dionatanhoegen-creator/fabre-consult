import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// AQUI ESTÁ A MÁGICA: Puxando a fonte direto do sistema, sem precisar de arquivos
import { Montserrat } from 'next/font/google'; 

// Configurando os pesos 400 (Book/Normal) e 600 (SemiBold)
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'], 
  variable: '--font-montserrat', // Criando a variável para o Tailwind
});

export const metadata: Metadata = {
  title: "Fabre Consult | Consultoria Magistral",
  description: "As Soluções para Impulsionar Sua Farmácia de Manipulação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable}`}>
      <body className="bg-gray-50 text-gray-900 antialiased font-sans">
        
        <Navbar />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}