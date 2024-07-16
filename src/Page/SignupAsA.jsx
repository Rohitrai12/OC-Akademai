import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
const SignupAsA = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [products, setProducts] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
      setLoggedInUser(localStorage.getItem('loggedInUser'))
  }, [])

  const handleLogout = (e) => {
      localStorage.removeItem('token');
      localStorage.removeItem('loggedInUser');
      handleSuccess('User Loggedout');
      setTimeout(() => {
          navigate('/login');
      }, 1000)
  }

  const fetchProducts = async () => {
      try {
          const url = "https://deploy-mern-app-1-api.vercel.app/products";
          const headers = {
              headers: {
                  'Authorization': localStorage.getItem('token')
              }
          }
          const response = await fetch(url, headers);
          const result = await response.json();
          console.log(result);
          setProducts(result);
      } catch (err) {
          handleError(err);
      }
  }
  useEffect(() => {
      fetchProducts()
  }, [])
  return (
    <div>
      <div>
        <h2 className="text-[46px] text-center text-[#091D4F] mt-[15%] font-semibold">
          Sign Up As A
        </h2>
        <button onClick={handleLogout} className='lg:inline block font-semibold m-2 bg-[#091d4f] text-white p-2 w-[120px]  h-fit text-center'>Logout</button>
            <div>
                {
                    products && products?.map((item, index) => (
                        <ul key={index}>
                            <span>{item.name} : {item.price}</span>
                        </ul>
                    ))
                }
            </div>
            <ToastContainer />
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
