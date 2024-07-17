import React from "react";

function AddAssignments() {
  const handleAddAssignment = () => {
    // Logic to handle adding the assignment
    console.log("Assignment added!");
  };

  return (
    <div className="container mx-auto mt-8 ml-[120px]">
      <h1 className="text-2xl font-bold mb-4">Add Assignments</h1>
      <div>
        <label
          htmlFor="assignmentInput"
          className="block text-sm font-medium text-gray-700"
        >
          Assignment Description
        </label>
        <textarea
          id="assignmentInput"
          name="assignmentInput"
          rows="6"
          className="mt-1 p-3 block border border-gray-300 rounded-md focus:outline-none focus:ring-[#091d4f] focus:border-[#091d4f]-500 sm:text-sm w-[28%]"
          placeholder="Enter assignment details here..."
        ></textarea>
        <button
          type="button"
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#091d4f] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleAddAssignment}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddAssignments;
