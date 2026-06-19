import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { setKey } from "../utils/movieSlice";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const key = useSelector((store) => store.movie.key);
 useTrailerVideo(movieId);
  return (
    <div className="">
      <iframe
        className="w-screen h-screen aspect-video "
        src={"https://www.youtube.com/embed/?autoplay=1&mute=1&controls=0&loop=1&playlist=" + key}
        title="YouTube video player"
        allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
