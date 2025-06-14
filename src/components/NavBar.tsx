
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "backdrop-blur-md bg-black/70 border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 font-mono text-xl font-semibold text-white">
              Treino<span className="text-treino-accent">AI</span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-sm text-treino-light hover:text-white transition-colors duration-200">
              Recursos
            </a>
            <a href="#workout-example" className="text-sm text-treino-light hover:text-white transition-colors duration-200">
              Exemplo de Treino
            </a>
            <a href="#how-it-works" className="text-sm text-treino-light hover:text-white transition-colors duration-200">
              Como Funciona
            </a>
            <a href="#testimonials" className="text-sm text-treino-light hover:text-white transition-colors duration-200">
              Depoimentos
            </a>
          </nav>
          <div className="flex items-center">
            <Link to="/signup">
              <Button 
                className="bg-white text-treino-dark hover:bg-treino-accent hover:text-treino-dark transition-all duration-300"
              >
                Começar Teste Grátis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
