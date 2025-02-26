
import { ArrowRight, Check, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Share Your Goals",
    description: "Tell us about your fitness goals, experience level, available equipment, and schedule constraints."
  },
  {
    number: "02",
    title: "AI Creates Your Plan",
    description: "Our AI analyzes your information to design a personalized workout plan optimized for your specific needs."
  },
  {
    number: "03",
    title: "Start Training",
    description: "Follow your custom plan and track your progress as you complete workouts and reach milestones."
  },
  {
    number: "04",
    title: "Adapt & Improve",
    description: "As you provide feedback and log workouts, the AI refines your plan to match your progress and evolving goals."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-treino-gray to-treino-dark px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-white/10 text-treino-accent px-3 py-1 rounded-full text-sm mb-4 inline-block">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How TreinoAI Works
          </h2>
          <p className="text-treino-light max-w-2xl mx-auto">
            A simple process that delivers powerful results, designed with you at the center.
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
                <h3 className="text-xl font-semibold text-white mb-1">Get Started Now</h3>
                <p className="text-treino-light text-sm">Fill out this quick form to create your first workout plan</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-treino-light mb-1">Your fitness goal</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-white/30 transition-colors">
                    <option>Build muscle</option>
                    <option>Lose weight</option>
                    <option>Improve endurance</option>
                    <option>Increase strength</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm text-treino-light mb-1">Experience level</label>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/5 border border-white/20 rounded-lg p-3 text-center text-white cursor-pointer hover:bg-white/10 transition-colors">
                      Beginner
                    </div>
                    <div className="bg-white text-treino-dark rounded-lg p-3 text-center cursor-pointer">
                      Intermediate
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded-lg p-3 text-center text-white cursor-pointer hover:bg-white/10 transition-colors">
                      Advanced
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-treino-light mb-1">Workouts per week</label>
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
                    Generate My Workout Plan
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="text-center text-xs text-treino-light mt-4">
                  <p>No credit card required • Free 14-day trial</p>
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
