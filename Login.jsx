import React from "react";
import avif from "../assets/logo.avif";
import { Link } from "react-router-dom";

const Login = () => {

  const login = async() =>{

  }
  return (
    <section className="flex justify-center items-center h-screen bg-gray-100 md:p-10">
      <div className="w-full md:w-auto bg-gray-100 flex justify-between shadow-lg p-5 m-2 rounded-lg md:rounded-3xl gap-5">
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <h1 className="font-bold text-3xl text-center mb-5">Login</h1>
          <form action="" className="">
            <div className="">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Email"
                className="block p-2 rounded-md shadow w-full mb-3"
              />
            </div>
            <div className="">
              <label htmlFor=""> Password</label>
              <input
                type="text"
                placeholder="Password"
                className="block p-2 shadow rounded-md w-full mb-3"
              />
            </div>

            <button className="p-3 rounded-md bg-blue-500 w-full text-white mt-3">Login</button>
            <p className="text-center mt-6"> Don't have an account? <Link className="text-blue-500" to='/Register'>Sign Up </Link></p>
          </form>
        </div>

        <div className=" md:block hidden w-1/2">
          <img src={avif} alt="" className="rounded-3xl h-[650px] m-3 w-auto" />
        </div>
       
      </div>
    </section>
  );
};

export default Login;
