
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Personalized workout plans",
  "Intelligent progress adaptation",
  "Expert exercise guidance",
  "Detailed performance analytics",
  "14-day free trial, no credit card required"
];

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-treino-dark to-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Start Your Fitness Journey <br />
          <span className="text-treino-accent">With TreinoAI Today</span>
        </h2>
        
        <p className="text-treino-light max-w-2xl mx-auto mb-8 text-lg">
          Join thousands of users who have transformed their fitness with personalized, 
          AI-powered workout plans designed specifically for their needs.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-sm"
            >
              <Check className="h-4 w-4 text-treino-accent" />
              <span className="text-white">{benefit}</span>
            </div>
          ))}
        </div>
        
        <Button 
          size="lg" 
          className="bg-white text-treino-dark hover:bg-treino-accent group transition-all duration-300 px-8 py-6 text-lg"
        >
          Start Your Free Trial
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <p className="mt-4 text-treino-light text-sm">
          No commitment. Cancel anytime.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
