import React, { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondoryContainer from "./SecondoryContainer";
import { API_OPTIONS } from "../utils/Constants";
import { setNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopratedMovies.js";
import useUpcommingMovies from "../hooks/useUpcommingMovies.js";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcommingMovies();

  return (
    <div className=" w-screen">
      <Header />
      <MainContainer />
      <SecondoryContainer />
    </div>
  );
};

export default Browse;
