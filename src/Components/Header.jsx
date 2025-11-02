import React, { useState } from "react";
import { FaInstagram, FaDiscord, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white p-[5px] shadow-none">
      <div className="max-w-7xl mx-auto md:ml-3.5 flex items-center justify-between h-16 px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center md:ml-4 lg:ml-14">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Doelsoft"
              className="w-[120px] sm:w-[150px] md:w-[160px] lg:w-[178px] h-auto"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center lg:ml-80 whitespace-nowrap justify-center space-x-4 lg:space-x-8"
          role="navigation"
        >
          {[
            { name: "home", path: "/" },
            { name: "solutions", path: "/solutions" },
            { name: "talenthub", path: "/talenthub" },
            { name: "chooseus", path: "/chooseus" },
            { name: "carrers", path: "/carrers" },
            { name: "insights", path: "/insights" },
            { name: "contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => handleLinkClick(item.name)}
              className={`font-medium transition-colors ${
                activeLink === item.name
                  ? "text-[#EF0E0E]"
                  : "text-[#000000] hover:text-[#EF0E0E]"
              } text-sm lg:text-base`}
            >
              {item.name.charAt(0).toUpperCase() + item.name.slice(1).replace("us", " us")}
            </Link>
          ))}
        </nav>

        {/* Social Icons (Desktop) */}
        <div className="hidden lg:flex ml-6 lg:ml-36 items-center space-x-4 lg:space-x-5">
          <a href="#"><FaInstagram className="text-lg lg:text-xl text-gray-700 hover:text-red-600" /></a>
          <a href="#"><FaDiscord className="text-lg lg:text-xl text-gray-700 hover:text-red-600" /></a>
          <a href="#"><FaGithub className="text-lg lg:text-xl text-gray-700 hover:text-red-600" /></a>
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
        <div className="md:hidden bg-white shadow-md w-full">
          <nav className="flex flex-col items-center space-y-4 py-6 text-center">
            {[
              { name: "home", path: "/" },
              { name: "solutions", path: "/solutions" },
              { name: "talenthub", path: "/talenthub" },
              { name: "chooseus", path: "/chooseus" },
              { name: "carrers", path: "/carrers" },
              { name: "insights", path: "/insights" },
              { name: "contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="font-medium text-gray-700 hover:text-[#EF0E0E] text-base"
              >
                {item.name.charAt(0).toUpperCase() + item.name.slice(1).replace("us", " us")}
              </Link>
            ))}

            {/* Social Icons */}
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
