import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center gap-4 ">
      <div className="border-2 border-gray-300 shadow-lg h-[60%] w-[60%] bg-white flex flex-col justify-start items-center gap-4">
        <div className="h-[30%] flex flex-col justify-center items-center">
          <h2 className="font-bold text-xl text-black font-sans">
            Social Media Application
          </h2>
        </div>
        <div className="w-[80%] flex flex-col justify-center gap-2">
          <form className="flex flex-col justify-center items-center h-full gap-2">
            <input
              type="email"
              required
              placeholder="Phone number, username, or email"
              className="px-2 py-2 border-2 border-gray-300 bg-gray-200 outline-none text-xs w-full"
            />
            <input
              type="email"
              required
              placeholder="Password"
              className="px-2 py-2 border-2 border-gray-300 bg-gray-200 outline-none text-xs w-full "
            />
            <button className="border-2 bg-[#4DB4F8] w-full py-1 rounded-xl font-bold text-white mt-2 font-mono ">
              Login
            </button>
          </form>
          <hr className="h-[2px] bg-gray-300 " />
          <span className="text-xs font-medium self-center text-blue-500 cursor-pointer">
            Forget Password?
          </span>
          <hr className="h-[2px] bg-gray-300 " />
          <span className="text-sm font-thin self-center">
            Don't have an Account?{" "}
            <Link to={"/auth/signup"}>
              <span className="text-[#4DB4F8] cursor-pointer font-medium">
                Sign Up
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
