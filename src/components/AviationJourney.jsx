// src/components/AviationJourney.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaPlaneDeparture, FaPlaneArrival, FaPlane } from "react-icons/fa";

const timelineData = [
  {
    year: "2018 - 2022",
    title: "Air Europa Airlines",
    description: "Joined as a Data Scientist focusing on forecasting and pricing optimization.",
    icon: <FaPlaneDeparture className="text-emerald-400" size={20} />,
  },
  {
    year: "2022 - 2023",
    title: "Strategy Big Data",
    description: "Joined as a Senior Data Scientist focusing on time series forecasting and recommender models.",
    icon: <FaPlaneDeparture className="text-emerald-400" size={20} />,
  },
  {
    year: "2023 - Present",
    title: "Knowmad Mood (Client: Iberia - IAG Group)",
    description: "Senior Data Scientist working on machine learning, MLOps and revenue management solutions.",
    icon: <FaPlaneArrival className="text-emerald-400" size={20} />,
  }
];

const AviationJourney = () => {
  const containerRef = useRef(null);
  
  // Track scroll through the whole 400vh journey
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Mapeamos el progreso del scroll vertical a traslación horizontal
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-[#0a0a0a] z-20">
      
      {/* Sticky container that holds the horizontal track */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-slate-900 shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
        
        {/* Background Radar/Aviation pattern */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{
               backgroundImage: "radial-gradient(circle at 50% 50%, #3b82f6 1px, transparent 1px)",
               backgroundSize: "40px 40px"
             }}>
        </div>
        
        {/* Glow effects */}
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-emerald-700/20 rounded-full mix-blend-screen blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-blue-700/20 rounded-full mix-blend-screen blur-[120px] pointer-events-none" />

        {/* Línea horizontal central para la pista */}
        <div className="absolute top-1/2 left-0 w-full h-px border-t-2 border-dashed border-emerald-500/30 -translate-y-1/2 z-10 pointer-events-none" />

        {/* Avión fijo haciendo de cabecera de la pista */}
        <div className="absolute left-[15vw] top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,1)]">
          <FaPlane size={40} className="transform rotate-90" />
        </div>

        {/* --- HORIZONTAL TRACK --- */}
        <motion.div 
          style={{ x }} 
          className="relative z-20 flex items-center gap-[10vw] px-[20vw] will-change-transform"
        >
          
          {/* Section 1: Intro */}
          <div className="w-[80vw] md:w-[35vw] flex-shrink-0 flex flex-col justify-center pl-[5vw]">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
              Flight Log
            </h2>
            <p className="text-slate-300 leading-relaxed text-xl md:text-2xl font-light">
              A continuous trajectory across the tech and airline industries, optimizing revenue and building predictive systems.
            </p>
          </div>

          {/* Section 2: Timeline Cards */}
          {timelineData.map((item, index) => (
            <div key={index} className="w-[80vw] md:w-[35vw] flex-shrink-0 relative group pt-8 pb-8">
              <div className="backdrop-blur-xl bg-slate-800/80 border border-slate-600 p-10 md:p-12 rounded-3xl shadow-2xl hover:border-emerald-500/50 hover:bg-slate-800 transition-all ml-8">
                
                {/* Nodo de punto colocado perfectamente sobre la línea discontinua */}
                <div className="absolute top-1/2 -translate-y-1/2 -left-6 w-12 h-12 bg-slate-900 border-2 border-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.4)] z-30">
                  {item.icon}
                </div>

                <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">
                  Departure: {item.year}
                </p>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Section 3: Outro CTA */}
          <div className="w-[80vw] md:w-[60vw] flex-shrink-0 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">Ready for the next destination?</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <a
                href="/CV_Javier_Aguilera.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-200 transition-colors text-lg"
              >
                Download Manifesto
              </a>
              <a
                href="#contact"
                className="border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-full font-bold hover:bg-emerald-500/10 transition-colors backdrop-blur-sm text-lg pointer-events-auto"
              >
                Open Communications
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default AviationJourney;
