import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdMenu } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div>
        {/* Top bar */}
        <div className="top py-[0.7rem] px-4 md:px-[4rem] border-b border-gray-300 flex justify-between items-center">
          <div className="left">
            <div className="bg-[#7DCAF5] text-white py-1 px-4 rounded-full flex items-center text-sm font-medium cursor-pointer">
              North America <IoMdArrowDropdown className="ml-1 mt-[2px]" />
            </div>
          </div>
          <div className="right flex items-center space-x-4 gap-[27px]">
            <RiSearchLine className="text-gray-600" />
            {/* Menu items */}
            <div className="hidden md:flex space-x-4 font-medium gap-[27px]">
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
              >
                Try Canvas Free
              </Link>
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
              >
                Support
              </Link>
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-500 transition duration-300"
              >
                Contact Us
              </Link>
              <button className="bg-[#7DCAF5] text-white py-2 px-4 rounded-full flex items-center space-x-1">
                Log In <IoMdArrowDropdown className="text-white" />
              </button>
            </div>
            {/* Mobile menu toggle */}
            <div className="md:hidden">
              <button
                className="text-gray-600 hover:text-blue-500 transition duration-300"
                onClick={toggleMenu}
              >
                <IoMdMenu size={24} />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-100 py-2 px-4">
            <Link
              to="/"
              className="block text-gray-600 hover:text-blue-500 transition duration-300 py-1"
            >
              Try Canvas Free
            </Link>
            <Link
              to="/"
              className="block text-gray-600 hover:text-blue-500 transition duration-300 py-1"
            >
              Support
            </Link>
            <Link
              to="/"
              className="block text-gray-600 hover:text-blue-500 transition duration-300 py-1"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
      {/* Bottom header */}
      <div className="bottom-header py-4 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="logo mb-4 md:mb-0">
          <img src="/logo.png" alt="Logo" className="w-[150px] md:w-[217px] mt-[-54px]" />
        </div>
        {/* Right side links and button */}
        <div className="right flex flex-col md:flex-row items-center">
          <div className="links mb-4 md:mb-0 md:mr-4 flex flex-wrap space-x-4 font-medium text-center">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
            >
              K-12
            </Link>
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
            >
              HIGHER ED
            </Link>
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
            >
              PROFESSIONAL ED
            </Link>
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
            >
              RESOURCES
            </Link>
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
            >
              NEWS & EVENTS
            </Link>
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-500 transition duration-300"
            >
              ABOUT US
            </Link>
          </div>
          <button className="bg-[#091D4F] text-white py-2 px-6 rounded-full text-sm md:text-base">
            Get A Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
