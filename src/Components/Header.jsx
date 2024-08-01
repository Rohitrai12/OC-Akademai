import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Images/Color-JO.png";
import icon from "../assets/Images/browser.png";
import { useAuth0 } from "@auth0/auth0-react";


function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const [showWhiteBackground, setShowWhiteBackground] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();


  const toggleInputVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleNav = () => {
    setNavToggle(!navToggle);
  };

  const showDropdown = (link) => {
    if (link !== "Get a Studio") {
      // Only show dropdown for specific links
      setActiveLink(link);
      setDropdownVisible(true);
    }
  };

  const hideDropdown = () => {
    setDropdownVisible(false);
    setActiveLink(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowWhiteBackground(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="m-auto mb-2 fixed w-[100%] top-0 z-[100] lg:p-0 p-5 bg-white]">
      {/* Navbar toggle button */}
      <button
        onClick={toggleNav}
        className=" lg:hidden flex justify-center w-8 h-8 bg-transparent text-[#091D4F] float-right relative rounded-full"
        style={{ zIndex: "1" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Navbar menu */}
      <div
        className={`lg:flex lg:flex-col lg:items-center ${navToggle ? "block" : "hidden"
          } ${showWhiteBackground ? "bg-white" : ""}`}
      >
        {/* Top section */}
        <div className="w-[100%] bg-white boxShadow">
          <div className="xl:w-[80%] lg:w-[90%] w-full lg:flex lg:justify-between lg:items-center bg-white p-2 items-center m-auto">
            <div>
              <select
                name=""
                id=""
                className="bg-[#091d4f] text-white p-1.5 px-1.5 rounded-full"
              >
                <option value="">North America</option>
                <option value="">Uganda</option>
                <option value="">Europe</option>
                <option value="">South Africa</option>
                <option value="">Nigeria</option>
                <option value="">Italy</option>
                <option value="">Spain</option>
                <option value="">Germany</option>
                <option value="">Benelux</option>
                <option value="">United Kingdom</option>
                <option value="">Australia</option>
                <option value="">Latin America</option>
                <option value="">Pakistan</option>
                <option value="">India</option>
              </select>
            </div>

            <div className="lg:flex items-center lg:w-[60%] xl:w-[53%%] justify-between mt-4 lg:mt-0">
              <div className="relative">
                <div
                  className={`p-2 rounded-full flex items-center justify-center ${isVisible ? "shadow-lg" : ""
                    } w-fit`}
                >
                  {/* Input field with transition */}
                  <input
                    type="text"
                    placeholder="Search here ..."
                    className={`border-none transition-all duration-500 transform ${isVisible ? "translate-x-0" : "-translate-x-full"
                      }`}
                    style={{ width: isVisible ? "150px" : "0" }}
                  />
                  {/* SVG icon */}
                  <svg
                    onClick={toggleInputVisibility}
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer"
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
              <Link to="#" className="lg:inline block font-semibold m-2 active:scale-90 transition duration-300">
                Try Studio Free
              </Link>
              <Link to="/support" className="lg:inline block font-semibold m-2 active:scale-90 transition duration-300">
                Support
              </Link>
              <Link to="/contact-us" className="lg:inline block font-semibold m-2 active:scale-90 transition duration-300">
                Contact Us
              </Link>
              <Link>
                <button onClick={() => loginWithRedirect()} className="lg:inline block font-semibold m-2 bg-[#091d4f] text-white p-2 w-[120px] rounded-full h-fit text-center active:scale-90 transition duration-300"
                >Log In</button>
              </Link>
       
            </div>
          </div>
        </div>
        {/* Bottom section */}
        <div className="lg:flex lg:justify-between lg:items-center xl:w-[80%] lg:w-[90%] p-4 items-center lg:bg-transparent bg-white">
          <div>
            <Link to={"/"}>
              <img src={Logo} alt="Logo" className="w-[204px]" />
            </Link>
          </div>

          <div className="lg:flex items-center xl:w-[70%] justify-between mt-4 lg:mt-0 w-[80%]">
            {[
              { name: "K-12", link: "#" },
              { name: "Higher ED", link: "#" },
              { name: "Professional ED", link: "#" },
              { name: "Resources", link: "#" },
              { name: "News & Events", link: "#" },
              { name: "About Us", link: "/about" },
              { name: "Get a Studio", link: "#", button: true },
            ].map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => showDropdown(item.name)}
                onMouseLeave={hideDropdown}
              >
                <Link
                  to={item.link}
                  className={`lg:inline block font-semibold m-2 ${item.button
                    ? "bg-[#091d4f] text-white p-2 w-fit rounded-full "
                    : ""
                    }`}
                >
                  {item.name}
                </Link>
                {dropdownVisible && activeLink === item.name && (
                  <div className="absolute top-full left-0 lg:w-[500px] shadow-md p-4 bg-white mt-7 rounded border w-[90%]  z-10">
                    <div>
                      <p className="flex gap-3 items-center	">
                        <img src={icon} alt="" />
                        <h1 className="font-semibold">Studio</h1>
                      </p>
                      <p className="mt-3 text-sm">
                        Every academic dream is brought to life through unique
                        and personalized learning experiences tailored to each
                        student,
                      </p>
                    </div>
                    <div>
                      <Link
                        to="#"
                        className="block text-[#091D4F] mt-4 font-semibold"
                      >
                        Option 3
                      </Link>

                      <Link
                        to="#"
                        className="block text-[#091D4F] mt-2 font-semibold"
                      >
                        Option 3
                      </Link>

                      <Link
                        to="#"
                        className="block text-[#091D4F] mt-2 font-semibold"
                      >
                        Option 3
                      </Link>

                      <Link
                        to="#"
                        className="block text-[#091D4F] mt-2 font-semibold"
                      >
                        Option 3
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;