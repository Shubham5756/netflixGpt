import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants"
import { useDispatch } from "react-redux";
import {  setTopRated } from "../utils/movieSlice";
const useTopratedMovies = () => {
    const dispatch = useDispatch()

    const topMovies = async ()=> {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1' , API_OPTIONS)
        const json = await data.json();
        console.log(json.results)
        dispatch(setTopRated(json.results))

    }

    useEffect(()=> {
        topMovies();
    } , [])

}
export default useTopratedMovies;