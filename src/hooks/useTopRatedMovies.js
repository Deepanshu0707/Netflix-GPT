import { useDispatch } from "react-redux";
import { topRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constant";

const useTopRatedMovies = async()=>{
    const dispatch = useDispatch();  
    const TopRatedMovies = async()=>{
        try{
          const movies = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
          const sortMovies = await movies.json();
          const allMovies = sortMovies.results;
          console.log(allMovies);
          dispatch(topRatedMovies(allMovies));
        } catch(err){
          console.log(err);
        }
        }
        useEffect(()=>{
            TopRatedMovies();
        },[])
}


export default useTopRatedMovies;