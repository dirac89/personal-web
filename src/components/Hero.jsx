// src/components/Hero.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import profile from "../assets/professional_avatar.png";
import getExperienceYears from "../utils/getExperienceYears";
import AnimatedCounter from "./AnimatedCounter";
import projects from "../data/projects";

const Hero = () => {
  const experienceYears = getExperienceYears();
  const deliveredSolutions = projects.length;

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="min-h-screen text-white flex flex-col md:flex-row items-center justify-between px-16 md:px-32 relative z-10 pt-20"
      style={{ perspective: 1200 }}
    >
      {/* Text column */}
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 z-10 pl-6 md:pl-0">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-3"
        >
          Flight Plan Authorized
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
        >
          Javier Aguilera
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-xl mb-8 max-w-lg mx-auto md:mx-0 text-gray-300 font-light leading-relaxed"
        >
          Senior Data Scientist based in Spain. I specialize in Machine Learning, MLOps and Dynamic Pricing solutions for airlines and tech-driven businesses.
        </motion.p>

        <motion.a
          href="#proyectos"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-emerald-600/90 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:shadow-[0_0_30px_rgba(5,150,105,0.6)] hover:bg-emerald-500 transition-all border border-emerald-400/30"
        >
          Explore Destinations
        </motion.a>

        <div className="flex gap-12 text-sm text-gray-400 mt-12 justify-center md:justify-start">
          <div className="text-center">
            <AnimatedCounter end={experienceYears} className="text-4xl font-black text-white" />
            <p className="tracking-wide uppercase text-xs mt-2 text-emerald-400">Flight Hours (Years)</p>
          </div>
          <div className="text-center">
            <AnimatedCounter end={deliveredSolutions} className="text-4xl font-black text-white" />
            <p className="tracking-wide uppercase text-xs mt-2 text-emerald-400">Routes Launched</p>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
        <motion.div 
          className="relative w-[450px] h-[650px] md:w-[600px] md:h-[800px] z-10 translate-x-4 md:translate-x-0"
          style={{ rotateX, rotateY, y, transformStyle: "preserve-3d" }}
        >
          <img 
            src={profile} 
            alt="Javier Aguilera" 
            className="w-full h-full object-cover object-center" 
            style={{
              WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)",
              maskImage: "radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%)"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;