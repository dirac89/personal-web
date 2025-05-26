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
    <section id="projects" className="bg-gray-100 py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Selected Projects</h2>

      {/* 🔥 Featured Projects */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {featured.map((project, i) => (
          <a
            key={i}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border-2 border-green-500 rounded-lg p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-green-700">{project.title}</h3>
              <FaGithub size={20} className="text-green-600" />
            </div>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <div key={i} className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full text-sm">
                  {techIcons[tech]?.() ?? "•"} <span>{tech}</span>
                </div>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* 📋 Other Projects */}
      <div className="grid md:grid-cols-2 gap-6">
        {others.map((project, i) => (
          <div key={i} className="bg-white p-6 rounded shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <div key={i} className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-full text-sm">
                  {techIcons[tech]?.() ?? "•"} <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
