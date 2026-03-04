// src/components/About.jsx
import { motion } from "framer-motion";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { useState } from "react";

const timelineData = [
  {
    year: "2018 - 2022",
    title: "Air Europa Airlines",
    description: "Joined as a Data Scientist focusing on forecasting and pricing optimization.",
    icon: <FaPlaneDeparture className="text-emerald-600" size={18} />,
  },

  {
    year: "2022 - 2023",
    title: "Strategy Big Data",
    description: "Joined as a Senior Data Scientist focusing on time series forecasting and recommender models.",
    icon: <FaPlaneDeparture className="text-emerald-600" size={18} />,
  },

//   {
//     gap: true,
//     label: "Years of growth",
//   },
  {
    year: "2023 - Present",
    title: "Knowmad Mood (Client: Iberia - IAG Group)",
    description: "Senior Data Scientist working on machine learning, MLOps and revenue management solutions.",
    icon: <FaPlaneArrival className="text-emerald-600" size={18} />,
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
      className="bg-white py-20 px-6 md:px-20"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="relative border-l-4 border-emerald-600 ml-4">
          {timelineData.map((item, index) => (
            item.gap ? (
              <div
                key={index}
                className="relative mb-10 ml-6 text-gray-500 text-sm italic flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                <div className="border-t border-dashed border-gray-400 flex-grow h-px mt-1"></div>
                <span>{item.label}</span>
                <div className="border-t border-dashed border-gray-400 flex-grow h-px mt-1"></div>
                <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
              </div>
            ) : (
              <motion.div
                key={index}
                onMouseEnter={() => handleHover(index)}
                onTouchStart={() => handleTouch(index)}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
                className={`mb-10 ml-6 transition-opacity duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== index ? "opacity-40" : "opacity-100"
                }`}
              >
                <div className="absolute w-4 h-4 bg-emerald-600 rounded-full -left-2.5 top-1 flex items-center justify-center">
                  {item.icon || null}
                </div>
                <h3
                  className={`text-xl font-semibold mt-0 mb-1 transition-colors duration-300 ${
                    hoveredIndex === index ? "text-emerald-600" : "text-gray-800"
                  }`}
                >
                  {item.year} : {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              </motion.div>
            )
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <a
            href="/CV_Javier_Aguilera.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded font-semibold shadow hover:bg-emerald-700 transition"
          >
            Download CV
          </a>
          <br />
          <a
            href="#contact"
            className="inline-block border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded font-semibold hover:bg-emerald-600 hover:text-white transition"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;