import React from "react";
import { Link } from "react-router-dom";

const CourseForm = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-[12rem] border-r border-[#00000045] text-black flex-shrink-0 ml-[99px]">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Navigation</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="p-2 block">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="p-2 block">
                Announcements
              </a>
            </li>
            <li className="mb-2">
              <Link to="/addassignments" className="p-2 block">
                Assignments
              </Link>
            </li>
            <li className="mb-2">
              <a href="#" className="p-2 block">
                Discussions
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="p-2 block">
                Grades
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="p-2 block">
                Pages
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="p-2 block">
                Files
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="p-2 block">
                Syllabus
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="p-2 block">
                Quizzes
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="p-2 block">
                Modules
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="flex-1 p-6 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
          <h1 className="text-black text-2xl mb-6">Course Details</h1>
          <form>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Course Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Course Code</label>
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
              <label className="block text-gray-700 mb-2">Time Zone</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                <option>GMT</option>
                <option>UTC</option>
                <option>EST</option>
                <option>PST</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Participants</label>
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
                <label className="block text-gray-700 mb-2">Start Date</label>
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
              <label className="block text-gray-700 mb-2">Logo Placement</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter logo placement URL"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">File Category</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter file category"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Visibility</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                <option>Private</option>
                <option>Public</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
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
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Update Course Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
