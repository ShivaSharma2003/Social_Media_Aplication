import React, { useEffect } from "react";
import Navbar from "../Components/Home/Navbar";
import MessengerBody from "../Components/Messenger/Messengerbody";
import { useDispatch } from "react-redux";
import { MessengerNavActive } from "../Redux/Actions/MessengerNavAction";
import Chat from "./Chat";

const Messenger = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MessengerNavActive());
  }, [dispatch]);

  return (
    <div className="flex flex-col h-full tablet:grid tablet:grid-cols-12 tablet:gap-2">
      <div className=" tablet:col-span-4 tablet:border-r-2 border-gray-200 shadow-md ">
        <Navbar />
        <MessengerBody />
      </div>
      <div className=" tablet:col-span-8">
        <Chat />
      </div>
    </div>
  );
};

export default Messenger;
