
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import TechSection from "@/components/TechSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <HowItWorks />
        <UseCases />
        <TechSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
