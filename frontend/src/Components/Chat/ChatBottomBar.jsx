import React from "react";
import { BiImage, BiVideo } from "react-icons/bi";

const ChatBottomBar = () => {
  return (
    <div className="flex flex-row justify-center items-center p-4 gap-2 border-t-2 shadow-md">
      <form className="flex-1 border-2 py-1 px-4 border-gray-500 rounded-2xl">
        <input
          type="text"
          placeholder="write message..."
          className="outline-none w-full font-semibold text-md"
        />
      </form>
      <div className="flex felx-row gap-3 ">
        <BiImage className="text-2xl text-gray-600 cursor-pointer" />
        <BiVideo className="text-2xl text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatBottomBar;
