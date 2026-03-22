// src/components/About.jsx
import { motion } from "framer-motion";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { useState } from "react";

const timelineData = [
  {
    year: "2018 - 2022",
    title: "Air Europa Airlines",
    description: "Joined as a Data Scientist focusing on forecasting and pricing optimization.",
    icon: <FaPlaneDeparture className="text-emerald-400" size={18} />,
  },

  {
    year: "2022 - 2023",
    title: "Strategy Big Data",
    description: "Joined as a Senior Data Scientist focusing on time series forecasting and recommender models.",
    icon: <FaPlaneDeparture className="text-emerald-400" size={18} />,
  },

//   {
//     gap: true,
//     label: "Years of growth",
//   },
  {
    year: "2023 - Present",
    title: "Knowmad Mood (Client: Iberia - IAG Group)",
    description: "Senior Data Scientist working on machine learning, MLOps and revenue management solutions.",
    icon: <FaPlaneArrival className="text-emerald-400" size={18} />,
  },
];

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleTouch = (index) => {
    setHoveredIndex(prev => prev === index ? null : index);
  };

  return (
    <section
      id="about"
      className="py-32 px-12 md:px-32 relative z-10"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-start pl-8 md:pl-0">
        
        {/* Title area */}
        <div className="md:w-1/3">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
          >
            Flight Log
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 leading-relaxed text-lg"
          >
            A chronological mapping of my trajectory across the tech and airline industry.
          </motion.p>
        </div>

        {/* Timeline area */}
        <div className="md:w-2/3 relative border-l-2 border-slate-700 ml-4 md:ml-0">
          {timelineData.map((item, index) => (
            item.gap ? (
              <div
                key={index}
                className="relative mb-12 ml-8 text-gray-500 text-sm italic flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                <div className="border-t border-dashed border-slate-700 flex-grow h-px mt-1"></div>
                <span>{item.label}</span>
                <div className="border-t border-dashed border-slate-700 flex-grow h-px mt-1"></div>
                <div className="w-2 h-2 rounded-full bg-slate-700"></div>
              </div>
            ) : (
              <motion.div
                key={index}
                onMouseEnter={() => handleHover(index)}
                onTouchStart={() => handleTouch(index)}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`mb-14 ml-10 transition-all duration-500 ${
                  hoveredIndex !== null && hoveredIndex !== index ? "opacity-30 scale-95 origin-left" : "opacity-100 scale-100"
                }`}
              >
                <div className="absolute w-8 h-8 bg-slate-800 border border-emerald-500/50 rounded-full -left-4 top-0 flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                  {item.icon || null}
                </div>
                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl hover:bg-white/10 transition-colors">
                  <h3
                    className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
                      hoveredIndex === index ? "text-emerald-400" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-emerald-400/80 text-sm font-semibold uppercase tracking-wider mb-3">Departure: {item.year}</p>
                  <p className="text-base text-gray-300 leading-relaxed font-light">{item.description}</p>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>

      <div className="mt-24 text-center space-x-0 md:space-x-6 space-y-4 md:space-y-0">
        <a
          href="/CV_Javier_Aguilera.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-200 transition-colors"
        >
          Download Manifesto
        </a>
        <a
          href="#contact"
          className="inline-block border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-full font-bold hover:bg-emerald-500/10 transition-colors backdrop-blur-sm"
        >
          Open Communications
        </a>
      </div>
    </section>
  );
};

export default About;