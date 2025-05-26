// src/components/AtomicSkills.jsx
import { motion } from "framer-motion";
import {
  SiPython,
  SiAmazonaws,
  SiAmazonredshift,
  SiApacheairflow
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";
import { BiBarChartAlt2 } from "react-icons/bi";
import { GiArtificialIntelligence } from "react-icons/gi";

const skills = [
  { icon: <SiPython size={28} />, name: "Python" },
  { icon: <SiAmazonaws size={28} />, name: "AWS" },
  { icon: <SiAmazonredshift size={28} />, name: "Redshift" },
  { icon: <SiApacheairflow size={28} />, name: "Airflow" },
  { icon: <FaBrain size={28} />, name: "Machine Learning" },
  { icon: <TbSettingsAutomation size={28} />, name: "MLOps" },
  { icon: <BiBarChartAlt2 size={28} />, name: "Data Viz" },
  { icon: <GiArtificialIntelligence size={28} />, name: "Deep Learning" },
];

const radii = [100, 140];
const angleStep = (2 * Math.PI) / skills.length;

const AtomicSkills = ({ profile }) => {
  return (
    <div className="relative h-[400px] w-full flex items-center justify-center">
      {/* Foto central */}
      <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src={profile} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Skills orbitando en distintas capas */}
      {radii.map((radius, rIdx) => (
        <motion.div
          key={rIdx}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25 - rIdx * 5, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2"
        >
          {skills.map((skill, i) => {
            const angle = i * angleStep + (rIdx === 1 ? angleStep / 2 : 0);
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            return (
              <div
                key={`${skill.name}-${rIdx}`}
                className="absolute flex flex-col items-center text-sm font-semibold bg-white text-black p-2 rounded shadow w-16 h-16 justify-center"
                style={{
                  transform: `translate(${x}px, ${y}px)`
                }}
              >
                {skill.icon}
              </div>
            );
          })}
        </motion.div>
      ))}
    </div>
  );
};

export default AtomicSkills;