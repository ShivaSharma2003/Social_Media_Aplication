import React, { useEffect } from "react";
import BottomBar from "../Components/Home/BottomBar";
import ProfileBody from "../Components/Profile/ProfileBody";
import Navbar from "../Components/Home/Navbar";
import { ProfileNavActive } from "../Redux/Actions/ProfileNavAction";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProfileNavActive());
  }, [dispatch]);

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <ProfileBody />
      <BottomBar />
    </div>
  );
};

export default Profile;
