import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineChatAlt2,
  HiUserCircle,
  HiOutlineSearch,
  HiOutlineHeart,
  HiOutlinePlusCircle,
} from "react-icons/hi";
import {
  OpenSearchModalAction,
  OpenPostUploadModalAction,
  OpenActivityModalAction,
} from "../../Redux/Actions/ModalAction";

import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const SearchButtonHandler = (e) => {
    e.preventDefault();
    dispatch(OpenSearchModalAction());
  };

  const PostUploadButtonHAndler = (e) => {
    e.preventDefault();
    dispatch(OpenPostUploadModalAction());
  };

  const ActivityButtonHandler = (e) => {
    e.preventDefault();
    dispatch(OpenActivityModalAction());
    console.log("Activity button clicked");
  };

  return (
    <div className="hidden tablet:flex tablet:flex-row h-12 border-b-2 border-gray-300 shadow-lg items-center justify-center px-2 tablet:static">
      <div className="flex flex-row tablet:w-[80%] laptop:w-[60%] h-full justify-between items-center ">
        <div>
          <Link to={"/"}>
            <h1 className="font-bold text-gray-800 cursor-pointer ">
              Instagram
            </h1>
          </Link>
        </div>
        <div className="flex lfex-row justify-start items-center gap-4 ">
          <HiOutlineSearch
            className="text-2xl cursor-pointer text-gray-700 "
            onClick={SearchButtonHandler}
          />
          <HiOutlinePlusCircle
            className="text-2xl cursor-pointer text-gray-700 "
            onClick={PostUploadButtonHAndler}
          />
          <HiOutlineHeart
            className="text-2xl cursor-pointer text-gray-700 "
            onClick={ActivityButtonHandler}
          />
          <Link to={"/messenger"}>
            <HiOutlineChatAlt2 className="text-2xl cursor-pointer text-gray-700 " />
          </Link>
          <Link to={"/profile"}>
            <HiUserCircle className="text-2xl cursor-pointer text-gray-700 " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
