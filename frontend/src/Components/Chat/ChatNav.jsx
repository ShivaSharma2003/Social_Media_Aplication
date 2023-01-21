import React from "react";
import Avatar from "../../Images/Avatars/Avatar1.jpg";
import { BiPhoneCall, BiVideo, BiInfoCircle } from "react-icons/bi";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const ChatNav = () => {
  const navigate = useNavigate();
  const ChatExitButtonHandler = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <div className="border-b-2 border-gray-300 shadow-sm flex flex-row items-center justify-between gap-2 px-4">
      <div>
        <HiArrowLeft
          className="text-xl text-gray-800 cursor-pointer"
          onClick={ChatExitButtonHandler}
        />
      </div>
      <div className="flex flex-row gap-2 py-2 flex-1 cursor-pointer">
        <div className="flex flex-row justify-center items-center">
          <img
            src={Avatar}
            alt="User ProfileImage"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-start ">
          <h2 className="font-bold ">@vbsydbv</h2>
          <p className="font-semibold text-[10px] align-middle">Active Now</p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center h-full gap-4">
        <BiPhoneCall className="text-xl text-gray-800 cursor-pointer" />
        <BiVideo className="text-xl text-gray-800 cursor-pointer" />
        <BiInfoCircle className="text-xl text-gray-800 cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatNav;
