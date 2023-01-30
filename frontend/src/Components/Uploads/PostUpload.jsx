import React from "react";
import { HiUpload } from "react-icons/hi";

const PostUpload = () => {
  return (
    <div className="flex flex-col h-full w-full gap-2 ">
      <div className="flex flex-row items-center justify-center ">
        <h2 className="text-xl font-bold text-black ">Select Photo</h2>
      </div>
      <div className="h-[60%] w-full flex flex-col items-center justify-center gap-2 cursor-pointer border-2 ">
        <h3 className="text-xl font-bold text-gray-600 ">Upload Post</h3>
        <HiUpload className="text-[10rem] text-gray-500 " />
      </div>

      <div className="h-[40%] w-full flex flex-col gap-2">
        <div className="w-full flex-flex-col h-[80%]">
          <textarea
            name="CaptionInput"
            id="CaptionInput"
            placeholder="write something..."
            className="outline-none w-full h-[50%] border-2 text-sm px-2 py-1 font-semibold text-gray-700 "
          ></textarea>
          <textarea
            name="TagInput"
            id="TagInput"
            placeholder="Tags"
            className="outline-none w-full h-[40%] border-2 text-sm px-2 py-1 font-semibold text-gray-700 "
          ></textarea>
        </div>
        <div className="flex flex-row items-center justify-center gap-6 h-[20%]">
          <button className="border-2 border-blue-400 rounded-lg py-1 px-4 font-semibold text-lg text-blue-500 w-[30%]">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostUpload;
