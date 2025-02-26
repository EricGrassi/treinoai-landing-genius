
import { useState } from "react";
import { CheckCircle } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    role: "Corredora de Maratona",
    image: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?q=80&w=987&auto=format&fit=crop",
    quote: "TreinoAI me ajudou a me preparar para minha primeira maratona com um plano que equilibrava perfeitamente corrida, força e recuperação. Meu tempo de conclusão superou todas as minhas expectativas!",
    goal: "Melhorar resistência para maratona"
  },
  {
    id: 2,
    name: "Miguel T.",
    role: "Engenheiro de Software",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1035&auto=format&fit=crop",
    quote: "Eu não tinha ideia por onde começar com o treinamento de força. O TreinoAI criou um plano progressivo que me ajudou a desenvolver força enquanto se encaixava perfeitamente na minha agenda de trabalho agitada.",
    goal: "Ganhar força com tempo limitado"
  },
  {
    id: 3,
    name: "Helena K.",
    role: "Fisioterapeuta",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=987&auto=format&fit=crop",
    quote: "Como fisioterapeuta, estou impressionada com a forma como o TreinoAI adaptou meu plano quando mencionei minha lesão no ombro. Incorporou modificações apropriadas e ainda me ajudou a atingir meus objetivos.",
    goal: "Treinar com segurança após lesão"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id="testimonials" className="py-20 bg-treino-dark px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-white/10 text-treino-accent px-3 py-1 rounded-full text-sm mb-4 inline-block">
            Histórias de Sucesso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados Reais de Pessoas Reais
          </h2>
          <p className="text-treino-light max-w-2xl mx-auto">
            Veja como o TreinoAI ajudou pessoas como você a alcançar seus objetivos de condicionamento físico.
          </p>
        </div>
        
        <div className="lg:flex lg:items-center lg:gap-12">
          {/* Testimonial Card */}
          <div className="lg:w-2/3 mb-12 lg:mb-0">
            <div className="glass-effect rounded-2xl p-8 border border-white/10 shadow-[0_20px_70px_-15px_rgba(255,255,255,0.07)] relative">
              <div className="absolute -top-3 left-8 bg-treino-accent text-treino-dark px-4 py-1 rounded-full text-sm font-medium">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Objetivo: {testimonials[activeIndex].goal}</span>
                </div>
              </div>
              
              <blockquote className="text-xl text-white mb-8 italic">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-white">{testimonials[activeIndex].name}</p>
                  <p className="text-treino-light text-sm">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial Navigation */}
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    index === activeIndex 
                      ? "bg-white/10 border border-white/20" 
                      : "hover:bg-white/5"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-10 h-10 rounded-full object-cover mr-3"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-medium text-white">{testimonial.name}</p>
                      <p className="text-treino-light text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
