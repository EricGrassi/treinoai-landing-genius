
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
              AI-powered personalized workout plans for your unique fitness journey.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="text-treino-light hover:text-white transition-colors">Licenses</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-treino-light text-sm">
            © {currentYear} TreinoAI. All rights reserved.
          </p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <p className="text-treino-light text-sm flex items-center">
              Made with <Heart className="h-3 w-3 text-red-500 mx-1" /> for fitness enthusiasts everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
