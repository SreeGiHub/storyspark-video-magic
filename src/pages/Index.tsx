import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <HeroSection />
      <Button onClick={() => navigate("/signup")}>Get Started</Button>
      <Footer />
    </div>
  );
};

export default Index;
