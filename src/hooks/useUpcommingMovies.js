import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants"
import { useDispatch } from "react-redux";
import { setUpcommigMovies } from "../utils/movieSlice";

const useUpcommingMovies = () => {
    const dispatch = useDispatch()
 const upcommingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(setUpcommigMovies(json.results))
 }
 useEffect(() => {
 upcommingMovies()
 } , [])
}
export default useUpcommingMovies