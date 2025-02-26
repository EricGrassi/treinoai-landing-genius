
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import WorkoutPlanExample from "@/components/WorkoutPlanExample";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select all sections that should be animated
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      section.classList.add("section-fade-in");
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    // Set page title and meta description
    document.title = "TreinoAI - Planos de Treino Personalizados com IA";
    
    // Find existing meta description or create a new one
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    
    // Now we can safely set the content
    metaDescription.setAttribute('content', 'TreinoAI cria planos de treino personalizados usando IA para atender aos seus objetivos específicos de condicionamento físico, agenda e preferências.');
  }, []);

  return (
    <div className="min-h-screen bg-treino-dark text-white overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <WorkoutPlanExample />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
