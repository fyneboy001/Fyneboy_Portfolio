import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const listStyle = "hover:text-blue-600";
  const barStyle =
    "block bg-white w-[25px] h-[3px] m-[5px] auto transition-all duration-300 ease-in-out";
  return (
    <div className="relative">
      {/* Hamburger button */}
      {/* <button
        className="lg:hidden block p-2 focus:outline-none"
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
      </button> */}
      {/* Menu Items */}
      {/* <div
      // className={`absolute top-12 left-0 w-48 bg-white shadow-lg rounded-md p-4 space-y-2 ${
      //   isOpen ? "block" : "hidden"
      // } md:hidden`}
      >
        <a
          href="#About"
          className="block text-white hover:bg-red-600 p-2 rounded-md"
        >
          About Me
        </a>
        <a href="#Portfolio" className="text-white hover:text-blue-600">
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
      </div> */}
      <ul className="lg:flex gap-15 hidden">
        <li>
          <a href="#" className={listStyle}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={listStyle}>
            About Me
          </a>
        </li>
        <li>
          <a href="#" className={listStyle}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#" className={listStyle}>
            Services
          </a>
        </li>
        <li>
          <a href="#" className={listStyle}>
            Experience
          </a>
        </li>
        <button className="h-9 w-[7rem] bg-gradient-to-r from-blue-300 to-blue-700 rounded-md font-bold cursor-pointer">
          Contact
        </button>
      </ul>
      <div
        className="lg:hidden block cursor-pointer p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block bg-white w-[25px] h-[3px] m-[5px] auto transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-45 top-2.5" : "top-0"
          }`}
        ></span>
        <span
          className={`block bg-white w-[25px] h-[3px] m-[5px] auto transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "top-2.5"
          }`}
        ></span>
        <span
          className={`block bg-white w-[25px] h-[3px] m-[5px] auto transition-all duration-300 ease-in-out ${
            isOpen ? "-rotate-45 top-2.5" : "top-0"
          }`}
        ></span>
      </div>
    </div>
  );
}
