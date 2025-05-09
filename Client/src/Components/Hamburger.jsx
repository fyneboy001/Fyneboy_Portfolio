import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger button */}
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-5 relative">
          <span
            className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 top-2.5" : "top-0"
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "top-2.5"
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 top-2.5" : "top-0"
            }`}
          ></span>
        </div>
      </button>
      {/* Menu Items */}
      <div
        className={`absolute top-12 left-0 w-48 bg-white shadow-lg rounded-md p-4 space-y-2 ${
          isOpen ? "block" : "hidden"
        } md:hidden`}
      >
        <a
          href="#About"
          className="block text-white hover:bg-red-600 p-2 rounded-md"
        >
          About Me
        </a>
        <a
          href="#Portfolio"
          className="block text-white hover:bg-red-600 p-2 rounded-md"
        >
          Portfolio
        </a>
        <a
          href="#Services"
          className="block text-white hover:bg-red-600 p-2 rounded-md"
        >
          Services
        </a>
        <a
          href="#Experience"
          className="block text-white hover:bg-red-600 p-2 rounded-md"
        >
          Experience
        </a>
        <a
          href="#Contact"
          className="block text-white hover:bg-red-600 p-2 rounded-md"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
