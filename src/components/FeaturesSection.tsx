
import { Activity, Dumbbell, Heart, Target, Users } from "lucide-react";

const features = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Personalized Plans",
    description: "Our AI analyzes your goals, fitness level, and preferences to create a workout plan that's uniquely yours."
  },
  {
    icon: <Dumbbell className="h-8 w-8" />,
    title: "Adaptive Progression",
    description: "As you grow stronger, your plan evolves with you, adjusting intensity and exercises for optimal results."
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: "Performance Tracking",
    description: "Monitor your progress with detailed analytics and insights that help you understand your improvement."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Recovery Optimization",
    description: "Smart recovery protocols ensure you're giving your body the rest it needs to perform at its best."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Guidance",
    description: "Access to a library of professionally designed exercises with form guidance and video tutorials."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-treino-gray px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-white/10 text-treino-accent px-3 py-1 rounded-full text-sm mb-4 inline-block">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose TreinoAI
          </h2>
          <p className="text-treino-light max-w-2xl mx-auto">
            Discover how our intelligent system creates the perfect workout plan tailored specifically to your needs and goals.
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
