
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🎙️",
    title: "100+ Languages Supported",
    delay: 0.1,
  },
  {
    icon: "🌐",
    title: "Works Entirely in Your Browser",
    delay: 0.2,
  },
  {
    icon: "🔐",
    title: "No Data Stored – Your Files Stay Private",
    delay: 0.3,
  },
  {
    icon: "🚀",
    title: "Built for Educators, Creators & Storytellers",
    delay: 0.4,
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-storyspark-soft-blue p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              viewport={{ once: true }}
            >
              <span className="text-4xl mb-4">{feature.icon}</span>
              <h3 className="font-semibold text-lg text-gray-800">{feature.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
