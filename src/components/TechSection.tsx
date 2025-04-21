
import React from "react";
import { motion } from "framer-motion";

const TechSection: React.FC = () => {
  return (
    <section id="tech" className="py-20 bg-gradient-to-b from-white to-storyspark-soft-gray">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tech-Powered Simplicity</h2>
          <p className="text-xl text-gray-600 mb-8">
            Powered by open-source tools, built with ❤️ using AI voice tech and video processing magic. No installs, no logins required to test.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full">AI Voice Synthesis</div>
            <div className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full">Video Processing</div>
            <div className="px-4 py-2 bg-green-100 text-green-800 rounded-full">Cloud Rendering</div>
            <div className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full">Open Source</div>
            <div className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full">Privacy First</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;
