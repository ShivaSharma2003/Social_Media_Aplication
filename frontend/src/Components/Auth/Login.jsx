import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginAction } from "../../Redux/Actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Data, setData] = useState({ email: "", Password: "" });
  const { loading, Login, error } = useSelector((state) => state.AuthLogin);

  loading
    ? (document.title = "Loading...")
    : error
    ? (document.title = "Login Error")
    : (document.title = "Login");

  useEffect(() => {
    if (Login) {
      navigate("/");
    }
  }, [Login, navigate]);

  const InputHandler = (e) => {
    e.preventDefault();
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const LoginButtonHandler = (e) => {
    e.preventDefault();
    dispatch(LoginAction(Data.email, Data.Password));
    console.log(Data);
  };

  return (
    <div className="flex flex-col h-[100vh] w-[100vw] justify-center items-center gap-4 tablet:grid tablet:grid-cols-12">
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
                type="email"
                required
                placeholder="Phone number, username, or email"
                className="px-2 py-2 border-2 border-gray-300 bg-gray-200 outline-none text-xs w-full"
                name="email"
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
                  {error.status === 404
                    ? "User not exist. Try again"
                    : error.status === 403
                    ? "Wrong email or Password. Try again"
                    : error.status === 500 &&
                      "Internal Server Error. Please try again later"}
                </span>
              ) : (
                <span className="hidden"></span>
              )}
              <button
                className="border-2 bg-[#4DB4F8] w-full py-1 rounded-xl font-bold text-white mt-2 font-mono "
                onClick={LoginButtonHandler}
              >
                {loading ? "Loading..." : "Login"}
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
    </div>
  );
};

export default Login;
