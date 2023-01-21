import React, { useEffect } from "react";
import SettingBody from "../Components/Settings/SettingBody";
import BottomBar from "../Components/Home/BottomBar";
import Navbar from "../Components/Home/Navbar";
import { useDispatch } from "react-redux";
import { SettingNavActive } from "../Redux/Actions/SettingsNavAction";
import Headers from '../Components/Header/Header'
import Profile from './Profile'
import Posts from '../Components/Home/Posts'

const Settings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SettingNavActive());
  }, [dispatch]);

  return (
    <>
    <Headers />
    <div className="flex flex-col h-full tablet:grid grid-cols-12 tablet:flex-row tablet:justify-around gap-2 tablet-overflow-scroll ">
      <div className="hidden laptop:flex laptop:col-span-3 laptop:col-start-2 w-full h-full overflow-scroll scrollbar-hide ">
        <Profile/>
      </div>
      <div className="flex flex-col tablet:col-span-8 laptop:col-span-4 h-full overflow-scroll scrollbar-hide ">
        <Posts />
      </div>
      <div className="hidden tablet:flex tablet:col-span-4 laptop:col-span-3 w-full h-full overflow-scroll scrollbar-hide ">
        <div>
        <Navbar />
        <SettingBody />
        </div>
      </div>
    </div>
    </>
  );
};

export default Settings;
