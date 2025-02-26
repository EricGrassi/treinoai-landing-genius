
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <a href="#" className="font-mono text-xl font-semibold text-white">
              Treino<span className="text-treino-accent">AI</span>
            </a>
            <p className="mt-3 text-treino-light">
              Planos de treino personalizados com IA para sua jornada fitness única.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase mb-4">Produto</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Preços</a></li>
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Suporte</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Imprensa</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Termos</a></li>
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Licenças</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-treino-light text-sm">
            © {currentYear} TreinoAI. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <p className="text-treino-light text-sm flex items-center">
              Feito com <Heart className="h-3 w-3 text-red-500 mx-1" /> para entusiastas de fitness em todo lugar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
