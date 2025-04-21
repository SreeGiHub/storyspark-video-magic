import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-storyspark-soft-purple">
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-storyspark-soft-pink opacity-30 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-storyspark-soft-blue opacity-30 blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Turn Your Images Into Beautiful Narrated Videos – Instantly.
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Upload photos, add narration in any language, and download stunning narrated videos. Free, fast, and privacy-first.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-6 px-8"
                onClick={() => navigate("/signup")}
              >
                Get Started – It's Free
              </Button>
              <Button
                variant="outline"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 text-lg py-6 px-8"
                onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
              >
                See How It Works
              </Button>
            </motion.div>
          </div>

          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/da0e5593-03b3-4523-86ab-96e1973762a8.png" 
                alt="StorySparkVR Demo" 
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-5 -right-5 bg-storyspark-purple text-white p-4 rounded-2xl shadow-lg">
                <p className="font-bold">Transform images into stories!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
