import React from "react";
import BottomBar from "../Components/Home/BottomBar";
import SearchBody from "../Components/Search/SearchBody";
import Profile from "./Profile";
import Header from "../Components/Header/Header";

const Search = () => {
  return (
    <>
      <div className="flex flex-col h-full w-full ">
          <SearchBody />
          <BottomBar />
      </div>
    </>
  );
};

export default Search;
