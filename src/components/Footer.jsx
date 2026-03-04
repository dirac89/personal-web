// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 mt-20">
      <div className="space-y-2">
        <p className="text-sm">© {new Date().getFullYear()} Javier Aguilera. All rights reserved.</p>
        <div className="space-x-4 text-sm">
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
            GitHub
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
            LinkedIn
          </a>
          <a href="mailto:tuemail@example.com" className="hover:text-emerald-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;