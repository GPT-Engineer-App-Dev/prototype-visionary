import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: "auto", opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-3xl w-full space-y-8 text-center"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          variants={itemVariants}
        >
          Visualize Your Product Ideas
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl text-gray-600 mb-8"
          variants={itemVariants}
        >
          Turn your product visions into interactive prototypes in minutes
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Start Prototyping Now
          </Button>
        </motion.div>
        
        <motion.div 
          className="mt-16 space-y-8"
          initial="collapsed"
          animate="expanded"
          variants={expandVariants}
        >
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Product Managers Who Struggle with Visualization</h2>
            <p className="text-gray-600">
              Say goodbye to the frustration of explaining your ideas. Our tool helps you create 
              interactive prototypes that bring your product visions to life, making it easier to 
              communicate with your team and stakeholders.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">From Concept to Prototype in Minutes</h2>
            <p className="text-gray-600">
              No more waiting for designers or developers. With our intuitive interface, you can 
              quickly transform your ideas into tangible, interactive prototypes that showcase your 
              product's potential.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Collaborate and Iterate with Ease</h2>
            <p className="text-gray-600">
              Share your prototypes instantly, gather feedback, and make real-time adjustments. 
              Our tool streamlines the product development process, helping you iterate faster and 
              more efficiently.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mt-16">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started Free
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;