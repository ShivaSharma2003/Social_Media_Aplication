import React, { useEffect } from "react";
import Navbar from "../Components/Home/Navbar";
import BottomBar from "../Components/Home/BottomBar";
import Posts from "../Components/Home/Posts";
import { useDispatch, useSelector } from "react-redux";
import { ProfileNavDeactive } from "../Redux/Actions/ProfileNavAction";
import { SettingNavDeactive } from "../Redux/Actions/SettingsNavAction";
import { MessengerNavDeActive } from "../Redux/Actions/MessengerNavAction";
import Header from "../Components/Header/Header";
import { useNavigate } from "react-router-dom";
import SuggestedUsers from "../Components/Recommendation/SuggestedUsers";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Login } = useSelector((state) => state.AuthLogin);
  
  useEffect(() => {
    if (!Login) {
      navigate("/auth/login");
    }
  }, [Login, navigate]);

  useEffect(() => {
    document.title = "Home";
  }, []);

  useEffect(() => {
    dispatch(ProfileNavDeactive());
    dispatch(SettingNavDeactive());
    dispatch(MessengerNavDeActive());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="flex flex-col tablet:col-span-8 laptop:col-span-4 h-full w-full tablet:justify-center tablet:items-center overflow-scroll scrollbar-hide ">
        <div className="flex flex-col tablet:flex-row tablet:col-span-8 laptop:col-span-4 tablet:w-[80%] laptop:w-[60%] h-full tablet:justify-between tablet:items-start overflow-scroll scrollbar-hide gap-2 ">
          <div className="h-full tablet:w-[60%] laptop:w-[60%] flex flex-col ">
            <Navbar />
            <Posts />
            <BottomBar />
          </div>
          <div className="hidden tablet:flex tablet:w-[40%] laptop:w-[40%] h-[60%] py-2 ">
            <SuggestedUsers />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
