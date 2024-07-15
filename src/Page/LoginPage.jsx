import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container bg-[#091D4F] md:px-10 px-5 py-20 rounded-xl text-center w-[95%] md:w-[70%] lg:w-[40%] xl:w-[35%] m-auto mt-[8%]">
      <h2 className="text-[34px] text-center font-semibold text-white">
        Login
      </h2>
      <h5 className="text-[22px] text-center font-medium text-white">
        Welcome to Akademia{" "}
      </h5>
      <form action="" className="mt-5">
        <input
          type="email"
          name="Email Address"
          placeholder="Email Address"
          className="bg-white p-2 lg:w-[80%] w-[90%] m-auto border border-none rounded-md mt-[8px]"
        />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          className="bg-white p-2 lg:w-[80%] w-[90%] m-auto border border-none rounded-md mt-[8px]"
        />

        <button className="p-2 lg:w-[80%] w-[90%] m-auto border border-none text-[18px] font-semibold rounded-md bg-white mt-7">
          Login
        </button>
        <span className="text-white text[16px] text-center block mt-4">
          Don’t have account ?{" "}
          <Link to="/Signup" className="text-[#EEB053] font-medium">
            {" "}
            Login
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
