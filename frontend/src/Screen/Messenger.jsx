import React, { useEffect } from "react";
import Navbar from "../Components/Home/Navbar";
import MessengerBody from "../Components/Messenger/Messengerbody";
import { useDispatch } from "react-redux";
import Chat from "./Chat";
import BottomBar from "../Components/Home/BottomBar";

const Messenger = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col h-full tablet:grid tablet:grid-cols-12 tablet:gap-2">
      <div className=" tablet:col-span-4 tablet:border-r-2 border-gray-200 shadow-md flex flex-col laptop:col-span-4 h-full overflow-scroll scrollbar-hide">
        <Navbar />
        <MessengerBody />
        <BottomBar />
      </div>
      <div className=" tablet:col-span-8 tablet:flex hidden">
        <Chat />
      </div>
    </div>
  );
};

export default Messenger;
