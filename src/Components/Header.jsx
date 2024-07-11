import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri"; // Changed to RiSearchLine from CiSearch
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="top py-[0.7rem] pl-[4rem] px-[1.3rem] border-b border-gray-300 flex justify-between">
        <div className="left">
          <div className="bg-[#7DCAF5] text-white py-1 px-4 rounded-full flex items-center text-sm font-medium cursor-pointer">
            North America <IoMdArrowDropdown className="ml-1 mt-[2px]" />
          </div>
        </div>
        <div className="right flex items-center space-x-4 gap-[27px]">
          <RiSearchLine className="text-gray-600" />
          <div className="flex space-x-4 font-medium gap-[27px]">
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
          </div>
          <button className="bg-[#7DCAF5] text-white py-2 px-4 rounded-full flex items-center space-x-1">
            Log In <IoMdArrowDropdown className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
