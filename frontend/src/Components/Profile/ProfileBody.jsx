import React, { useEffect } from "react";
import {
  BiImage,
  BiVideo,
  BiCollection,
  BiUpload,
  BiCog,
} from "react-icons/bi";
import { SettingNavDeactive } from "../../Redux/Actions/SettingsNavAction";
import { useDispatch, useSelector } from "react-redux";
import {
  GetProfileAction,
  GetCurrentProfilePostsAction,
} from "../../Redux/Actions/ProfileAction";
import {OpenSettingsModalAction} from '../../Redux/Actions/ModalAction'

const ProfileBody = () => {
  const dispatch = useDispatch();
  const { loading, profile } = useSelector((state) => state.Profile);
  const { posts } = useSelector((state) => state.CurrentProfilePosts);

  useEffect(() => {
    loading
      ? (document.title = "Loading...")
      : (document.title = `@${profile?.userName} - Home`);
  }, [loading, profile?.userName]);

  useEffect(() => {
    dispatch(GetProfileAction());
    dispatch(GetCurrentProfilePostsAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(SettingNavDeactive());
  }, [dispatch]);

  const settingsButtonHandler = (e) =>
  {
    e.preventDefault()
    dispatch(OpenSettingsModalAction())
  }

  return (
    <div className="flex-1 w-full p-2 overflow-scroll scrollbar-hide bg-white ">
      <div className="bg-transparent rounded-lg flex flex-col gap-3 px-4 py-2 w-full">
        <div className="flex flex-row items-center justify-start gap-4 w-full tablet:justify-center">
          <div className="flex flex-row items-center justify-start gap-4 w-full tablet:justify-between tablet:w-[60%]">
            <div className="tablet:w-[40%]">
              <img
                src={profile?.Avatar}
                alt="Profile Avatar"
                className="rounded-full h-[7rem] w-[7rem] object-cover cursor-pointer"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-2 tablet:w-[60%] tablet:justify-start tablet:items-start ">
              <div className="flex flex-row gap-4 items-center">
                <h3 className="font-bold text-lg cursor-pointer ">
                  {`@${profile?.userName}`}
                </h3>
                <div>
                  <BiCog className="text-xl cursor-pointer hidden tablet:block" onClick={settingsButtonHandler}/>
                </div>
              </div>
              <button className="border-2 border-gray-500 w-40 px-4 py-2 rounded-md font-bold text-gray-700  ">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-1 px-2 tablet:justify-center tablet:items-center">
          <div className="flex flex-col tablet:w-[60%] w-full ">
            <h1 className="text-sm font-bold ">{profile?.FullName}</h1>
            <textarea
              className="text-xs font-bold w-full resize-none outline-none h-fit max-h-20 bg-transparent"
              readOnly
            >
              {profile?.Bio}
            </textarea>
          </div>
        </div>
        <hr />
        <div className="flex flex-row justify-between items-center px-4 py-2 w-full tablet:justify-center ">
          <div className="flex flex-row tablet:w-[60%] w-full  justify-between items-center ">
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-bold">Following</h2>
              <h2 className="font-bold text-sm text-gray-700 ">
                {profile?.Followings.length}
              </h2>
            </div>
            <div className="border-r-2 h-10 border-gray-300 " />
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-bold">Followers</h2>
              <h2 className="font-bold text-sm text-gray-700 ">
                {profile?.Followers.length}
              </h2>
            </div>
            <div className="border-r-2 h-10 border-gray-300 " />
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-bold">Posts</h2>
              <h2 className="font-bold text-sm text-gray-700 ">
                {profile?.Posts.length}
              </h2>
            </div>
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
          {posts?.length === 0 ? (
            <div className="flex flex-col flex-wrap flex-shrink gap-2 justify-center items-center h-40 ">
              <h1 className="font-semibold text-gray-500 text-lg">
                Share Posts
              </h1>
              <BiUpload className="text-gray-500 text-3xl cursor-pointer" />
            </div>
          ) : (
            <div className="flex flex-row flex-wrap flex-shrink gap-2 justify-center items-center w-full ">
              {posts?.map((item, key) => {
                return (
                  <div className="cursor-pointer hover:scale-105 transition-all duration-500 mobile:h-[8rem] mobile:w-[8rem] tablet:h-[12rem] tablet:w-[12rem] relative">
                    <div>
                      <img
                        src={item.postItem}
                        alt=""
                        className="object-cover "
                      />
                    </div>
                    <div className="absolute text-gray-300 bottom-2 left-2 flex flex-row justify-center items-center gap-1 text-xs">
                      <span>{item.likes.length}</span>
                      <span>likes</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
