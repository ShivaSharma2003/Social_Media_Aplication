import React, { useEffect } from "react";
import Avatar from "../../Images/Avatars/Avatar1.jpg";
import { BiImage, BiVideo, BiCollection } from "react-icons/bi";
import UserPosts from "../../Data/UserPostsData";
import { SettingNavDeactive } from "../../Redux/Actions/SettingsNavAction";
import { useDispatch } from "react-redux";

const ProfileBody = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SettingNavDeactive());
  }, [dispatch]);

  return (
    <div className="flex-1 w-full p-2 overflow-scroll scrollbar-hide">
      <div className="bg-white rounded-lg flex flex-col gap-3 px-4 py-2 ">
        <div className="flex flex-row items-center justify-start gap-4">
          <div>
            <img src={Avatar} alt="Profile Avatar" className="rounded-full " />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h3 className="font-bold text-lg cursor-pointer ">
              @ShivaSharma9090
            </h3>
            <button className="border-2 border-gray-500 w-40 px-4 py-2 rounded-md font-bold text-gray-700  ">
              Edit Profile
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-1 px-2">
          <h1 className="text-sm font-bold ">Shiva Sharma</h1>
          <textarea
            className="text-xs font-semibold w-full resize-none outline-none h-20"
            readOnly
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eum,
            magni commodisbucgdauc udvcysbd Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Quaerat est autem repudiandae veniam
            illo sapiente provident reprehenderit iste esse tenetur.
          </textarea>
        </div>
        <hr />
        <div className="flex flex-row justify-between items-center px-4 py-2 ">
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold">Following</h2>
            <h2 className="font-bold text-sm text-gray-700 ">100</h2>
          </div>
          <div className="border-r-2 h-10 border-gray-300 " />
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold">Followers</h2>
            <h2 className="font-bold text-sm text-gray-700 ">190</h2>
          </div>
          <div className="border-r-2 h-10 border-gray-300 " />
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold">Posts</h2>
            <h2 className="font-bold text-sm text-gray-700 ">23</h2>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-row justify-around items-center px-2">
            <BiImage className="text-2xl text-gray-700  cursor-pointer " />
            <BiVideo className="text-2xl text-gray-700 cursor-pointer " />
            <BiCollection className="text-2xl text-gray-700  cursor-pointer " />
          </div>
          <hr />
          <div className="flex flex-row flex-wrap flex-shrink gap-2 justify-center items-center">
            {UserPosts.map((item, key) => {
              return (
                <div>
                  <img
                    src={item.img}
                    alt=""
                    className="object-cover sm:h-[10rem] sm:w-[10rem] h-[8rem] w-[8rem]"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
