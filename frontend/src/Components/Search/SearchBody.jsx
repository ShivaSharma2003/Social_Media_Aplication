import React from "react";
import { HiSearch } from "react-icons/hi";
import ExploreData from "../../Data/ExploreData";

const SearchBody = () => {
  return (
    <div className="flex-1 overflow-scroll h-full gap-2  flex flex-col justify-start items-start scrollbar-hide p-4 bg-white">
      <form className="flex flex-row justify-between items-center bg-white w-full px-4 ">
        <input
          type="text"
          placeholder="search @username"
          className="px-4 py-2 outline-none font-semibold text-gray-600 w-[90%] text-sm"
        />
        <HiSearch className="text-xl text-gray-500 cursor-pointer " />
      </form>

      <div className="flex flex-col justify-start items-start gap-2 w-full overflow-scroll scrollbar-hide ">
        {ExploreData.map((item, key) => {
          return (
            <div className="flex flex-row justify-between cursor-pointer items-start hover:bg-gray-200 transition-all duration-200 w-full p-2 ">
              <div className="flex flex-row justify-start items-start gap-2 w-[70%]">
                <div>
                  <img
                    src={item.UserImg}
                    alt="Emplore User"
                    className="h-[3rem] w-[rem] rounded-full "
                  />
                </div>
                <div className="flex flex-col justify-start items-start">
                  <h1 className="font-bold ">@{item.userName}</h1>
                  <h6 className="font-bold text-[12px]">{item.tag}</h6>
                </div>
              </div>

              <div className="flex flex-row justify-center items-center h-full px-4">
                <button className="font-bold text-[14px] text-blue-600">
                  Follow
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBody;
