import React, { useEffect } from "react";
import SettingBody from "../Components/Settings/SettingBody";
import BottomBar from "../Components/Home/BottomBar";
import Navbar from "../Components/Home/Navbar";
import { useDispatch } from "react-redux";
import { SettingNavActive } from "../Redux/Actions/SettingsNavAction";

const Settings = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SettingNavActive());
  }, [dispatch]);

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <SettingBody />
      <BottomBar />
    </div>
  );
};

export default Settings;
