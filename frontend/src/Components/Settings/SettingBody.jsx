import React from "react";
import {
  HiOutlineCog,
  HiFingerPrint,
  HiPuzzle,
  HiLockOpen,
  HiArchive,
  HiMail,
  HiUser,
  HiDeviceMobile,
  HiTrash,
  HiLogout
} from "react-icons/hi";

const SettingBody = () => {
  return (
    <div className="flex-1 flex flex-col overflow-scroll scrollbar-hide">
      <div className="flex flex-row justify-center items-start gap-4 cursor-pointer hover:bg-gray-300 w-full p-2">
        <div className="flex justify-center items-center h-full ">
          <HiOutlineCog className="text-2xl cursor-pointer text-gray-600 " />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h2 className="font-bold text-black ">General Settings</h2>
          <p className="font-bold text-[10px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            maiores velit cum omnis quis, distinctio voluptas. Maxime iure
            veniam debitis!
          </p>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-center items-start gap-4 cursor-pointer hover:bg-gray-300 w-full p-2">
        <div className="flex justify-center items-center h-full ">
          <HiFingerPrint className="text-2xl cursor-pointer text-gray-600 " />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h2 className="font-bold text-black ">Privacy</h2>
          <p className="font-bold text-[10px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            maiores velit cum omnis quis, distinctio voluptas. Maxime iure
            veniam debitis!
          </p>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-center items-start gap-4 cursor-pointer hover:bg-gray-300 w-full p-2">
        <div className="flex justify-center items-center h-full ">
          <HiPuzzle className="text-2xl cursor-pointer text-gray-600 " />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h2 className="font-bold text-black ">Your Activity</h2>
          <p className="font-bold text-[10px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            maiores velit cum omnis quis, distinctio voluptas. Maxime iure
            veniam debitis!
          </p>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-center items-start gap-4 cursor-pointer hover:bg-gray-300 w-full p-2">
        <div className="flex justify-center items-center h-full ">
          <HiLockOpen className="text-2xl cursor-pointer text-gray-600 " />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h2 className="font-bold text-black ">Passwords</h2>
          <p className="font-bold text-[10px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            maiores velit cum omnis quis, distinctio voluptas. Maxime iure
            veniam debitis!
          </p>
        </div>
      </div>
      <hr />{" "}
      <div className="flex flex-row justify-center items-start gap-4 cursor-pointer hover:bg-gray-300 w-full p-2">
        <div className="flex justify-center items-center h-full ">
          <HiArchive className="text-2xl cursor-pointer text-gray-600 " />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h2 className="font-bold text-black ">Archive</h2>
          <p className="font-bold text-[10px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            maiores velit cum omnis quis, distinctio voluptas. Maxime iure
            veniam debitis!
          </p>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-center items-start gap-4 cursor-pointer hover:bg-gray-300 w-full p-2">
        <div className="flex justify-center items-center h-full ">
          <HiMail className="text-2xl cursor-pointer text-gray-600 " />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h2 className="font-bold text-black ">Emails</h2>
          <p className="font-bold text-[10px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            maiores velit cum omnis quis, distinctio voluptas. Maxime iure
            veniam debitis!
          </p>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-center items-start gap-4 cursor-pointer hover:bg-gray-300 w-full p-2">
        <div className="flex justify-center items-center h-full ">
          <HiUser className="text-2xl cursor-pointer text-gray-600 " />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h2 className="font-bold text-black ">Account</h2>
          <p className="font-bold text-[10px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            maiores velit cum omnis quis, distinctio voluptas. Maxime iure
            veniam debitis!
          </p>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-center items-start gap-4 cursor-pointer hover:bg-gray-300 w-full p-2">
        <div className="flex justify-center items-center h-full ">
          <HiDeviceMobile className="text-2xl cursor-pointer text-gray-600 " />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h2 className="font-bold text-black ">Manage Devices</h2>
          <p className="font-bold text-[10px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            maiores velit cum omnis quis, distinctio voluptas. Maxime iure
            veniam debitis!
          </p>
        </div>
      </div>
      <hr />
      <div className="flex flex-row justify-start items-start gap-4 cursor-pointer hover:bg-gray-300 w-full p-2">
        <div className="flex justify-center items-center h-full ">
          <HiTrash className="text-2xl cursor-pointer text-red-800 " />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h2 className="font-bold text-red-800 ">Delete Account </h2>
        </div>
      </div>
      <hr />    
        <div className="flex flex-row justify-start items-start gap-4 cursor-pointer hover:bg-gray-300 w-full p-2">
        <div className="flex justify-center items-center h-full ">
          <HiLogout className="text-2xl cursor-pointer text-red-800 " />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h2 className="font-bold text-red-800 ">LogOut</h2>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SettingBody;
