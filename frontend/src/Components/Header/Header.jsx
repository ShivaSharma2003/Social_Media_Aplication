import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineCog, HiOutlineChatAlt2, HiUserCircle } from "react-icons/hi";

const Header = () => {
  return (
    <div className="hidden tablet:flex h-12 border-b-2 border-gray-300 shadow-lg items-center justify-between px-2">
      <div>
        <Link to={'/'}>
        <h1 className="font-bold text-gray-800 cursor-pointer ">
          Social Media Application
        </h1>
        </Link>
      </div>
      <div className="flex lfex-row justify-start items-center gap-4 ">
        <Link to={"/settings"}>
          <HiOutlineCog className="text-2xl cursor-pointer  text-gray-700" />
        </Link>
        <Link to={"/messenger"}>
          <HiOutlineChatAlt2 className="text-2xl cursor-pointer text-gray-700 " />
        </Link>
        <Link to={"/profile"}>
          <HiUserCircle className="text-2xl cursor-pointer text-gray-700 " />
        </Link>
      </div>
    </div>
  );
};

export default Header;
