// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiAmazonredshift,
  SiApacheairflow
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";
import { BiBarChartAlt2, BiNetworkChart } from "react-icons/bi";
import { GiArtificialIntelligence } from "react-icons/gi";
import projects from "../data/projects";
import { FaGithub } from "react-icons/fa";

const techIcons = {
  Python: () => <SiPython size={20} />,
  AWS: () => <FaAws size={20} />,
  Redshift: () => <SiAmazonredshift size={20} />,
  Airflow: () => <SiApacheairflow size={20} />,
  "Machine Learning": () => <FaBrain size={20} />,
  MLOps: () => <TbSettingsAutomation size={20} />,
  "Data Viz": () => <BiBarChartAlt2 size={20} />,
  "Deep Learning": () => <GiArtificialIntelligence size={20} />,
  API: () => <BiNetworkChart size={20} />,
};

const Projects = () => {
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="bg-gray-100 flex flex-col pt-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 shrink-0">Selected Projects</h2>

      {/* 🔥 Featured Projects (Sticky Scroll Layering) */}
      <div className="relative w-full">
        {featured.map((project, i) => (
          <div 
            key={i} 
            className="sticky top-0 min-h-screen w-full flex items-center justify-center overflow-hidden"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            />
            {/* Dark gradient overlay for readability & blending */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/80 z-0 pointer-events-none" />

            {/* Content Card (Glassmorphism) */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 w-full max-w-5xl p-10 md:p-14 backdrop-blur-md bg-white/5 border border-white/10 rounded-[2rem] shadow-2xl mx-6 md:mx-auto"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300 drop-shadow-lg">
                  {project.title}
                </h3>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center bg-white/10 hover:bg-white/20 transition rounded-full p-4 border border-white/20 shrink-0"
                >
                  <FaGithub size={32} className="text-white" />
                </a>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-200 font-light mb-10 leading-relaxed max-w-3xl drop-shadow-md">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {project.tech.map((tech, i) => (
                  <div key={i} className="flex items-center gap-2 bg-black/40 text-emerald-300 px-5 py-2.5 rounded-full text-sm md:text-base font-medium backdrop-blur-md border border-emerald-500/30">
                    {techIcons[tech]?.() ?? "•"} <span className="drop-shadow">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* 📋 Other Projects */}
      <div className="w-full bg-gray-900 py-24 px-6 md:px-20 z-20 relative shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <h3 className="text-3xl font-bold text-white mb-10 text-center">More Work</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {others.map((project, i) => (
            <div key={i} className="bg-gray-800/80 p-8 rounded-2xl shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1 transition duration-300 border border-gray-700">
              <h3 className="text-xl font-bold text-emerald-400 mb-3">{project.title}</h3>
              <p className="text-base text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-gray-900/50 text-emerald-200 px-3 py-1.5 rounded-full text-xs font-semibold">
                    {techIcons[tech]?.() ?? "•"} <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
