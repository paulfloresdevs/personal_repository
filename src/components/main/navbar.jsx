import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-1/4 bg-gray-900 shadow-md z-50 rounded-full">
      <div className="container mx-auto flex items-center justify-center px-6 py-4">

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-100 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center md:space-x-8 space-y-2 md:space-y-0 mt-4 md:mt-0 w-full md:w-auto justify-center`}
        >
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/porfolio"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-blue-300 transition duration-300" 
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
