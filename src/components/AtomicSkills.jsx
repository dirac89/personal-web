// src/components/AtomicSkills.jsx
import { motion } from "framer-motion";
import {
  SiPython,
  SiAmazonredshift,
  SiApacheairflow,
  SiPostgresql,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";
import { BiBarChartAlt2 } from "react-icons/bi";
import { GiArtificialIntelligence } from "react-icons/gi";

const categories = [
  {
    label: "Languages",
    skills: [
      { icon: <SiPython size={24} />, name: "Python" },
      { icon: <SiPostgresql size={24} />, name: "SQL" },
    ],
  },
  {
    label: "Cloud",
    skills: [
      { icon: <FaAws size={24} />, name: "AWS" },
      { icon: <SiAmazonredshift size={24} />, name: "Redshift" },
    ],
  },
  {
    label: "ML / AI",
    skills: [
      { icon: <FaBrain size={24} />, name: "Machine Learning" },
      { icon: <GiArtificialIntelligence size={24} />, name: "Deep Learning" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { icon: <SiApacheairflow size={24} />, name: "Airflow" },
      { icon: <TbSettingsAutomation size={24} />, name: "MLOps" },
      { icon: <BiBarChartAlt2 size={24} />, name: "Data Viz" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const AtomicSkills = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((cat, ci) => (
        <motion.div
          key={cat.label}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-5"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
            {cat.label}
          </p>
          <div className="flex flex-col gap-3">
            {cat.skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-gray-700 group cursor-default"
              >
                <span className="text-emerald-600 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </span>
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AtomicSkills;
