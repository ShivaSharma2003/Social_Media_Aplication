import React from "react";
import ChatBottomBar from "../Components/Chat/ChatBottomBar";
import ChatNav from "../Components/Chat/ChatNav";
import ChatBody from "../Components/Chat/ChatBody";

const Chat = () => {
  return <div className="flex flex-col h-full gap-2 ">
    <ChatNav />
    <ChatBody />
    <ChatBottomBar />
  </div>;
};

export default Chat;
