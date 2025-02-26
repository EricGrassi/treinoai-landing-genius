
import { Activity, Dumbbell, Heart, Target, Users } from "lucide-react";

const features = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Planos Personalizados",
    description: "Nossa IA analisa seus objetivos, nível de condicionamento e preferências para criar um plano de treino exclusivamente seu."
  },
  {
    icon: <Dumbbell className="h-8 w-8" />,
    title: "Progressão Adaptativa",
    description: "À medida que você fica mais forte, seu plano evolui com você, ajustando a intensidade e os exercícios para resultados ideais."
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: "Acompanhamento de Desempenho",
    description: "Monitore seu progresso com análises detalhadas e insights que ajudam a entender sua evolução."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Otimização da Recuperação",
    description: "Protocolos inteligentes de recuperação garantem que você esteja dando ao seu corpo o descanso necessário para ter o melhor desempenho."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Orientação Especializada",
    description: "Acesso a uma biblioteca de exercícios projetados profissionalmente com orientação de forma e tutoriais em vídeo."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-treino-gray px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-white/10 text-treino-accent px-3 py-1 rounded-full text-sm mb-4 inline-block">
            Recursos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Por que Escolher TreinoAI
          </h2>
          <p className="text-treino-light max-w-2xl mx-auto">
            Descubra como nosso sistema inteligente cria o plano de treino perfeito, adaptado especificamente às suas necessidades e objetivos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-treino-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
