import React, { useEffect } from "react";
import SettingBody from "../Components/Settings/SettingBody";
import BottomBar from "../Components/Home/BottomBar";
import Navbar from "../Components/Home/Navbar";
import { useDispatch } from "react-redux";
import { SettingNavActive } from "../Redux/Actions/SettingsNavAction";
import Headers from '../Components/Header/Header'

const Settings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SettingNavActive());
  }, [dispatch]);

  return (
    <>
    <Headers />
      <div className="tablet:flex tablet:col-span-4 laptop:col-span-3 w-full h-full overflow-scroll scrollbar-hide ">
        <div>
        <Navbar />
        <SettingBody />
        </div>
      </div>
    </>
  );
};

export default Settings;
