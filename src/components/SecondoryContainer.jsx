import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondoryContainer = () => {
  const nowPlaying = useSelector((state) => state.movie.nowPlayingMovies);
  const popular = useSelector ((state) => state.movie.popularMovies);
  const topRated = useSelector((state)=> state.movie.topRatedMovies);
  const upcomming = useSelector((state)=>state.movie.upcommingMovies)
  console.log(topRated);
  return (
    <div className = 'text-white bg-black'>
      <div className='-mt-36'>
        <MovieList movies={nowPlaying} movieType={"Now Playing"} />
      <MovieList movies={popular} movieType={"popular"} />
      <MovieList movies={topRated} movieType={"Top Rated"} />
      <MovieList movies={upcomming} movieType={"Upcoming"} />

      </div>
      
    </div>
  );
};

export default SecondoryContainer;
