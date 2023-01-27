import React from "react";
import Data from "../../Data/PostsData";
import { BiHeart, BiComment, BiSend } from "react-icons/bi";
import { HiDotsVertical } from "react-icons/hi";

const Posts = () => {
  return (
    <div className="flex-1 overflow-scroll h-full w-full scrollbar-hide flex flex-col items-center flex-shrink border-r-2 ">
      {Data.map((items, key) => {
        return (
          // Parent Div
          <div className="bg-white flex flex-col justify-center items-start rounded-sm border-b-2 gap-4 border-gray-300 shadow-lg mt-2 py-2 w-full ">
            {/* User Account Div  */}
            <div className="flex flex-row justify-around items-center w-full tablet:justify-between tablet:px-2">
              <div className="flex flex-row items-center gap-2 w-full px-2 ">
                <img
                  src={items.UserProfileImg}
                  alt="User Profile"
                  className="h-[2rem] w-[2rem] rounded-full cursor-pointer object-cover "
                />
                <div className="flex flex-col ">
                  <span className="font-bold">{items.UserName}</span>
                  <span className="text-[12px] font-semibold">
                    {items.Location}
                  </span>
                </div>
              </div>
              <div className="mr-4 flex flex-row gap-2 justify-center items-center">
                <button className="font-bold text-blue-600 transition-all delay-300 font-sans">
                  Follow
                </button>
                <HiDotsVertical className=" text-gray-700 cursor-pointer text-xl" />
              </div>
            </div>
            {/* Post Div */}
            <div className="flex flex-col justify-center items-center gap-2 relative w-full ">
              <div className="w-full">
                <img
                  src={items.PostImg}
                  alt="users Images"
                  className=" max-h-[40rem] w-full object-cover   "
                />
              </div>
              <div className="px-2 flex flex-col gap-1 justify-around items-start w-full ">
                <div className="flex flex-row justify-start items-start gap-4 w-full ">
                  <BiHeart className="text-xl cursor-pointer text-gray-700 hover:text-pink-800" />
                  <BiComment className="text-xl cursor-pointer text-gray-700" />
                  <BiSend className="text-xl cursor-pointer text-gray-700" />
                </div>
                <div className="w-full flex flex-row ">
                  <span className="text-gray-600 text-xs font-semibold cursor-pointer">
                    Liked by
                    <span className="font-bold text-black">
                      {items.likes}
                    </span>{" "}
                    other peoples
                  </span>
                </div>
                <div className="flex flex-row items-center justify-center gap-1 w-full">
                  <span className="font-bold text-[14px] cursor-pointer ">
                    @{items.UserName}
                  </span>
                  <span className="text-[12px] font-semibold truncate w-full ">
                    {items.desc}
                  </span>
                </div>
                <div className="flex flex-row items-start ">
                  <span className="text-gray-600 font-semibold text-xs cursor-pointer">
                    veiw all{" "}
                    <span className="text-gray-700 font-bold ">
                      {items.TotalComments}
                    </span>{" "}
                    comments
                  </span>
                </div>
                <div className="flex flex-row gap-2">
                  <img
                    src={items.UserProfileImg}
                    alt=""
                    className="h-[1.6rem] w-[1.6rem] object-fill rounded-full"
                  />
                  <input
                    type="text"
                    placeholder="Write Comment..."
                    className="outline-none font-semibold text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
