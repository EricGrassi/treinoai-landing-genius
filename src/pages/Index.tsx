
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

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
    document.title = "TreinoAI - Personalized AI Workout Plans";
    
    // Find existing meta description or create a new one
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    
    metaDescription.content = 'TreinoAI creates personalized workout plans using AI to meet your specific fitness goals, schedule, and preferences.';
  }, []);

  return (
    <div className="min-h-screen bg-treino-dark text-white overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
