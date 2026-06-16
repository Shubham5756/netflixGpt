import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/Constants';
import { setKey } from '../utils/movieSlice';

const useTrailerVideo = (movieId) => {
      const dispatch = useDispatch();
  const backgroundVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const json = await data.json();
    console.log(json.results);
    const trailerFilter = json.results?.filter(
      (video) => video.type === "Trailer" && video.site === "YouTube",
    );
    console.log(trailerFilter);
    const key = trailerFilter?.length > 0 ? trailerFilter[0].key : null;
    console.log(key);
    dispatch(setKey(key));
  };
  useEffect(() => {
    backgroundVideo();
  }, [movieId]);
  
}

export default useTrailerVideo
