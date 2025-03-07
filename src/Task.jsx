import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../src/assets/logo.png";
import logo1 from "../src/assets/logo2.png";
import logo2 from "../src/assets/logo3.png";
import logo3 from "../src/assets/logo1.png";
import logo4 from "../src/assets/logo2.png";
import logo5 from "../src/assets/logo3.png";
import logo6 from "../src/assets/logo1.png";
import logo7 from "../src/assets/logo2.png";
import logo8 from "../src/assets/logo3.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
const Task = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      <nav className="sticky top-0 w-full bg-[#0F0F0F]  text-white px-6 py-4 flex justify-between items-center z-50">
        <div className="text-2xl font-bold">
          <img src={logo} alt="logo" className="w-50" />
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <div className="relative">
            <a
              className="text-white hover:text-yellow-400 flex items-center gap-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              Company <FiChevronDown className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </a>

            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: -80 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 bg-gray-800 rounded shadow-lg mt-2 w-40"
              >
                <a href="#" className="text-white block px-4 py-2 hover:bg-gray-700">About Us</a>
                <a href="#" className="text-white block px-4 py-2 hover:bg-gray-700">Careers</a>
              </motion.div>
            )}
          </div>
          <a href="#" className="text-white hover:text-yellow-400">Services</a>
          <a href="#" className="text-white hover:text-yellow-400">Resources</a>
          <button className="border bg-[#0F0F0F] text-yellow-400 border-yellow-400 px-4 py-2 rounded-3xl">Contact</button>
        </div>

        <div className="md:hidden bg-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 bg-gray-800 w-full flex flex-col items-center py-4 space-y-4 md:hidden"
          >
           <div className="w-full">
  <a
    className="flex justify-center items-center gap-1 hover:text-yellow-400"
    onClick={() => setDropdownOpen(!dropdownOpen)}
  >
    Company <FiChevronDown />
  </a>
  {dropdownOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-700 py-2"
    >
      <a href="#" className="block px-4 py-2 hover:bg-gray-600">About Us</a>
      <a href="#" className="block px-4 py-2 hover:bg-gray-600">Careers</a>
    </motion.div>
  )}
</div>

            <a href="#" className="hover:text-yellow-400">Services</a>
            <a href="#" className="hover:text-yellow-400">Resources</a>
            <button className="bg-yellow-400 px-4 py-2 rounded-3xl">Contact</button>
          </motion.div>
        )}
      </nav>

  <section className="flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white py-20 px-4 md:px-8">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight text-center"
        >
          <p>Attract</p>
          <span className="flex flex-col md:flex-row items-center justify-center -mt-4 md:-mt-10">
            <p className="mt-0 text-orange-400">New</p>
            <p className="text-green-400 ml-2">Leads</p>
          </span>
          <p className="-mt-4 md:-mt-10">like never</p>
          <p className="-mt-4 md:-mt-10">before</p>
        </motion.h1>

        <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="mb-6 text-base text-gray-300 px-4 md:px-0 text-center">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
        </motion.p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-5 w-full md:justify-center items-center">
          <input type="email" placeholder="Email" className="w-full md:w-[345px] px-4 py-2 border-2 border-[#A1AEBF] rounded-3xl bg-gray-800 outline-none" />
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-3xl">ATTRACT</button>
        </div>
      </section>
      <section className="py-16 px-8 w-full bg-black text-white overflow-hidden">
      <div className="flex justify-between  items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted by 200+ companies <br /> around the world
        </h2>
        <p className="text-gray-400 text-[16px]">
        Vulputate molestie molestie amet leo blandit accumsan. Sapien sed amet tellus <br /> purus sit odio eget. Diam morbi faucibus vitae neque id in. Nullam sed et dapibus <br /> nunc, porta enim orci urna, sit. Lectus ac.
        </p>
      </div>

      <div className="relative w-full overflow-hidden py-6">
        <motion.div
          className="flex space-x-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 w-40 h-16 p-4 bg-black border border-[#A1AEBF] rounded-lg flex items-center justify-center">
              <img src={logo} alt={`logo-${idx}`} className="max-h-10" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default Task;
