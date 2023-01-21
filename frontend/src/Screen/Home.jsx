import React, { useEffect } from "react";
import Navbar from "../Components/Home/Navbar";
import BottomBar from "../Components/Home/BottomBar";
import Posts from "../Components/Home/Posts";
import { useDispatch } from "react-redux";
import { ProfileNavDeactive } from "../Redux/Actions/ProfileNavAction";
import {SettingNavDeactive} from '../Redux/Actions/SettingsNavAction';
import {MessengerNavDeActive} from '../Redux/Actions/MessengerNavAction'

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProfileNavDeactive());
    dispatch(SettingNavDeactive());
    dispatch(MessengerNavDeActive())
  }, [dispatch]);

  return (
    <div className="flex flex-col relative h-full ">
      <Navbar />
      <Posts />
      <BottomBar />
    </div>
  );
};

export default Home;
