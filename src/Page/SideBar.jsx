import React, { useEffect, useState } from "react";
import {
  MdAccountBox,
  MdDashboard,
  MdContentCopy,
  MdMessage,
} from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";

const Sidebar = ({ collapsed }) => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [products, setProducts] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Logged out");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const fetchProducts = async () => {
    try {
      const url = "https://deploy-mern-app-1-api.vercel.app/products";
      const headers = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      const response = await fetch(url, headers);
      const result = await response.json();
      console.log(result);
      setProducts(result);
    } catch (err) {
      handleError(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav
      className={` top-0 left-0 ${
        collapsed ? "w-20" : "w-72  z-10"
      } bg-[#162958] p-4  z-10 h-[100%] flex flex-col transition-transform duration-300 ease-in-out transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      } lg:static lg:flex lg:flex-col lg:w-[100px] `}
      style={{ position: "fixed" }}
    >
      <div className="flex flex-col items-center mb-4"></div>
      <div className="flex-1">
        <ul className="space-y-1 ">
          <li className="text-primary flex items-center gap-4 p-2 rounded-md ">
            <Link to="/account" className="text-center gap-4 w-full">
              <div className="m-auto  bg-[#5E6B8C] p-2 rounded-md mb-2">
                <MdAccountBox className="text-white m-auto text-[22px]" />
              </div>
              {!collapsed && (
                <span className="text-white text-[14px]">Account</span>
              )}
            </Link>
          </li>
          <li className="text-primary flex items-center gap-4 p-2 rounded-md ">
            <Link to="/dashboard" className="text-center gap-4 w-full">
              <div className="m-auto  bg-[#5E6B8C] p-2 rounded-md mb-2">
                <MdDashboard className="text-white m-auto text-[22px]" />
              </div>
              {!collapsed && (
                <span className="text-white text-[14px]">Dashboard</span>
              )}
            </Link>
          </li>
          <li className="text-primary flex items-center gap-4 p-2 rounded-md ">
            <Link to="/course-form" className="text-center gap-4 w-full">
              <div className="m-auto  bg-[#5E6B8C] p-2 rounded-md mb-2">
                <MdContentCopy className="text-white m-auto text-[22px]" />
              </div>
              {!collapsed && (
                <span className="text-white text-[14px]">Courses</span>
              )}
            </Link>
          </li>
          <li className="text-primary flex items-center gap-4 p-2 rounded-md ">
            <Link to="/Groups" className="text-center gap-4 w-full">
              <div className="m-auto  bg-[#5E6B8C] p-2 rounded-md mb-2">
                <FaUserGroup className="text-white m-auto text-[22px]" />
              </div>
              {!collapsed && (
                <span className="text-white text-[14px]">Groups</span>
              )}
            </Link>
          </li>
          <li className="text-primary flex items-center gap-4 p-2 rounded-md ">
            <Link to="/Calender" className="text-center gap-4 w-full">
              <div className="m-auto  bg-[#5E6B8C] p-2 rounded-md mb-2">
                <SlCalender className="text-white m-auto text-[22px]" />
              </div>
              {!collapsed && (
                <span className="text-white text-[14px]">Calender</span>
              )}
            </Link>
          </li>
          <li className="text-primary flex items-center gap-4 p-2 rounded-md ">
            <Link to="/Message" className="text-center gap-4 w-full">
              <div className="m-auto  bg-[#5E6B8C] p-2 rounded-md mb-2">
                <MdMessage className="text-white m-auto text-[22px]" />
              </div>
              {!collapsed && (
                <span className="text-white text-[14px]">Message</span>
              )}
            </Link>
          </li>
          <li className="text-primary flex items-center gap-4 p-2 rounded-md ">
            <Link to="/Helps" className="text-center gap-4 w-full">
              <div className="m-auto  bg-[#5E6B8C] p-2 rounded-md mb-2">
                <IoIosHelpCircleOutline className="text-white m-auto text-[22px]" />
              </div>
              {!collapsed && (
                <span className="text-white text-[14px]">Helps</span>
              )}
            </Link>
          </li>

          <li>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleLogout}
                className="lg:inline block font-semibold m-2 text-white p-2 w-[120px] h-fit text-center"
              >
                <div className="m-auto text-center flex justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H9V2H2V16H9V18H2ZM13 14L11.625 12.55L14.175 10H6V8H14.175L11.625 5.45L13 4L18 9L13 14Z"
                      fill="white"
                    />
                  </svg>
                </div>
                Logout
              </button>
            </div>
          </li>
        </ul>
      </div>

      {/* Toggle button for mobile */}
      <button
        className="sidebar-toggle lg:hidden fixed top-4 right-4 z-50 bg-blue-900 text-white p-2 rounded-full"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? (
          <MdDashboard className="text-3xl" />
        ) : (
          <MdDashboard className="text-3xl" />
        )}
      </button>
    </nav>
  );
};

export default Sidebar;
