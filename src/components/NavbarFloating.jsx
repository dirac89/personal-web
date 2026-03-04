// src/components/NavbarFloating.jsx
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope } from "react-icons/fa";
import useActiveSection from "../hooks/useActiveSection";

const NavbarFloating = () => {
  const active = useActiveSection(["inicio", "proyectos", "about", "contact"]);

  const linkStyle = (id) =>
    `text-gray-600 hover:text-emerald-600 transition ${
      active === id ? "text-emerald-600 scale-110" : ""
    }`;

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full px-6 py-3 flex gap-6 items-center z-50 border border-gray-200">
      <a href="#inicio" className={linkStyle("inicio")}>
        <FaHome size={20} />
      </a>
      <a href="#proyectos" className={linkStyle("proyectos")}>
        <FaProjectDiagram size={20} />
      </a>
      <a href="#about" className={linkStyle("about")}>
        <FaUser size={20} />
      </a>
      <a href="#contact" className={linkStyle("contact")}>
        <FaEnvelope size={20} />
      </a>
    </nav>
  );
};

export default NavbarFloating;