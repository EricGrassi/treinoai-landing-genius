
import { ArrowRight, Check, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Compartilhe Seus Objetivos",
    description: "Conte-nos sobre seus objetivos de condicionamento físico, nível de experiência, equipamentos disponíveis e restrições de agenda."
  },
  {
    number: "02",
    title: "A IA Cria Seu Plano",
    description: "Nossa IA analisa suas informações para criar um plano de treino personalizado e otimizado para suas necessidades específicas."
  },
  {
    number: "03",
    title: "Comece a Treinar",
    description: "Siga seu plano personalizado e acompanhe seu progresso à medida que completa os treinos e alcança marcos."
  },
  {
    number: "04",
    title: "Adapte e Melhore",
    description: "Conforme você fornece feedback e registra treinos, a IA refina seu plano para corresponder ao seu progresso e objetivos em evolução."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-treino-gray to-treino-dark px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-white/10 text-treino-accent px-3 py-1 rounded-full text-sm mb-4 inline-block">
            Processo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Como o TreinoAI Funciona
          </h2>
          <p className="text-treino-light max-w-2xl mx-auto">
            Um processo simples que entrega resultados poderosos, projetado com você no centro.
          </p>
        </div>
        
        <div className="lg:flex lg:items-center lg:gap-12">
          {/* Steps */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 glass-effect rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-2xl font-mono text-treino-accent">{step.number}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-treino-light">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Form preview */}
          <div className="lg:w-1/2">
            <div className="glass-effect rounded-2xl p-6 border border-white/10 shadow-[0_20px_70px_-15px_rgba(255,255,255,0.07)]">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-1">Comece Agora</h3>
                <p className="text-treino-light text-sm">Preencha este formulário rápido para criar seu primeiro plano de treino</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-treino-light mb-1">Seu objetivo fitness</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-white/30 transition-colors">
                    <option>Ganhar massa muscular</option>
                    <option>Perder peso</option>
                    <option>Melhorar resistência</option>
                    <option>Aumentar força</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm text-treino-light mb-1">Nível de experiência</label>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/5 border border-white/20 rounded-lg p-3 text-center text-white cursor-pointer hover:bg-white/10 transition-colors">
                      Iniciante
                    </div>
                    <div className="bg-white text-treino-dark rounded-lg p-3 text-center cursor-pointer">
                      Intermediário
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded-lg p-3 text-center text-white cursor-pointer hover:bg-white/10 transition-colors">
                      Avançado
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-treino-light mb-1">Treinos por semana</label>
                  <input 
                    type="range" 
                    min="2" 
                    max="6" 
                    defaultValue="4" 
                    className="w-full accent-white"
                  />
                  <div className="flex justify-between text-xs text-treino-light">
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button className="w-full bg-white text-treino-dark hover:bg-treino-accent group py-6 transition-all duration-300">
                    Gerar Meu Plano de Treino
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="text-center text-xs text-treino-light mt-4">
                  <p>Não é necessário cartão de crédito • Teste gratuito de 14 dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
