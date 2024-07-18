import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiImport } from "react-icons/ci";

const CourseForm = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [assignments, setAssignments] = useState({
    description: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [moduleName, setModuleName] = useState("");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName !== "Assignments") {
      setAssignments({ description: "" });
    }
    console.log(`Loading ${tabName} content...`);
  };

  const handleAssignmentsSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Assignments:", assignments);
    setAssignments({ description: "" });
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleModuleNameChange = (event) => {
    setModuleName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Module Name submitted:", moduleName);
    togglePopup();
    // Additional logic can be added here for module creation
  };
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-[12rem] border-r border-[#00000045] text-black flex-shrink-0 ml-[99px]">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Navigation</h2>
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className={`p-2 block ${
                  activeTab === "Home" ? "font-bold" : ""
                }`}
                onClick={() => handleTabClick("Home")}
              >
                Home
              </a>
            </li>

            <li className="mb-2">
              <a
                to="#"
                className={`p-2 block ${
                  activeTab === "Assignments" ? "font-bold" : ""
                }`}
                onClick={() => handleTabClick("Assignments")}
              >
                Assignments
              </a>
            </li>

            <li className="mb-2">
              <a
                href="#"
                className={`p-2 block ${
                  activeTab === "Announcements" ? "font-bold" : ""
                }`}
                onClick={() => handleTabClick("Announcements")}
              >
                Announcements
              </a>
            </li>

            {/* Add other sidebar items here */}
            <li className="mb-2">
              <a
                href="#"
                className={`p-2 block ${
                  activeTab === "Discussions" ? "font-bold" : ""
                }`}
                onClick={() => handleTabClick("Discussions")}
              >
                Discussions
              </a>
            </li>

            <li className="mb-2">
              <a
                href="#"
                className={`p-2 block ${
                  activeTab === "Grades" ? "font-bold" : ""
                }`}
                onClick={() => handleTabClick("Grades")}
              >
                Grades
              </a>
            </li>

            <li className="mb-2">
              <a
                href="#"
                className={`p-2 block ${
                  activeTab === "Quizzes" ? "font-bold" : ""
                }`}
                onClick={() => handleTabClick("Quizzes")}
              >
                Quizzes
              </a>
            </li>

            <li className="mb-2">
              <a
                href="#"
                className={`p-2 block ${
                  activeTab === "Modules" ? "font-bold" : ""
                }`}
                onClick={() => handleTabClick("Modules")}
              >
                Modules
              </a>
            </li>
            {/* Add other sidebar items here */}
          </ul>
        </div>
      </aside>
      <div className="flex-1 p-6 flex justify-center items-center">
        {/* Content area */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
          <h1 className="text-black text-2xl mb-6">{activeTab} Details</h1>
          {activeTab === "Home" && (
            <div className="flex-1 p-6 flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
                <form>
                  <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Course Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Course Code
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Template</label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                      <option>Make an exam a Course Template</option>
                      <option>Template 1</option>
                      <option>Template 2</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Time Zone
                    </label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                      <option>GMT</option>
                      <option>UTC</option>
                      <option>EST</option>
                      <option>PST</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Participants
                    </label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                      <option>
                        Create participation records for each user and admin
                      </option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                    </select>
                  </div>
                  <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Start Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Default Due Date
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Language</label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                      <option>
                        Make this course use my system language preference
                      </option>
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Logo Placement
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Enter logo placement URL"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      File Category
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Enter file category"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Visibility
                    </label>
                    <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                      <option>Private</option>
                      <option>Public</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Enter course description"
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="inline-flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">
                        Allow users to see and download files
                      </span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#091D4F] text-white px-4 py-2 rounded-lg"
                  >
                    Update Course Details
                  </button>
                </form>
              </div>
            </div>
          )}
          {/* Add other content for different tabs here */}
          {activeTab === "Assignments" && (
            <form>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-4">Add Assignments</h2>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Write Description of your Assignments"
                  value={assignments.description}
                  onChange={(e) =>
                    setAssignments({
                      ...assignments,
                      description: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#091D4F] text-white px-4 py-2 rounded-lg"
              >
                Add
              </button>
            </form>
          )}

          {activeTab === "Announcements" && (
            <form>
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-4">Add Assignments</h2>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="What you want to Announce today"
                  value={assignments.description}
                  onChange={(e) =>
                    setAssignments({
                      ...assignments,
                      description: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#091D4F] text-white px-4 py-2 rounded-lg"
              >
                Announce
              </button>
            </form>
          )}

          {activeTab === "Quizzes" && (
            <>
              <h1 className="text-2xl font-bold mb-4">Create a Poll</h1>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="question"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your question?
                  </label>
                  <textarea
                    id="question"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    rows="3"
                    placeholder="Write Your Question here"
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="option-2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Option-2
                  </label>
                  <input
                    type="text"
                    id="option-2"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your Option"
                  />
                </div>
                <div>
                  <label
                    htmlFor="option-3"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Option-3
                  </label>
                  <input
                    type="text"
                    id="option-3"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your Option"
                  />
                </div>
                <div>
                  <label
                    htmlFor="option-4"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Option-4
                  </label>
                  <input
                    type="text"
                    id="option-4"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Your Option"
                  />
                </div>
              </div>
              <button className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#091D4F] hover:bg-[#091d4f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900">
                Submit Poll
              </button>
            </>
          )}
          {activeTab === "Modules" && (
            <>
              <nav className="flex justify-end border-b mt-[-1rem]">
                <button
                  className="mt-4 mb-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#091D4F] hover:bg-[#091d4f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                  onClick={togglePopup}
                >
                  Add Module
                </button>
              </nav>
              <div
                className="hover:bg-[#e5e7eb] w-max mx-auto mt-4 rounded-md cursor-pointer"
                onClick={togglePopup}
              >
                <CiImport className="fill-[#393a524d] text-[220px] mx-auto" />
                <p className="text-center">Create a New Module</p>
              </div>
            </>
          )}

          {/* Popup Content */}
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                  Create New Module
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="moduleName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Module Name
                    </label>
                    <input
                      type="text"
                      id="moduleName"
                      name="moduleName"
                      value={moduleName}
                      onChange={handleModuleNameChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:blue-500 focus:border-blue-500 border p-3 sm:text-sm"
                      placeholder="Enter your Module Name..."
                      required
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#091D4F] hover:bg-[#091d4f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                    >
                      Create Module
                    </button>
                    <button
                      type="button"
                      onClick={togglePopup}
                      className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
