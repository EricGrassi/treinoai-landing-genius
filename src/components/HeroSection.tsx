
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-treino-dark via-treino-dark to-treino-gray z-0" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6bS00LTRoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30 z-0" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            AI-Powered Workouts <br className="hidden sm:block" />
            <span className="text-treino-accent">Designed For You</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-treino-light mb-12">
            TreinoAI creates personalized workout plans that adapt to your goals, 
            schedule, and progress with precision and intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-treino-dark hover:bg-treino-accent group transition-all duration-300 px-8 py-6 text-lg"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* App preview */}
        <div className="mt-16 relative animate-slide-up animation-delay-300">
          <div className="glass-effect rounded-2xl p-1 max-w-4xl mx-auto shadow-[0_20px_70px_-15px_rgba(255,255,255,0.1)]">
            <div className="relative overflow-hidden rounded-xl border border-white/5 shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2532&auto=format&fit=crop" 
                alt="TreinoAI app interface showing personalized workout plan" 
                className="w-full h-auto object-cover rounded-xl animate-blur-in"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
          
          {/* Floating badge */}
          <div className="absolute -top-6 right-4 md:right-8 glass-effect px-4 py-2 rounded-full animate-pulse-slow">
            <p className="text-xs md:text-sm text-white">Powered by AI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
