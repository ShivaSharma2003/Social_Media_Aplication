import React, { useEffect } from "react";
import Navbar from "../Components/Home/Navbar";
import BottomBar from "../Components/Home/BottomBar";
import Posts from "../Components/Home/Posts";
import { useDispatch } from "react-redux";
import { ProfileNavDeactive } from "../Redux/Actions/ProfileNavAction";
import { SettingNavDeactive } from "../Redux/Actions/SettingsNavAction";
import { MessengerNavDeActive } from "../Redux/Actions/MessengerNavAction";
import Profile from "./Profile";
import Search from "./Search";
import Header from "../Components/Header/Header";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProfileNavDeactive());
    dispatch(SettingNavDeactive());
    dispatch(MessengerNavDeActive());
  }, [dispatch]);

  return (
    <>
    <Header />
    <div className="flex flex-col h-full tablet:grid grid-cols-12 tablet:flex-row tablet:justify-around gap-2 tablet-overflow-scroll ">
      <div className="hidden laptop:flex laptop:col-span-3 laptop:col-start-2 w-full h-full overflow-scroll scrollbar-hide ">
        <Profile/>
      </div>
      <div className="flex flex-col tablet:col-span-8 laptop:col-span-4 h-full overflow-scroll scrollbar-hide ">
        <Navbar />
        <Posts />
        <BottomBar />
      </div>
      <div className="hidden tablet:flex tablet:col-span-4 laptop:col-span-3 w-full h-full overflow-scroll scrollbar-hide ">
        <Search />
      </div>
    </div>
    </>
  );
};

export default Home;
