import React from "react";
import VideoTitle from "./VideoTitle";

import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
   const nowPlayingMovies = useSelector((state) => state?.movie?.nowPlayingMovies);
  // const {title , overview} = nowPlayingMovies[0];
   console.log(nowPlayingMovies);
   const {original_title , overview , id} = nowPlayingMovies[0]  || {};
    console.log(original_title);
    console.log(overview);
  return (
    <div >
      <VideoTitle  title = {original_title} overview = {overview}/>

      <VideoBackground movieId = {id}/>
    </div>
  );
};

export default MainContainer;
