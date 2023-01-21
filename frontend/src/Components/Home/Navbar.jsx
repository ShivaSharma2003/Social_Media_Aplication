import React from "react";
import {
  HiOutlineChatAlt2,
  HiOutlineCog,
  HiUserAdd,
  HiOutlineLogout,
} from "react-icons/hi";
import { BiEdit, BiArrowBack } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { ProfileNavState } = useSelector((state) => state.ProfileNavbar);
  const { SettingsNavState } = useSelector((state) => state.SettingNavbar);
  const { MessengerNavState } = useSelector((state) => state.MessengerNavbar);

  const SettingExistButtonHandler = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const MessengerBackButtonHandler = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  if (SettingsNavState) {
    return (
      <div className="h-12 border-b-2 border-gray-300 shadow-sm flex items-center justify-between gap-2 px-4 tablet:hidden ">
        <HiOutlineLogout
          className="text-2xl cursor-pointer text-gray-700"
          onClick={SettingExistButtonHandler}
        />
        <div className="flex flex-row justify-center items-center gap-2 flex-1">
          <HiOutlineCog className="text-2xl cursor-pointer  text-gray-700" />
          <h1 className="font-bold text-gray-800 cursor-pointer ">Settings</h1>
        </div>
      </div>
    );
  }

  if (MessengerNavState) {
    return (
      <div className="h-12 border-b-2 border-gray-300 shadow-sm flex items-center justify-between gap-2 px-4">
        <BiArrowBack
          className="text-2xl cursor-pointer  text-gray-700"
          onClick={MessengerBackButtonHandler}
        />
        <h1 className="font-bold text-gray-800 cursor-pointer ">Messenger</h1>
        <BiEdit className="text-2xl cursor-pointer  text-gray-700" />
      </div>
    );
  }

  if (ProfileNavState) {
    return (
      <div className="h-12 border-b-2 border-gray-300 shadow-sm flex items-center justify-between px-4">
        <Link to={"/settings"}>
          <HiOutlineCog className="text-2xl cursor-pointer  text-gray-700" />
        </Link>
        <h1 className="font-bold text-gray-800 cursor-pointer ">
          Account Profile
        </h1>
        <Link to={"/search"}>
          <HiUserAdd className="text-2xl cursor-pointer text-gray-700 " />
        </Link>
      </div>
    );
  }

  return (
    <>
    <div className="h-12 border-b-2 border-gray-300 shadow-sm flex items-center justify-between px-4 tablet:hidden">
      <Link to={"/settings"}>
        <HiOutlineCog className="text-2xl cursor-pointer  text-gray-700" />
      </Link>
      <h1 className="font-bold text-gray-800 cursor-pointer ">
        Social Media Application
      </h1>
      <Link to={"/messenger"}>
        <HiOutlineChatAlt2 className="text-2xl cursor-pointer text-gray-700 " />
      </Link>
    </div>
    </>
  );
};

export default Navbar;
