const Navbar = () => {
    return (
      <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">Javier Aguilera</h1>
        <div className="space-x-4">
          <a href="#start" className="hover:text-blue-400 transition">Start</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;