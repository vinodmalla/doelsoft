import React, { useState } from "react";
import { FaInstagram, FaDiscord, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg"; // update path
import { Link } from "react-router";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Doelsoft" className="absolute w-[178px] h-auto left-[76px] top-[29px]" />
         
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8" role="navigation">
          <Link to="/" className="text-[#000000] hover:text-[#EF0E0E] font-medium">Home</Link>
          <Link to="/solutions" className="text-[#000000] hover:text-[#EF0E0E] ac font-medium">Solutions</Link>
          <Link to="/talenthub" className="text-[#000000] hover:text-[#EF0E0E] font-medium">Talent Hub</Link>
          <Link to="/chooseus" className="text-[#000000] hover:text-[#EF0E0E] font-medium">Why choose us</Link>
          <Link to="/carrers" className="text-[#000000] hover:text-[#EF0E0E] font-medium">Careers</Link>
          <Link to="/insights" className="text-[#000000] hover:text-[#EF0E0E] font-medium">Insights</Link>
          <Link to="/contact" className="text-[#000000] hover:text-[#EF0E0E] font-medium">Contact</Link>
        </nav>

        {/* Social Icons (desktop only) */}
        <div className="hidden md:flex items-center space-x-5">
          <a href="#"><FaInstagram className="text-xl text-gray-700 hover:text-red-600" /></a>
          <a href="#"><FaDiscord className="text-xl text-gray-700 hover:text-red-600" /></a>
          <a href="#"><FaGithub className="text-xl text-gray-700 hover:text-red-600" /></a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-6">
          <Link onClick={()=>setIsOpen(isOpen=>!isOpen)} to="/" className="text-[#000000] hover:text-[#EF0E0E] font-medium">Home</Link>
          <Link onClick={()=>setIsOpen(isOpen=>!isOpen)}  to="/solutions" className="text-[#000000] hover:text-[#EF0E0E] ac font-medium">Solutions</Link>
          <Link onClick={()=>setIsOpen(isOpen=>!isOpen)} to="/talenthub" className="text-[#000000] hover:text-[#EF0E0E] font-medium">Talent Hub</Link>
          <Link onClick={()=>setIsOpen(isOpen=>!isOpen)} to="/chooseus" className="text-[#000000] hover:text-[#EF0E0E] font-medium">Why choose us</Link>
          <Link onClick={()=>setIsOpen(isOpen=>!isOpen)} to="/carrers" className="text-[#000000] hover:text-[#EF0E0E] font-medium">Careers</Link>
          <Link onClick={()=>setIsOpen(isOpen=>!isOpen)} to="/insights" className="text-[#000000] hover:text-[#EF0E0E] font-medium">Insights</Link>
          <Link onClick={()=>setIsOpen(isOpen=>!isOpen)} to="/contact" className="text-[#000000] hover:text-[#EF0E0E] font-medium">Contact</Link>
            {/* Social Icons inside mobile menu */}
            <div className="flex space-x-6 pt-4">
              <a href="#"><FaInstagram className="text-xl text-gray-700 hover:text-red-600" /></a>
              <a href="#"><FaDiscord className="text-xl text-gray-700 hover:text-red-600" /></a>
              <a href="#"><FaGithub className="text-xl text-gray-700 hover:text-red-600" /></a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
