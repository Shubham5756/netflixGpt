import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video h-[700px] absolute pt-48 text-white flex flex-col  pl-12 ">
      <h1 className="text-5xl font-bold w-1/4 flex text-start">{title}</h1>
      <p className="text-start my-3 w-1/4">{overview}</p>
      <div className="flex   ">
        <button className="bg-white text-black px-8 py-3 mr-2  rounded-lg font-bold hover:bg-opacity-80">
          {" "}
          play
        </button>
        <button className="bg-white text-black px-8  rounded-lg   font-bold hover:bg-opacity-80">
          {" "}
          more info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
