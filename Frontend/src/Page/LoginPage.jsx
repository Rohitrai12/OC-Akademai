import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
})

const navigate = useNavigate();

const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
}

const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
        return handleError('email and password are required')
    }
    try {
        const url = `https://deploy-mern-app-1-api.vercel.app/auth/login`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        });
        const result = await response.json();
        const { success, message, jwtToken, name, error } = result;
        if (success) {
            handleSuccess(message);
            localStorage.setItem('token', jwtToken);
            localStorage.setItem('loggedInUser', name);
            setTimeout(() => {
                navigate('/SignupAs')
            }, 1000)
        } else if (error) {
            const details = error?.details[0].message;
            handleError(details);
        } else if (!success) {
            handleError(message);
        }
        console.log(result);
    } catch (err) {
        handleError(err);
    }
}
  return (
    <div className="container bg-[#091D4F] md:px-10 px-5 py-20 rounded-xl text-center w-[95%] md:w-[70%] lg:w-[40%] xl:w-[35%] m-auto mt-[8%]">
      <h2 className="text-[34px] text-center font-semibold text-white">
        Login
      </h2>
      <h5 className="text-[22px] text-center font-medium text-white">
        Welcome to Akademia{" "}
      </h5>
      <form action="" className="mt-5"  onSubmit={handleLogin}>
        <input
        onChange={handleChange}
        type='email'
        name='email'
        placeholder='Enter your email...'
        value={loginInfo.email}
          className="bg-white p-2 lg:w-[80%] w-[90%] m-auto border border-none rounded-md mt-[8px]"
        />
        <input
     onChange={handleChange}
     type='password'
     name='password'
     placeholder='Enter your password...'
     value={loginInfo.password}
          className="bg-white p-2 lg:w-[80%] w-[90%] m-auto border border-none rounded-md mt-[8px]"
        />

        <button  type='submit' className="p-2 lg:w-[80%] w-[90%] m-auto border border-none text-[18px] font-semibold rounded-md bg-white mt-7">
          Login
        </button>
        <span className="text-white text[16px] text-center block mt-4">
          Don’t have account ?{" "}
          <Link to="/Signup" className="text-[#EEB053] font-medium">
            {" "}
            Signup
          </Link>
        </span>
      </form>
      <ToastContainer />

    </div>
  );
}

export default Login;