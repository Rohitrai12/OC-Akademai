import React from "react";
import Coursethumb from '../assets/Images/Course.png'

const ViewAllCourses = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen ml-[99px]">
      <h1 className="text-black text-3xl font-semibold mb-6">Courses I'm Teaching (3)</h1>
      <div className="space-y-6">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-6 w-[696px]">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">Python Course</h2>
              <p className="text-gray-700">
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                visual form of a document.
              </p>
            </div>
            <div className="w-48 h-32 bg-gray-200 overflow-hidden flex-shrink-0">
              <img
                src={Coursethumb}
                alt="Course"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllCourses;
