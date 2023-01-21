import React, { useEffect } from "react";
import Navbar from "../Components/Home/Navbar";
import MessengerBody from "../Components/Messenger/Messengerbody";
import {useDispatch} from 'react-redux'
import {MessengerNavActive} from '../Redux/Actions/MessengerNavAction'

const Messenger = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(MessengerNavActive())
  }, [dispatch])
  
  return (
    <div className="flex flex-col h-full ">
      <Navbar />
      <MessengerBody />
    </div>
  );
};

export default Messenger;
