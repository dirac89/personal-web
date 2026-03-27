import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

import bgVideo from '../assets/Video_Efecto_Apple_para_Web.mp4';
import getExperienceYears from "../utils/getExperienceYears";
import AnimatedCounter from "./AnimatedCounter";
import projects from "../data/projects";

const HeroVideo = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const handleTimeUpdate = (e) => {
    if (e.target.currentTime >= 6) {
      e.target.currentTime = 2;
      // Ensure it keeps playing after reset if paused by any chance
      e.target.play().catch(() => { });
    }
  };

  const handleLoadedData = (e) => {
    e.target.currentTime = 2;
  };

  return (
    <motion.div
      style={{ scale, opacity, y }}
      className="absolute inset-0 w-full h-full origin-center will-change-transform will-change-opacity"
    >
      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </motion.div>
  );
};

const ScrollTransitionSection = ({ scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const y = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);

  const experienceYears = getExperienceYears();
  const deliveredSolutions = projects.length;

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center px-4 pointer-events-none will-change-transform will-change-opacity"
    >
      <div className="pointer-events-auto">
        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-8 drop-shadow-lg">
          Building intelligent systems that scale
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-12">
          From conception to deployment, I build robust data architectures<br />
          that transform complex realities into elegant models.
        </p>

        {/* Animated Counters from original Hero */}
        <div className="flex gap-16 justify-center">
          <div className="text-center">
            <AnimatedCounter end={experienceYears} className="text-5xl md:text-6xl font-black text-white drop-shadow-md" />
            <p className="tracking-widest uppercase text-sm mt-3 text-emerald-400 font-bold">Flight Hours (Years)</p>
          </div>
          <div className="text-center">
            <AnimatedCounter end={deliveredSolutions} className="text-5xl md:text-6xl font-black text-white drop-shadow-md" />
            <p className="tracking-widest uppercase text-sm mt-3 text-emerald-400 font-bold">Routes Launched</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function HeroScroll() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-[#0a0a0a] font-sans">

      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col bg-[#0a0a0a]">

        <HeroVideo scrollYProgress={scrollYProgress} />

        <motion.div
          style={{ opacity: heroTextOpacity, y: heroTextY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none will-change-transform will-change-opacity"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="pointer-events-auto flex flex-col items-center"
          >
            <motion.p
              variants={itemVariants}
              className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4 drop-shadow-md"
            >
              Flight Plan Authorized
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-2xl"
            >
              Javier Aguilera
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-slate-200 font-light tracking-wide uppercase mb-10 drop-shadow-md"
            >
              Senior Data Scientist
            </motion.p>

            <motion.a
              href="#proyectos"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-emerald-600/90 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:shadow-[0_0_30px_rgba(5,150,105,0.6)] hover:bg-emerald-500 transition-all border border-emerald-400/30"
            >
              Explore Destinations
            </motion.a>
          </motion.div>
        </motion.div>

        <ScrollTransitionSection scrollYProgress={scrollYProgress} />

      </div>
    </div>
  );
}
