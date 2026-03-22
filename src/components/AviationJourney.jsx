// src/components/AviationJourney.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./Hero";
import About from "./About";
import { FaPlane } from "react-icons/fa";

const AviationJourney = () => {
  const containerRef = useRef(null);
  
  // Track scroll through the whole journey (Hero + About)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative w-full bg-slate-900 overflow-hidden">
      {/* Background Radar/Aviation pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{
             backgroundImage: "radial-gradient(circle at 50% 50%, #3b82f6 1px, transparent 1px), radial-gradient(circle at 50% 50%, #3b82f6 1px, transparent 1px)",
             backgroundPosition: "0 0, 20px 20px",
             backgroundSize: "40px 40px"
           }}>
      </div>
      
      {/* Background glow effects */}
      <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-emerald-700/30 rounded-full mix-blend-screen blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-blue-700/30 rounded-full mix-blend-screen blur-[120px] pointer-events-none"></div>

      {/* The Animated Airplane Track */}
      <div className="absolute top-0 bottom-0 left-6 md:left-20 z-20 w-8 pointer-events-none flex flex-col items-center">
        {/* Dash line */}
        <div className="absolute top-0 bottom-0 w-px border-l-2 border-dashed border-emerald-500/40"></div>
        {/* The plane moving down */}
        <motion.div 
          style={{ 
            top: useTransform(scrollYProgress, [0, 1], ["5%", "95%"])
          }} 
          className="absolute text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,1)]"
        >
          <FaPlane size={32} className="transform rotate-180" />
        </motion.div>
      </div>

      <Hero />
      <About />
    </div>
  );
};

export default AviationJourney;
