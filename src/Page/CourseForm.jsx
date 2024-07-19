import React, { useState } from "react";

const CourseForm = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [assignments, setAssignments] = useState({
    description: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const [moduleVideos, setModuleVideos] = useState([null]);
  const [modules, setModules] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

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

  const handleModuleVideoChange = (index, event) => {
    const newVideos = [...moduleVideos];
    newVideos[index] = URL.createObjectURL(event.target.files[0]);
    setModuleVideos(newVideos);
  };

  const addModuleVideoField = () => {
    setModuleVideos([...moduleVideos, null]);
  };

  const removeModuleVideoField = (index) => {
    const newVideos = moduleVideos.filter((_, i) => i !== index);
    setModuleVideos(newVideos);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newModule = { name: moduleName, videos: moduleVideos };
    if (editIndex !== null) {
      const updatedModules = modules.map((module, index) =>
        index === editIndex ? newModule : module
      );
      setModules(updatedModules);
      setEditIndex(null);
    } else {
      setModules([...modules, newModule]);
    }
    setModuleName("");
    setModuleVideos([null]);
    togglePopup();
  };

  const handleEditModule = (index) => {
    setEditIndex(index);
    const module = modules[index];
    setModuleName(module.name);
    setModuleVideos(module.videos);
    togglePopup();
  };

  const handleDeleteModule = (index) => {
    const updatedModules = modules.filter((_, i) => i !== index);
    setModules(updatedModules);
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
                href="#"
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
          </ul>
        </div>
      </aside>
      <div className="flex-1 p-6 flex justify-center items-center">
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
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#162958] text-white rounded-lg hover:bg-blue-600"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
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
            <div>
              <h2 className="text-xl font-semibold mb-4">Modules</h2>
              <button
                onClick={togglePopup}
                className="px-4 py-2 bg-[#162958] text-white rounded-lg mb-4"
              >
                Add Module
              </button>
              <div>
                {modules.map((module, index) => (
                  <div>
                    <div
                      key={index}
                      className="border rounded-lg p-4 mb-2 flex justify-between items-center flex-row-reverse"
                    >
                      <div>
                        <h3 className="text-lg font-semibold">{module.name}</h3>
                        <ul>
                          <div className="flex justify-end">
                            <button
                              onClick={() => handleEditModule(index)}
                              className="px-2 py-1 bg-green-500 text-white rounded-lg mr-2 w-[86px] font-semibold"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteModule(index)}
                              className="px-2 py-1 bg-red-500 text-white rounded-lg  w-[86px] font-semibold"
                            >
                              Delete
                            </button>
                          </div>
                          {module.videos.map((video, videoIndex) => (
                            <li key={videoIndex}>
                              <video
                                className="w-full"
                                src={video}
                                controls
                                style={{ width: "32%", height: "auto" }}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Add Module</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2">
                          Module Name
                        </label>
                        <input
                          type="text"
                          value={moduleName}
                          onChange={handleModuleNameChange}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      {moduleVideos.map((video, index) => (
                        <div key={index} className="mb-4">
                          <label className="block text-gray-700 mb-2">
                            Video {index + 1}
                          </label>
                          <input
                            type="file"
                            accept="video/*"
                            onChange={(event) =>
                              handleModuleVideoChange(index, event)
                            }
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                          />
                          {index > 0 && (
                            <button
                              type="button"
                              onClick={() => removeModuleVideoField(index)}
                              className="px-2 py-1 bg-red-500 text-white rounded-lg mt-2"
                            >
                              Remove Video
                            </button>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={addModuleVideoField}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg mb-4"
                      >
                        Add Another Video
                      </button>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="px-6 py-2 bg-[#162958] text-white rounded-lg "
                        >
                          {editIndex !== null ? "Update" : "Add"} Module
                        </button>
                        <button
                          type="button"
                          onClick={togglePopup}
                          className="px-6 py-2 ml-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
