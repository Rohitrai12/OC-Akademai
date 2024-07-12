import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Images/logo.png';

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  const toggleInputVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleNav = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="m-auto mb-2">
      {/* Navbar toggle button */}
      <button onClick={toggleNav} className="m-5 lg:hidden flex justify-center w-8 h-8 bg-transparent text-[#091D4F] float-right   relative rounded-full" style={{zIndex:"1"}}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Navbar menu */}
      <div className={`lg:flex lg:flex-col lg:items-center ${navToggle ? 'block' : 'hidden'}`}>
        {/* Top section */}
        <div className="lg:flex lg:justify-between lg:items-center pl-[39px] lg:pt-0 pt-[30px] pb-4 items-center lg:w-full" style={{ boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)" }}>
          <div>
            <select name="" id="" className="bg-[#96D4F7] text-white p-2 rounded-full">
              <option value="">North America</option>
              <option value="">Europe</option>
            </select>
          </div>

          <div className="lg:flex items-center lg:w-[50%] justify-evenly mt-4 lg:mt-0">
          <div className="relative">
      <div className="p-4 rounded-full flex items-center shadow-lg w-fit">
        {/* Input field with transition */}
        <input
          type="text"
          placeholder="Search here ..."
          className={`border-none transition-all duration-500 transform ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}
          style={{ width: isVisible ? '150px' : '0' }}
        />
        {/* SVG icon */}
        <svg
          onClick={toggleInputVisibility}
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-2 cursor-pointer"
        >
          <g clipPath="url(#clip0_3_2506)">
            <g clipPath="url(#clip1_3_2506)">
              <path
                d="M14.6912 13.1873L10.2656 8.76494C10.8765 7.86521 11.2317 6.78287 11.2317 5.61753C11.2351 2.51992 8.71514 0 5.61753 0C2.51992 0 0 2.51992 0 5.61753C0 8.71514 2.51992 11.2351 5.61753 11.2351C6.78287 11.2351 7.86521 10.8798 8.76494 10.2689L13.1873 14.6912C13.3931 14.8971 13.6653 15.0033 13.9376 15.0033C14.2098 15.0033 14.4821 14.9004 14.6879 14.6912C15.1062 14.2762 15.1062 13.6023 14.6912 13.1873ZM2.12483 5.61753C2.12483 3.6919 3.6919 2.12483 5.61753 2.12483C7.54316 2.12483 9.11023 3.6919 9.11023 5.61753C9.11023 7.54316 7.54316 9.11023 5.61753 9.11023C3.6919 9.11023 2.12483 7.54316 2.12483 5.61753Z"
                fill="#091D4F"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_3_2506">
              <rect width="15" height="15" fill="white" />
            </clipPath>
            <clipPath id="clip1_3_2506">
              <rect width="15" height="15" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
            <Link to="#" className="lg:inline block  m-2">Try Studio Free</Link>
            <Link to="#" className="lg:inline block  m-2">Support</Link>
            <Link to="#" className="lg:inline block m-2">Contact Us</Link>
            <Link to="#" className="lg:inline block  m-2 bg-[#96D4F7] text-white p-2 w-[120px] rounded-full h-fit text-center">Log In</Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="lg:flex lg:justify-between lg:items-center w-[100%] pl-[39px] pb-4 items-center">
          <div>
            <img src={Logo} alt="Logo" className="h-12" />
          </div>

          <div className="lg:flex items-center lg:w-[50%] justify-evenly mt-4 lg:mt-0">
            <Link to="#" className="lg:inline block  m-2">K-12</Link>
            <Link to="#" className="lg:inline block  m-2">Higher ED</Link>
            <Link to="#" className="lg:inline block  m-2">Professional ED</Link>
            <Link to="#" className="lg:inline block  m-2">Resources</Link>
            <Link to="#" className="lg:inline block  m-2">News & Events</Link>
            <Link to="#" className="lg:inline block  m-2">About Us</Link>
            <Link to="#" className="lg:inline block  m-2 bg-[#091D4F] text-white p-2 w-[120px] rounded-full h-fit text-center">Get a Studio</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;