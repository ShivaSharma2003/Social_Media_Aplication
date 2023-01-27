import React from "react";
import ExploreData from "../../Data/ExploreData";

const SuggestedUsers = () => {
  return (
    <div className="bg-white hidden tablet:flex h-[100%] w-[100%] border-2 border-gray-300 flex-col gap-2 overflow-scroll scrollbar-hide ">
      <div className="border-b-2 p-2 w-full">
        <h3 className="font-bold text-sm flex-wrap">People You may Know </h3>
      </div>
      <div className="flex flex-col gap-2 h-full w-full overflow-scroll scrollbar-hide ">
        {ExploreData.map((item, key) => {
          return (
            <div className="border-b-2 shadow-sm flex flex-row w-full gap-2 px-2 ">
              <div className="flex-1 flex flex-row justify-start items-center gap-2 py-1">
                <div>
                    <img src={item.UserImg} alt="" className="object-fill h-10 w-10 rounded-full "/>
                </div>
                <div className="flex-col flex">
                    <h2 className="text-sm font-bold text-gray-800 ">@{item.userName}</h2>
                    <h5 className="text-xs font-semibold text-gray-600 ">Shiva Sharma</h5>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center ">
                <button className="font-bold text-blue-500 text-sm  ">Follow</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SuggestedUsers;
