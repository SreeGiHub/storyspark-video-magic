
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="py-20 bg-gradient-to-b from-storyspark-soft-gray to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Create your first video now</h2>
          <p className="text-xl text-gray-600 mb-8">
            It's free and takes less than 2 minutes.
          </p>
          
          <Button 
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg py-6 px-10"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </Button>
          
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text text-2xl">
                  StorySparkVR
                </p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-indigo-600">Terms</a>
                <a href="#" className="text-gray-500 hover:text-indigo-600">Privacy</a>
                <a href="#" className="text-gray-500 hover:text-indigo-600">Contact</a>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              © {new Date().getFullYear()} StorySparkVR. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

