import React from "react";
import Avatar from "../../Images/Avatars/Avatar2.jpg";
import Avatar2 from "../../Images/Avatars/Avatar1.jpg";

const ChatBody = () => {
  return (
    <div className="flex-1 flex flex-col gap-2 px-3">
      {/* received Messages */}
      <div className="flex flex-row justify-start items-end gap-2">
        <div className="flex flex-row justify-end items-start">
          <img
            src={Avatar}
            alt="ProfileImage"
            className="h-6 w-6 rounded-full object-cover "
          />
        </div>
        <div className="flex flex-row justify-start gap-2 items-start bg-gray-300 cursor-default rounded-xl px-3 py-2">
          <p className="text-[12px] font-semibold w-fit shrink max-w-xl flex-1">
            Hi ths is Garima Sharma
          </p>
          <span className="text-[8px] font-bold self-end">just now</span>
        </div>
      </div>

      {/* Sender Messages */}
      <div className="flex flex-row justify-end items-end gap-2">
        <div className="flex flex-row justify-end items-start cursor-default gap-2 relative bg-gray-200 rounded-xl px-3 py-2">
          <p className="text-[12px] font-semibold shrink max-w-xl flex-1">
            Hi this is shiva sharma
          </p>
          <span className="text-[8px] font-bold self-end">just now</span>
        </div>
        <div className="flex flex-row justify-end items-start">
          <img
            src={Avatar2}
            alt="ProfileImage"
            className="h-6 w-6 rounded-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
