import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [regiserPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await  createUserWithEmailAndPassword(
        auth,
        registerEmail,
        regiserPassword,
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex justify-center items-center h-screen bg-gray-100 w-full  ">
      <div className="flex flex-col justify-center w-full p-5 shadow-lg m-2 rounded-2xl md:w-4/12 md:p-10 ">
        <h1 className="font-bold text-3xl text-center mb-5">Register</h1>
        <form action="" className="">
          <div className="">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className="block p-2 rounded-md shadow w-full mb-3"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
          </div>
          <div className="">
            <label htmlFor=""> Password</label>
            <input
              type="password"
              placeholder="Password"
              className="block p-2 shadow rounded-md w-full mb-3"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
          </div>
          <div className="">
            <label htmlFor="">confirm Password</label>
            <input
              type="password"
              placeholder=" Confirm Password"
              className="block p-2 shadow rounded-md w-full mb-3"
  
            />
          </div>

          <button
            onClick={register}
            className="p-3 rounded-md bg-blue-500 w-full text-white mt-3"
          >
            Create account
          </button>
          <p className="text-center mt-6">
            Have an account?
            <Link className="text-blue-500" to="/Login">
              {" "}
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
