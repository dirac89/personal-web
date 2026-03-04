// src/components/Hero.jsx
import { motion } from "framer-motion";
import profile from "../assets/profile_javier_new.png";
import getExperienceYears from "../utils/getExperienceYears";
import AnimatedCounter from "./AnimatedCounter";
import projects from "../data/projects";

const Hero = () => {
  const experienceYears = getExperienceYears();
  const deliveredSolutions = projects.length;

  return (
    <section
      id="inicio"
      className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-0 pb-16 relative overflow-hidden"
    >
      {/* Text column */}
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 z-10">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-emerald-600 uppercase tracking-wide text-sm mb-2"
        >
          Introduction
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-4"
        >
          Javier Aguilera
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-lg mb-6 max-w-md mx-auto md:mx-0"
        >
          Senior Data Scientist based in Spain. I specialize in Machine Learning, MLOps and Dynamic Pricing solutions for airlines and tech-driven businesses.
        </motion.p>

        <motion.a
          href="#proyectos"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-emerald-600 text-white px-6 py-3 rounded font-semibold shadow hover:bg-emerald-700 transition"
        >
          Latest Projects
        </motion.a>

        <div className="flex gap-10 text-sm text-gray-300 mt-10 justify-center md:justify-start">
          <div className="text-center">
            <AnimatedCounter end={experienceYears} className="text-2xl font-bold text-white" />
            <p>Years of Experience</p>
          </div>
          <div className="text-center">
            <AnimatedCounter end={deliveredSolutions} className="text-2xl font-bold text-white" />
            <p>Delivered Solutions</p>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="md:w-1/2 flex justify-center items-start relative mt-10 md:-mt-64">
        {/* Background circles */}
        <div className="absolute w-[500px] h-[500px] bg-emerald-600 rounded-full top-32 left-10 z-0 opacity-60 blur-xl"></div>
        <div className="absolute w-[450px] h-[450px] bg-blue-900 rounded-full bottom-10 right-10 z-0 opacity-70 blur-2xl"></div>
        
        <div className="relative w-[700px] h-[1000px] overflow-hidden z-10">
          <img 
            src={profile} 
            alt="Javier Aguilera" 
            className="w-full h-full object-cover object-center shadow-2xl" 
            style={{ 
              objectPosition: 'center top',
              transform: 'scale(1.1)',
              clipPath: 'circle(50% at 50% 50%)'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;