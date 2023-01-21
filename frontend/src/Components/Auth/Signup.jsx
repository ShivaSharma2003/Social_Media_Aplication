import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] justify-center items-center gap-4 tablet:grid tablet:grid-cols-12 ">
      <div className="col-span-8 "></div>
      <div className="flex flex-col col-span-4 h-full w-full justify-center items-center tablet:items-start ">
        <div className="border-2 border-gray-300 shadow-lg h-[60%] w-[60%] tablet:h-full tablet:w-full  bg-white flex flex-col justify-start items-center gap-4">
          <div className="h-[30%] flex flex-col justify-center items-center">
            <h2 className="font-bold text-xl text-black font-sans">
              Social Media Application
            </h2>
          </div>
          <div className="w-[80%] flex flex-col justify-center gap-2">
            <form className="flex flex-col justify-center items-center h-full gap-2">
              <input
                type="text"
                required
                placeholder="Phone number, username, or email"
                className="px-2 py-2 border-2 border-gray-300 bg-gray-200 outline-none text-xs w-full"
              />
              <input
                type="text"
                required
                placeholder="Full Name"
                className="px-2 py-2 border-2 border-gray-300 bg-gray-200 outline-none text-xs w-full"
              />
              <input
                type="text"
                required
                placeholder="UserName"
                className="px-2 py-2 border-2 border-gray-300 bg-gray-200 outline-none text-xs w-full"
              />
              <input
                type="passowrd"
                required
                placeholder="Password"
                className="px-2 py-2 border-2 border-gray-300 bg-gray-200 outline-none text-xs w-full "
              />
              <button className="border-2 bg-[#4DB4F8] w-full py-1 rounded-xl font-bold text-white mt-2 font-mono ">
                Sign Up
              </button>
            </form>
            <hr className="h-[2px] bg-gray-300 " />
            <span className="text-sm font-thin self-center">
              Alaready have an Account?{" "}
              <Link to={"/auth/login"}>
                <span className="text-[#4DB4F8] cursor-pointer font-medium">
                  Login
                </span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
