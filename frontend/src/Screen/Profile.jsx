import React, { useEffect } from "react";
import BottomBar from "../Components/Home/BottomBar";
import ProfileBody from "../Components/Profile/ProfileBody";
import Navbar from "../Components/Home/Navbar";
import { ProfileNavActive } from "../Redux/Actions/ProfileNavAction";
import { useDispatch } from "react-redux";
import Header from "../Components/Header/Header";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProfileNavActive());
  }, [dispatch]);

  return (
    <>
    <Header />
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="flex flex-col w-[100%] h-full tablet:w-[80%] laptop:w-[60%] tablet:justify-center tablet:items-center ">
      <Navbar />
      <ProfileBody />
      <BottomBar />
      </div>
    </div>
    </>
  );
};

export default Profile;
