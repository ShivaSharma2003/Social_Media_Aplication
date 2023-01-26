import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineChatAlt2,
  HiUserCircle,
  HiOutlineSearch,
  HiOutlineHeart,
} from "react-icons/hi";

const Header = () => {
  return (
    <div className="hidden tablet:flex tablet:flex-row h-12 border-b-2 border-gray-300 shadow-lg items-center justify-center px-2">
      <div className="flex flex-row tablet:w-[80%] laptop:w-[60%] h-full justify-between items-center ">
        <div>
          <Link to={"/"}>
            <h1 className="font-bold text-gray-800 cursor-pointer ">
              Instagram
            </h1>
          </Link>
        </div>
        <div className="flex lfex-row justify-start items-center gap-4 ">
          <Link to={"/search"}>
            <HiOutlineSearch className="text-2xl cursor-pointer text-gray-700 " />
          </Link>
          <Link to={"/activity"}>
            <HiOutlineHeart className="text-2xl cursor-pointer text-gray-700 " />
          </Link>
          <Link to={"/messenger"}>
            <HiOutlineChatAlt2 className="text-2xl cursor-pointer text-gray-700 " />
          </Link>
          <Link to={"/profile"}>
            <HiUserCircle className="text-2xl cursor-pointer text-gray-700 " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
