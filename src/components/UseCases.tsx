
import React from "react";
import { motion } from "framer-motion";

const useCases = [
  {
    title: "Teachers",
    description: "Turn lessons into visual stories",
    icon: "👩‍🏫",
    color: "from-purple-100 to-storyspark-light-purple",
    delay: 0.1,
  },
  {
    title: "Parents",
    description: "Narrate your kids' drawings",
    icon: "👨‍👧‍👦",
    color: "from-blue-100 to-storyspark-soft-blue",
    delay: 0.2,
  },
  {
    title: "Creators",
    description: "Add voice to visual projects",
    icon: "🎨",
    color: "from-pink-100 to-storyspark-soft-pink",
    delay: 0.3,
  },
];

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect For Everyone</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how different users bring their stories to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${useCase.color} p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: useCase.delay }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{useCase.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-lg text-gray-700">{useCase.description}</p>
                
                <div className="mt-6 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
