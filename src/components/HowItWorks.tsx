
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: "🖼️",
    title: "Upload Images",
    description: "Drag & drop your photos or artwork",
    color: "from-indigo-100 to-storyspark-soft-purple",
    delay: 0.1,
  },
  {
    icon: "✍️",
    title: "Add Narration",
    description: "Type what you want to say or tell a story",
    color: "from-pink-100 to-storyspark-soft-pink",
    delay: 0.2,
  },
  {
    icon: "🔊",
    title: "Select Language",
    description: "Choose a voice and language you love",
    color: "from-green-100 to-storyspark-soft-green",
    delay: 0.3,
  },
  {
    icon: "🎬",
    title: "Download Video",
    description: "Your video is ready to share in seconds",
    color: "from-orange-100 to-storyspark-soft-orange",
    delay: 0.4,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-storyspark-soft-yellow">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create stunning narrated videos in just a few simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${step.color} p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: step.delay }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
