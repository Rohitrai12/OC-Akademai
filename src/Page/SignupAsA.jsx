import React from "react";
import { Link } from "react-router-dom";


const SignupAsA = () => {
  return (
    <div>
      <div>
        <h2 className="text-[46px] text-center text-[#091D4F] mt-[15%] font-semibold">
          Sign Up As A
        </h2>
        <div
          className="md:flex w-fit m-auto rounded-xl mt-4 justify-center p-10"
          style={{ boxShadow: " 0px 20px 50px 10px rgba(20, 61, 80, 0.15)" }}
        >
          <div className="">
            <Link
              to="#"
              className="bg-[#091D4F] py-2 w-[200px] block text-center px-4 rounded-lg text-[22px] font-medium text-white"
            >
              Student
            </Link>
            <div>
              <Link
                to="#"
                className="mt-4 bg-[#091D4F] py-2 w-[200px] block text-center px-4 rounded-lg text-[22px] font-medium text-white"
              >
                Teacher
              </Link>
            </div>
          </div>

          <div className="md:ml-4 md:mt-0 mt-4">
            <Link
              to="#"
              className="bg-[#091D4F] py-2 w-[200px] block text-center px-4 rounded-lg text-[22px] font-medium text-white"
            >
              Parent
            </Link>
            <div>
              <Link
                to="#"
                className="mt-4 bg-[#091D4F] py-2 w-[200px] block text-center px-4 rounded-lg text-[22px] font-medium text-white"
              >
                Institution
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupAsA;
