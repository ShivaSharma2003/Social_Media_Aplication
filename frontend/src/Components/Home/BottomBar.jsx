import React from "react";
import {
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlineUserCircle,
  HiOutlineHeart,
  HiOutlinePlusCircle,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <div className="h-12 border-t-2 border-gray-300 flex justify-around items-center">
      <Link to={"/"}>
        <HiOutlineHome className="font-bold text-2xl cursor-pointer  transition-all duration-300  text-gray-700" />
      </Link>
      <Link to={'/search'}>
      <HiOutlineSearch className="font-bold text-2xl cursor-pointer  transition-all duration-300  text-gray-700" />
      </Link>
      <HiOutlinePlusCircle className="font-bold text-2xl cursor-pointer  transition-all duration-300  text-gray-700" />
      <HiOutlineHeart className="font-bold text-2xl cursor-pointer  transition-all duration-30  text-gray-700" />
      <Link to={"/profile"}>
        <HiOutlineUserCircle className="font-bold text-2xl cursor-pointer  transition-all duration-300 text-gray-700" />
      </Link>
    </div>
  );
};

export default BottomBar;
