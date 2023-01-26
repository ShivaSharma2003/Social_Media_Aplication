import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RegisterAction } from "../../Redux/Actions/AuthAction";
import Image from '../../Images/Auth/image1.png'

const Signup = () => {
  const dispatch = useDispatch();
  const { loading, SignUp, error } = useSelector((state) => state.AuthRegister);

  const [Data, setData] = useState({
    userName: "",
    Password: "",
    email: "",
    phoneNumber: "",
    FullName: "",
  });

  const InputHandler = (e) => {
    e.preventDefault();
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const signupButtonHandler = (e) => {
    e.preventDefault();
    dispatch(
      RegisterAction(
        Data.userName,
        Data.email,
        Data.phoneNumber,
        Data.Password,
        Data.FullName
      )
    );
  };

  loading
    ? (document.title = "Loading...")
    : error
    ? (document.title = "SignUp Error")
    : (document.title = "SignUp");

  return (
    <div className="flex flex-col h-[100vh] w-[100vw] justify-center items-center gap-4 tablet:grid tablet:grid-cols-12 ">
      <div className="col-span-8 hidden h-full w-full justify-center tablet:flex items-center">
        <img src={Image} alt="AuthenticationImage" className="object-fill" />
      </div>
      <div className="flex flex-col col-span-4 h-full w-full justify-center items-center tablet:items-start ">
        <div className="border-2 border-gray-300 shadow-lg h-[60%] w-[60%] tablet:h-full tablet:w-full  bg-white flex flex-col justify-start items-center gap-4">
          <div className="h-[30%] flex flex-col justify-center items-center">
            <h2 className="font-bold text-xl text-black font-sans">
              Instagram
            </h2>
          </div>
          <div className="w-[80%] flex flex-col justify-center gap-2">
            <form className="flex flex-col justify-center items-center h-full gap-2">
              <input
                type="text"
                required
                placeholder="email Address"
                className="px-2 py-2 border-2 border-gray-300 bg-gray-200 outline-none text-xs w-full"
                name="email"
                onChange={InputHandler}
              />
              <input
                type="text"
                required
                placeholder="Phone number"
                className="px-2 py-2 border-2 border-gray-300 bg-gray-200 outline-none text-xs w-full"
                name="phoneNumber"
                onChange={InputHandler}
              />
              <input
                type="text"
                required
                placeholder="UserName"
                className="px-2 py-2 border-2 border-gray-300 bg-gray-200 outline-none text-xs w-full"
                name="userName"
                onChange={InputHandler}
              />
              <input
                type="text"
                required
                placeholder="Full Name"
                className="px-2 py-2 border-2 border-gray-300 bg-gray-200 outline-none text-xs w-full"
                name="FullName"
                onChange={InputHandler}
              />
              <input
                type="password"
                required
                placeholder="Password"
                className="px-2 py-2 border-2 border-gray-300 bg-gray-200 outline-none text-xs w-full "
                name="Password"
                onChange={InputHandler}
              />
              {error ? (
                <span className="text-red-500 text-xs font-bold">
                  {error.status === 400
                    ? "All fields are required or Invalid input"
                    : error.status === 403
                    ? "Username or Email already taken"
                    : error.status === 500 &&
                      "Internal Server Error. Please Try Again Later "}
                </span>
              ) : SignUp ? (
                <span className="text-green-700 text-xs font-bold">
                  Successfully Account Created
                </span>
              ) : (
                <span className="hidden"></span>
              )}
              <button
                className="border-2 bg-[#4DB4F8] w-full py-1 rounded-xl font-bold text-white mt-2 font-mono "
                onClick={signupButtonHandler}
              >
                {loading ? "Loading..." : "Sign Up"}
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
