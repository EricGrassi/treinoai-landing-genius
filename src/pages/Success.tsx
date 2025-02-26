
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Success = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-treino-dark to-black flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full glass-effect rounded-2xl p-8 border border-white/10 text-center">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="h-8 w-8 text-treino-accent" />
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">Plano de Treino Criado!</h1>
        
        <p className="text-treino-light mb-8">
          Nossa IA está finalizando seu plano de treino personalizado. 
          Você receberá acesso em breve no e-mail cadastrado.
        </p>
        
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h3 className="font-medium text-white mb-2">O que esperar a seguir:</h3>
            <ul className="text-sm text-treino-light text-left space-y-2">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-treino-accent mr-2 mt-0.5" />
                <span>Email em até 10 minutos com acesso ao seu plano</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-treino-accent mr-2 mt-0.5" />
                <span>Plano personalizado com base em seus objetivos</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-treino-accent mr-2 mt-0.5" />
                <span>Instruções detalhadas para cada exercício</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-treino-accent mr-2 mt-0.5" />
                <span>Acesso ao app para acompanhar seu progresso</span>
              </li>
            </ul>
          </div>
          
          <Link to="/">
            <Button className="w-full bg-white text-treino-dark hover:bg-treino-accent group transition-all duration-300">
              Voltar para a Página Inicial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
