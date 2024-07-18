import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Img1 from "../assets/Images/announcement.png";
import Img2 from "../assets/Images/discuss.png";
import Modal from "./Modal"; // Import your modal component

const Dashboard = ({ toggleSidebar }) => {
  const [showModal, setShowModal] = useState(false);
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Load courses from localStorage on component mount
    const savedCourses = localStorage.getItem("courses");
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    }
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    // Reset form fields when modal is closed
    setCourseName("");
    setCourseDescription("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create a new course object
    const newCourse = {
      name: courseName,
      description: courseDescription,
    };
    // Update courses state with the new course
    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    // Save updated courses to localStorage
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
    // Close the modal after creating the course
    closeModal();
  };

  const editCourse = () => {
    navigate("/course-form");
  };

  const deleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  return (
    <div className="flex-1 py-20 pl-48 pr-12">
      {/* Toggle button for sidebar */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden bg-blue-500 text-white rounded-lg mb-4"
      >
        Toggle Sidebar
      </button>
      <div className="flex justify-between">
        <h1 className="text-[46px] font-bold mb-6 text-[#091D4F]">Dashboard</h1>
        <div className="flex gap-4">
          <button
            onClick={openModal}
            className="bg-[#091D4F] text-white text-[16px] h-fit p-[15px] rounded-lg"
          >
            Start a New Course
          </button>
          <Link
            to="/viewall-courses"
            className="bg-gray-500 text-white text-[16px] h-fit p-[15px] rounded-lg"
          >
            View All Courses
          </Link>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-[20px] font-semibold mb-4 text-[#091D4F]">
          Published Courses ({courses.length})
        </h2>
        <div className="w-auto h-[1px] bg-[#9E9999]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {courses.map((course, index) => (
            <div key={index}>
              <div className="bg-[#EE4C53] block py-5 rounded-lg h-[340px] relative">
                <div className="float-right relative right-3">
                  <button onClick={editCourse}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.243 17.997H3V13.754L14.435 2.319C14.6225 2.13153 14.8768 2.02621 15.142 2.02621C15.4072 2.02621 15.6615 2.13153 15.849 2.319L18.678 5.147C18.771 5.23987 18.8447 5.35016 18.8951 5.47156C18.9454 5.59296 18.9713 5.72309 18.9713 5.8545C18.9713 5.98592 18.9454 6.11604 18.8951 6.23744C18.8447 6.35884 18.771 6.46913 18.678 6.562L7.243 17.997ZM3 19.997H21V21.997H3V19.997Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                  <button onClick={() => deleteCourse(index)} className="ml-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 21C6.45 21 5.97933 20.8043 5.588 20.413C5.19667 20.0217 5.00067 19.5507 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8043 20.021 18.413 20.413C18.0217 20.805 17.5507 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>

                <div className="bg-[#091D4F] p-4 absolute w-full bottom-0 rounded-b-lg">
                  <h2 className="text-[24px] text-white">{course.name}</h2>
                  <h3 className="text-[16px] text-white">
                    {course.description}
                  </h3>
                  <div className="float-right flex justify-end">
                    <img src={Img1} alt="" />
                    <img src={Img2} alt="" className="ml-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for starting a new course */}
      {showModal && (
        <Modal closeModal={closeModal}>
          <form onSubmit={handleFormSubmit}>
            <h2 className="text-xl font-semibold mb-4">Create New Course</h2>
            <div className="mb-4">
              <label
                htmlFor="courseName"
                className="block text-gray-700 font-bold mb-2"
              >
                Course Name
              </label>
              <input
                type="text"
                id="courseName"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="courseDescription"
                className="block text-gray-700 font-bold mb-2"
              >
                Course Description
              </label>
              <textarea
                id="courseDescription"
                value={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full h-24 resize-none"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Create
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;
