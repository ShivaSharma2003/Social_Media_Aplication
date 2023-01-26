import React from "react";
import { HiOutlinePlusCircle, HiOutlineHeart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="h-12 border-b-2 border-gray-300 shadow-sm flex items-center justify-between px-4 tablet:hidden">
        <Link to="/">
          <h1 className="font-bold text-gray-800 cursor-pointer ">Instagram</h1>
        </Link>
        <div className="flex flex-row justify-center items-center gap-4 ">
          <HiOutlinePlusCircle className="text-2xl cursor-pointer text-gray-700 " />
          <HiOutlineHeart className="text-2xl cursor-pointer text-gray-700 " />
        </div>
      </div>
    </>
  );
};

export default Navbar;
