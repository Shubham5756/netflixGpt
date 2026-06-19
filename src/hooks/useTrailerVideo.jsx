import { useEffect } from 'react'
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
   
    const trailerFilter = json.results?.filter(
      (video) => video.type === "Trailer" && video.site === "YouTube",
    );
    
    const key = trailerFilter?.length > 0 ? trailerFilter[0].key : null;
  
    dispatch(setKey(key));
  };
  useEffect(() => {
    backgroundVideo();
  }, [movieId]);
  
}

export default useTrailerVideo
