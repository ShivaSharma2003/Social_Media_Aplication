import React from "react";
import Data from "../../Data/ExploreData";
import { HiPhone, HiVideoCamera, HiOutlinePencil } from "react-icons/hi";
import { LinkContainer } from "react-router-bootstrap";

const Messengerbody = () => {
  return (
    <div className="flex-1 flex flex-col gap-2 overflow-scroll scrollbar-hide ">
      {Data.map((item, key) => {
        return (
          <div className="flex flex-col hover:bg-gray-200 px-4">
            <div className="w-full h-14 p-2 flex flex-row justify-between items-start">
              <LinkContainer to={"/chat"}>
                <div className="flex flex-row justify-start items-start gap-2 w-[70%] cursor-pointer">
                  <div className=" ">
                    <img
                      src={item.UserImg}
                      alt="UserImage"
                      className="h-10 w-10 object-cover rounded-full "
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <h2 className="font-bold ">@{item.userName}</h2>
                    <p className="font-semibold text-[12px] ">
                      This is last messege
                    </p>
                  </div>
                </div>
              </LinkContainer>
              <div className="flex flex-row justify-center items-center h-full gap-2">
                <HiPhone className="cursor-pointer text-xl text-gray-900 " />
                <HiVideoCamera className="cursor-pointer text-xl text-gray-900 " />
                <HiOutlinePencil className="cursor-pointer text-xl text-gray-900 " />
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Messengerbody;
